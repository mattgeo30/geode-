module.exports = {
    onBuild: ({utils}) => {
      console.log('Hello world from the plugin!');
      const currentProject = 'geode';
      const projectHasChanged = false;
      if (!projectHasChanged) {
        utils.build.cancelBuild(
          `Build was cancelled because ${currentProject} was not affected by the latest changes`
        );
      }
    }
  };