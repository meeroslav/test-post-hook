function log(message) {
  try {
    const { emitPluginWorkerLog } = require('nx/src/project-graph/plugins/isolation/worker-streaming');
    emitPluginWorkerLog('log', message);
  } catch {
    console.log(message);
  }
}

module.exports = {
  name: '@org/nx-post-tasks-hook',
  async postTasksExecution(_options, context) {
    log('[postTasksExecution context argv]');
    log(context.argv);
  },
};
