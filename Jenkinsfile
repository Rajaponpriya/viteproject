pipeline {
  agent any
  stages {
    stage("build") {
      steps {
          sh 'mvn clean install'
          echo 'building the applictaion...'
      }
    }
    stage("test") {
      steps {
          echo 'testing the applictaion...'
      }
    }
    stage("deploy") {
      steps {
          echo 'deploying the applictaion...'
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
