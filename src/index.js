class JestWatchToggleCoveragePlugin {
  getUsageInfo(globalConfig) {
    const targetMode = globalConfig.collectCoverage ? 'off' : 'on'
    // 'c' (clear patterns), 'o' (only changed) and 'v' (verbosity toggler)
    // are already taken… 'e' is next in line :-)
    return { key: 'e', prompt: `turn ${targetMode} code coverage collection` }
  }

  run({ collectCoverage }, updateConfigAndRun) {
    updateConfigAndRun({ collectCoverage: !collectCoverage })
    return Promise.resolve()
  }
}

module.exports = JestWatchToggleCoveragePlugin
