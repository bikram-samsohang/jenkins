pipeline {
     agent any
     stages {
	stage("Start") {
		sh "echo Hello world!"
	}
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
    }
}