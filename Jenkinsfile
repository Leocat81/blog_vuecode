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
        }
        stage('上传构建包') {
            steps {
                sshPublisher(publishers:
                [sshPublisherDesc(configName: '180.76.109.184', 
                transfers: [sshTransfer(cleanRemote: false, excludes: '',
                execCommand: '', execTimeout: 120000, flatten: false, 
                makeEmptyDirs: false, noDefaultExcludes: false,
                patternSeparator: '[, ]+', remoteDirectory: 'blog',
                remoteDirectorySDF: false, removePrefix: '/docs/.vuepress',
                sourceFiles: '**/docs/.vuepress/dist/**')], usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, verbose: false)])
            }
        }
     }
}