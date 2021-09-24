'use strict';

const transformer = require('svelte-jester');
const addHook = require('pirates').addHook;

module.exports = {
  before: function (config) {
    addHook(
      (source, filename) => {
        const { code } = transformer.process(source, filename, {
          transformerConfig: config.svelte,
        });
        return code;
      },
      {
        exts: config.svelte.exts || ['.svelte'],
      }
    );
  },
};
