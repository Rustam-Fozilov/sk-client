module.exports = {
  apps: [
    {
      name: 'sk',
      port: '4004',
      exec_mode: 'cluster',
      instances: 1,
      script: './.output/server/index.mjs'
    }
  ]
}
