const assert = require('assert');
const { before } = require('./index.js');

const config = {
  svelte: {
    preprocess: false,
    debug: false,
    compilerOptions: {
      generate: 'ssr',
    },
  },
};

before(config);

const { default: App } = require('./test.svelte');
const { html } = App.render({ name: 'world' });

assert.equal(html,"<div>Hello world</div>")
