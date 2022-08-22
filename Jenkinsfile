pipeline {
    agent {
        docker {
            image 'node:14.19.3'
        }
    }
    // stages {
    //     stage('下载依赖包') {
    //         steps {
    //               sh '''
    //                     yarn install
    //                  '''
    //         }
    //     }
        //    stage('打包构建') {
        //     steps {
        //            sh '''
        //                 yarn build
        //               '''
        //     }
        //    }
            stage('安装zip') {
                steps {
                   sh '''
                      sudo apt-get -y upgrade
                       apt-get install zip
                       zip -v
                      '''
            }
            }
        //     stage('整理构建包') {
        //         steps {
        //            sh '''
        //                   cd ./docs/.vuepress/dist
        //                   zip -r blog.zip ./**
        //                   # 删除 除压缩依赖包以外的包
        //                   rm -rf dist
        //               '''
        //     }
        //    }
     }
}