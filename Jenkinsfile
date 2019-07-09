node{
    def nodejsHome = tool name: 'Node 12', type: 'nodejs'
    def nodeCMD = "${nodejsHome}"
    def scannerHome = tool 'SonarQube Scanner'
        
    stage('Git clone'){
        checkout([$class: 'GitSCM', branches: [[name: '**']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/gpedro34/pchains-tx-parser.git']]])
    }
    
    stage('Environment Versions'){
        sh 'node -v && npm -v'
    }
    
    stage('Install Project'){
        sh 'npm install'
    }
    
    stage('Run Test Coverage'){
        sh 'npx nyc@latest --reporter=lcovonly mocha'
    }
    
    stage('SonarQube Analysis'){
        withSonarQubeEnv('SonarQube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }
    
    stage('Notify E-Mail'){
        mail body: "${BUILD_URL}", from: 'Jenkins CI <bots.beazy@gmail.com>', subject: "${JOB_NAME} - BUILD "+currentBuild.currentResult, to: 'gpedro34@gmail.com'
    }
    
    stage('Notify Discord'){
        discordSend description: 'Jenkins Pipeline Build', result: currentBuild.currentResult, link: "${BUILD_URL}", title: "${JOB_NAME}", webhookURL: 'https://discordapp.com/api/webhooks/597933023538708485/A-aEI2_Y3BMVzSwF1gtRUYx67QRUAfVuxyJMZjbkkJbG2rxAP5sjMDdvRwUm0sOt39JX'
    }
}