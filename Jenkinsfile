pipeline {
    agent {
        node { label 'php-slave-new' }
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}