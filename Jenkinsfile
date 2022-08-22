pipeline {
    agent {
        docker {
            image 'node:14.19.3'
        }
    }
    stages {
        stage('下载依赖包') {
            steps {
                  sh '''
                        yarn install
                     '''
            }
        }
           stage('打包构建') {
                steps {
                   sh '''
                        yarn build
                      '''
            }
                       stage('整理构建包') {
                steps {
                   sh '''
 cd ./docs/.vuepress/dist
zip -r blog.zip ./**
# 删除 除压缩依赖包以外的包
rm -rf dist
                      '''
            }
    }
sshPublisher(publishers: [sshPublisherDesc(configName: '180.76.109.184', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''cd /home/project/blog
rm -rf dist
unzip blog.zip''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'blog', remoteDirectorySDF: false, removePrefix: '/docs/.vuepress', sourceFiles: '**/docs/.vuepress/blog.zip')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
    }
}