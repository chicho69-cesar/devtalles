let times = 0

const syncDb = () => {
  times++
  console.log(`Ticks every 3 seconds: ${times}`)

  return times
}

module.exports = { syncDb }
