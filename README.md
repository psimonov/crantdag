## Crantdag

(Create React App + Ant Design + agGrid) UI boilerplate

### Included main libs

* craco
* husky / prettier / lint-staged
* styled-components
* react-router-dom
* axios / moment / classnames / lodash
* antd / ag-grid-community

### Install

```
nvm install
npm ci
```

### Install clean version (with default CRA directory structure)

#### Install CRA with TS

```
npx create-react-app . --template typescript
```

#### Install libs

```
npm i @craco/craco@7.0.0-alpha.3 craco-less
npm i husky lint-staged prettier prettier-plugin-import-sort import-sort-style-module
npm i styled-components @types/styled-components jest-styled-components
npm i react-router-dom
npm i axios moment classnames lodash @types/lodash
npm i antd @ant-design/icons
npm i ag-grid-community ag-grid-react
```

### Setup IDE

You may setup watchers in your Webstorm / PhpStorm / IntelliJ IDE

* Navigate to `File` &rarr; `Settings` &rarr; `Tools` &rarr; `File Watchers`
* Press `Import` top button and select `watchers.xml` file on this repo to import settings
