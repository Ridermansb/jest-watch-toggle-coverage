import Plugin from './index'

describe('Jest Watch Toggle Coverage Plugin', () => {
  const plugin = new Plugin()

  describe('when providing usage info', () => {
    it('sends the proper info when coverage is enabled', () => {
      expect(plugin.getUsageInfo({ collectCoverage: true })).toEqual({
        key: 'e',
        prompt: 'turn off code coverage collection',
      })
    })

    it('sends the proper info when coverage is disabled', () => {
      expect(plugin.getUsageInfo({ collectCoverage: false })).toEqual({
        key: 'e',
        prompt: 'turn on code coverage collection',
      })
    })
  })

  describe('when running', () => {
    it('returns a resolved, falsey promise', () => {
      expect(plugin.run({}, () => {})).toEqual(Promise.resolve())
    })

    it('invokes `updateConfigAndRun()` with the proper `collectCoverage` option', () => {
      const updateConfigAndRun = jest.fn()
      plugin.run({ collectCoverage: true }, updateConfigAndRun)
      expect(updateConfigAndRun).toHaveBeenCalledWith({
        collectCoverage: false,
      })

      updateConfigAndRun.mockReset()
      plugin.run({ collectCoverage: false }, updateConfigAndRun)
      expect(updateConfigAndRun).toHaveBeenCalledWith({ collectCoverage: true })
    })
  })
})
