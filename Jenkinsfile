pipeline {
    agent any

    // environment {
    //     HTTP_PROXY = ''
    //     HTTPS_PROXY = ''
    // }

    stages {
        stage('Clone Repository') {
            steps {
                // script {
                //     sh 'git config --global --unset http.proxy'
                //     sh 'git config --global --unset https.proxy'
                // }
                // Clone the repository
                git branch: 'main', url: 'https://github.com/Sivakkanth/4220-Sivakkanth.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image
                script {
                    docker.build("react-docker:tag")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                // Run Docker container
                script {
                    docker.image("react-docker:tag").run("-d -p 8083:8083 --name react-docker")
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                // Verify deployment
                sh 'curl http://localhost:8083' // Example: Use curl to check if the application is running
            }
        }
    }

    post {
        always {
            // Cleanup
            script {
                docker.image("react-docker:tag").stop()
                docker.image("react-docker:tag").remove(force: true)
            }
        }
    }
}
