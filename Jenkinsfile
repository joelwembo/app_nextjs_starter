#!/usr/bin/env groovy
/**
 * Jenkins Pipeline — C++ Application (CMake)
 * -------------------------------------------
 * Configures, builds, tests, and packages a CMake C++ project.
 *
 * Prerequisites:
 *   - cmake, make, gcc/clang available on the Jenkins agent
 *   - (Optional) Docker for containerised packaging
 */
pipeline {
    agent any

    parameters {
        string(name: 'BUILD_TYPE',   defaultValue: 'Release', description: 'CMake build type: Release | Debug | RelWithDebInfo')
        string(name: 'CMAKE_FLAGS',  defaultValue: '',         description: 'Extra CMake flags, e.g. -DENABLE_TESTS=ON')
        booleanParam(name: 'RUN_CTEST', defaultValue: true,   description: 'Run CTest after build')
        booleanParam(name: 'PACKAGE',   defaultValue: false,  description: 'Run CPack to produce installable package')
    }

    environment {
        BUILD_DIR = 'build'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                sh 'cmake --version'
                sh 'g++ --version || clang++ --version'
            }
        }

        stage('Configure') {
            steps {
                sh """
                    cmake -B ${env.BUILD_DIR} \\
                          -DCMAKE_BUILD_TYPE=${params.BUILD_TYPE} \\
                          ${params.CMAKE_FLAGS}
                """
            }
        }

        stage('Build') {
            steps {
                sh "cmake --build ${env.BUILD_DIR} --parallel \$(nproc)"
            }
        }

        stage('Test') {
            when { expression { params.RUN_CTEST } }
            steps {
                dir(env.BUILD_DIR) {
                    sh 'ctest --output-on-failure'
                }
            }
        }

        stage('Package') {
            when { expression { params.PACKAGE } }
            steps {
                dir(env.BUILD_DIR) {
                    sh 'cpack'
                    archiveArtifacts artifacts: '*.deb,*.rpm,*.tar.gz,*.zip', allowEmptyArchive: true
                }
            }
        }
    }

    post {
        success { echo 'C++ build succeeded.' }
        failure { echo 'Build FAILED — check CMake / compiler output above.' }
        always  { cleanWs() }
    }
}
