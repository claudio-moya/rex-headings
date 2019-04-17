(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(module,exports,__webpack_require__){__webpack_require__(237),__webpack_require__(316),module.exports=__webpack_require__(317)},317:function(module,exports,__webpack_require__){"use strict";(function(module){var _react=__webpack_require__(175),_addonOptions=__webpack_require__(426),_package=__webpack_require__(433),rex=__webpack_require__(434).themes.normal;rex.mainBackground="#F7F7F7",rex.mainTextColor="#333333",rex.dimmedTextColor="#4D4D4D",rex.highlightColor="#BF0000",(0,_react.addDecorator)((0,_addonOptions.withOptions)({name:_package.name,url:_package.repository.url,theme:rex})),(0,_react.configure)(function(){__webpack_require__(544)},module)}).call(this,__webpack_require__(83)(module))},433:function(module){module.exports={name:"rex-headings",version:"1.1.1",description:"ReX React UI Component",main:"src/Headings.jsx",scripts:{test:"jest","test:upgrade":"npm test -- -u","test:coverage":"npm test -- --coverage","init:component":"node init.js && npm i && npm run test:upgrade && npm start",start:"npm run storybook",build:"npm run build:component && npm run build:storybook","build:patch":"npm --no-git-tag-version version patch && npm run build && npm run commit","build:minor":"npm --no-git-tag-version version minor && npm run build && npm run commit","build:major":"npm --no-git-tag-version version major && npm run build && npm run commit","build:component":"NODE_ENV=production ./node_modules/.bin/webpack --mode=production --config webpack.config.js","build:storybook":"NODE_ENV=production ./node_modules/.bin/build-storybook -c .storybook -o docs",commit:"npm run commit:docs && npm run commit:package","commit:docs":"git add docs README.md && git commit -m 'Added - Docs for github pages and README file'","commit:package":"git add package.json package-lock.json && git commit -m 'New version - v'$npm_package_version","commit:html":"git add docs/html && git commit -m 'Added - Static HTML for github pages'",storybook:"NODE_ENV=development ./node_modules/.bin/start-storybook -p 8080 --ci",serve:"NODE_ENV=production ./node_modules/.bin/http-server ./docs -p 8081",eslint:"eslint --fix './src/*.{js,jsx}'",prettier:"prettier --write './src/*.{js,jsx}'",static:"node static.js"},repository:{type:"git",url:"https://github.com/rakuten-rex/rex-headings.git"},author:"ReX React UI Components Library Authors (https://github.com/rakuten-rex/rex-headings/graphs/contributors)",license:"MIT",bugs:{url:"https://github.com/rakuten-rex/rex-headings/issues"},homepage:"https://rakuten-rex.github.io/rex-headings/",husky:{hooks:{"pre-commit":"lint-staged"}},"lint-staged":{"src/*.{js,jsx}":["eslint --fix","git add"]},devDependencies:{"@babel/core":"^7.3.4","@storybook/addon-a11y":"^4.1.13","@storybook/addon-actions":"^4.1.13","@storybook/addon-info":"^4.1.13","@storybook/addon-knobs":"^4.1.13","@storybook/addon-options":"^4.1.13","@storybook/addon-viewport":"^4.1.13","@storybook/addons":"^4.1.13","@storybook/components":"^4.1.13","@storybook/react":"4.1.13","babel-core":"^6.26.3","babel-eslint":"^10.0.1","babel-loader":"^7.1.5","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-react":"^6.24.1","clean-webpack-plugin":"^1.0.1","copy-webpack-plugin":"^5.0.0","css-loader":"^2.1.0",enzyme:"^3.9.0","enzyme-adapter-react-16":"^1.10.0",eslint:"^5.13.0","eslint-config-prettier":"^3.6.0","eslint-config-rex-react-component":"^1.2.0","eslint-loader":"^2.1.1","eslint-plugin-prettier":"^3.0.1","fs-extra":"^7.0.1","google-closure-compiler-js":"20180610.0.0","http-server":"^0.11.1",husky:"^1.3.1","identity-obj-proxy":"^3.0.0",jest:"^23.6.0","lint-staged":"^8.1.3","mini-css-extract-plugin":"^0.5.0","node-sass":"^4.11.0","optimize-css-assets-webpack-plugin":"^5.0.1",prettier:"^1.16.4",puppeteer:"^1.13.0","sass-loader":"^7.1.0","storybook-inspecthtml":"^0.0.4","style-loader":"^0.23.1",webpack:"^4.29.5","webpack-cli":"^3.2.3","webpack-merge":"^4.2.1"},dependencies:{"prop-types":"^15.7.2",react:"^16.8.3","react-dom":"^16.8.3","rex-core":"^1.4.0","rex-react-utils":"^1.0.1"}}},544:function(module,exports,__webpack_require__){"use strict";(function(module){var _keys2=_interopRequireDefault(__webpack_require__(234)),_react2=_interopRequireDefault(__webpack_require__(1)),_react3=__webpack_require__(175),_addonKnobs=__webpack_require__(548),_addonA11y=__webpack_require__(559),_storybookInspecthtml=__webpack_require__(568),_centerDecorator2=_interopRequireDefault(__webpack_require__(576));__webpack_require__(577);var _props=__webpack_require__(580);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Headings=__webpack_require__(584).default,stories=(0,_react3.storiesOf)("Headings",module);stories.addDecorator(_storybookInspecthtml.withInspectHtml),stories.addDecorator(_centerDecorator2.default),stories.addDecorator(_addonA11y.checkA11y),stories.addDecorator(_addonKnobs.withKnobs),stories.add("default",function(){var sampletext=(0,_addonKnobs.text)("Sample text","This is a sample text.");return _react2.default.createElement(Headings,null,sampletext)}),stories.add("with size options",function(){var sampletext=(0,_addonKnobs.text)("Sample text","This is a sample text. Try all different options here."),options=(0,_keys2.default)(_props.SIZE),value=(0,_addonKnobs.select)("Size",options,_props.DEFAULT_SIZE);return _react2.default.createElement(Headings,{size:value},sampletext)}),stories.add("with all size options",function(){var sampletext=(0,_addonKnobs.text)("Sample text","This is a sample text. Try all different options here."),list=(0,_keys2.default)(_props.SIZE).map(function(size){return _react2.default.createElement(Headings,{size:size,key:size},sampletext)});return _react2.default.createElement(_react2.default.Fragment,null,list)}),stories.add("with display options",function(){var sampletext=(0,_addonKnobs.text)("Sample text","This is a sample text. Try all different options here."),options=(0,_keys2.default)(_props.DISPLAY),value=(0,_addonKnobs.select)("Display",options,_props.DEFAULT_DISPLAY);return _react2.default.createElement(Headings,{display:value},sampletext)}),stories.add("with all display options",function(){var sampletext=(0,_addonKnobs.text)("Sample text","This is a sample text."),list=(0,_keys2.default)(_props.DISPLAY).map(function(display){return _react2.default.createElement(Headings,{display:display,key:display},sampletext)});return _react2.default.createElement(_react2.default.Fragment,null,list)}),stories.add("with secondary text",function(){var sampleText=(0,_addonKnobs.text)("Sample text","This is a sample"),secondaryText=(0,_addonKnobs.text)("Secondary text","with secondary text");return _react2.default.createElement(Headings,{hasSecondary:!0,secondaryText:secondaryText},sampleText)}),stories.add("with classNames",function(){var sampleText=(0,_addonKnobs.text)("Sample text","This is a sample"),className=(0,_addonKnobs.text)("Class names","main-title active"),options=(0,_keys2.default)(_props.DISPLAY),value=(0,_addonKnobs.select)("Display",options,_props.DEFAULT_DISPLAY);return _react2.default.createElement(Headings,{className:className,display:value},sampleText)}),stories.add("with alignment options",function(){var sampletext=(0,_addonKnobs.text)("Sample text","This is a sample text. Try all different options here."),options=(0,_keys2.default)(_props.ALIGNMENT),value=(0,_addonKnobs.select)("Alignment",options,_props.DEFAULT_ALIGN);return _react2.default.createElement(_react2.default.Fragment,null,_react2.default.createElement(Headings,{align:value},sampletext))}),stories.add("with all aligment options",function(){var sampletext=(0,_addonKnobs.text)("Sample text","This is a sample text. Try all different options here."),list=(0,_keys2.default)(_props.ALIGNMENT).map(function(align){return _react2.default.createElement(Headings,{align:align,key:align},sampletext)});return _react2.default.createElement(_react2.default.Fragment,null,list)})}).call(this,__webpack_require__(83)(module))},576:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _assign2=_interopRequireDefault(__webpack_require__(208));exports.default=CenterDecorator;var _react2=_interopRequireDefault(__webpack_require__(1));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function CenterDecorator(storyFn){var contentContainer={display:"flex",justifyContent:"center",alignContent:"center"},leftSide={flexGrow:0},centerContent={flexGrow:2},rightSide={flexGrow:0},guideBox={width:"20px",height:"20px"},guide=(0,_assign2.default)({borderStyle:"solid",borderColor:"#EBEBEB"},guideBox),guideTopLeft=(0,_assign2.default)({borderWidth:"0px 1px 1px 0px"},guide),guideTopRight=(0,_assign2.default)({borderWidth:"0px 0px 1px 1px"},guide),guideCenterLeft=(0,_assign2.default)(guideBox),guideCenterRight=(0,_assign2.default)(guideBox),guideBottomLeft=(0,_assign2.default)({borderWidth:"1px 1px 0px 0px"},guide),guideBottomRight=(0,_assign2.default)({borderWidth:"1px 0px 0px 1px"},guide);return _react2.default.createElement("div",{style:{padding:"10px 10px 10px 10px"}},_react2.default.createElement("div",{style:contentContainer},_react2.default.createElement("div",{style:leftSide},_react2.default.createElement("div",{style:guideTopLeft})),_react2.default.createElement("div",{style:centerContent}),_react2.default.createElement("div",{style:rightSide},_react2.default.createElement("div",{style:guideTopRight}))),_react2.default.createElement("div",{style:contentContainer},_react2.default.createElement("div",{style:leftSide},_react2.default.createElement("div",{style:guideCenterLeft})),_react2.default.createElement("div",{style:centerContent},storyFn()),_react2.default.createElement("div",{style:rightSide},_react2.default.createElement("div",{style:guideCenterRight}))),_react2.default.createElement("div",{style:contentContainer},_react2.default.createElement("div",{style:leftSide},_react2.default.createElement("div",{style:guideBottomLeft})),_react2.default.createElement("div",{style:centerContent}),_react2.default.createElement("div",{style:rightSide},_react2.default.createElement("div",{style:guideBottomRight}))))}CenterDecorator.__docgenInfo={description:"",methods:[],displayName:"CenterDecorator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/centerDecorator.jsx"]={name:"CenterDecorator",docgenInfo:CenterDecorator.__docgenInfo,path:".storybook/centerDecorator.jsx"})},580:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _size=__webpack_require__(581);Object.defineProperty(exports,"SIZE",{enumerable:!0,get:function(){return _size.SIZE}}),Object.defineProperty(exports,"DEFAULT_SIZE",{enumerable:!0,get:function(){return _size.DEFAULT_SIZE}});var _display=__webpack_require__(582);Object.defineProperty(exports,"DISPLAY",{enumerable:!0,get:function(){return _display.DISPLAY}}),Object.defineProperty(exports,"DEFAULT_DISPLAY",{enumerable:!0,get:function(){return _display.DEFAULT_DISPLAY}});var _alignment=__webpack_require__(583);Object.defineProperty(exports,"ALIGNMENT",{enumerable:!0,get:function(){return _alignment.ALIGNMENT}}),Object.defineProperty(exports,"DEFAULT_ALIGN",{enumerable:!0,get:function(){return _alignment.DEFAULT_ALIGN}})},581:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.SIZE={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6"},exports.DEFAULT_SIZE="h1"},582:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.DISPLAY={default:"",1:"display-1",2:"display-2",3:"display-3",4:"display-4",5:"display-5"},exports.DEFAULT_DISPLAY="default"},583:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.ALIGNMENT={default:"",left:"text-left",right:"text-right",center:"text-center",justify:"text-justify",nowrap:"text-nowrap"},exports.DEFAULT_ALIGN="default"}},[[236,1,2]]]);
//# sourceMappingURL=main.91e9a4a6b41c2c64a04a.bundle.js.map