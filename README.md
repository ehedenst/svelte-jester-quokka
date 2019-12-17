# svelte-jester-quokka

A [quokka](https://quokkajs.com/) plugin that allows you to import svelte components by using [svelte-jester](https://github.com/mihar-22/svelte-jester) to do the preprocessing and compiling.

## Installation

This library has `peerDependencies` listings for `svelte-jester = 1.x`

`npm install svelte-jester-quokka -D` or `yarn add -D svelte-jester-quokka`

then add the following to your [Quokka config](https://quokkajs.com/docs/configuration.html)

```javascript
{
  plugins: ['svelte-jester-quokka']
}
```

## Options

`preprocess` (default: false): Pass in `true` if you are using Svelte preprocessors. 
They are loaded from `svelte.config.js`.

`debug` (default: false): If you'd like to see the output of the compiled code then pass in `true`.

`compilerOptions` (default: {}): Use this to pass in [Svelte compiler options](https://svelte.dev/docs#svelte_compile).

```javascript
{
  plugins: ['svelte-jester-quokka'],
  svelte: {
    preprocess: false,
    debug: false,
    compilerOptions: {}
  }
}
```

## Example

Following is a complete example with [inline quokka configuration](https://quokkajs.com/docs/configuration.html#inline-config) of how to load a svelte component. It uses [Babel](https://quokkajs.com/docs/configuration.html#babel) to support modern javascript. It also uses the [jsdom-quokka-plugin](https://github.com/wallabyjs/jsdom-quokka-plugin) and [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro) to provide a browser-like environment.

```javascript
({
  babel: true,
  plugins: ['jsdom-quokka-plugin', 'svelte-jester-quokka'],
  jsdom: { html: `<div id="test"></div>` },
  svelte: { preprocess: true }
});

import { render } from '@testing-library/svelte';
import App from './App.svelte';

const target = document.getElementById('test');

render(App, { props: { name: 'quokka' } }, { container: target });

console.log(target.innerHTML);
```
