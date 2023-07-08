<h1 align="center">Vue3 Multi Stepper</h1>

<h4 align="center">A simple vue3 multi-stepper component</h4>

<p align="center">
  <a href="https://badge.fury.io/js/vue3-multi-stepper"><img src="https://badge.fury.io/js/vue3-multi-stepper.svg" alt="npm version" height="18"></a>
</p>

<p align="center">
  <a href="#demo">Demo</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#dependencies">Dependencies</a> •
  <a href="#license">License</a>
</p>

## Demo

You can try a live demo [here](https://laximas.github.io/vue3-multi-stepper/)

## Key Features

- Keep track of current step
- Change step content
- Configure finalization
- Show loading spinner
- Customizable
  - Colors
  - Titles
  - Icons
  - Button text

## How To Use

Install

```bash
$ npm install vue3-multi-stepper
```

Import

```js
import { Vue3MultiStepper } from "vue3-multi-stepper";
```

Template

```html
<Vue3MultiStepper v-model:step="step">
  <template #1><!-- Step 1 Content --></template>
  <template #2><!-- Step 2 Content --></template>
  <template #3><!-- Step 3 Content --></template>
</Vue3MultiStepper>
```

API Props

```js
/**
 * Contains the current step. Very similar to a
 * `value` attribute on an input. In most cases, you'll want
 * to set this as a two-way binding, using the `v-model` directive.
 * @type {Number}
 */
step: {
  type: Number,
  default: 1
},

/**
 * Contains the steps with custom titles and icons.
 * @type {Array}
 *
 * @param {Image} iconSuccess - You can point to an imported icon from you assets like:
 * import CheckMark from '../assets/check-mark.png'
 * If you set it to null, a default SVG will be used with primary color 1.
 *
 * @param {boolean} isValid - Used to determine if the user can move to the next step.
 */
tabs: {
  type: Array,
  default: reactive([
    {
      title: 'Step 1',
      iconSuccess: null,
      isValid: true
    },
    {
      title: 'Step 2',
      iconSuccess: null,
      isValid: true
    },
    {
      title: 'Step 3',
      iconSuccess: null,
      isValid: true
    }
  ])
},

/**
 * Function that will validate each step.
 * @type {Function}
 */
validateStep: {
  type: Function,
  default: () => true,
},

/**
 * Function that will run after all steps are completed (done button is clicked).
 * @type {Function}
 */
finalize: {
  type: Function,
  default: function () {
    return {}
  }
},

/**
 * Text for back button.
 * @type {String}
 */
backText: {
  type: String,
  default: 'Back'
},

/**
 * Text for next button.
 * @type {String}
 */
nextText: {
  type: String,
  default: 'Next'
},

/**
 * Text for done button.
 * @type {String}
 */
doneText: {
  type: String,
  default: 'Done'
},

/**
 * Show loading spinner on done button
 * @type {Boolean}
 */
loading: {
  type: Boolean,
  default: false
},

/**
 * Primary Color 1
 * @type {String}
 */
primaryColor1: {
  type: String,
  default: 'orange'
},

/**
 * Primary Color 2
 * @type {String}
 */
,
primaryColor2: {
  type: String,
  default: '#fff'
}
```

## Dependencies

This software uses the following open source packages:

- [Vue 3](https://vuejs.org)

#### Dev Dependencies

- [Vite](https://vitejs.dev)
- [sass](https://www.npmjs.com/package/sass)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [CssInjectedByJs](https://www.npmjs.com/package/vite-plugin-css-injected-by-js)

#### Customizable CSS classes

```css
.steppy-item-counter {
  height: 40px !important;
  width: 40px !important;
  border: none !important;
}

.steppy-item-counter .number {
  font-size: 1rem !important;
}

.controls {
  display: flex !important;
  flex-direction: column-reverse !important;
  gap: 2rem !important;
}

.controls .btn {
  align-self: center !important;
}

.btn--default-2 {
  margin: auto !important;
  text-align: center !important;
  background: #f1c446 !important;
  border-radius: 4px !important;
  border: none !important;
  height: 40px !important;
  width: 40% !important;
  font-size: 1rem !important;
  color: #000407 !important;
  font-weight: bold !important;
}
```

## Support

<a href="https://bmc.link/luckypius" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## License

[MIT](https://github.com/PiusLucky/vue3-multi-stepper/blob/main/LICENSE.md)

---

> GitHub [PiusLucky](https://github.com/PiusLucky) &nbsp;&middot;&nbsp;
> LinkedIn [Lucky Pius](https://www.linkedin.com/in/lucky-pius-52b2b4179/)
