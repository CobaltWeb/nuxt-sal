<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt Sal
- Package name: nuxt-sal
- Description: My new Nuxt module
-->

# Nuxt Sal

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module that adds Scroll Animation Library: https://github.com/mciastek/sal

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-sal?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-sal
```

That's it! You can now use sal.js in your Nuxt app ✨

## Basic usage

```html
<div data-sal="fade"></div>
```

List of all available animations is available in [Sal.js docs](https://github.com/mciastek/sal?tab=readme-ov-file#animations)

## Configuration

You can configure nuxt-sal in `nuxt.config.js` with the `sal`. Read more here: [Sal.js docs](https://github.com/mciastek/sal?tab=readme-ov-file#options)

```js
export default defineNuxtConfig({
  sal: {
    // Percentage of an element's area that needs to be visible to launch animation.
    threshold: 0.5,
    // Defines if animation needs to be launched once.
    once: true,
    // Flag (or a function returning boolean) for disabling animations
    disabled: false,
    // The element that is used as the viewport for checking visibility of the target
    root: window,
    // Selector of the elements to be animated
    selector: "[data-sal]",
    // Class name which triggers animation
    animateClassName: "sal-animate",
    // 	Class name which defines the disabled state
    disabledClassName: "sal-disabled",
    // Corresponds to root's bounding box margin
    rootMargin: "0% 50%",
    // Enter event name
    enterEventName: "sal:in",
    // Exit event name
    exitEventName: "sal:out",
  },
});
```

## API

You can also use SAL instance. Read more here: [Sal.js docs](https://github.com/mciastek/sal?tab=readme-ov-file#options)

```js
const { $salInstance } = useNuxtApp();

$salInstance.enable(); // Enables animations
$salInstance.disable(); // Disables animations
$salInstance.reset(); // Resets instance and allows to pass new options
$salInstance.update(); // Updates observer with new elements to animated. Useful for dynamically injected HTML.
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-sal/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-sal
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-sal.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-sal
[license-src]: https://img.shields.io/npm/l/nuxt-sal.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-sal
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
