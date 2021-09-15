<h1 align="center">
  <a href="https://github.com/lundegaard/eslint-config-lundegaard">eslint-config-lundegaard</a>
</h1>

<p align="center">
  <a href="https://lundegaard.eu">
    <img alt="by Lundegaard" src="https://github.com/lundegaard/react-union/raw/master/by-lundegaard.png" width="120" />
  </a>
</p>

<h3 align="center">
🖍️ 🛡  🚀
</h3>

<h3 align="center">
Have a good start with your next JavaScript project.
</h3>

<p align="center">
The package provides `.eslintrc.*` as an extensible shared config.
</p>

<p align="center">


<a href="https://github.com/lundegaard/eslint-config-lundegaard">
<img src="https://flat.badgen.net/badge/-/github?icon=github&label" alt="Github" />
</a>

<img src="https://flat.badgen.net/badge/license/MIT/blue" alt="MIT License" />

<a href="https://www.npmjs.com/package/eslint-config-lundegaard">
<img src="https://flat.badgen.net/npm/dm/eslint-config-lundegaard" alt="Downloads" />
</a>

<a href="https://www.npmjs.com/package/eslint-config-lundegaard">
<img src=" https://flat.badgen.net/npm/v/eslint-config-lundegaard" alt="Version" />
</a>
</p>

#

The package provides `.eslintrc.*` as an extensible shared configuration.

# Usage

There are two ESLint configurations for you to use.

## eslint-config-lundegaard

The default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `babel-eslint`, `eslint-plugin-babel`, `eslint-plugin-import` and `eslint-plugin-react`.

### Installation

```sh
yarn add -D eslint-config-lundegaard @babel/eslint-parser@7.15.0 @babel/eslint-plugin@7.14.5 eslint@7.32.0 eslint-plugin-import@2.23.4 eslint-plugin-react@7.24.0 eslint-plugin-react-hooks@4.2.0 eslint-plugin-jest@^24.4.0 eslint-plugin-jest-formatting@^3.0.0
```

or
```sh
npm install eslint-config-lundegaard @babel/eslint-parser@7.15.0 @babel/eslint-plugin@7.14.5 eslint@7.32.0 eslint-plugin-import@2.23.4 eslint-plugin-react@7.24.0 eslint-plugin-react-hooks@4.2.0 eslint-plugin-jest@^24.4.0 eslint-plugin-jest-formatting@^3.0.0 --save-dev
```

And add `"extends": "lundegaard"` to your .eslintrc.

## eslint-config-lundegaard/base

The eslint-config-lundegaard excluding rules for React.

Add `"extends": "eslint-config-lundegaard/base"` to your `.eslintrc.*`.

## Related projects

- [react-union](https://github.com/lundegaard/react-union) – Integrate React apps into various CMSs seamlessly.
- [validarium](https://github.com/lundegaard/validarium) – Platform-agnostic validation library for JavaScript.
- [lundium](https://github.com/lundegaard/lundium) – Beautiful React component library.
- [@redux-tools](https://github.com/lundegaard/redux-tools) – Maintaining large Redux applications with ease.

## Contributing

We are open to all ideas and suggestions, feel free to open an issue or a pull request!

See the [contribution guide](https://github.com/lundegaard/eslint-config-lundegaard/blob/master/CONTRIBUTING.md) for guidelines.

## License

All packages are distributed under the MIT license. See the license [here](https://github.com/lundegaard/eslint-config-lundegaard/blob/master/LICENSE).
