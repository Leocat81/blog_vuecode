import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
CONTENT = ROOT / "content"

EXCLUDE = {"README.md"}  # special-case docs/README.md for custom home


def slugify(name: str) -> str:
    name = re.sub(r"\.md$", "", name, flags=re.IGNORECASE)
    s1 = re.sub(r"(.)([A-Z][a-z]+)", r"\1-\2", name)
    s2 = re.sub(r"([a-z0-9])([A-Z])", r"\1-\2", s1)
    s2 = s2.replace("_", "-")
    s2 = re.sub(r"[^a-zA-Z0-9\-]+", "-", s2)
    s2 = re.sub(r"-+", "-", s2).strip("-")
    return s2.lower()


def title_from_content(text: str, fallback: str) -> str:
    for line in text.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return fallback


def strip_leading_h1(text: str) -> str:
    lines = text.splitlines()
    for i, line in enumerate(lines):
        if line.strip() == "":
            continue
        if line.startswith("# "):
            # remove the title line and one following blank line if present
            del lines[i]
            if i < len(lines) and lines[i].strip() == "":
                del lines[i]
            return "\n".join(lines)
        break
    return text


def escape_quotes(text: str) -> str:
    return text.replace('"', '\\"')


def build_link_map():
    link_map = {}
    for path in DOCS.rglob("*.md"):
        if "/.vuepress/" in str(path):
            continue
        if path == DOCS / "README.md":
            continue
        rel = path.relative_to(DOCS)
        if len(rel.parts) < 2:
            continue
        section = rel.parts[0]
        slug = slugify(path.stem)
        url = f"/{section}/{slug}/"
        old_base = f"/{section}/{path.stem}"
        link_map[old_base] = url
    return link_map


LINK_MAP = build_link_map()

HTML_LINK_RE = re.compile(r"(/[^/\s]+/[^/\s]+)\.html(#[^\s\)\"]+)?")


def rewrite_links(text: str) -> str:
    text = text.replace("../assets/", "/assets/")

    def _replace(match):
        base = match.group(1)
        anchor = match.group(2) or ""
        new = LINK_MAP.get(base)
        if new:
            return f"{new}{anchor}"
        return match.group(0)

    return HTML_LINK_RE.sub(_replace, text)


CONTENT.mkdir(exist_ok=True)

for path in DOCS.rglob("*.md"):
    if "/.vuepress/" in str(path):
        continue
    if path.name in EXCLUDE and path.parent == DOCS:
        continue

    rel = path.relative_to(DOCS)
    if len(rel.parts) < 2:
        continue

    section = rel.parts[0]
    slug = slugify(path.stem)
    target_dir = CONTENT / section
    target_dir.mkdir(parents=True, exist_ok=True)
    target_path = target_dir / f"{slug}.md"

    raw = path.read_text(encoding="utf-8")
    title = title_from_content(raw, path.stem)
    body = strip_leading_h1(rewrite_links(raw))

    front_matter = (
        "---\n"
        f"title: \"{escape_quotes(title)}\"\n"
        f"slug: \"{slug}\"\n"
        f"categories: [\"{section}\"]\n"
        "tags: []\n"
        "draft: false\n"
        "---\n\n"
    )

    target_path.write_text(front_matter + body, encoding="utf-8")

print("Migration complete.")
