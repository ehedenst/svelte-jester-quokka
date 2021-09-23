'use strict';

const fs = require('fs');
const jester = require('svelte-jester');

module.exports = {
  before: function(config) {
    require.extensions['.svelte'] = function(module, filename) {
      const transformer = jester.createTransformer(config.svelte);
      const source = fs.readFileSync(filename, 'utf8');
      const { code } = transformer.process(source, filename);
      module._compile(code, filename);
    };
  }
};
