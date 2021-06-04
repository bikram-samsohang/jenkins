pipeline {
     agent any
     stages {
	stage("Start") {
		echo "Hello world!"
	}
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
    }
}