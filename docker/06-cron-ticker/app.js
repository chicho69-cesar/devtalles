const cron = require('node-cron')
const { syncDb } = require('./tasks/sync-db')

console.log('App started')
cron.schedule('1-59/3 * * * * *', syncDb)
