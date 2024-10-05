const { syncDb } = require('../../tasks/sync-db')

describe('syncDb testing', () => {
  test('should execute two times the process', () => {
    syncDb()
    const times = syncDb()

    expect(times).toBe(2)
  })
})
