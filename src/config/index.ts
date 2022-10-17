enum envType {
  PROD = 'prod',
  PRE = 'pre',
  TEST = 'test',
  DEV = 'dev',
}

interface Config {
  env: envType;
  serverApi: string;
  serverWs: string;
}

const config: Config = {
  env: envType.DEV, // 环境
  serverApi: 'http://192.168.30.138:8080/', // 接口地址
  serverWs: ''
}

const process = { env: { VITE_NODE_ENV: envType.DEV } }

switch (process.env.VITE_NODE_ENV) {
case 'prod':
  config.env = envType.PROD
  config.serverApi = 'http://192.168.30.138:8080/'
  config.serverWs = 'http://192.168.30.138:3000/'
  break
case 'pre':
  config.env = envType.PRE
  config.serverApi = 'http://192.168.30.138:8080/'
  config.serverWs = 'http://192.168.30.138:3000/'
  break
case 'test':
  config.env = envType.TEST
  config.serverApi = 'http://192.168.30.138:8080/'
  config.serverWs = 'http://192.168.30.138:3000/'
  break
case 'dev':
  config.env = envType.DEV
  config.serverApi = 'http://192.168.30.138:8080/'
  config.serverWs = 'http://192.168.30.138:3000/'
  break
default:
  config.env = envType.DEV
  config.serverApi = 'http://192.168.30.138:8080/'
  config.serverWs = 'http://192.168.30.138:3000/'
}

export default config
