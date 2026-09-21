module.exports = {
  apps: [
    {
      name: 'sk',
      port: '4004',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
