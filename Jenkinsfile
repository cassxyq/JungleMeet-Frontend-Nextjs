pipeline {
    agent any

    /*options {
        ansiColor('xterm')
    }*/

    environment {
        AWS_CRED = 'casstest'
        S3_BUCKET = 'test.notfound404.click'
        WORKDIR = "./client"
        CI = 'true'
    }

    stages {
        stage('Test') {
            steps {
            echo 'Testing...'
            snykSecurity(
            snykInstallation: 'snyktest',
            snykTokenId: 'snykapitoken',
            failOnIssues: 'false',
            // place other optional parameters here, for example:
            //additionalArguments: '--all-projects --detection-depth=<DEPTH>'
            )
        }
        }

        stage("intall & test"){
            steps{
                dir(WORKDIR){
                    sh "npm install"
                    //sh "npm run test"
                }
            }
        }

        stage("build"){
            steps{
                dir(WORKDIR){
                    sh "npm run build"
                }
            }
        }
    }
}
