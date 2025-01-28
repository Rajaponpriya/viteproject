pipeline {
  agent any
  stages {
    stage("Install Dependencies") {
      steps {
        script {
          // Make sure npm is available in the environment
          sh 'npm install'
          echo 'Installing dependencies...'
        }
      }
    }
    stage("Build") {
      steps {
        script {
          // Build the application
          sh 'npm run build'
          echo 'Building the application...'
        }
      }
    }
    stage("Test") {
      steps {
        script {
          // Run tests (if applicable, change based on your test framework)
          sh 'npm test'
          echo 'Testing the application...'
        }
      }
    }
    stage("Deploy") {
      steps {
        script {
          // Placeholder for deployment (can be adjusted based on your deployment method)
          echo 'Deploying the application...'
        }
      }
    }
  }
  post {
    success {
      mail to: 'rajaponpriya@gmail.com',
           subject: "Build Success",
           body: "Build #${env.BUILD_NUMBER} succeeded.\nCheck console output: ${env.BUILD_URL}"
    }
    failure {
      mail to: 'rajaponpriya@gmail.com',
           subject: "Build Failed",
           body: "Build #${env.BUILD_NUMBER} failed.\nCheck console output: ${env.BUILD_URL}"
    }
  }
}

