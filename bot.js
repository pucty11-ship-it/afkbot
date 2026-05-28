const mineflayer = require('mineflayer')

function createBot() {

  const bot = mineflayer.createBot({
    host: 'plasmaxsmp.aternos.me',
    port: 64228,
    username: 'PlasmaxSMP'
  })

  bot.on('spawn', () => {
    console.log('Bot je online!')

    setInterval(() => {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)

    }, 30000)
  })

  bot.on('end', () => {
    console.log('Reconnect za 10 sekúnd...')

    setTimeout(() => {
      createBot()
    }, 10000)
  })

  bot.on('kicked', (reason) => {
    console.log('Kick:', reason)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })
}

createBot()
