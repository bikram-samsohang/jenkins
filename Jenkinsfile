pipeline {
     agent any
     stages {
        stage("Start") {
            steps {
                sh "echo hello world"            }
        }
	stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
    }
}