webpackJsonp([11],{

/***/ 1301:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1432);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _containers = __webpack_require__(1408);

var _components = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandingPage = function LandingPage() {
  return _react2.default.createElement(
    'div',
    { className: _indexModule2.default.container },
    _react2.default.createElement(_containers.LandingContainer, null),
    _react2.default.createElement(_containers.ArticleFeedContainer, null),
    _react2.default.createElement(_components.AppFooter, null)
  );
};

exports.default = (0, _reactCssModules2.default)(LandingPage, _indexModule2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/pages/LandingPage/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/pages/LandingPage/index.js"); } } })();

/***/ },

/***/ 1314:
/***/ function(module, exports, __webpack_require__) {

var parse = __webpack_require__(1356).parse;

var cache = {};

function stripLoc(doc) {
	var docType = Object.prototype.toString.call(doc);

	if (docType === '[object Array]') {
		return doc.map(stripLoc);
	}

	if (docType !== '[object Object]') {
		throw new Error('Unexpected input.');
	}

	if (doc.loc) {
		delete doc.loc;
	}

	var keys = Object.keys(doc);
	var key;
	var value;
	var valueType;

	for (key in keys) {
		if (keys.hasOwnProperty(key)) {
			value = doc[keys[key]];
			valueType = Object.prototype.toString.call(value);

			if (valueType === '[object Object]' || valueType === '[object Array]') {
				doc[keys[key]] = stripLoc(value);
			}
		}
	}

	return doc;
}

function parseDocument(doc) {
  if (cache[doc]) {
    return cache[doc];
  }

  var parsed = parse(doc);

  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  parsed = stripLoc(parsed);

  cache[doc] = parsed;

  return parsed;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];
  args.shift();
  var substitutions = args;

  var result = '';

  // run the loop only for the substitution count
  for (var i = 0; i < substitutions.length; i++) {
      result += literals[i];
      result += substitutions[i];
  }

  // add the last literal
  result += literals[literals.length - 1];

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;

module.exports = gql;


/***/ },

/***/ 1315:
/***/ function(module, exports, __webpack_require__) {

"use strict";
const isIntegerRE = /^\+?(0|[1-9]\d*)$/;
const numberRE = /^(?=.*[0-9]).+$/;
const twoWordsRE = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
const lowercaseRE = /^(?=.*[a-z]).+$/;
const uppercaseRE = /^(?=.*[A-Z]).+$/;
const specialCharRE = /^(?=.*[_\W]).+$/;
const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


/**
 * @function join
 * @description takes a collection of validation rules, joining into an array
 * @param [function] - an array of functions to call to validate
 * @param value - the value to validate
 * @param data - the data to validate
 * @return error - the first error returned from the validation function
 */
const join = (rules) =>
(value, data) =>
  rules.map(rule =>
    rule(value, data)).filter(error =>
      !!error
    )[0];

const noValue = value =>
  value === undefined ||
    value === null ||
      value === '';

/**
 * @function validateWithRE
 * @description - takes a regular expression and a message and returns a function that will return
 * The message if the re does not pass with the value passed into the curried function.
 * @param {RegExp} = the regular expression to be used to test the value.
 * @param String - the message value to return upon failure
 * @return Function - a function that takes a value and returns a string message if the RE fails.
 */
const validateWithRE = (RE, message) =>
  (value) => {
    if (!RE.test(value)) {
      return message;
    }
  };

const minLength = (minimum) =>
  (value) => {
    if (!noValue(value) && value.length < minimum) {
      return `Value must contain at least ${minimum} characters`;
    }
  };/* harmony export */ exports["minLength"] = minLength;

const maxLength = (maximum) =>
  (value) => {
    if (!noValue(value) && value.length > maximum) {
      return `Value must be no more than ${maximum} characters in length`;
    }
  };/* harmony export */ exports["maxLength"] = maxLength;

const valueRequired = (value) => {
  if (noValue(value)) {
    return 'Value Required';
  }
};/* harmony export */ exports["valueRequired"] = valueRequired;

const containsSpecialChar = (value) =>
  value && validateWithRE(specialCharRE, 'Must contain 1 special character.')(value);/* harmony export */ exports["containsSpecialChar"] = containsSpecialChar;

const isInteger = (value) => {
  return value && validateWithRE(isIntegerRE, 'Must be an integer value.')(value);
};/* harmony export */ exports["isInteger"] = isInteger;

const containsNumber = (value) => {
  return value && validateWithRE(numberRE, 'Must Contain at least one number')(value);
};/* harmony export */ exports["containsNumber"] = containsNumber;

const containsLowercase = (value) => {
  return value && validateWithRE(lowercaseRE, 'Must contain at least one lowercase letter.')(value);
};/* harmony export */ exports["containsLowercase"] = containsLowercase;

const containsUppercase = (value) => {
  return value && validateWithRE(uppercaseRE, 'Must contain at least one uppercase letter')(value);
};/* harmony export */ exports["containsUppercase"] = containsUppercase;

const containsTwoWords = (value) => {
  const lowercaseValue = value ? value.toLowerCase() : '';
  return value && validateWithRE(twoWordsRE, 'Must contain two words, i.e. full name.')(lowercaseValue);
};/* harmony export */ exports["containsTwoWords"] = containsTwoWords;

const isEmail = (value) => {
  return value && validateWithRE(emailRE, 'Must be a valid email address.')(value);
};/* harmony export */ exports["isEmail"] = isEmail;

const createValidator = (validationRules) =>
  (data = {}) => {
    const errors = {};
    Object.keys(validationRules).forEach((key) => {
      const rule = join([].concat(validationRules[key]));
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };/* harmony export */ exports["createValidator"] = createValidator;


/***/ },

/***/ 1316:
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns an array of all `ContentBlock` instances within two block keys
 *
 * @param  {object} contentState A draft.js `ContentState` instance
 * @param  {string} anchorKey    The block key to start searching from
 * @param  {string} focusKey     The block key until which to search
 *
 * @return {array} An array containing the found content blocks
 */

exports.default = function (contentState, anchorKey, focusKey) {
  var isSameBlock = anchorKey === focusKey;
  var startingBlock = contentState.getBlockForKey(anchorKey);

  if (!startingBlock) {
    return [];
  }

  var selectedBlocks = [startingBlock];

  if (!isSameBlock) {
    var blockKey = anchorKey;

    while (blockKey !== focusKey) {
      var nextBlock = contentState.getBlockAfter(blockKey);

      if (!nextBlock) {
        selectedBlocks = [];
        break;
      }

      selectedBlocks.push(nextBlock);
      blockKey = nextBlock.getKey();
    }
  }

  return selectedBlocks;
};

/***/ },

/***/ 1317:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _memoize = __webpack_require__(1359);

var _memoize2 = _interopRequireDefault(_memoize);

exports['default'] = _memoize2['default'];
module.exports = exports['default'];

/***/ },

/***/ 1318:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(8);

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__(7);

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Responsive = __webpack_require__(103);

var _Responsive2 = _interopRequireDefault(_Responsive);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Image = __webpack_require__(120);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.HERO;

var Hero = function (_Component) {
  (0, _inherits3.default)(Hero, _Component);

  function Hero(props, context) {
    (0, _classCallCheck3.default)(this, Hero);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Hero.__proto__ || (0, _getPrototypeOf2.default)(Hero)).call(this, props, context));

    _this._setReverse = _this._setReverse.bind(_this);
    _this._setBackgroundColorIndex = _this._setBackgroundColorIndex.bind(_this);

    _this.state = {
      colorIndex: props.colorIndex,
      reverse: props.justify === 'start' ? true : false
    };
    return _this;
  }

  (0, _createClass3.default)(Hero, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this._setReverse);
      window.addEventListener('resize', this._setBackgroundColorIndex);
      this._setReverse();
      this._setBackgroundColorIndex();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._setReverse);
      window.removeEventListener('resize', this._setBackgroundColorIndex);
    }
  }, {
    key: '_setBackgroundColorIndex',
    value: function _setBackgroundColorIndex() {
      var colorIndex = this.props.colorIndex;


      if (window.innerWidth < _Responsive2.default.smallSize()) {
        this.setState({ colorIndex: 'light-1' });
      } else {
        this.setState({ colorIndex: colorIndex });
      }
    }
  }, {
    key: '_setReverse',
    value: function _setReverse() {
      var justify = this.props.justify;


      if (window.innerWidth < _Responsive2.default.smallSize()) {
        this.setState({ reverse: false });
      } else {
        this.setState({ reverse: justify === 'start' ? true : false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props;
      var backgroundImage = _props.backgroundImage;
      var backgroundVideo = _props.backgroundVideo;
      var children = _props.children;
      var className = _props.className;
      var flush = _props.flush;
      var image = _props.image;
      var justify = _props.justify;
      var responsiveBackgroundPosition = _props.responsiveBackgroundPosition;
      var separator = _props.separator;
      var size = _props.size;


      var classes = (0, _classnames3.default)(CLASS_ROOT, className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--bg-' + responsiveBackgroundPosition, responsiveBackgroundPosition), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--mobile-separator', separator), _classnames));

      var full = flush ? 'horizontal' : false;
      var pad = flush ? 'none' : 'large';

      var backgroundMarkup = void 0;
      if (backgroundImage) {
        backgroundMarkup = _react2.default.createElement(_Box2.default, { containerClassName: CLASS_ROOT + "__background",
          appCentered: true, pad: pad,
          backgroundImage: 'url(' + backgroundImage + ')', full: full });
      } else if (backgroundVideo) {
        backgroundMarkup = _react2.default.createElement(
          _Box2.default,
          { className: CLASS_ROOT + "__background " + CLASS_ROOT + "__background-video" },
          backgroundVideo
        );
      }

      var imageMarkup = _react2.default.createElement(_Box2.default, null);
      if (image) {
        imageMarkup = _react2.default.createElement(_Image2.default, { src: 'url(' + image + ')' });
      }

      var contentMarkup = void 0;
      if (justify === 'center') {
        contentMarkup = _react2.default.createElement(
          _Box2.default,
          { className: CLASS_ROOT + "__overlay", justify: justify,
            align: 'center', primary: true, full: full, direction: 'row' },
          _react2.default.createElement(
            _Box2.default,
            { pad: { horizontal: 'large', vertical: 'large',
                between: 'medium' } },
            children
          )
        );
      } else {
        contentMarkup = _react2.default.createElement(
          _Box2.default,
          { className: CLASS_ROOT + "__overlay", align: 'center',
            primary: true, full: full, direction: 'row',
            reverse: this.state.reverse },
          _react2.default.createElement(
            _Box2.default,
            { className: CLASS_ROOT + "__image", align: 'center',
              justify: 'center' },
            imageMarkup
          ),
          _react2.default.createElement(
            _Box2.default,
            { pad: { horizontal: 'large', vertical: 'large',
                between: 'medium' } },
            children
          )
        );
      }

      return _react2.default.createElement(
        _Box2.default,
        { className: classes, colorIndex: this.state.colorIndex },
        backgroundMarkup,
        contentMarkup
      );
    }
  }]);
  return Hero;
}(_react.Component);

Hero.displayName = 'Hero';
exports.default = Hero;


Hero.propTypes = {
  backgroundImage: _react.PropTypes.string,
  backgroundVideo: _react.PropTypes.object,
  colorIndex: _react.PropTypes.string,
  flush: _react.PropTypes.bool,
  image: _react.PropTypes.string,
  justify: _react.PropTypes.oneOf(['start', 'center', 'end']),
  responsiveBackgroundPosition: _react.PropTypes.oneOf(['left', 'center', 'right']),
  separator: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['small', 'large'])
};

Hero.defaultProps = {
  colorIndex: 'grey-1',
  flush: true,
  justify: 'end',
  responsiveBackgroundPosition: 'center',
  separator: false,
  size: 'large'
};
module.exports = exports['default'];

/***/ },

/***/ 1319:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-ArticleArchiveContainer-___index-module__listItem___3wKtz {\n  width: 960px;\n  max-width: 100vw;\n  box-sizing: border-box;\n}\n\n.app-src-containers-ArticleArchiveContainer-___index-module__articleFeed___2At4Q {\n  background: #FFF;\n  margin-bottom: 14px;\n  background: #fff;\n  box-shadow: 0 2px 4px 0 rgba(46, 61, 73, 0.2);\n  border: 1px solid #dbe2e8;\n  max-width: 960px;\n}\n\n@media screen and (max-width: 500px) {\n  .app-src-containers-ArticleArchiveContainer-___index-module__articleFeed___2At4Q {\n    max-width: 100vw !important;\n    box-sizing: border-box;\n  }\n}\n\n.app-src-containers-ArticleArchiveContainer-___index-module__feedHeading___3JoE- {\n  margin-top: 60px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFFOztBQUUzQjtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDhDQUE4QztFQUM5QywwQkFBMEI7RUFDMUIsaUJBQWlCLEVBQUU7RUFDbkI7SUFDRTtNQUNFLDRCQUE0QjtNQUM1Qix1QkFBdUIsRUFBRSxFQUFFOztBQUVqQztFQUNFLGlCQUFpQixFQUFFIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RJdGVtIHtcbiAgd2lkdGg6IDk2MHB4O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5hcnRpY2xlRmVlZCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZTJlODtcbiAgbWF4LXdpZHRoOiA5NjBweDsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5hcnRpY2xlRmVlZCB7XG4gICAgICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9IH1cblxuLmZlZWRIZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogNjBweDsgfVxuIl19 */", ""]);

// exports
exports.locals = {
	"listItem": "app-src-containers-ArticleArchiveContainer-___index-module__listItem___3wKtz",
	"articleFeed": "app-src-containers-ArticleArchiveContainer-___index-module__articleFeed___2At4Q",
	"feedHeading": "app-src-containers-ArticleArchiveContainer-___index-module__feedHeading___3JoE-"
};

/***/ },

/***/ 1320:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-ArticleFeedContainer-___index-module__listItem___hiYlT {\n  width: 960px;\n  max-width: 100vw;\n  box-sizing: border-box;\n}\n\n.app-src-containers-ArticleFeedContainer-___index-module__articleFeed___1cxjT {\n  background: #FFF;\n  margin-bottom: 14px;\n  background: #fff;\n  box-shadow: 0 2px 4px 0 rgba(46, 61, 73, 0.2);\n  border: 1px solid #dbe2e8;\n  max-width: 960px;\n}\n\n@media screen and (max-width: 500px) {\n  .app-src-containers-ArticleFeedContainer-___index-module__articleFeed___1cxjT {\n    max-width: 100vw !important;\n    box-sizing: border-box;\n  }\n}\n\n.app-src-containers-ArticleFeedContainer-___index-module__feedHeading___1L9al {\n  margin-top: 60px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFFOztBQUUzQjtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDhDQUE4QztFQUM5QywwQkFBMEI7RUFDMUIsaUJBQWlCLEVBQUU7RUFDbkI7SUFDRTtNQUNFLDRCQUE0QjtNQUM1Qix1QkFBdUIsRUFBRSxFQUFFOztBQUVqQztFQUNFLGlCQUFpQixFQUFFIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RJdGVtIHtcbiAgd2lkdGg6IDk2MHB4O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5hcnRpY2xlRmVlZCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZTJlODtcbiAgbWF4LXdpZHRoOiA5NjBweDsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5hcnRpY2xlRmVlZCB7XG4gICAgICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9IH1cblxuLmZlZWRIZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogNjBweDsgfVxuIl19 */", ""]);

// exports
exports.locals = {
	"listItem": "app-src-containers-ArticleFeedContainer-___index-module__listItem___hiYlT",
	"articleFeed": "app-src-containers-ArticleFeedContainer-___index-module__articleFeed___1cxjT",
	"feedHeading": "app-src-containers-ArticleFeedContainer-___index-module__feedHeading___1L9al"
};

/***/ },

/***/ 1321:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-CarouselWidgetContainer-___index-module__mainContent___3JuGy {\n  background: #FFF;\n  margin-bottom: 14px;\n  background: #fff;\n  box-shadow: 0 2px 4px 0 rgba(46, 61, 73, 0.2);\n  border: 1px solid #dbe2e8;\n  max-width: 960px;\n}\n\n@media screen and (max-width: 768px) {\n  .app-src-containers-CarouselWidgetContainer-___index-module__mainContent___3JuGy {\n    padding-top: 0 !important;\n  }\n}\n\n.app-src-containers-CarouselWidgetContainer-___index-module__loadingBox___uKrQW {\n  min-height: 100vh;\n}\n\n@media screen and (max-width: 768px) {\n  .app-src-containers-CarouselWidgetContainer-___index-module__mainSection___1XH-j {\n    padding: 0 !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiw4Q0FBOEM7RUFDOUMsMEJBQTBCO0VBQzFCLGlCQUFpQixFQUFFO0VBQ25CO0lBQ0U7TUFDRSwwQkFBMEIsRUFBRSxFQUFFOztBQUVwQztFQUNFLGtCQUFrQixFQUFFOztBQUV0QjtFQUNFO0lBQ0Usc0JBQXNCLEVBQUUsRUFBRSIsImZpbGUiOiJpbmRleC5tb2R1bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQ29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZTJlODtcbiAgbWF4LXdpZHRoOiA5NjBweDsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5tYWluQ29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50OyB9IH1cblxuLmxvYWRpbmdCb3gge1xuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpblNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfSB9XG4iXX0= */", ""]);

// exports
exports.locals = {
	"mainContent": "app-src-containers-CarouselWidgetContainer-___index-module__mainContent___3JuGy",
	"loadingBox": "app-src-containers-CarouselWidgetContainer-___index-module__loadingBox___uKrQW",
	"mainSection": "app-src-containers-CarouselWidgetContainer-___index-module__mainSection___1XH-j"
};

/***/ },

/***/ 1322:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-CmsEditorContainer-___index-module__cmsEditor___1xCKv {\n  min-height: 100vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBRSIsImZpbGUiOiJpbmRleC5tb2R1bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbXNFZGl0b3Ige1xuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxuIl19 */", ""]);

// exports
exports.locals = {
	"cmsEditor": "app-src-containers-CmsEditorContainer-___index-module__cmsEditor___1xCKv"
};

/***/ },

/***/ 1323:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-ContentDashboardContainer-___index-module__mainContent___3GBGR {\n  background: #FFF;\n  margin-bottom: 14px;\n  background: #fff;\n  box-shadow: 0 2px 4px 0 rgba(46, 61, 73, 0.2);\n  border: 1px solid #dbe2e8;\n  max-width: 960px;\n  padding: 60px 0;\n}\n\n@media screen and (max-width: 768px) {\n  .app-src-containers-ContentDashboardContainer-___index-module__mainContent___3GBGR {\n    padding-top: 0 !important;\n    max-width: 100vw;\n    box-sizing: border-box;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .app-src-containers-ContentDashboardContainer-___index-module__mainSection___3BtNP {\n    padding: 0 !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiw4Q0FBOEM7RUFDOUMsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBRTtFQUNsQjtJQUNFO01BQ0UsMEJBQTBCO01BQzFCLGlCQUFpQjtNQUNqQix1QkFBdUIsRUFBRSxFQUFFOztBQUVqQztFQUNFO0lBQ0Usc0JBQXNCLEVBQUUsRUFBRSIsImZpbGUiOiJpbmRleC5tb2R1bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQ29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZTJlODtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgcGFkZGluZzogNjBweCAwOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLm1haW5Db250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluU2VjdGlvbiB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9IH1cbiJdfQ== */", ""]);

// exports
exports.locals = {
	"mainContent": "app-src-containers-ContentDashboardContainer-___index-module__mainContent___3GBGR",
	"mainSection": "app-src-containers-ContentDashboardContainer-___index-module__mainSection___3BtNP"
};

/***/ },

/***/ 1324:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-LandingContainer-___index-module__landing___nj0KQ {\n  min-height: 100vh;\n}\n\n.app-src-containers-LandingContainer-___index-module__mainContent___1UMld {\n  background: #FFF;\n  margin-bottom: 14px;\n  background: #fff;\n  box-shadow: 0 2px 4px 0 rgba(46, 61, 73, 0.2);\n  border: 1px solid #dbe2e8;\n  max-width: 960px;\n}\n\n@media screen and (max-width: 768px) {\n  .app-src-containers-LandingContainer-___index-module__mainContent___1UMld {\n    padding-top: 0 !important;\n  }\n}\n\n.app-src-containers-LandingContainer-___index-module__loadingBox___1FYTh {\n  min-height: 100vh;\n}\n\n@media screen and (max-width: 768px) {\n  .app-src-containers-LandingContainer-___index-module__mainSection___1bw3k {\n    padding: 0 !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBRTs7QUFFdEI7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiw4Q0FBOEM7RUFDOUMsMEJBQTBCO0VBQzFCLGlCQUFpQixFQUFFO0VBQ25CO0lBQ0U7TUFDRSwwQkFBMEIsRUFBRSxFQUFFOztBQUVwQztFQUNFLGtCQUFrQixFQUFFOztBQUV0QjtFQUNFO0lBQ0Usc0JBQXNCLEVBQUUsRUFBRSIsImZpbGUiOiJpbmRleC5tb2R1bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5nIHtcbiAgbWluLWhlaWdodDogMTAwdmg7IH1cblxuLm1haW5Db250ZW50IHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJlMmU4O1xuICBtYXgtd2lkdGg6IDk2MHB4OyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLm1haW5Db250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7IH0gfVxuXG4ubG9hZGluZ0JveCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluU2VjdGlvbiB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9IH1cbiJdfQ== */", ""]);

// exports
exports.locals = {
	"landing": "app-src-containers-LandingContainer-___index-module__landing___nj0KQ",
	"mainContent": "app-src-containers-LandingContainer-___index-module__mainContent___1UMld",
	"loadingBox": "app-src-containers-LandingContainer-___index-module__loadingBox___1FYTh",
	"mainSection": "app-src-containers-LandingContainer-___index-module__mainSection___1bw3k"
};

/***/ },

/***/ 1325:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-LoginContainer-___index-module__login___2X2WQ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 95vh;\n  background: #fafbfc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUUiLCJmaWxlIjoiaW5kZXgubW9kdWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG4gIGJhY2tncm91bmQ6ICNmYWZiZmM7IH1cbiJdfQ== */", ""]);

// exports
exports.locals = {
	"login": "app-src-containers-LoginContainer-___index-module__login___2X2WQ"
};

/***/ },

/***/ 1326:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, "/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5tb2R1bGUuc2NzcyJ9 */", ""]);

// exports


/***/ },

/***/ 1327:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-MembersContainer-___index-module__members___316J8 {\n  background: #FFF;\n  margin-bottom: 60px;\n  background: #fafbfc;\n  width: 1200px;\n  max-width: 100%;\n}\n\n@media screen and (max-width: 500px) {\n  .app-src-containers-MembersContainer-___index-module__members___316J8 {\n    max-width: 100vw !important;\n    box-sizing: border-box;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .app-src-containers-MembersContainer-___index-module__masonry___18fdX {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUU7RUFDbEI7SUFDRTtNQUNFLDRCQUE0QjtNQUM1Qix1QkFBdUIsRUFBRSxFQUFFOztBQUVqQztFQUNFO0lBQ0UsMEJBQW9CO1FBQXBCLHVCQUFvQjtZQUFwQixvQkFBb0IsRUFBRSxFQUFFIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbWJlcnMge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xuICB3aWR0aDogMTIwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAubWVtYmVycyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLm1hc29ucnkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH0gfVxuIl19 */", ""]);

// exports
exports.locals = {
	"members": "app-src-containers-MembersContainer-___index-module__members___316J8",
	"masonry": "app-src-containers-MembersContainer-___index-module__masonry___18fdX"
};

/***/ },

/***/ 1328:
1326,

/***/ 1329:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-NotFoundContainer-___index-module__image___f8toA {\n  margin-bottom: 20px;\n}\n\n.app-src-containers-NotFoundContainer-___index-module__fillHeight___2MejL {\n  min-height: 90vh;\n  margin-top: 2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0IsRUFBRTs7QUFFeEI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUUiLCJmaWxlIjoiaW5kZXgubW9kdWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5maWxsSGVpZ2h0IHtcbiAgbWluLWhlaWdodDogOTB2aDtcbiAgbWFyZ2luLXRvcDogMnJlbTsgfVxuIl19 */", ""]);

// exports
exports.locals = {
	"image": "app-src-containers-NotFoundContainer-___index-module__image___f8toA",
	"fillHeight": "app-src-containers-NotFoundContainer-___index-module__fillHeight___2MejL"
};

/***/ },

/***/ 1330:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-ResetPasswordContainer-___index-module__resetPassword___38ktK {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 95vh;\n  background: #fafbfc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUUiLCJmaWxlIjoiaW5kZXgubW9kdWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXRQYXNzd29yZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogOTV2aDtcbiAgYmFja2dyb3VuZDogI2ZhZmJmYzsgfVxuIl19 */", ""]);

// exports
exports.locals = {
	"resetPassword": "app-src-containers-ResetPasswordContainer-___index-module__resetPassword___38ktK"
};

/***/ },

/***/ 1331:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-SearchContainer-___index-module__search___3QiDq {\n  min-height: 90vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.app-src-containers-SearchContainer-___index-module__searchHeader___2iCIM {\n  padding: 16px 0;\n  border-bottom: 1px solid #E0E0E0;\n  margin-bottom: 32px;\n  background: #FFF;\n}\n\n.app-src-containers-SearchContainer-___index-module__rowFull___1rlCW {\n  max-width: 75rem;\n}\n\n.app-src-containers-SearchContainer-___index-module__centerBox___3YZ2h {\n  -ms-flex-item-align: center;\n  -ms-grid-row-align: center;\n  align-self: center;\n  height: 80vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQix3QkFBNEI7TUFBNUIscUJBQTRCO1VBQTVCLDRCQUE0QixFQUFFOztBQUVoQztFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFFOztBQUVyQjtFQUNFLGlCQUFpQixFQUFFOztBQUVyQjtFQUNFLDRCQUFtQjtNQUFuQiwyQkFBbUI7TUFBbkIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBRSIsImZpbGUiOiJpbmRleC5tb2R1bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cblxuLnNlYXJjaEhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMEUwRTA7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7IH1cblxuLnJvd0Z1bGwge1xuICBtYXgtd2lkdGg6IDc1cmVtOyB9XG5cbi5jZW50ZXJCb3gge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogODB2aDsgfVxuIl19 */", ""]);

// exports
exports.locals = {
	"search": "app-src-containers-SearchContainer-___index-module__search___3QiDq",
	"searchHeader": "app-src-containers-SearchContainer-___index-module__searchHeader___2iCIM",
	"rowFull": "app-src-containers-SearchContainer-___index-module__rowFull___1rlCW",
	"centerBox": "app-src-containers-SearchContainer-___index-module__centerBox___3YZ2h"
};

/***/ },

/***/ 1332:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-SignupContainer-___index-module__signup___14ADT {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 95vh;\n  background: #fafbfc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUUiLCJmaWxlIjoiaW5kZXgubW9kdWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA5NXZoO1xuICBiYWNrZ3JvdW5kOiAjZmFmYmZjOyB9XG4iXX0= */", ""]);

// exports
exports.locals = {
	"signup": "app-src-containers-SignupContainer-___index-module__signup___14ADT"
};

/***/ },

/***/ 1333:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-containers-SingleArticleContainer-___index-module__singleArticle___qU5SV {\n  position: relative;\n  margin: 0 auto;\n  width: 90%;\n  max-width: 960px;\n}\n\n.app-src-containers-SingleArticleContainer-___index-module__mainSection___22PCy {\n  max-width: 100vw;\n  width: 960px;\n  box-sizing: border-box;\n}\n\n@media screen and (max-width: 768px) {\n  .app-src-containers-SingleArticleContainer-___index-module__mainSection___22PCy {\n    padding: 0 !important;\n  }\n}\n\n.app-src-containers-SingleArticleContainer-___index-module__center___usM5r {\n  margin: auto;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 10em;\n  border: 3px solid #89A2B5;\n  padding: 10px;\n}\n\n.app-src-containers-SingleArticleContainer-___index-module__singleArticleContainer___2-FOU {\n  min-height: 100vh;\n  background: #fafbfc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUIsRUFBRTs7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QixFQUFFO0VBQ3pCO0lBQ0U7TUFDRSxzQkFBc0IsRUFBRSxFQUFFOztBQUVoQztFQUNFLGFBQWE7RUFDYiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQix5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLDZCQUF1QjtFQUF2Qiw4QkFBdUI7TUFBdkIsMkJBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGNBQWMsRUFBRTs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUUiLCJmaWxlIjoiaW5kZXgubW9kdWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlQXJ0aWNsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogOTYwcHg7IH1cblxuLm1haW5TZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgd2lkdGg6IDk2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLm1haW5TZWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfSB9XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTBlbTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzg5QTJCNTtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4uc2luZ2xlQXJ0aWNsZUNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZmFmYmZjOyB9XG4iXX0= */", ""]);

// exports
exports.locals = {
	"singleArticle": "app-src-containers-SingleArticleContainer-___index-module__singleArticle___qU5SV",
	"mainSection": "app-src-containers-SingleArticleContainer-___index-module__mainSection___22PCy",
	"center": "app-src-containers-SingleArticleContainer-___index-module__center___usM5r",
	"singleArticleContainer": "app-src-containers-SingleArticleContainer-___index-module__singleArticleContainer___2-FOU"
};

/***/ },

/***/ 1334:
1326,

/***/ 1335:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BLOCK_TYPE = exports.BLOCK_TYPE = {
  // This is used to represent a normal text block (paragraph).
  UNSTYLED: 'unstyled',
  HEADER_ONE: 'header-one',
  HEADER_TWO: 'header-two',
  HEADER_THREE: 'header-three',
  HEADER_FOUR: 'header-four',
  HEADER_FIVE: 'header-five',
  HEADER_SIX: 'header-six',
  UNORDERED_LIST_ITEM: 'unordered-list-item',
  ORDERED_LIST_ITEM: 'ordered-list-item',
  BLOCKQUOTE: 'blockquote',
  PULLQUOTE: 'pullquote',
  CODE: 'code-block',
  ATOMIC: 'atomic'
};

var ENTITY_TYPE = exports.ENTITY_TYPE = {
  LINK: 'LINK',
  IMAGE: 'IMAGE'
};

var INLINE_STYLE = exports.INLINE_STYLE = {
  BOLD: 'BOLD',
  CODE: 'CODE',
  ITALIC: 'ITALIC',
  STRIKETHROUGH: 'STRIKETHROUGH',
  UNDERLINE: 'UNDERLINE'
};

exports.default = {
  BLOCK_TYPE: BLOCK_TYPE,
  ENTITY_TYPE: ENTITY_TYPE,
  INLINE_STYLE: INLINE_STYLE
};

/***/ },

/***/ 1336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = __webpack_require__(53);

var _getSelectedBlocks = __webpack_require__(1316);

var _getSelectedBlocks2 = _interopRequireDefault(_getSelectedBlocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calls a provided `modifier` function with a selection for each
 * selected block in the current editor selection. Passes through additional
 * arguments to the modifier.
 *
 * Note: At the moment it will retain the original selection and override
 * possible selection changes from modifiers
 *
 * @param  {object} editorState The current draft.js editor state object
 *
 * @param  {function} modifier  A modifier function to be executed.
 *                              Must have the signature (editorState, selection, ...)
 *
 * @param  {mixed} ...args      Additional arguments to be passed through to the modifier
 *
 * @return {object} The new editor state
 */

exports.default = function (editorState, modifier) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var contentState = editorState.getCurrentContent();
  var currentSelection = editorState.getSelection();

  var startKey = currentSelection.getStartKey();
  var endKey = currentSelection.getEndKey();
  var startOffset = currentSelection.getStartOffset();
  var endOffset = currentSelection.getEndOffset();

  var isSameBlock = startKey === endKey;
  var selectedBlocks = (0, _getSelectedBlocks2.default)(contentState, startKey, endKey);

  var finalEditorState = editorState;
  selectedBlocks.forEach(function (block) {
    var currentBlockKey = block.getKey();
    var selectionStart = startOffset;
    var selectionEnd = endOffset;

    if (currentBlockKey === startKey) {
      selectionStart = startOffset;
      selectionEnd = isSameBlock ? endOffset : block.getText().length;
    } else if (currentBlockKey === endKey) {
      selectionStart = isSameBlock ? startOffset : 0;
      selectionEnd = endOffset;
    } else {
      selectionStart = 0;
      selectionEnd = block.getText().length;
    }

    var selection = new _draftJs.SelectionState({
      anchorKey: currentBlockKey,
      anchorOffset: selectionStart,
      focusKey: currentBlockKey,
      focusOffset: selectionEnd
    });

    finalEditorState = modifier.apply(undefined, [finalEditorState, selection].concat(args));
  });

  return _draftJs.EditorState.forceSelection(finalEditorState, currentSelection);
};

/***/ },

/***/ 1337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMPTY_SET = undefined;
exports.default = getEntityRanges;

var _immutable = __webpack_require__(578);

var EMPTY_SET = exports.EMPTY_SET = new _immutable.OrderedSet();

function getEntityRanges(text, charMetaList) {
  var charEntity = null;
  var prevCharEntity = null;
  var ranges = [];
  var rangeStart = 0;
  for (var i = 0, len = text.length; i < len; i++) {
    prevCharEntity = charEntity;
    var meta = charMetaList.get(i);
    charEntity = meta ? meta.getEntity() : null;
    if (i > 0 && charEntity !== prevCharEntity) {
      ranges.push([prevCharEntity, getStyleRanges(text.slice(rangeStart, i), charMetaList.slice(rangeStart, i))]);
      rangeStart = i;
    }
  }
  ranges.push([charEntity, getStyleRanges(text.slice(rangeStart), charMetaList.slice(rangeStart))]);
  return ranges;
}

function getStyleRanges(text, charMetaList) {
  var charStyle = EMPTY_SET;
  var prevCharStyle = EMPTY_SET;
  var ranges = [];
  var rangeStart = 0;
  for (var i = 0, len = text.length; i < len; i++) {
    prevCharStyle = charStyle;
    var meta = charMetaList.get(i);
    charStyle = meta ? meta.getStyle() : EMPTY_SET;
    if (i > 0 && !(0, _immutable.is)(charStyle, prevCharStyle)) {
      ranges.push([text.slice(rangeStart, i), prevCharStyle]);
      rangeStart = i;
    }
  }
  ranges.push([text.slice(rangeStart), charStyle]);
  return ranges;
}

/***/ },

/***/ 1338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Constants = __webpack_require__(1335);

Object.keys(_Constants).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Constants[key];
    }
  });
});
Object.defineProperty(exports, 'Constants', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Constants).default;
  }
});

var _getEntityRanges = __webpack_require__(1337);

Object.defineProperty(exports, 'getEntityRanges', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getEntityRanges).default;
  }
});

var _getSelectedBlocks = __webpack_require__(1316);

Object.defineProperty(exports, 'getSelectedBlocks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getSelectedBlocks).default;
  }
});

var _selectionContainsEntity = __webpack_require__(1339);

Object.defineProperty(exports, 'selectionContainsEntity', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectionContainsEntity).default;
  }
});

var _callModifierForSelectedBlocks = __webpack_require__(1336);

Object.defineProperty(exports, 'callModifierForSelectedBlocks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_callModifierForSelectedBlocks).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 1339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSelectedBlocks = __webpack_require__(1316);

var _getSelectedBlocks2 = _interopRequireDefault(_getSelectedBlocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strategy) {
  return function (editorState, selection) {
    var contentState = editorState.getCurrentContent();
    var currentSelection = selection || editorState.getSelection();
    var startKey = currentSelection.getStartKey();
    var endKey = currentSelection.getEndKey();
    var startOffset = currentSelection.getStartOffset();
    var endOffset = currentSelection.getEndOffset();

    var isSameBlock = startKey === endKey;
    var selectedBlocks = (0, _getSelectedBlocks2.default)(contentState, startKey, endKey);
    var entityFound = false;

    // We have to shift the offset to not get false positives when selecting
    // a character just before or after an entity
    var finalStartOffset = startOffset + 1;
    var finalEndOffset = endOffset - 1;

    selectedBlocks.forEach(function (block) {
      strategy(block, function (start, end) {
        if (entityFound) {
          return;
        }

        var blockKey = block.getKey();

        if (isSameBlock && (end < finalStartOffset || start > finalEndOffset)) {
          return;
        } else if (blockKey === startKey && end < finalStartOffset) {
          return;
        } else if (blockKey === endKey && start > finalEndOffset) {
          return;
        }

        entityFound = true;
      });
    });

    return entityFound;
  };
};

/***/ },

/***/ 1340:
[1449, 1319],

/***/ 1341:
[1449, 1320],

/***/ 1342:
[1449, 1321],

/***/ 1343:
[1449, 1322],

/***/ 1344:
[1449, 1323],

/***/ 1345:
[1449, 1324],

/***/ 1346:
[1449, 1325],

/***/ 1347:
[1449, 1326],

/***/ 1348:
[1449, 1327],

/***/ 1349:
[1449, 1328],

/***/ 1350:
[1449, 1329],

/***/ 1351:
[1449, 1330],

/***/ 1352:
[1449, 1331],

/***/ 1353:
[1449, 1332],

/***/ 1354:
[1449, 1333],

/***/ 1355:
[1449, 1334],

/***/ 1356:
/***/ function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parse = parse;
	exports.parseValue = parseValue;
	exports.parseConstValue = parseConstValue;
	exports.parseType = parseType;
	exports.parseNamedType = parseNamedType;

	var _source = __webpack_require__(2);

	var _error = __webpack_require__(4);

	var _lexer = __webpack_require__(89);

	var _kinds = __webpack_require__(103);

	/**
	 * Given a GraphQL source, parses it into a Document.
	 * Throws GraphQLError if a syntax error is encountered.
	 */


	/**
	 * Configuration options to control parser behavior
	 */

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	function parse(source, options) {
	  var sourceObj = source instanceof _source.Source ? source : new _source.Source(source);
	  var parser = makeParser(sourceObj, options || {});
	  return parseDocument(parser);
	}

	/**
	 * Given a string containing a GraphQL value, parse the AST for that value.
	 * Throws GraphQLError if a syntax error is encountered.
	 *
	 * This is useful within tools that operate upon GraphQL Values directly and
	 * in isolation of complete GraphQL documents.
	 */
	function parseValue(source, options) {
	  var sourceObj = source instanceof _source.Source ? source : new _source.Source(source);
	  var parser = makeParser(sourceObj, options || {});
	  return parseValueLiteral(parser, false);
	}

	/**
	 * Converts a name lex token into a name parse node.
	 */
	function parseName(parser) {
	  var token = expect(parser, _lexer.TokenKind.NAME);
	  return {
	    kind: _kinds.NAME,
	    value: token.value,
	    loc: loc(parser, token.start)
	  };
	}

	// Implements the parsing rules in the Document section.

	/**
	 * Document : Definition+
	 */
	function parseDocument(parser) {
	  var start = parser.token.start;

	  var definitions = [];
	  do {
	    definitions.push(parseDefinition(parser));
	  } while (!skip(parser, _lexer.TokenKind.EOF));

	  return {
	    kind: _kinds.DOCUMENT,
	    definitions: definitions,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * Definition :
	 *   - OperationDefinition
	 *   - FragmentDefinition
	 *   - TypeSystemDefinition
	 */
	function parseDefinition(parser) {
	  if (peek(parser, _lexer.TokenKind.BRACE_L)) {
	    return parseOperationDefinition(parser);
	  }

	  if (peek(parser, _lexer.TokenKind.NAME)) {
	    switch (parser.token.value) {
	      case 'query':
	      case 'mutation':
	      // Note: subscription is an experimental non-spec addition.
	      case 'subscription':
	        return parseOperationDefinition(parser);

	      case 'fragment':
	        return parseFragmentDefinition(parser);

	      // Note: the Type System IDL is an experimental non-spec addition.
	      case 'schema':
	      case 'scalar':
	      case 'type':
	      case 'interface':
	      case 'union':
	      case 'enum':
	      case 'input':
	      case 'extend':
	      case 'directive':
	        return parseTypeSystemDefinition(parser);
	    }
	  }

	  throw unexpected(parser);
	}

	// Implements the parsing rules in the Operations section.

	/**
	 * OperationDefinition :
	 *  - SelectionSet
	 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
	 */
	function parseOperationDefinition(parser) {
	  var start = parser.token.start;
	  if (peek(parser, _lexer.TokenKind.BRACE_L)) {
	    return {
	      kind: _kinds.OPERATION_DEFINITION,
	      operation: 'query',
	      name: null,
	      variableDefinitions: null,
	      directives: [],
	      selectionSet: parseSelectionSet(parser),
	      loc: loc(parser, start)
	    };
	  }
	  var operation = parseOperationType(parser);
	  var name = void 0;
	  if (peek(parser, _lexer.TokenKind.NAME)) {
	    name = parseName(parser);
	  }
	  return {
	    kind: _kinds.OPERATION_DEFINITION,
	    operation: operation,
	    name: name,
	    variableDefinitions: parseVariableDefinitions(parser),
	    directives: parseDirectives(parser),
	    selectionSet: parseSelectionSet(parser),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * OperationType : one of query mutation subscription
	 */
	function parseOperationType(parser) {
	  var operationToken = expect(parser, _lexer.TokenKind.NAME);
	  switch (operationToken.value) {
	    case 'query':
	      return 'query';
	    case 'mutation':
	      return 'mutation';
	    // Note: subscription is an experimental non-spec addition.
	    case 'subscription':
	      return 'subscription';
	  }

	  throw unexpected(parser, operationToken);
	}

	/**
	 * VariableDefinitions : ( VariableDefinition+ )
	 */
	function parseVariableDefinitions(parser) {
	  return peek(parser, _lexer.TokenKind.PAREN_L) ? many(parser, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
	}

	/**
	 * VariableDefinition : Variable : Type DefaultValue?
	 */
	function parseVariableDefinition(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.VARIABLE_DEFINITION,
	    variable: parseVariable(parser),
	    type: (expect(parser, _lexer.TokenKind.COLON), parseType(parser)),
	    defaultValue: skip(parser, _lexer.TokenKind.EQUALS) ? parseValueLiteral(parser, true) : null,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * Variable : $ Name
	 */
	function parseVariable(parser) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.DOLLAR);
	  return {
	    kind: _kinds.VARIABLE,
	    name: parseName(parser),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * SelectionSet : { Selection+ }
	 */
	function parseSelectionSet(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.SELECTION_SET,
	    selections: many(parser, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * Selection :
	 *   - Field
	 *   - FragmentSpread
	 *   - InlineFragment
	 */
	function parseSelection(parser) {
	  return peek(parser, _lexer.TokenKind.SPREAD) ? parseFragment(parser) : parseField(parser);
	}

	/**
	 * Field : Alias? Name Arguments? Directives? SelectionSet?
	 *
	 * Alias : Name :
	 */
	function parseField(parser) {
	  var start = parser.token.start;

	  var nameOrAlias = parseName(parser);
	  var alias = void 0;
	  var name = void 0;
	  if (skip(parser, _lexer.TokenKind.COLON)) {
	    alias = nameOrAlias;
	    name = parseName(parser);
	  } else {
	    alias = null;
	    name = nameOrAlias;
	  }

	  return {
	    kind: _kinds.FIELD,
	    alias: alias,
	    name: name,
	    arguments: parseArguments(parser),
	    directives: parseDirectives(parser),
	    selectionSet: peek(parser, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(parser) : null,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * Arguments : ( Argument+ )
	 */
	function parseArguments(parser) {
	  return peek(parser, _lexer.TokenKind.PAREN_L) ? many(parser, _lexer.TokenKind.PAREN_L, parseArgument, _lexer.TokenKind.PAREN_R) : [];
	}

	/**
	 * Argument : Name : Value
	 */
	function parseArgument(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.ARGUMENT,
	    name: parseName(parser),
	    value: (expect(parser, _lexer.TokenKind.COLON), parseValueLiteral(parser, false)),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Fragments section.

	/**
	 * Corresponds to both FragmentSpread and InlineFragment in the spec.
	 *
	 * FragmentSpread : ... FragmentName Directives?
	 *
	 * InlineFragment : ... TypeCondition? Directives? SelectionSet
	 */
	function parseFragment(parser) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.SPREAD);
	  if (peek(parser, _lexer.TokenKind.NAME) && parser.token.value !== 'on') {
	    return {
	      kind: _kinds.FRAGMENT_SPREAD,
	      name: parseFragmentName(parser),
	      directives: parseDirectives(parser),
	      loc: loc(parser, start)
	    };
	  }
	  var typeCondition = null;
	  if (parser.token.value === 'on') {
	    advance(parser);
	    typeCondition = parseNamedType(parser);
	  }
	  return {
	    kind: _kinds.INLINE_FRAGMENT,
	    typeCondition: typeCondition,
	    directives: parseDirectives(parser),
	    selectionSet: parseSelectionSet(parser),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * FragmentDefinition :
	 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
	 *
	 * TypeCondition : NamedType
	 */
	function parseFragmentDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'fragment');
	  return {
	    kind: _kinds.FRAGMENT_DEFINITION,
	    name: parseFragmentName(parser),
	    typeCondition: (expectKeyword(parser, 'on'), parseNamedType(parser)),
	    directives: parseDirectives(parser),
	    selectionSet: parseSelectionSet(parser),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * FragmentName : Name but not `on`
	 */
	function parseFragmentName(parser) {
	  if (parser.token.value === 'on') {
	    throw unexpected(parser);
	  }
	  return parseName(parser);
	}

	// Implements the parsing rules in the Values section.

	/**
	 * Value[Const] :
	 *   - [~Const] Variable
	 *   - IntValue
	 *   - FloatValue
	 *   - StringValue
	 *   - BooleanValue
	 *   - EnumValue
	 *   - ListValue[?Const]
	 *   - ObjectValue[?Const]
	 *
	 * BooleanValue : one of `true` `false`
	 *
	 * EnumValue : Name but not `true`, `false` or `null`
	 */
	function parseValueLiteral(parser, isConst) {
	  var token = parser.token;
	  switch (token.kind) {
	    case _lexer.TokenKind.BRACKET_L:
	      return parseList(parser, isConst);
	    case _lexer.TokenKind.BRACE_L:
	      return parseObject(parser, isConst);
	    case _lexer.TokenKind.INT:
	      advance(parser);
	      return {
	        kind: _kinds.INT,
	        value: token.value,
	        loc: loc(parser, token.start)
	      };
	    case _lexer.TokenKind.FLOAT:
	      advance(parser);
	      return {
	        kind: _kinds.FLOAT,
	        value: token.value,
	        loc: loc(parser, token.start)
	      };
	    case _lexer.TokenKind.STRING:
	      advance(parser);
	      return {
	        kind: _kinds.STRING,
	        value: token.value,
	        loc: loc(parser, token.start)
	      };
	    case _lexer.TokenKind.NAME:
	      if (token.value === 'true' || token.value === 'false') {
	        advance(parser);
	        return {
	          kind: _kinds.BOOLEAN,
	          value: token.value === 'true',
	          loc: loc(parser, token.start)
	        };
	      } else if (token.value !== 'null') {
	        advance(parser);
	        return {
	          kind: _kinds.ENUM,
	          value: token.value,
	          loc: loc(parser, token.start)
	        };
	      }
	      break;
	    case _lexer.TokenKind.DOLLAR:
	      if (!isConst) {
	        return parseVariable(parser);
	      }
	      break;
	  }
	  throw unexpected(parser);
	}

	function parseConstValue(parser) {
	  return parseValueLiteral(parser, true);
	}

	function parseValueValue(parser) {
	  return parseValueLiteral(parser, false);
	}

	/**
	 * ListValue[Const] :
	 *   - [ ]
	 *   - [ Value[?Const]+ ]
	 */
	function parseList(parser, isConst) {
	  var start = parser.token.start;
	  var item = isConst ? parseConstValue : parseValueValue;
	  return {
	    kind: _kinds.LIST,
	    values: any(parser, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * ObjectValue[Const] :
	 *   - { }
	 *   - { ObjectField[?Const]+ }
	 */
	function parseObject(parser, isConst) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.BRACE_L);
	  var fields = [];
	  while (!skip(parser, _lexer.TokenKind.BRACE_R)) {
	    fields.push(parseObjectField(parser, isConst));
	  }
	  return {
	    kind: _kinds.OBJECT,
	    fields: fields,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * ObjectField[Const] : Name : Value[?Const]
	 */
	function parseObjectField(parser, isConst) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.OBJECT_FIELD,
	    name: parseName(parser),
	    value: (expect(parser, _lexer.TokenKind.COLON), parseValueLiteral(parser, isConst)),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Directives section.

	/**
	 * Directives : Directive+
	 */
	function parseDirectives(parser) {
	  var directives = [];
	  while (peek(parser, _lexer.TokenKind.AT)) {
	    directives.push(parseDirective(parser));
	  }
	  return directives;
	}

	/**
	 * Directive : @ Name Arguments?
	 */
	function parseDirective(parser) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.AT);
	  return {
	    kind: _kinds.DIRECTIVE,
	    name: parseName(parser),
	    arguments: parseArguments(parser),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Types section.

	/**
	 * Type :
	 *   - NamedType
	 *   - ListType
	 *   - NonNullType
	 */
	function parseType(parser) {
	  var start = parser.token.start;
	  var type = void 0;
	  if (skip(parser, _lexer.TokenKind.BRACKET_L)) {
	    type = parseType(parser);
	    expect(parser, _lexer.TokenKind.BRACKET_R);
	    type = {
	      kind: _kinds.LIST_TYPE,
	      type: type,
	      loc: loc(parser, start)
	    };
	  } else {
	    type = parseNamedType(parser);
	  }
	  if (skip(parser, _lexer.TokenKind.BANG)) {
	    return {
	      kind: _kinds.NON_NULL_TYPE,
	      type: type,
	      loc: loc(parser, start)
	    };
	  }
	  return type;
	}

	/**
	 * NamedType : Name
	 */
	function parseNamedType(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.NAMED_TYPE,
	    name: parseName(parser),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Type Definition section.

	/**
	 * TypeSystemDefinition :
	 *   - SchemaDefinition
	 *   - TypeDefinition
	 *   - TypeExtensionDefinition
	 *   - DirectiveDefinition
	 *
	 * TypeDefinition :
	 *   - ScalarTypeDefinition
	 *   - ObjectTypeDefinition
	 *   - InterfaceTypeDefinition
	 *   - UnionTypeDefinition
	 *   - EnumTypeDefinition
	 *   - InputObjectTypeDefinition
	 */
	function parseTypeSystemDefinition(parser) {
	  if (peek(parser, _lexer.TokenKind.NAME)) {
	    switch (parser.token.value) {
	      case 'schema':
	        return parseSchemaDefinition(parser);
	      case 'scalar':
	        return parseScalarTypeDefinition(parser);
	      case 'type':
	        return parseObjectTypeDefinition(parser);
	      case 'interface':
	        return parseInterfaceTypeDefinition(parser);
	      case 'union':
	        return parseUnionTypeDefinition(parser);
	      case 'enum':
	        return parseEnumTypeDefinition(parser);
	      case 'input':
	        return parseInputObjectTypeDefinition(parser);
	      case 'extend':
	        return parseTypeExtensionDefinition(parser);
	      case 'directive':
	        return parseDirectiveDefinition(parser);
	    }
	  }

	  throw unexpected(parser);
	}

	/**
	 * SchemaDefinition : schema Directives? { OperationTypeDefinition+ }
	 *
	 * OperationTypeDefinition : OperationType : NamedType
	 */
	function parseSchemaDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'schema');
	  var directives = parseDirectives(parser);
	  var operationTypes = many(parser, _lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.SCHEMA_DEFINITION,
	    directives: directives,
	    operationTypes: operationTypes,
	    loc: loc(parser, start)
	  };
	}

	function parseOperationTypeDefinition(parser) {
	  var start = parser.token.start;
	  var operation = parseOperationType(parser);
	  expect(parser, _lexer.TokenKind.COLON);
	  var type = parseNamedType(parser);
	  return {
	    kind: _kinds.OPERATION_TYPE_DEFINITION,
	    operation: operation,
	    type: type,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * ScalarTypeDefinition : scalar Name Directives?
	 */
	function parseScalarTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'scalar');
	  var name = parseName(parser);
	  var directives = parseDirectives(parser);
	  return {
	    kind: _kinds.SCALAR_TYPE_DEFINITION,
	    name: name,
	    directives: directives,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * ObjectTypeDefinition :
	 *   - type Name ImplementsInterfaces? Directives? { FieldDefinition+ }
	 */
	function parseObjectTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'type');
	  var name = parseName(parser);
	  var interfaces = parseImplementsInterfaces(parser);
	  var directives = parseDirectives(parser);
	  var fields = any(parser, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.OBJECT_TYPE_DEFINITION,
	    name: name,
	    interfaces: interfaces,
	    directives: directives,
	    fields: fields,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * ImplementsInterfaces : implements NamedType+
	 */
	function parseImplementsInterfaces(parser) {
	  var types = [];
	  if (parser.token.value === 'implements') {
	    advance(parser);
	    do {
	      types.push(parseNamedType(parser));
	    } while (peek(parser, _lexer.TokenKind.NAME));
	  }
	  return types;
	}

	/**
	 * FieldDefinition : Name ArgumentsDefinition? : Type Directives?
	 */
	function parseFieldDefinition(parser) {
	  var start = parser.token.start;
	  var name = parseName(parser);
	  var args = parseArgumentDefs(parser);
	  expect(parser, _lexer.TokenKind.COLON);
	  var type = parseType(parser);
	  var directives = parseDirectives(parser);
	  return {
	    kind: _kinds.FIELD_DEFINITION,
	    name: name,
	    arguments: args,
	    type: type,
	    directives: directives,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * ArgumentsDefinition : ( InputValueDefinition+ )
	 */
	function parseArgumentDefs(parser) {
	  if (!peek(parser, _lexer.TokenKind.PAREN_L)) {
	    return [];
	  }
	  return many(parser, _lexer.TokenKind.PAREN_L, parseInputValueDef, _lexer.TokenKind.PAREN_R);
	}

	/**
	 * InputValueDefinition : Name : Type DefaultValue? Directives?
	 */
	function parseInputValueDef(parser) {
	  var start = parser.token.start;
	  var name = parseName(parser);
	  expect(parser, _lexer.TokenKind.COLON);
	  var type = parseType(parser);
	  var defaultValue = null;
	  if (skip(parser, _lexer.TokenKind.EQUALS)) {
	    defaultValue = parseConstValue(parser);
	  }
	  var directives = parseDirectives(parser);
	  return {
	    kind: _kinds.INPUT_VALUE_DEFINITION,
	    name: name,
	    type: type,
	    defaultValue: defaultValue,
	    directives: directives,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * InterfaceTypeDefinition : interface Name Directives? { FieldDefinition+ }
	 */
	function parseInterfaceTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'interface');
	  var name = parseName(parser);
	  var directives = parseDirectives(parser);
	  var fields = any(parser, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.INTERFACE_TYPE_DEFINITION,
	    name: name,
	    directives: directives,
	    fields: fields,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * UnionTypeDefinition : union Name Directives? = UnionMembers
	 */
	function parseUnionTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'union');
	  var name = parseName(parser);
	  var directives = parseDirectives(parser);
	  expect(parser, _lexer.TokenKind.EQUALS);
	  var types = parseUnionMembers(parser);
	  return {
	    kind: _kinds.UNION_TYPE_DEFINITION,
	    name: name,
	    directives: directives,
	    types: types,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * UnionMembers :
	 *   - NamedType
	 *   - UnionMembers | NamedType
	 */
	function parseUnionMembers(parser) {
	  var members = [];
	  do {
	    members.push(parseNamedType(parser));
	  } while (skip(parser, _lexer.TokenKind.PIPE));
	  return members;
	}

	/**
	 * EnumTypeDefinition : enum Name Directives? { EnumValueDefinition+ }
	 */
	function parseEnumTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'enum');
	  var name = parseName(parser);
	  var directives = parseDirectives(parser);
	  var values = many(parser, _lexer.TokenKind.BRACE_L, parseEnumValueDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.ENUM_TYPE_DEFINITION,
	    name: name,
	    directives: directives,
	    values: values,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * EnumValueDefinition : EnumValue Directives?
	 *
	 * EnumValue : Name
	 */
	function parseEnumValueDefinition(parser) {
	  var start = parser.token.start;
	  var name = parseName(parser);
	  var directives = parseDirectives(parser);
	  return {
	    kind: _kinds.ENUM_VALUE_DEFINITION,
	    name: name,
	    directives: directives,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * InputObjectTypeDefinition : input Name Directives? { InputValueDefinition+ }
	 */
	function parseInputObjectTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'input');
	  var name = parseName(parser);
	  var directives = parseDirectives(parser);
	  var fields = any(parser, _lexer.TokenKind.BRACE_L, parseInputValueDef, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.INPUT_OBJECT_TYPE_DEFINITION,
	    name: name,
	    directives: directives,
	    fields: fields,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * TypeExtensionDefinition : extend ObjectTypeDefinition
	 */
	function parseTypeExtensionDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'extend');
	  var definition = parseObjectTypeDefinition(parser);
	  return {
	    kind: _kinds.TYPE_EXTENSION_DEFINITION,
	    definition: definition,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * DirectiveDefinition :
	 *   - directive @ Name ArgumentsDefinition? on DirectiveLocations
	 */
	function parseDirectiveDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'directive');
	  expect(parser, _lexer.TokenKind.AT);
	  var name = parseName(parser);
	  var args = parseArgumentDefs(parser);
	  expectKeyword(parser, 'on');
	  var locations = parseDirectiveLocations(parser);
	  return {
	    kind: _kinds.DIRECTIVE_DEFINITION,
	    name: name,
	    arguments: args,
	    locations: locations,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * DirectiveLocations :
	 *   - Name
	 *   - DirectiveLocations | Name
	 */
	function parseDirectiveLocations(parser) {
	  var locations = [];
	  do {
	    locations.push(parseName(parser));
	  } while (skip(parser, _lexer.TokenKind.PIPE));
	  return locations;
	}

	// Core parsing utility functions

	/**
	 * Returns the parser object that is used to store state throughout the
	 * process of parsing.
	 */
	function makeParser(source, options) {
	  var _lexToken = (0, _lexer.lex)(source);
	  return {
	    _lexToken: _lexToken,
	    source: source,
	    options: options,
	    prevEnd: 0,
	    token: _lexToken()
	  };
	}

	/**
	 * Returns a location object, used to identify the place in
	 * the source that created a given parsed object.
	 */
	function loc(parser, start) {
	  if (parser.options.noLocation) {
	    return null;
	  }
	  if (parser.options.noSource) {
	    return { start: start, end: parser.prevEnd };
	  }
	  return { start: start, end: parser.prevEnd, source: parser.source };
	}

	/**
	 * Moves the internal parser object to the next lexed token.
	 */
	function advance(parser) {
	  var prevEnd = parser.token.end;
	  parser.prevEnd = prevEnd;
	  parser.token = parser._lexToken(prevEnd);
	}

	/**
	 * Determines if the next token is of a given kind
	 */
	function peek(parser, kind) {
	  return parser.token.kind === kind;
	}

	/**
	 * If the next token is of the given kind, return true after advancing
	 * the parser. Otherwise, do not change the parser state and return false.
	 */
	function skip(parser, kind) {
	  var match = parser.token.kind === kind;
	  if (match) {
	    advance(parser);
	  }
	  return match;
	}

	/**
	 * If the next token is of the given kind, return that token after advancing
	 * the parser. Otherwise, do not change the parser state and throw an error.
	 */
	function expect(parser, kind) {
	  var token = parser.token;
	  if (token.kind === kind) {
	    advance(parser);
	    return token;
	  }
	  throw (0, _error.syntaxError)(parser.source, token.start, 'Expected ' + (0, _lexer.getTokenKindDesc)(kind) + ', found ' + (0, _lexer.getTokenDesc)(token));
	}

	/**
	 * If the next token is a keyword with the given value, return that token after
	 * advancing the parser. Otherwise, do not change the parser state and return
	 * false.
	 */
	function expectKeyword(parser, value) {
	  var token = parser.token;
	  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
	    advance(parser);
	    return token;
	  }
	  throw (0, _error.syntaxError)(parser.source, token.start, 'Expected "' + value + '", found ' + (0, _lexer.getTokenDesc)(token));
	}

	/**
	 * Helper function for creating an error when an unexpected lexed token
	 * is encountered.
	 */
	function unexpected(parser, atToken) {
	  var token = atToken || parser.token;
	  return (0, _error.syntaxError)(parser.source, token.start, 'Unexpected ' + (0, _lexer.getTokenDesc)(token));
	}

	/**
	 * Returns a possibly empty list of parse nodes, determined by
	 * the parseFn. This list begins with a lex token of openKind
	 * and ends with a lex token of closeKind. Advances the parser
	 * to the next lex token after the closing token.
	 */
	function any(parser, openKind, parseFn, closeKind) {
	  expect(parser, openKind);
	  var nodes = [];
	  while (!skip(parser, closeKind)) {
	    nodes.push(parseFn(parser));
	  }
	  return nodes;
	}

	/**
	 * Returns a non-empty list of parse nodes, determined by
	 * the parseFn. This list begins with a lex token of openKind
	 * and ends with a lex token of closeKind. Advances the parser
	 * to the next lex token after the closing token.
	 */
	function many(parser, openKind, parseFn, closeKind) {
	  expect(parser, openKind);
	  var nodes = [parseFn(parser)];
	  while (!skip(parser, closeKind)) {
	    nodes.push(parseFn(parser));
	  }
	  return nodes;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Source = undefined;

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * A representation of source input to GraphQL. The name is optional,
	 * but is mostly useful for clients who store GraphQL documents in
	 * source files; for example, if the GraphQL input is in a file Foo.graphql,
	 * it might be useful for name to be "Foo.graphql".
	 */

	var Source = exports.Source = function Source(body, name) {
	  (0, _classCallCheck3.default)(this, Source);

	  this.body = body;
	  this.name = name || 'GraphQL';
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GraphQLError = __webpack_require__(5);

	Object.defineProperty(exports, 'GraphQLError', {
	  enumerable: true,
	  get: function get() {
	    return _GraphQLError.GraphQLError;
	  }
	});

	var _syntaxError = __webpack_require__(104);

	Object.defineProperty(exports, 'syntaxError', {
	  enumerable: true,
	  get: function get() {
	    return _syntaxError.syntaxError;
	  }
	});

	var _locatedError = __webpack_require__(105);

	Object.defineProperty(exports, 'locatedError', {
	  enumerable: true,
	  get: function get() {
	    return _locatedError.locatedError;
	  }
	});

	var _formatError = __webpack_require__(106);

	Object.defineProperty(exports, 'formatError', {
	  enumerable: true,
	  get: function get() {
	    return _formatError.formatError;
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GraphQLError = undefined;

	var _getPrototypeOf = __webpack_require__(6);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _language = __webpack_require__(87);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GraphQLError = exports.GraphQLError = function (_Error) {
	  (0, _inherits3.default)(GraphQLError, _Error);

	  function GraphQLError(message,
	  // A flow bug keeps us from declaring nodes as an array of Node
	  nodes, /* Node */stack, source, positions) {
	    (0, _classCallCheck3.default)(this, GraphQLError);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GraphQLError).call(this, message));

	    _this.message = message;

	    Object.defineProperty(_this, 'stack', { value: stack || message });
	    Object.defineProperty(_this, 'nodes', { value: nodes });

	    // Note: flow does not yet know about Object.defineProperty with `get`.
	    Object.defineProperty(_this, 'source', {
	      get: function get() {
	        if (source) {
	          return source;
	        }
	        if (nodes && nodes.length > 0) {
	          var node = nodes[0];
	          return node && node.loc && node.loc.source;
	        }
	      }
	    });

	    Object.defineProperty(_this, 'positions', {
	      get: function get() {
	        if (positions) {
	          return positions;
	        }
	        if (nodes) {
	          var nodePositions = nodes.map(function (node) {
	            return node.loc && node.loc.start;
	          });
	          if (nodePositions.some(function (p) {
	            return p;
	          })) {
	            return nodePositions;
	          }
	        }
	      }
	    });

	    Object.defineProperty(_this, 'locations', {
	      get: function get() {
	        var _this2 = this;

	        if (this.positions && this.source) {
	          return this.positions.map(function (pos) {
	            return (0, _language.getLocation)(_this2.source, pos);
	          });
	        }
	      }
	    });
	    return _this;
	  }

	  return GraphQLError;
	}(Error);
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	module.exports = __webpack_require__(19).Object.getPrototypeOf;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(9)
	  , $getPrototypeOf = __webpack_require__(11);

	__webpack_require__(17)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(10);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(12)
	  , toObject    = __webpack_require__(9)
	  , IE_PROTO    = __webpack_require__(13)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(14)('keys')
	  , uid    = __webpack_require__(16);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(18)
	  , core    = __webpack_require__(19)
	  , fails   = __webpack_require__(28);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(19)
	  , ctx       = __webpack_require__(20)
	  , hide      = __webpack_require__(22)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 19 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(23)
	  , createDesc = __webpack_require__(31);
	module.exports = __webpack_require__(27) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(24)
	  , IE8_DOM_DEFINE = __webpack_require__(26)
	  , toPrimitive    = __webpack_require__(30)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(27) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(27) && !__webpack_require__(28)(function(){
	  return Object.defineProperty(__webpack_require__(29)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(28)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25)
	  , document = __webpack_require__(15).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(25);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(33);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(34);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(63);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(58);
	module.exports = __webpack_require__(62).f('iterator');

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(37)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(39)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(10);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(40)
	  , $export        = __webpack_require__(18)
	  , redefine       = __webpack_require__(41)
	  , hide           = __webpack_require__(22)
	  , has            = __webpack_require__(12)
	  , Iterators      = __webpack_require__(42)
	  , $iterCreate    = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(56)
	  , getPrototypeOf = __webpack_require__(11)
	  , ITERATOR       = __webpack_require__(57)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(44)
	  , descriptor     = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(56)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(22)(IteratorPrototype, __webpack_require__(57)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(24)
	  , dPs         = __webpack_require__(45)
	  , enumBugKeys = __webpack_require__(54)
	  , IE_PROTO    = __webpack_require__(13)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(29)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(55).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(23)
	  , anObject = __webpack_require__(24)
	  , getKeys  = __webpack_require__(46);

	module.exports = __webpack_require__(27) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(54);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(12)
	  , toIObject    = __webpack_require__(48)
	  , arrayIndexOf = __webpack_require__(51)(false)
	  , IE_PROTO     = __webpack_require__(13)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(49)
	  , defined = __webpack_require__(10);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(50);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(48)
	  , toLength  = __webpack_require__(52)
	  , toIndex   = __webpack_require__(53);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15).document && document.documentElement;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(23).f
	  , has = __webpack_require__(12)
	  , TAG = __webpack_require__(57)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(14)('wks')
	  , uid        = __webpack_require__(16)
	  , Symbol     = __webpack_require__(15).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var global        = __webpack_require__(15)
	  , hide          = __webpack_require__(22)
	  , Iterators     = __webpack_require__(42)
	  , TO_STRING_TAG = __webpack_require__(57)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(60)
	  , step             = __webpack_require__(61)
	  , Iterators        = __webpack_require__(42)
	  , toIObject        = __webpack_require__(48);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(39)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(57);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	module.exports = __webpack_require__(19).Symbol;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(15)
	  , has            = __webpack_require__(12)
	  , DESCRIPTORS    = __webpack_require__(27)
	  , $export        = __webpack_require__(18)
	  , redefine       = __webpack_require__(41)
	  , META           = __webpack_require__(66).KEY
	  , $fails         = __webpack_require__(28)
	  , shared         = __webpack_require__(14)
	  , setToStringTag = __webpack_require__(56)
	  , uid            = __webpack_require__(16)
	  , wks            = __webpack_require__(57)
	  , wksExt         = __webpack_require__(62)
	  , wksDefine      = __webpack_require__(67)
	  , keyOf          = __webpack_require__(68)
	  , enumKeys       = __webpack_require__(69)
	  , isArray        = __webpack_require__(72)
	  , anObject       = __webpack_require__(24)
	  , toIObject      = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(30)
	  , createDesc     = __webpack_require__(31)
	  , _create        = __webpack_require__(44)
	  , gOPNExt        = __webpack_require__(73)
	  , $GOPD          = __webpack_require__(75)
	  , $DP            = __webpack_require__(23)
	  , $keys          = __webpack_require__(46)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(74).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(71).f  = $propertyIsEnumerable;
	  __webpack_require__(70).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(40)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(22)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(16)('meta')
	  , isObject = __webpack_require__(25)
	  , has      = __webpack_require__(12)
	  , setDesc  = __webpack_require__(23).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(28)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(15)
	  , core           = __webpack_require__(19)
	  , LIBRARY        = __webpack_require__(40)
	  , wksExt         = __webpack_require__(62)
	  , defineProperty = __webpack_require__(23).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(46)
	  , toIObject = __webpack_require__(48);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(46)
	  , gOPS    = __webpack_require__(70)
	  , pIE     = __webpack_require__(71);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 71 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(50);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(48)
	  , gOPN      = __webpack_require__(74).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(47)
	  , hiddenKeys = __webpack_require__(54).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(71)
	  , createDesc     = __webpack_require__(31)
	  , toIObject      = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(30)
	  , has            = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(26)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(27) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67)('asyncIterator');

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67)('observable');

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(80);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(84);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(33);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(82);
	module.exports = __webpack_require__(19).Object.setPrototypeOf;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(18);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(83).set});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(25)
	  , anObject = __webpack_require__(24);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(75).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	var $Object = __webpack_require__(19).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(18)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(44)});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BREAK = exports.visitWithTypeInfo = exports.visitInParallel = exports.visit = exports.Source = exports.print = exports.parseValue = exports.parse = exports.lex = exports.Kind = exports.getLocation = undefined;

	var _location = __webpack_require__(88);

	Object.defineProperty(exports, 'getLocation', {
	  enumerable: true,
	  get: function get() {
	    return _location.getLocation;
	  }
	});

	var _lexer = __webpack_require__(89);

	Object.defineProperty(exports, 'lex', {
	  enumerable: true,
	  get: function get() {
	    return _lexer.lex;
	  }
	});

	var _parser = __webpack_require__(1);

	Object.defineProperty(exports, 'parse', {
	  enumerable: true,
	  get: function get() {
	    return _parser.parse;
	  }
	});
	Object.defineProperty(exports, 'parseValue', {
	  enumerable: true,
	  get: function get() {
	    return _parser.parseValue;
	  }
	});

	var _printer = __webpack_require__(92);

	Object.defineProperty(exports, 'print', {
	  enumerable: true,
	  get: function get() {
	    return _printer.print;
	  }
	});

	var _source = __webpack_require__(2);

	Object.defineProperty(exports, 'Source', {
	  enumerable: true,
	  get: function get() {
	    return _source.Source;
	  }
	});

	var _visitor = __webpack_require__(93);

	Object.defineProperty(exports, 'visit', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.visit;
	  }
	});
	Object.defineProperty(exports, 'visitInParallel', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.visitInParallel;
	  }
	});
	Object.defineProperty(exports, 'visitWithTypeInfo', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.visitWithTypeInfo;
	  }
	});
	Object.defineProperty(exports, 'BREAK', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.BREAK;
	  }
	});

	var _kinds = __webpack_require__(103);

	var Kind = _interopRequireWildcard(_kinds);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.Kind = Kind;

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLocation = getLocation;


	/**
	 * Takes a Source and a UTF-8 character offset, and returns the corresponding
	 * line and column as a SourceLocation.
	 */

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	function getLocation(source, position) {
	  var lineRegexp = /\r\n|[\n\r]/g;
	  var line = 1;
	  var column = position + 1;
	  var match = void 0;
	  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
	    line += 1;
	    column = position + 1 - (match.index + match[0].length);
	  }
	  return { line: line, column: column };
	}

	/**
	 * Represents a location in a Source.
	 */

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TokenKind = undefined;

	var _stringify = __webpack_require__(90);

	var _stringify2 = _interopRequireDefault(_stringify);

	exports.lex = lex;
	exports.getTokenDesc = getTokenDesc;
	exports.getTokenKindDesc = getTokenKindDesc;

	var _error = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Given a Source object, this returns a Lexer for that source.
	 * A Lexer is a function that acts like a generator in that every time
	 * it is called, it returns the next token in the Source. Assuming the
	 * source lexes, the final Token emitted by the lexer will be of kind
	 * EOF, after which the lexer will repeatedly return EOF tokens whenever
	 * called.
	 *
	 * The argument to the lexer function is optional, and can be used to
	 * rewind or fast forward the lexer to a new position in the source.
	 */


	/**
	 * A representation of a lexed Token. Value only appears for non-punctuation
	 * tokens: NAME, INT, FLOAT, and STRING.
	 */
	/*  /
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	function lex(source) {
	  var prevPosition = 0;
	  return function nextToken(resetPosition) {
	    var token = readToken(source, resetPosition === undefined ? prevPosition : resetPosition);
	    prevPosition = token.end;
	    return token;
	  };
	}

	/**
	 * An enum describing the different kinds of tokens that the lexer emits.
	 */
	var TokenKind = exports.TokenKind = {
	  EOF: 1,
	  BANG: 2,
	  DOLLAR: 3,
	  PAREN_L: 4,
	  PAREN_R: 5,
	  SPREAD: 6,
	  COLON: 7,
	  EQUALS: 8,
	  AT: 9,
	  BRACKET_L: 10,
	  BRACKET_R: 11,
	  BRACE_L: 12,
	  PIPE: 13,
	  BRACE_R: 14,
	  NAME: 15,
	  INT: 16,
	  FLOAT: 17,
	  STRING: 18
	};

	/**
	 * A helper function to describe a token as a string for debugging
	 */
	function getTokenDesc(token) {
	  return token.value ? getTokenKindDesc(token.kind) + ' "' + token.value + '"' : getTokenKindDesc(token.kind);
	}

	/**
	 * A helper function to describe a token kind as a string for debugging
	 */
	function getTokenKindDesc(kind) {
	  return tokenDescription[kind];
	}

	var tokenDescription = {};
	tokenDescription[TokenKind.EOF] = 'EOF';
	tokenDescription[TokenKind.BANG] = '!';
	tokenDescription[TokenKind.DOLLAR] = '$';
	tokenDescription[TokenKind.PAREN_L] = '(';
	tokenDescription[TokenKind.PAREN_R] = ')';
	tokenDescription[TokenKind.SPREAD] = '...';
	tokenDescription[TokenKind.COLON] = ':';
	tokenDescription[TokenKind.EQUALS] = '=';
	tokenDescription[TokenKind.AT] = '@';
	tokenDescription[TokenKind.BRACKET_L] = '[';
	tokenDescription[TokenKind.BRACKET_R] = ']';
	tokenDescription[TokenKind.BRACE_L] = '{';
	tokenDescription[TokenKind.PIPE] = '|';
	tokenDescription[TokenKind.BRACE_R] = '}';
	tokenDescription[TokenKind.NAME] = 'Name';
	tokenDescription[TokenKind.INT] = 'Int';
	tokenDescription[TokenKind.FLOAT] = 'Float';
	tokenDescription[TokenKind.STRING] = 'String';

	var charCodeAt = String.prototype.charCodeAt;
	var slice = String.prototype.slice;

	/**
	 * Helper function for constructing the Token object.
	 */
	function makeToken(kind, start, end, value) {
	  return { kind: kind, start: start, end: end, value: value };
	}

	function printCharCode(code) {
	  return(
	    // NaN/undefined represents access beyond the end of the file.
	    isNaN(code) ? '<EOF>' :
	    // Trust JSON for ASCII.
	    code < 0x007F ? (0, _stringify2.default)(String.fromCharCode(code)) :
	    // Otherwise print the escaped form.
	    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
	  );
	}

	/**
	 * Gets the next token from the source starting at the given position.
	 *
	 * This skips over whitespace and comments until it finds the next lexable
	 * token, then lexes punctuators immediately or calls the appropriate helper
	 * function for more complicated tokens.
	 */
	function readToken(source, fromPosition) {
	  var body = source.body;
	  var bodyLength = body.length;

	  var position = positionAfterWhitespace(body, fromPosition);

	  if (position >= bodyLength) {
	    return makeToken(TokenKind.EOF, position, position);
	  }

	  var code = charCodeAt.call(body, position);

	  // SourceCharacter
	  if (code < 0x0020 && code !== 0x0009 && code !== 0x000A && code !== 0x000D) {
	    throw (0, _error.syntaxError)(source, position, 'Invalid character ' + printCharCode(code) + '.');
	  }

	  switch (code) {
	    // !
	    case 33:
	      return makeToken(TokenKind.BANG, position, position + 1);
	    // $
	    case 36:
	      return makeToken(TokenKind.DOLLAR, position, position + 1);
	    // (
	    case 40:
	      return makeToken(TokenKind.PAREN_L, position, position + 1);
	    // )
	    case 41:
	      return makeToken(TokenKind.PAREN_R, position, position + 1);
	    // .
	    case 46:
	      if (charCodeAt.call(body, position + 1) === 46 && charCodeAt.call(body, position + 2) === 46) {
	        return makeToken(TokenKind.SPREAD, position, position + 3);
	      }
	      break;
	    // :
	    case 58:
	      return makeToken(TokenKind.COLON, position, position + 1);
	    // =
	    case 61:
	      return makeToken(TokenKind.EQUALS, position, position + 1);
	    // @
	    case 64:
	      return makeToken(TokenKind.AT, position, position + 1);
	    // [
	    case 91:
	      return makeToken(TokenKind.BRACKET_L, position, position + 1);
	    // ]
	    case 93:
	      return makeToken(TokenKind.BRACKET_R, position, position + 1);
	    // {
	    case 123:
	      return makeToken(TokenKind.BRACE_L, position, position + 1);
	    // |
	    case 124:
	      return makeToken(TokenKind.PIPE, position, position + 1);
	    // }
	    case 125:
	      return makeToken(TokenKind.BRACE_R, position, position + 1);
	    // A-Z
	    case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:
	    case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:
	    case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:
	    case 89:case 90:
	    // _
	    case 95:
	    // a-z
	    case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:
	    case 105:case 106:case 107:case 108:case 109:case 110:case 111:
	    case 112:case 113:case 114:case 115:case 116:case 117:case 118:
	    case 119:case 120:case 121:case 122:
	      return readName(source, position);
	    // -
	    case 45:
	    // 0-9
	    case 48:case 49:case 50:case 51:case 52:
	    case 53:case 54:case 55:case 56:case 57:
	      return readNumber(source, position, code);
	    // "
	    case 34:
	      return readString(source, position);
	  }

	  throw (0, _error.syntaxError)(source, position, 'Unexpected character ' + printCharCode(code) + '.');
	}

	/**
	 * Reads from body starting at startPosition until it finds a non-whitespace
	 * or commented character, then returns the position of that character for
	 * lexing.
	 */
	function positionAfterWhitespace(body, startPosition) {
	  var bodyLength = body.length;
	  var position = startPosition;
	  while (position < bodyLength) {
	    var code = charCodeAt.call(body, position);
	    // Skip Ignored
	    if (
	    // BOM
	    code === 0xFEFF ||
	    // White Space
	    code === 0x0009 || // tab
	    code === 0x0020 || // space
	    // Line Terminator
	    code === 0x000A || // new line
	    code === 0x000D || // carriage return
	    // Comma
	    code === 0x002C) {
	      ++position;
	      // Skip comments
	    } else if (code === 35) {
	        // #
	        ++position;
	        while (position < bodyLength && (code = charCodeAt.call(body, position)) !== null && (
	        // SourceCharacter but not LineTerminator
	        code > 0x001F || code === 0x0009) && code !== 0x000A && code !== 0x000D) {
	          ++position;
	        }
	      } else {
	        break;
	      }
	  }
	  return position;
	}

	/**
	 * Reads a number token from the source file, either a float
	 * or an int depending on whether a decimal point appears.
	 *
	 * Int:   -?(0|[1-9][0-9]*)
	 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
	 */
	function readNumber(source, start, firstCode) {
	  var body = source.body;
	  var code = firstCode;
	  var position = start;
	  var isFloat = false;

	  if (code === 45) {
	    // -
	    code = charCodeAt.call(body, ++position);
	  }

	  if (code === 48) {
	    // 0
	    code = charCodeAt.call(body, ++position);
	    if (code >= 48 && code <= 57) {
	      throw (0, _error.syntaxError)(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
	    }
	  } else {
	    position = readDigits(source, position, code);
	    code = charCodeAt.call(body, position);
	  }

	  if (code === 46) {
	    // .
	    isFloat = true;

	    code = charCodeAt.call(body, ++position);
	    position = readDigits(source, position, code);
	    code = charCodeAt.call(body, position);
	  }

	  if (code === 69 || code === 101) {
	    // E e
	    isFloat = true;

	    code = charCodeAt.call(body, ++position);
	    if (code === 43 || code === 45) {
	      // + -
	      code = charCodeAt.call(body, ++position);
	    }
	    position = readDigits(source, position, code);
	  }

	  return makeToken(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, slice.call(body, start, position));
	}

	/**
	 * Returns the new position in the source after reading digits.
	 */
	function readDigits(source, start, firstCode) {
	  var body = source.body;
	  var position = start;
	  var code = firstCode;
	  if (code >= 48 && code <= 57) {
	    // 0 - 9
	    do {
	      code = charCodeAt.call(body, ++position);
	    } while (code >= 48 && code <= 57); // 0 - 9
	    return position;
	  }
	  throw (0, _error.syntaxError)(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
	}

	/**
	 * Reads a string token from the source file.
	 *
	 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
	 */
	function readString(source, start) {
	  var body = source.body;
	  var position = start + 1;
	  var chunkStart = position;
	  var code = 0;
	  var value = '';

	  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
	  // not LineTerminator
	  code !== 0x000A && code !== 0x000D &&
	  // not Quote (")
	  code !== 34) {
	    // SourceCharacter
	    if (code < 0x0020 && code !== 0x0009) {
	      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
	    }

	    ++position;
	    if (code === 92) {
	      // \
	      value += slice.call(body, chunkStart, position - 1);
	      code = charCodeAt.call(body, position);
	      switch (code) {
	        case 34:
	          value += '"';break;
	        case 47:
	          value += '\/';break;
	        case 92:
	          value += '\\';break;
	        case 98:
	          value += '\b';break;
	        case 102:
	          value += '\f';break;
	        case 110:
	          value += '\n';break;
	        case 114:
	          value += '\r';break;
	        case 116:
	          value += '\t';break;
	        case 117:
	          // u
	          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
	          if (charCode < 0) {
	            throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
	          }
	          value += String.fromCharCode(charCode);
	          position += 4;
	          break;
	        default:
	          throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
	      }
	      ++position;
	      chunkStart = position;
	    }
	  }

	  if (code !== 34) {
	    // quote (")
	    throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
	  }

	  value += slice.call(body, chunkStart, position);
	  return makeToken(TokenKind.STRING, start, position + 1, value);
	}

	/**
	 * Converts four hexidecimal chars to the integer that the
	 * string represents. For example, uniCharCode('0','0','0','f')
	 * will return 15, and uniCharCode('0','0','f','f') returns 255.
	 *
	 * Returns a negative number on error, if a char was invalid.
	 *
	 * This is implemented by noting that char2hex() returns -1 on error,
	 * which means the result of ORing the char2hex() will also be negative.
	 */
	function uniCharCode(a, b, c, d) {
	  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
	}

	/**
	 * Converts a hex character to its integer value.
	 * '0' becomes 0, '9' becomes 9
	 * 'A' becomes 10, 'F' becomes 15
	 * 'a' becomes 10, 'f' becomes 15
	 *
	 * Returns -1 on error.
	 */
	function char2hex(a) {
	  return a >= 48 && a <= 57 ? a - 48 : // 0-9
	  a >= 65 && a <= 70 ? a - 55 : // A-F
	  a >= 97 && a <= 102 ? a - 87 : // a-f
	  -1;
	}

	/**
	 * Reads an alphanumeric + underscore name from the source.
	 *
	 * [_A-Za-z][_0-9A-Za-z]*
	 */
	function readName(source, position) {
	  var body = source.body;
	  var bodyLength = body.length;
	  var end = position + 1;
	  var code = 0;
	  while (end !== bodyLength && (code = charCodeAt.call(body, end)) !== null && (code === 95 || // _
	  code >= 48 && code <= 57 || // 0-9
	  code >= 65 && code <= 90 || // A-Z
	  code >= 97 && code <= 122 // a-z
	  )) {
	    ++end;
	  }
	  return makeToken(TokenKind.NAME, position, end, slice.call(body, position, end));
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(19)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(90);

	var _stringify2 = _interopRequireDefault(_stringify);

	exports.print = print;

	var _visitor = __webpack_require__(93);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Converts an AST into a string, using one set of reasonable
	 * formatting rules.
	 */
	function print(ast) {
	  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
	} /**
	   *  Copyright (c) 2015, Facebook, Inc.
	   *  All rights reserved.
	   *
	   *  This source code is licensed under the BSD-style license found in the
	   *  LICENSE file in the root directory of this source tree. An additional grant
	   *  of patent rights can be found in the PATENTS file in the same directory.
	   */

	var printDocASTReducer = {
	  Name: function Name(node) {
	    return node.value;
	  },
	  Variable: function Variable(node) {
	    return '$' + node.name;
	  },

	  // Document

	  Document: function Document(node) {
	    return join(node.definitions, '\n\n') + '\n';
	  },

	  OperationDefinition: function OperationDefinition(node) {
	    var op = node.operation;
	    var name = node.name;
	    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
	    var directives = join(node.directives, ' ');
	    var selectionSet = node.selectionSet;
	    // Anonymous queries with no directives or variable definitions can use
	    // the query short form.
	    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
	  },


	  VariableDefinition: function VariableDefinition(_ref) {
	    var variable = _ref.variable;
	    var type = _ref.type;
	    var defaultValue = _ref.defaultValue;
	    return variable + ': ' + type + wrap(' = ', defaultValue);
	  },

	  SelectionSet: function SelectionSet(_ref2) {
	    var selections = _ref2.selections;
	    return block(selections);
	  },

	  Field: function Field(_ref3) {
	    var alias = _ref3.alias;
	    var name = _ref3.name;
	    var args = _ref3.arguments;
	    var directives = _ref3.directives;
	    var selectionSet = _ref3.selectionSet;
	    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
	  },

	  Argument: function Argument(_ref4) {
	    var name = _ref4.name;
	    var value = _ref4.value;
	    return name + ': ' + value;
	  },

	  // Fragments

	  FragmentSpread: function FragmentSpread(_ref5) {
	    var name = _ref5.name;
	    var directives = _ref5.directives;
	    return '...' + name + wrap(' ', join(directives, ' '));
	  },

	  InlineFragment: function InlineFragment(_ref6) {
	    var typeCondition = _ref6.typeCondition;
	    var directives = _ref6.directives;
	    var selectionSet = _ref6.selectionSet;
	    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
	  },

	  FragmentDefinition: function FragmentDefinition(_ref7) {
	    var name = _ref7.name;
	    var typeCondition = _ref7.typeCondition;
	    var directives = _ref7.directives;
	    var selectionSet = _ref7.selectionSet;
	    return 'fragment ' + name + ' on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ') + selectionSet;
	  },

	  // Value

	  IntValue: function IntValue(_ref8) {
	    var value = _ref8.value;
	    return value;
	  },
	  FloatValue: function FloatValue(_ref9) {
	    var value = _ref9.value;
	    return value;
	  },
	  StringValue: function StringValue(_ref10) {
	    var value = _ref10.value;
	    return (0, _stringify2.default)(value);
	  },
	  BooleanValue: function BooleanValue(_ref11) {
	    var value = _ref11.value;
	    return (0, _stringify2.default)(value);
	  },
	  EnumValue: function EnumValue(_ref12) {
	    var value = _ref12.value;
	    return value;
	  },
	  ListValue: function ListValue(_ref13) {
	    var values = _ref13.values;
	    return '[' + join(values, ', ') + ']';
	  },
	  ObjectValue: function ObjectValue(_ref14) {
	    var fields = _ref14.fields;
	    return '{' + join(fields, ', ') + '}';
	  },
	  ObjectField: function ObjectField(_ref15) {
	    var name = _ref15.name;
	    var value = _ref15.value;
	    return name + ': ' + value;
	  },

	  // Directive

	  Directive: function Directive(_ref16) {
	    var name = _ref16.name;
	    var args = _ref16.arguments;
	    return '@' + name + wrap('(', join(args, ', '), ')');
	  },

	  // Type

	  NamedType: function NamedType(_ref17) {
	    var name = _ref17.name;
	    return name;
	  },
	  ListType: function ListType(_ref18) {
	    var type = _ref18.type;
	    return '[' + type + ']';
	  },
	  NonNullType: function NonNullType(_ref19) {
	    var type = _ref19.type;
	    return type + '!';
	  },

	  // Type System Definitions

	  SchemaDefinition: function SchemaDefinition(_ref20) {
	    var directives = _ref20.directives;
	    var operationTypes = _ref20.operationTypes;
	    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
	  },

	  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
	    var operation = _ref21.operation;
	    var type = _ref21.type;
	    return operation + ': ' + type;
	  },

	  ScalarTypeDefinition: function ScalarTypeDefinition(_ref22) {
	    var name = _ref22.name;
	    var directives = _ref22.directives;
	    return join(['scalar', name, join(directives, ' ')], ' ');
	  },

	  ObjectTypeDefinition: function ObjectTypeDefinition(_ref23) {
	    var name = _ref23.name;
	    var interfaces = _ref23.interfaces;
	    var directives = _ref23.directives;
	    var fields = _ref23.fields;
	    return join(['type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ');
	  },

	  FieldDefinition: function FieldDefinition(_ref24) {
	    var name = _ref24.name;
	    var args = _ref24.arguments;
	    var type = _ref24.type;
	    var directives = _ref24.directives;
	    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
	  },

	  InputValueDefinition: function InputValueDefinition(_ref25) {
	    var name = _ref25.name;
	    var type = _ref25.type;
	    var defaultValue = _ref25.defaultValue;
	    var directives = _ref25.directives;
	    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
	  },

	  InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref26) {
	    var name = _ref26.name;
	    var directives = _ref26.directives;
	    var fields = _ref26.fields;
	    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
	  },

	  UnionTypeDefinition: function UnionTypeDefinition(_ref27) {
	    var name = _ref27.name;
	    var directives = _ref27.directives;
	    var types = _ref27.types;
	    return join(['union', name, join(directives, ' '), '= ' + join(types, ' | ')], ' ');
	  },

	  EnumTypeDefinition: function EnumTypeDefinition(_ref28) {
	    var name = _ref28.name;
	    var directives = _ref28.directives;
	    var values = _ref28.values;
	    return join(['enum', name, join(directives, ' '), block(values)], ' ');
	  },

	  EnumValueDefinition: function EnumValueDefinition(_ref29) {
	    var name = _ref29.name;
	    var directives = _ref29.directives;
	    return join([name, join(directives, ' ')], ' ');
	  },

	  InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref30) {
	    var name = _ref30.name;
	    var directives = _ref30.directives;
	    var fields = _ref30.fields;
	    return join(['input', name, join(directives, ' '), block(fields)], ' ');
	  },

	  TypeExtensionDefinition: function TypeExtensionDefinition(_ref31) {
	    var definition = _ref31.definition;
	    return 'extend ' + definition;
	  },

	  DirectiveDefinition: function DirectiveDefinition(_ref32) {
	    var name = _ref32.name;
	    var args = _ref32.arguments;
	    var locations = _ref32.locations;
	    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
	  }
	};

	/**
	 * Given maybeArray, print an empty string if it is null or empty, otherwise
	 * print all items together separated by separator if provided
	 */
	function join(maybeArray, separator) {
	  return maybeArray ? maybeArray.filter(function (x) {
	    return x;
	  }).join(separator || '') : '';
	}

	/**
	 * Given array, print each item on its own line, wrapped in an
	 * indented "{ }" block.
	 */
	function block(array) {
	  return array && array.length !== 0 ? indent('{\n' + join(array, '\n')) + '\n}' : '{}';
	}

	/**
	 * If maybeString is not null or empty, then wrap with start and end, otherwise
	 * print an empty string.
	 */
	function wrap(start, maybeString, end) {
	  return maybeString ? start + maybeString + (end || '') : '';
	}

	function indent(maybeString) {
	  return maybeString && maybeString.replace(/\n/g, '\n  ');
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BREAK = exports.QueryDocumentKeys = undefined;

	var _stringify = __webpack_require__(90);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _slicedToArray2 = __webpack_require__(94);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	exports.visit = visit;
	exports.visitInParallel = visitInParallel;
	exports.visitWithTypeInfo = visitWithTypeInfo;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	var QueryDocumentKeys = exports.QueryDocumentKeys = {
	  Name: [],

	  Document: ['definitions'],
	  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
	  VariableDefinition: ['variable', 'type', 'defaultValue'],
	  Variable: ['name'],
	  SelectionSet: ['selections'],
	  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
	  Argument: ['name', 'value'],

	  FragmentSpread: ['name', 'directives'],
	  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
	  FragmentDefinition: ['name', 'typeCondition', 'directives', 'selectionSet'],

	  IntValue: [],
	  FloatValue: [],
	  StringValue: [],
	  BooleanValue: [],
	  EnumValue: [],
	  ListValue: ['values'],
	  ObjectValue: ['fields'],
	  ObjectField: ['name', 'value'],

	  Directive: ['name', 'arguments'],

	  NamedType: ['name'],
	  ListType: ['type'],
	  NonNullType: ['type'],

	  SchemaDefinition: ['directives', 'operationTypes'],
	  OperationTypeDefinition: ['type'],

	  ScalarTypeDefinition: ['name', 'directives'],
	  ObjectTypeDefinition: ['name', 'interfaces', 'directives', 'fields'],
	  FieldDefinition: ['name', 'arguments', 'type', 'directives'],
	  InputValueDefinition: ['name', 'type', 'defaultValue', 'directives'],
	  InterfaceTypeDefinition: ['name', 'directives', 'fields'],
	  UnionTypeDefinition: ['name', 'directives', 'types'],
	  EnumTypeDefinition: ['name', 'directives', 'values'],
	  EnumValueDefinition: ['name', 'directives'],
	  InputObjectTypeDefinition: ['name', 'directives', 'fields'],

	  TypeExtensionDefinition: ['definition'],

	  DirectiveDefinition: ['name', 'arguments', 'locations']
	};

	var BREAK = exports.BREAK = {};

	/**
	 * visit() will walk through an AST using a depth first traversal, calling
	 * the visitor's enter function at each node in the traversal, and calling the
	 * leave function after visiting that node and all of its child nodes.
	 *
	 * By returning different values from the enter and leave functions, the
	 * behavior of the visitor can be altered, including skipping over a sub-tree of
	 * the AST (by returning false), editing the AST by returning a value or null
	 * to remove the value, or to stop the whole traversal by returning BREAK.
	 *
	 * When using visit() to edit an AST, the original AST will not be modified, and
	 * a new version of the AST with the changes applied will be returned from the
	 * visit function.
	 *
	 *     const editedAST = visit(ast, {
	 *       enter(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: skip visiting this node
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       },
	 *       leave(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: no action
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       }
	 *     });
	 *
	 * Alternatively to providing enter() and leave() functions, a visitor can
	 * instead provide functions named the same as the kinds of AST nodes, or
	 * enter/leave visitors at a named key, leading to four permutations of
	 * visitor API:
	 *
	 * 1) Named visitors triggered when entering a node a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind(node) {
	 *         // enter the "Kind" node
	 *       }
	 *     })
	 *
	 * 2) Named visitors that trigger upon entering and leaving a node of
	 *    a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind: {
	 *         enter(node) {
	 *           // enter the "Kind" node
	 *         }
	 *         leave(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 *
	 * 3) Generic visitors that trigger upon entering and leaving any node.
	 *
	 *     visit(ast, {
	 *       enter(node) {
	 *         // enter any node
	 *       },
	 *       leave(node) {
	 *         // leave any node
	 *       }
	 *     })
	 *
	 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
	 *
	 *     visit(ast, {
	 *       enter: {
	 *         Kind(node) {
	 *           // enter the "Kind" node
	 *         }
	 *       },
	 *       leave: {
	 *         Kind(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 */
	function visit(root, visitor, keyMap) {
	  var visitorKeys = keyMap || QueryDocumentKeys;

	  var stack = void 0;
	  var inArray = Array.isArray(root);
	  var keys = [root];
	  var index = -1;
	  var edits = [];
	  var parent = void 0;
	  var path = [];
	  var ancestors = [];
	  var newRoot = root;

	  do {
	    index++;
	    var isLeaving = index === keys.length;
	    var key = void 0;
	    var node = void 0;
	    var isEdited = isLeaving && edits.length !== 0;
	    if (isLeaving) {
	      key = ancestors.length === 0 ? undefined : path.pop();
	      node = parent;
	      parent = ancestors.pop();
	      if (isEdited) {
	        if (inArray) {
	          node = node.slice();
	        } else {
	          var clone = {};
	          for (var k in node) {
	            if (node.hasOwnProperty(k)) {
	              clone[k] = node[k];
	            }
	          }
	          node = clone;
	        }
	        var editOffset = 0;
	        for (var ii = 0; ii < edits.length; ii++) {
	          var _edits$ii = (0, _slicedToArray3.default)(edits[ii], 1);

	          var editKey = _edits$ii[0];

	          var _edits$ii2 = (0, _slicedToArray3.default)(edits[ii], 2);

	          var editValue = _edits$ii2[1];

	          if (inArray) {
	            editKey -= editOffset;
	          }
	          if (inArray && editValue === null) {
	            node.splice(editKey, 1);
	            editOffset++;
	          } else {
	            node[editKey] = editValue;
	          }
	        }
	      }
	      index = stack.index;
	      keys = stack.keys;
	      edits = stack.edits;
	      inArray = stack.inArray;
	      stack = stack.prev;
	    } else {
	      key = parent ? inArray ? index : keys[index] : undefined;
	      node = parent ? parent[key] : newRoot;
	      if (node === null || node === undefined) {
	        continue;
	      }
	      if (parent) {
	        path.push(key);
	      }
	    }

	    var result = void 0;
	    if (!Array.isArray(node)) {
	      if (!isNode(node)) {
	        throw new Error('Invalid AST Node: ' + (0, _stringify2.default)(node));
	      }
	      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
	      if (visitFn) {
	        result = visitFn.call(visitor, node, key, parent, path, ancestors);

	        if (result === BREAK) {
	          break;
	        }

	        if (result === false) {
	          if (!isLeaving) {
	            path.pop();
	            continue;
	          }
	        } else if (result !== undefined) {
	          edits.push([key, result]);
	          if (!isLeaving) {
	            if (isNode(result)) {
	              node = result;
	            } else {
	              path.pop();
	              continue;
	            }
	          }
	        }
	      }
	    }

	    if (result === undefined && isEdited) {
	      edits.push([key, node]);
	    }

	    if (!isLeaving) {
	      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
	      inArray = Array.isArray(node);
	      keys = inArray ? node : visitorKeys[node.kind] || [];
	      index = -1;
	      edits = [];
	      if (parent) {
	        ancestors.push(parent);
	      }
	      parent = node;
	    }
	  } while (stack !== undefined);

	  if (edits.length !== 0) {
	    newRoot = edits[edits.length - 1][1];
	  }

	  return newRoot;
	}

	function isNode(maybeNode) {
	  return maybeNode && typeof maybeNode.kind === 'string';
	}

	/**
	 * Creates a new visitor instance which delegates to many visitors to run in
	 * parallel. Each visitor will be visited for each node before moving on.
	 *
	 * If a prior visitor edits a node, no following visitors will see that node.
	 */
	function visitInParallel(visitors) {
	  var skipping = new Array(visitors.length);

	  return {
	    enter: function enter(node) {
	      for (var i = 0; i < visitors.length; i++) {
	        if (!skipping[i]) {
	          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
	          if (fn) {
	            var result = fn.apply(visitors[i], arguments);
	            if (result === false) {
	              skipping[i] = node;
	            } else if (result === BREAK) {
	              skipping[i] = BREAK;
	            } else if (result !== undefined) {
	              return result;
	            }
	          }
	        }
	      }
	    },
	    leave: function leave(node) {
	      for (var i = 0; i < visitors.length; i++) {
	        if (!skipping[i]) {
	          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
	          if (fn) {
	            var result = fn.apply(visitors[i], arguments);
	            if (result === BREAK) {
	              skipping[i] = BREAK;
	            } else if (result !== undefined && result !== false) {
	              return result;
	            }
	          }
	        } else if (skipping[i] === node) {
	          skipping[i] = null;
	        }
	      }
	    }
	  };
	}

	/**
	 * Creates a new visitor instance which maintains a provided TypeInfo instance
	 * along with visiting visitor.
	 */
	function visitWithTypeInfo(typeInfo, visitor) {
	  return {
	    enter: function enter(node) {
	      typeInfo.enter(node);
	      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
	      if (fn) {
	        var result = fn.apply(visitor, arguments);
	        if (result !== undefined) {
	          typeInfo.leave(node);
	          if (isNode(result)) {
	            typeInfo.enter(result);
	          }
	        }
	        return result;
	      }
	    },
	    leave: function leave(node) {
	      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
	      var result = void 0;
	      if (fn) {
	        result = fn.apply(visitor, arguments);
	      }
	      typeInfo.leave(node);
	      return result;
	    }
	  };
	}

	/**
	 * Given a visitor instance, if it is leaving or not, and a node kind, return
	 * the function the visitor runtime should call.
	 */
	function getVisitFn(visitor, kind, isLeaving) {
	  var kindVisitor = visitor[kind];
	  if (kindVisitor) {
	    if (!isLeaving && typeof kindVisitor === 'function') {
	      // { Kind() {} }
	      return kindVisitor;
	    }
	    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
	    if (typeof kindSpecificVisitor === 'function') {
	      // { Kind: { enter() {}, leave() {} } }
	      return kindSpecificVisitor;
	    }
	  } else {
	    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
	    if (specificVisitor) {
	      if (typeof specificVisitor === 'function') {
	        // { enter() {}, leave() {} }
	        return specificVisitor;
	      }
	      var specificKindVisitor = specificVisitor[kind];
	      if (typeof specificKindVisitor === 'function') {
	        // { enter: { Kind() {} }, leave: { Kind() {} } }
	        return specificKindVisitor;
	      }
	    }
	  }
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(95);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(99);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	__webpack_require__(36);
	module.exports = __webpack_require__(97);

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(98)
	  , ITERATOR  = __webpack_require__(57)('iterator')
	  , Iterators = __webpack_require__(42);
	module.exports = __webpack_require__(19).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(50)
	  , TAG = __webpack_require__(57)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	__webpack_require__(36);
	module.exports = __webpack_require__(101);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(24)
	  , get      = __webpack_require__(102);
	module.exports = __webpack_require__(19).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(98)
	  , ITERATOR  = __webpack_require__(57)('iterator')
	  , Iterators = __webpack_require__(42);
	module.exports = __webpack_require__(19).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Name

	var NAME = exports.NAME = 'Name';

	// Document

	var DOCUMENT = exports.DOCUMENT = 'Document';
	var OPERATION_DEFINITION = exports.OPERATION_DEFINITION = 'OperationDefinition';
	var VARIABLE_DEFINITION = exports.VARIABLE_DEFINITION = 'VariableDefinition';
	var VARIABLE = exports.VARIABLE = 'Variable';
	var SELECTION_SET = exports.SELECTION_SET = 'SelectionSet';
	var FIELD = exports.FIELD = 'Field';
	var ARGUMENT = exports.ARGUMENT = 'Argument';

	// Fragments

	var FRAGMENT_SPREAD = exports.FRAGMENT_SPREAD = 'FragmentSpread';
	var INLINE_FRAGMENT = exports.INLINE_FRAGMENT = 'InlineFragment';
	var FRAGMENT_DEFINITION = exports.FRAGMENT_DEFINITION = 'FragmentDefinition';

	// Values

	var INT = exports.INT = 'IntValue';
	var FLOAT = exports.FLOAT = 'FloatValue';
	var STRING = exports.STRING = 'StringValue';
	var BOOLEAN = exports.BOOLEAN = 'BooleanValue';
	var ENUM = exports.ENUM = 'EnumValue';
	var LIST = exports.LIST = 'ListValue';
	var OBJECT = exports.OBJECT = 'ObjectValue';
	var OBJECT_FIELD = exports.OBJECT_FIELD = 'ObjectField';

	// Directives

	var DIRECTIVE = exports.DIRECTIVE = 'Directive';

	// Types

	var NAMED_TYPE = exports.NAMED_TYPE = 'NamedType';
	var LIST_TYPE = exports.LIST_TYPE = 'ListType';
	var NON_NULL_TYPE = exports.NON_NULL_TYPE = 'NonNullType';

	// Type System Definitions

	var SCHEMA_DEFINITION = exports.SCHEMA_DEFINITION = 'SchemaDefinition';
	var OPERATION_TYPE_DEFINITION = exports.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition';

	// Type Definitions

	var SCALAR_TYPE_DEFINITION = exports.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition';
	var OBJECT_TYPE_DEFINITION = exports.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition';
	var FIELD_DEFINITION = exports.FIELD_DEFINITION = 'FieldDefinition';
	var INPUT_VALUE_DEFINITION = exports.INPUT_VALUE_DEFINITION = 'InputValueDefinition';
	var INTERFACE_TYPE_DEFINITION = exports.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition';
	var UNION_TYPE_DEFINITION = exports.UNION_TYPE_DEFINITION = 'UnionTypeDefinition';
	var ENUM_TYPE_DEFINITION = exports.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition';
	var ENUM_VALUE_DEFINITION = exports.ENUM_VALUE_DEFINITION = 'EnumValueDefinition';
	var INPUT_OBJECT_TYPE_DEFINITION = exports.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition';

	// Type Extensions

	var TYPE_EXTENSION_DEFINITION = exports.TYPE_EXTENSION_DEFINITION = 'TypeExtensionDefinition';

	// Directive Definitions

	var DIRECTIVE_DEFINITION = exports.DIRECTIVE_DEFINITION = 'DirectiveDefinition';

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.syntaxError = syntaxError;

	var _location = __webpack_require__(88);

	var _GraphQLError = __webpack_require__(5);

	/**
	 * Produces a GraphQLError representing a syntax error, containing useful
	 * descriptive information about the syntax error's position in the source.
	 */

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	function syntaxError(source, position, description) {
	  var location = (0, _location.getLocation)(source, position);
	  var error = new _GraphQLError.GraphQLError('Syntax Error ' + source.name + ' (' + location.line + ':' + location.column + ') ' + description + '\n\n' + highlightSourceAtLocation(source, location), undefined, undefined, source, [position]);
	  return error;
	}

	/**
	 * Render a helpful description of the location of the error in the GraphQL
	 * Source document.
	 */
	function highlightSourceAtLocation(source, location) {
	  var line = location.line;
	  var prevLineNum = (line - 1).toString();
	  var lineNum = line.toString();
	  var nextLineNum = (line + 1).toString();
	  var padLen = nextLineNum.length;
	  var lines = source.body.split(/\r\n|[\n\r]/g);
	  return (line >= 2 ? lpad(padLen, prevLineNum) + ': ' + lines[line - 2] + '\n' : '') + lpad(padLen, lineNum) + ': ' + lines[line - 1] + '\n' + Array(2 + padLen + location.column).join(' ') + '^\n' + (line < lines.length ? lpad(padLen, nextLineNum) + ': ' + lines[line] + '\n' : '');
	}

	function lpad(len, str) {
	  return Array(len - str.length + 1).join(' ') + str;
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.locatedError = locatedError;

	var _GraphQLError = __webpack_require__(5);

	/**
	 * Given an arbitrary Error, presumably thrown while attempting to execute a
	 * GraphQL operation, produce a new GraphQLError aware of the location in the
	 * document responsible for the original Error.
	 */
	function locatedError(originalError, nodes) {
	  var message = originalError ? originalError.message || String(originalError) : 'An unknown error occurred.';
	  var stack = originalError ? originalError.stack : null;
	  var error = new _GraphQLError.GraphQLError(message, nodes, stack);
	  error.originalError = originalError;
	  return error;
	}
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatError = formatError;

	var _invariant = __webpack_require__(107);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Given a GraphQLError, format it according to the rules described by the
	 * Response Format, Errors section of the GraphQL Specification.
	 */
	function formatError(error) {
	  (0, _invariant2.default)(error, 'Received null or undefined error.');
	  return {
	    message: error.message,
	    locations: error.locations
	  };
	}
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = invariant;

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	function invariant(condition, message) {
	  if (!condition) {
	    throw new Error(message);
	  }
	}

/***/ }
/******/ ]);

/***/ },

/***/ 1357:
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;
exports['default'] = deepEquals;
var hasOwn = Object.prototype.hasOwnProperty;

function deepEquals(equals, deepObjects) {
  function deep(valueA, valueB) {
    if (equals(valueA, valueB)) {
      return true;
    }

    if (Array.isArray(valueA)) {
      if (!Array.isArray(valueB) || valueA.length !== valueB.length) {
        return false;
      }
      for (var index = 0; index < valueA.length; index++) {
        if (!deep(valueA[index], valueB[index])) {
          return false;
        }
      }
      // could not find unequal items
      return true;
    }

    if (Array.isArray(valueB)) {
      return false;
    }

    if (typeof valueA === 'object') {
      if (typeof valueB !== 'object') {
        return false;
      }

      var isANull = valueA === null;
      var isBNull = valueB === null;
      if (isANull || isBNull) {
        return isANull === isBNull;
      }

      var aKeys = Object.keys(valueA);
      var bKeys = Object.keys(valueB);

      if (aKeys.length !== bKeys.length) {
        return false;
      }

      for (var index = 0; index < aKeys.length; index++) {
        var key = aKeys[index];
        if (hasOwn.call(valueA, key) && (!hasOwn.call(valueB, key) || !(deepObjects ? deep : equals)(valueA[key], valueB[key]))) {
          return false;
        }
      }
      // could not find unequal keys or values
      return true;
    }
    return false;
  }

  return deep;
}

module.exports = exports['default'];

/***/ },

/***/ 1358:
/***/ function(module, exports) {

"use strict";
"use strict";

exports.__esModule = true;
exports["default"] = lruCache;

function lruCache(limit, equals) {
  var entries = [];

  function get(key) {
    for (var index = 0; index < entries.length; index++) {
      var entry = entries[index];
      if (equals(key, entry.key)) {
        if (index > 0) {
          // move this entry to the top of the cache
          entries.splice(index, 1);
          entries.unshift(entry);
        }
        return entry.value;
      }
    }
  }

  function put(key, value) {
    if (!get(key)) {
      entries.unshift({ key: key, value: value });
      if (entries.length > limit) {
        entries.pop();
      }
    }
  }

  return { get: get, put: put };
}

module.exports = exports["default"];

/***/ },

/***/ 1359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;
exports['default'] = memoize;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _singletonCache = __webpack_require__(1360);

var _singletonCache2 = _interopRequireDefault(_singletonCache);

var _lruCache = __webpack_require__(1358);

var _lruCache2 = _interopRequireDefault(_lruCache);

var _deepEquals = __webpack_require__(1357);

var _deepEquals2 = _interopRequireDefault(_deepEquals);

function createCache(limit, equals) {
  return limit === 1 ? _singletonCache2['default'](equals) : _lruCache2['default'](limit, equals);
}

function memoize() {
  var limit = 1;
  var equals = function equals(valueA, valueB) {
    return valueA === valueB;
  };
  var deepObjects = false;

  for (var _len = arguments.length, config = Array(_len), _key = 0; _key < _len; _key++) {
    config[_key] = arguments[_key];
  }

  if (typeof config[0] === 'number') {
    limit = config.shift();
  }
  if (typeof config[0] === 'function') {
    equals = config.shift();
  }
  if (typeof config[0] === 'boolean') {
    deepObjects = config[0];
  }

  var cache = createCache(limit, _deepEquals2['default'](equals, deepObjects));

  return function (fn) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var value = cache.get(args);
      if (value === undefined) {
        value = fn.apply(fn, args);
        cache.put(args, value);
      }
      return value;
    };
  };
}

module.exports = exports['default'];

/***/ },

/***/ 1360:
/***/ function(module, exports) {

"use strict";
"use strict";

exports.__esModule = true;
exports["default"] = singletonCache;

function singletonCache(equals) {
  var entry = undefined;
  return {
    get: function get(key) {
      if (entry && equals(key, entry.key)) {
        return entry.value;
      }
    },

    put: function put(key, value) {
      entry = { key: key, value: value };
    }
  };
}

module.exports = exports["default"];

/***/ },

/***/ 1361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stateToMarkdown = __webpack_require__(1362);

Object.defineProperty(exports, 'stateToMarkdown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stateToMarkdown).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 1362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports.default = stateToMarkdown;

var _draftJsUtils = __webpack_require__(1338);

var _draftJs = __webpack_require__(53);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var BOLD = _draftJsUtils.INLINE_STYLE.BOLD;
var CODE = _draftJsUtils.INLINE_STYLE.CODE;
var ITALIC = _draftJsUtils.INLINE_STYLE.ITALIC;
var STRIKETHROUGH = _draftJsUtils.INLINE_STYLE.STRIKETHROUGH;
var UNDERLINE = _draftJsUtils.INLINE_STYLE.UNDERLINE;

var CODE_INDENT = '    ';

var MarkupGenerator = function () {
  function MarkupGenerator(contentState) {
    _classCallCheck(this, MarkupGenerator);

    this.contentState = contentState;
  }

  _createClass(MarkupGenerator, [{
    key: 'generate',
    value: function generate() {
      this.output = [];
      this.blocks = this.contentState.getBlockMap().toArray();
      this.totalBlocks = this.blocks.length;
      this.currentBlock = 0;
      this.listItemCounts = {};
      while (this.currentBlock < this.totalBlocks) {
        this.processBlock();
      }
      return this.output.join('');
    }
  }, {
    key: 'processBlock',
    value: function processBlock() {
      var block = this.blocks[this.currentBlock];
      var blockType = block.getType();
      switch (blockType) {
        case _draftJsUtils.BLOCK_TYPE.HEADER_ONE:
          {
            this.insertLineBreaks(1);
            this.output.push('# ' + this.renderBlockContent(block) + '\n');
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.HEADER_TWO:
          {
            this.insertLineBreaks(1);
            this.output.push('## ' + this.renderBlockContent(block) + '\n');
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.HEADER_THREE:
          {
            this.insertLineBreaks(1);
            this.output.push('### ' + this.renderBlockContent(block) + '\n');
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.HEADER_FOUR:
          {
            this.insertLineBreaks(1);
            this.output.push('#### ' + this.renderBlockContent(block) + '\n');
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.HEADER_FIVE:
          {
            this.insertLineBreaks(1);
            this.output.push('##### ' + this.renderBlockContent(block) + '\n');
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.HEADER_SIX:
          {
            this.insertLineBreaks(1);
            this.output.push('###### ' + this.renderBlockContent(block) + '\n');
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
          {
            var blockDepth = block.getDepth();
            var lastBlock = this.getLastBlock();
            var lastBlockType = lastBlock ? lastBlock.getType() : null;
            var lastBlockDepth = lastBlock && canHaveDepth(lastBlockType) ? lastBlock.getDepth() : null;
            if (lastBlockType !== blockType && lastBlockDepth !== blockDepth - 1) {
              this.insertLineBreaks(1);
              // Insert an additional line break if following opposite list type.
              if (lastBlockType === _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM) {
                this.insertLineBreaks(1);
              }
            }
            var indent = ' '.repeat(block.depth * 2);
            this.output.push(indent + '- ' + this.renderBlockContent(block) + '\n');
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
          {
            var _blockDepth = block.getDepth();
            var _lastBlock = this.getLastBlock();
            var _lastBlockType = _lastBlock ? _lastBlock.getType() : null;
            var _lastBlockDepth = _lastBlock && canHaveDepth(_lastBlockType) ? _lastBlock.getDepth() : null;
            if (_lastBlockType !== blockType && _lastBlockDepth !== _blockDepth - 1) {
              this.insertLineBreaks(1);
              // Insert an additional line break if following opposite list type.
              if (_lastBlockType === _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM) {
                this.insertLineBreaks(1);
              }
            }
            var _indent = ' '.repeat(_blockDepth * 2);
            // TODO: figure out what to do with two-digit numbers
            var count = this.getListItemCount(block) % 10;
            this.output.push(_indent + (count + '. ') + this.renderBlockContent(block) + '\n');
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE:
          {
            this.insertLineBreaks(1);
            this.output.push(' > ' + this.renderBlockContent(block) + '\n');
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.CODE:
          {
            this.insertLineBreaks(1);
            this.output.push(CODE_INDENT + this.renderBlockContent(block) + '\n');
            break;
          }
        case 'atomic':
          var data = block.getData();
          this.insertLineBreaks(1);
          switch (data._root.entries[1][1]) {
            case 'image':
              var imgUrl = data._root.entries[0][1];
              var caption = data._root.entries[3] ? data._root.entries[3][1] : 'article image';
              this.output.push('[' + caption + ']' + '(' + imgUrl + ')');
              break;
            case 'video':
              var videoUrl = data._root.entries[0][1];
              this.output.push('<iframe width="560" height="315" src="' + videoUrl + '" frameborder="0" allowfullscreen></iframe>');
              break;
            default:
          }
          break;
        default:
          {
            this.insertLineBreaks(1);
            this.output.push(this.renderBlockContent(block) + '\n');
            break;
          }
      }
      this.currentBlock += 1;
    }
  }, {
    key: 'getLastBlock',
    value: function getLastBlock() {
      return this.blocks[this.currentBlock - 1];
    }
  }, {
    key: 'getNextBlock',
    value: function getNextBlock() {
      return this.blocks[this.currentBlock + 1];
    }
  }, {
    key: 'getListItemCount',
    value: function getListItemCount(block) {
      var blockType = block.getType();
      var blockDepth = block.getDepth();
      // To decide if we need to start over we need to backtrack (skipping list
      // items that are of greater depth)
      var index = this.currentBlock - 1;
      var prevBlock = this.blocks[index];
      while (prevBlock && canHaveDepth(prevBlock.getType()) && prevBlock.getDepth() > blockDepth) {
        index -= 1;
        prevBlock = this.blocks[index];
      }
      if (!prevBlock || prevBlock.getType() !== blockType || prevBlock.getDepth() !== blockDepth) {
        this.listItemCounts[blockDepth] = 0;
      }
      return this.listItemCounts[blockDepth] = this.listItemCounts[blockDepth] + 1;
    }
  }, {
    key: 'insertLineBreaks',
    value: function insertLineBreaks() {
      if (this.currentBlock > 0) {
        this.output.push('\n');
      }
    }
  }, {
    key: 'renderBlockContent',
    value: function renderBlockContent(block) {
      var blockType = block.getType();
      var text = block.getText();
      if (text === '') {
        // Prevent element collapse if completely empty.
        // TODO: Replace with constant.
        return '​';
      }
      var charMetaList = block.getCharacterList();
      var entityPieces = (0, _draftJsUtils.getEntityRanges)(text, charMetaList);
      return entityPieces.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var entityKey = _ref2[0];
        var stylePieces = _ref2[1];

        var content = stylePieces.map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2);

          var text = _ref4[0];
          var style = _ref4[1];

          // Don't allow empty inline elements.
          if (!text) {
            return '';
          }
          var content = encodeContent(text);
          if (style.has(BOLD)) {
            content = '**' + content + '**';
          }
          if (style.has(UNDERLINE)) {
            // TODO: encode `+`?
            content = '++' + content + '++';
          }
          if (style.has(ITALIC)) {
            content = '_' + content + '_';
          }
          if (style.has(STRIKETHROUGH)) {
            // TODO: encode `~`?
            content = '~~' + content + '~~';
          }
          if (style.has(CODE)) {
            content = blockType === _draftJsUtils.BLOCK_TYPE.CODE ? content : '`' + content + '`';
          }
          return content;
        }).join('');
        var entity = entityKey ? _draftJs.Entity.get(entityKey) : null;
        if (entity != null && entity.getType() === _draftJsUtils.ENTITY_TYPE.LINK) {
          var data = entity.getData();
          var url = data.url || '';
          var title = data.title ? ' "' + escapeTitle(data.title) + '"' : '';
          return '[' + content + '](' + encodeURL(url) + title + ')';
        } else if (entity != null && entity.getType() === _draftJsUtils.ENTITY_TYPE.IMAGE) {
          var _data = entity.getData();
          var src = _data.src || '';
          var alt = _data.alt ? ' "' + escapeTitle(_data.alt) + '"' : '';
          return '![' + alt + '](' + encodeURL(src) + ')';
        } else {
          return content;
        }
      }).join('');
    }
  }]);

  return MarkupGenerator;
}();

function canHaveDepth(blockType) {
  switch (blockType) {
    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return true;
    default:
      return false;
  }
}

function encodeContent(text) {
  return text.replace(/[*_`]/g, '\\$&');
}

// Encode chars that would normally be allowed in a URL but would conflict with
// our markdown syntax: `[foo](http://foo/)`
function encodeURL(url) {
  return url.replace(/\)/g, '%29');
}

// Escape quotes using backslash.
function escapeTitle(text) {
  return text.replace(/"/g, '\\"');
}

function stateToMarkdown(content) {
  return new MarkupGenerator(content).generate();
}

/***/ },

/***/ 1363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTag = undefined;

var _constants = __webpack_require__(579);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setTag = exports.setTag = function setTag(tag) {
  return {
    type: types.ARCHIVE_SET_TAG,
    tag: tag
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ArticleArchiveContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ArticleArchiveContainer/actions.js"); } } })();

/***/ },

/***/ 1364:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query articleFeed($tag: String!) {\n    articles(tag: $tag) {\n      tags {\n        id\n        tag\n      }\n      id\n      title\n      created_at\n      updated_at\n      content\n      status\n      spotlighted\n      slug\n      feature_image\n      user {\n        name\n        bio\n        avatar\n      }\n    }\n  }\n'], ['\n  query articleFeed($tag: String!) {\n    articles(tag: $tag) {\n      tags {\n        id\n        tag\n      }\n      id\n      title\n      created_at\n      updated_at\n      content\n      status\n      spotlighted\n      slug\n      feature_image\n      user {\n        name\n        bio\n        avatar\n      }\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1363);

var ArticleArchiveActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1340);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Headline = __webpack_require__(171);

var _Headline2 = _interopRequireDefault(_Headline);

var _Heading = __webpack_require__(20);

var _Heading2 = _interopRequireDefault(_Heading);

var _List = __webpack_require__(374);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(375);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Button = __webpack_require__(18);

var _Button2 = _interopRequireDefault(_Button);

var _LinkPrevious = __webpack_require__(376);

var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

var _components = __webpack_require__(26);

var _reactApollo = __webpack_require__(572);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoArticlesFound = function NoArticlesFound() {
  return _react2.default.createElement(
    _Section2.default,
    { className: 'full-height' },
    _react2.default.createElement(
      _Heading2.default,
      { align: 'center' },
      'No Articles Found'
    ),
    _react2.default.createElement(_Button2.default, {
      label: 'Back to Home',
      href: '/',
      plain: true,
      icon: _react2.default.createElement(_LinkPrevious2.default, null)
    })
  );
};

var ArticleArchive = function (_Component) {
  _inherits(ArticleArchive, _Component);

  function ArticleArchive() {
    _classCallCheck(this, ArticleArchive);

    return _possibleConstructorReturn(this, (ArticleArchive.__proto__ || Object.getPrototypeOf(ArticleArchive)).call(this));
  }

  _createClass(ArticleArchive, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var actions = _props.actions;
      var location = _props.location;

      actions.setTag(decodeURIComponent(location.query.tag));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var loadingArticles = _props2.loadingArticles;
      var articles = _props2.articles;
      var selectedTag = _props2.selectedTag;

      return _react2.default.createElement(
        _Section2.default,
        { align: 'center', justify: 'center' },
        loadingArticles ? _react2.default.createElement(
          _Section2.default,
          { className: 'full-height', align: 'center', justify: 'center' },
          _react2.default.createElement(_components.LoadingIndicator, { isLoading: true })
        ) : _react2.default.createElement(
          _Box2.default,
          { className: _indexModule2.default.articleFeed },
          _react2.default.createElement(
            _Headline2.default,
            {
              align: 'center',
              className: _indexModule2.default.feedHeading
            },
            'Article Archive'
          ),
          _react2.default.createElement(
            _Heading2.default,
            { align: 'center', tag: 'h3' },
            'Selected Tag: ' + selectedTag
          ),
          _react2.default.createElement(_components.Divider, null),
          _react2.default.createElement(
            _Section2.default,
            { pad: { horizontal: 'large' }, align: 'center', justify: 'center' },
            _react2.default.createElement(
              _Box2.default,
              null,
              _react2.default.createElement(
                _List2.default,
                null,
                _react2.default.createElement(
                  _Box2.default,
                  {
                    align: 'center',
                    justify: 'center',
                    className: _indexModule2.default.listItem
                  },
                  articles && articles.length ? articles.map(function (article, i) {
                    return _react2.default.createElement(
                      _Section2.default,
                      { key: i, pad: { vertical: 'large' } },
                      _react2.default.createElement(
                        _ListItem2.default,
                        null,
                        _react2.default.createElement(_components.ArticleFeedItem, { article: article })
                      )
                    );
                  }) : _react2.default.createElement(NoArticlesFound, null)
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ArticleArchive;
}(_react.Component);

ArticleArchive.propTypes = {
  actions: _react.PropTypes.object.isRequired,
  location: _react.PropTypes.object.isRequired,
  selectedTag: _react.PropTypes.string,
  loadingArticles: _react.PropTypes.bool.isRequired,
  articles: _react.PropTypes.array
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedTag: state.archiveContainer.tag
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(ArticleArchiveActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(ArticleArchive, _indexModule2.default);

var loadArticleFeed = (0, _graphqlTag2.default)(_templateObject);

var ContainerWithData = (0, _reactApollo.graphql)(loadArticleFeed, {
  options: function options(ownProps) {
    return {
      variables: {
        tag: ownProps.selectedTag
      }
    };
  },
  props: function props(_ref) {
    var _ref$data = _ref.data;
    var loading = _ref$data.loading;
    var articles = _ref$data.articles;
    return {
      articles: articles,
      loadingArticles: loading
    };
  }
})(Container);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContainerWithData);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ArticleArchiveContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ArticleArchiveContainer/index.js"); } } })();

/***/ },

/***/ 1365:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.articleFeedIncrementCurrent = undefined;

var _constants = __webpack_require__(580);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var articleFeedIncrementCurrent = exports.articleFeedIncrementCurrent = function articleFeedIncrementCurrent() {
  return {
    type: types.ARTICLE_FEED_INCREMENT_CURRENT
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ArticleFeedContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ArticleFeedContainer/actions.js"); } } })();

/***/ },

/***/ 1366:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nquery articleFeed {\n  articleFeed {\n    tags {\n      id\n      tag\n    }\n    id\n    title\n    created_at\n    updated_at\n    content\n    status\n    spotlighted\n    slug\n    feature_image\n    user {\n      name\n      bio\n      avatar\n    }\n  }\n  articleFeedCount\n}\n'], ['\nquery articleFeed {\n  articleFeed {\n    tags {\n      id\n      tag\n    }\n    id\n    title\n    created_at\n    updated_at\n    content\n    status\n    spotlighted\n    slug\n    feature_image\n    user {\n      name\n      bio\n      avatar\n    }\n  }\n  articleFeedCount\n}\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1365);

var ArticleFeedActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1341);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Headline = __webpack_require__(171);

var _Headline2 = _interopRequireDefault(_Headline);

var _reactApollo = __webpack_require__(572);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _List = __webpack_require__(374);

var _List2 = _interopRequireDefault(_List);

var _Table = __webpack_require__(377);

var _Table2 = _interopRequireDefault(_Table);

var _ListItem = __webpack_require__(375);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _components = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleFeed = function (_Component) {
  _inherits(ArticleFeed, _Component);

  function ArticleFeed() {
    _classCallCheck(this, ArticleFeed);

    var _this = _possibleConstructorReturn(this, (ArticleFeed.__proto__ || Object.getPrototypeOf(ArticleFeed)).call(this));

    _this.handleLoadingMoreArticles = _this.handleLoadingMoreArticles.bind(_this);
    return _this;
  }

  _createClass(ArticleFeed, [{
    key: 'handleLoadingMoreArticles',
    value: function handleLoadingMoreArticles() {
      var _this2 = this;

      setTimeout(function () {
        _this2.props.actions.articleFeedIncrementCurrent();
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var articles = _props.articles;
      var loadingArticles = _props.loadingArticles;
      var current = _props.current;

      var pagedArticles = void 0;
      if (articles) {
        pagedArticles = current <= articles.length - 1 ? articles.slice(0, current) : articles;
      }
      return _react2.default.createElement(
        _Section2.default,
        { align: 'center', justify: 'center' },
        loadingArticles || !articles ? _react2.default.createElement(_components.LoadingIndicator, { isLoading: true }) : _react2.default.createElement(
          _Box2.default,
          { className: _indexModule2.default.articleFeed },
          _react2.default.createElement(
            _Headline2.default,
            {
              align: 'center',
              className: _indexModule2.default.feedHeading
            },
            'Article Feed'
          ),
          _react2.default.createElement(_components.Divider, null),
          _react2.default.createElement(
            _Section2.default,
            { pad: { horizontal: 'large' }, align: 'center', justify: 'center' },
            _react2.default.createElement(
              _Box2.default,
              null,
              _react2.default.createElement(
                _Table2.default,
                {
                  onMore: current <= articles.length - 1 ? this.handleLoadingMoreArticles : null
                },
                _react2.default.createElement(
                  _List2.default,
                  null,
                  _react2.default.createElement(
                    _Box2.default,
                    { align: 'center', justify: 'center', className: _indexModule2.default.listItem },
                    pagedArticles && pagedArticles.map(function (article, i) {
                      return _react2.default.createElement(
                        _Section2.default,
                        { key: i, pad: { vertical: 'large' } },
                        _react2.default.createElement(
                          _ListItem2.default,
                          null,
                          _react2.default.createElement(_components.ArticleFeedItem, { article: article })
                        )
                      );
                    })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ArticleFeed;
}(_react.Component);

ArticleFeed.propTypes = {
  current: _react.PropTypes.number.isRequired,
  articles: _react.PropTypes.array,
  loadingArticles: _react.PropTypes.bool.isRequired,
  error: _react.PropTypes.string,
  actions: _react.PropTypes.object.isRequired,
  refetch: _react.PropTypes.func.isRequired,
  count: _react.PropTypes.number.isRequired
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    current: state.articleFeedContainer.current
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(ArticleFeedActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(ArticleFeed, _indexModule2.default);

var loadArticleFeed = (0, _graphqlTag2.default)(_templateObject);

var ContainerWithData = (0, _reactApollo.graphql)(loadArticleFeed, {
  props: function props(_ref) {
    var _ref$data = _ref.data;
    var loading = _ref$data.loading;
    var articleFeed = _ref$data.articleFeed;
    var articleFeedCount = _ref$data.articleFeedCount;
    var error = _ref$data.error;
    return {
      error: error,
      articles: articleFeed,
      count: articleFeedCount,
      loadingArticles: loading
    };
  }
})(Container);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContainerWithData);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ArticleFeedContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ArticleFeedContainer/index.js"); } } })();

/***/ },

/***/ 1367:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carouselResetForm = exports.carouselSetImages = exports.carouselCancelEditing = exports.carouselSetEditing = exports.carouselEditImage = exports.carouselRemoveImage = exports.carouselAddImage = undefined;

var _constants = __webpack_require__(581);

var types = _interopRequireWildcard(_constants);

var _reduxForm = __webpack_require__(573);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// carouselAddImage :: JSON -> {Action}
var carouselAddImage = exports.carouselAddImage = function carouselAddImage(image) {
  return {
    type: types.CAROUSEL_ADD_IMAGE,
    image: image
  };
};

// carouselRemoveImage :: Int -> {Action}
var carouselRemoveImage = exports.carouselRemoveImage = function carouselRemoveImage(index) {
  return {
    type: types.CAROUSEL_REMOVE_IMAGE,
    index: index
  };
};

// carouselEditImage :: Int -> JSON -> {Action}
var carouselEditImage = exports.carouselEditImage = function carouselEditImage(index, image) {
  return {
    type: types.CAROUSEL_EDIT_IMAGE,
    index: index,
    image: image
  };
};

// carouselSetEditing :: Int -> {Action}
var carouselSetEditing = exports.carouselSetEditing = function carouselSetEditing(index) {
  return {
    type: types.CAROUSEL_SET_EDITING,
    index: index
  };
};

// carouselCancelEditing :: Int -> {Action}
var carouselCancelEditing = exports.carouselCancelEditing = function carouselCancelEditing(index) {
  return {
    type: types.CAROUSEL_CANCEL_EDITING,
    index: index
  };
};

// carouselSetImages :: Array -> {Action}
var carouselSetImages = exports.carouselSetImages = function carouselSetImages(images) {
  return {
    type: types.CAROUSEL_SET_IMAGES,
    images: images
  };
};

var carouselResetForm = exports.carouselResetForm = function carouselResetForm() {
  return function (dispatch) {
    dispatch((0, _reduxForm.reset)('CarouselWidget'));
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CarouselWidgetContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CarouselWidgetContainer/actions.js"); } } })();

/***/ },

/***/ 1368:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nquery allSpotlightImages {\n  spotlightImages {\n    id\n    url\n  }\n}\n'], ['\nquery allSpotlightImages {\n  spotlightImages {\n    id\n    url\n  }\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\nmutation createSpotlightImage($token: String!, $url: String!) {\n  CreateSpotlightImage(input: { auth_token: $token, url: $url }) {\n    spotlight_image {\n      id\n      url\n    }\n  }\n}\n'], ['\nmutation createSpotlightImage($token: String!, $url: String!) {\n  CreateSpotlightImage(input: { auth_token: $token, url: $url }) {\n    spotlight_image {\n      id\n      url\n    }\n  }\n}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\nmutation updateSpotlightImage($token: String!, $url: String!, $id: ID!) {\n  UpdateSpotlightImage(input: { auth_token: $token, url: $url, id: $id }) {\n    spotlight_image{\n      id\n      url\n    }\n  }\n}\n'], ['\nmutation updateSpotlightImage($token: String!, $url: String!, $id: ID!) {\n  UpdateSpotlightImage(input: { auth_token: $token, url: $url, id: $id }) {\n    spotlight_image{\n      id\n      url\n    }\n  }\n}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\nmutation deleteSpotlightImage($token: String!, $id: ID!) {\n  DeleteSpotlightImage(input: { auth_token: $token, id: $id }) {\n    id: deleted_id\n  }\n}\n'], ['\nmutation deleteSpotlightImage($token: String!, $id: ID!) {\n  DeleteSpotlightImage(input: { auth_token: $token, id: $id }) {\n    id: deleted_id\n  }\n}\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1367);

var CarouselWidgetActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1342);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Heading = __webpack_require__(20);

var _Heading2 = _interopRequireDefault(_Heading);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _reactApollo = __webpack_require__(572);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reduxForm = __webpack_require__(573);

var _loading = __webpack_require__(1369);

var _loading2 = _interopRequireDefault(_loading);

var _components = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formFields = ['newImageInput', 'editImageInput'];

var CarouselWidgetContainer = function (_Component) {
  _inherits(CarouselWidgetContainer, _Component);

  function CarouselWidgetContainer() {
    _classCallCheck(this, CarouselWidgetContainer);

    return _possibleConstructorReturn(this, (CarouselWidgetContainer.__proto__ || Object.getPrototypeOf(CarouselWidgetContainer)).apply(this, arguments));
  }

  _createClass(CarouselWidgetContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var spotlightImages = _ref.spotlightImages;

      if (spotlightImages !== this.props.images) {
        this.props.actions.carouselSetImages(spotlightImages);
      }
    }
  }, {
    key: 'handleCreatingImage',
    value: function handleCreatingImage(image) {
      var _props = this.props;
      var authToken = _props.authToken;
      var createMutation = _props.createMutation;
      var actions = _props.actions;
      var refetch = _props.refetch;

      var data = {
        variables: {
          token: authToken,
          url: image.url
        }
      };
      createMutation(data).then(function (res) {
        var newImage = res.data.CreateSpotlightImage.spotlight_image;
        actions.carouselAddImage(newImage);
        actions.carouselResetForm();
        refetch();
      });
    }
  }, {
    key: 'handleUpdatingImage',
    value: function handleUpdatingImage(index, image) {
      var _props2 = this.props;
      var authToken = _props2.authToken;
      var updateMutation = _props2.updateMutation;
      var actions = _props2.actions;
      var refetch = _props2.refetch;

      var data = {
        variables: {
          token: authToken,
          id: image.id,
          url: image.url
        }
      };
      updateMutation(data).then(function (res) {
        var newImage = res.data.UpdateSpotlightImage.spotlight_image;
        actions.carouselEditImage(index, newImage);
        actions.carouselResetForm();
        refetch();
      });
    }
  }, {
    key: 'handleDeletingImage',
    value: function handleDeletingImage(index) {
      var _props3 = this.props;
      var deleteMutation = _props3.deleteMutation;
      var actions = _props3.actions;
      var images = _props3.images;
      var authToken = _props3.authToken;
      var refetch = _props3.refetch;

      var id = parseInt(images[index].id, 10);
      var data = {
        variables: {
          token: authToken,
          id: id
        }
      };
      deleteMutation(data).then(function () {
        actions.carouselRemoveImage(index);
        refetch();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props4 = this.props;
      var images = _props4.images;
      var fields = _props4.fields;
      var actions = _props4.actions;
      var currentlyEditing = _props4.currentlyEditing;
      var user = _props4.user;
      var imagesError = _props4.imagesError;
      var imagesLoading = _props4.imagesLoading;
      var createLoading = _props4.createLoading;
      var updateLoading = _props4.updateLoading;
      var deleteLoading = _props4.deleteLoading;

      return _react2.default.createElement(
        'div',
        { className: _indexModule2.default.carouselWidget },
        _react2.default.createElement(
          _Section2.default,
          {
            primary: true,
            alignContent: 'center',
            align: 'center',
            className: _indexModule2.default.mainSection
          },
          imagesError && _react2.default.createElement(_components.ErrorAlert, {
            errors: [imagesError],
            onClose: this.handleCloseErrorAlert
          }),
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row' },
            _react2.default.createElement(
              _Box2.default,
              {
                basis: '2/3',
                pad: 'large',
                align: 'center',
                justify: 'center',
                className: _indexModule2.default.mainContent
              },
              _react2.default.createElement(
                _Heading2.default,
                { align: 'center' },
                'Carousel Widget'
              ),
              (0, _loading2.default)(images, imagesLoading, createLoading, updateLoading, deleteLoading) ? _react2.default.createElement(_components.LoadingIndicator, {
                isLoading: true
              }) : _react2.default.createElement(_components.CarouselWidget, _extends({}, fields, {
                setEditing: function setEditing(index) {
                  return actions.carouselSetEditing(index);
                },
                currentlyEditing: currentlyEditing,
                onEditImage: function onEditImage(_ref2) {
                  var index = _ref2.index;
                  var image = _ref2.image;
                  return _this2.handleUpdatingImage(index, image);
                },
                cancelEditing: function cancelEditing(index) {
                  return actions.carouselCancelEditing(index);
                },
                onDeleteImage: function onDeleteImage(index) {
                  return _this2.handleDeletingImage(index);
                },
                onAddImage: function onAddImage(image) {
                  return _this2.handleCreatingImage(image);
                },
                images: images
              }))
            ),
            user && _react2.default.createElement(_components.MainAside, {
              user: user
            })
          )
        )
      );
    }
  }]);

  return CarouselWidgetContainer;
}(_react.Component);

CarouselWidgetContainer.propTypes = {
  images: _react.PropTypes.array,
  refetch: _react.PropTypes.func.isRequired,
  imagesError: _react.PropTypes.object,
  imagesLoading: _react.PropTypes.bool,
  spotlightImages: _react.PropTypes.array,
  fields: _react.PropTypes.object.isRequired,
  actions: _react.PropTypes.object.isRequired,
  currentlyEditing: _react.PropTypes.bool.isRequired,
  user: _react.PropTypes.object.isRequired,
  createMutation: _react.PropTypes.func.isRequired,
  updateMutation: _react.PropTypes.func.isRequired,
  deleteMutation: _react.PropTypes.func.isRequired,
  authToken: _react.PropTypes.string.isRequired,
  createLoading: _react.PropTypes.bool.isRequired,
  updateLoading: _react.PropTypes.bool.isRequired,
  deleteLoading: _react.PropTypes.bool.isRequired
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    images: state.carouselWidgetContainer.images,
    user: state.app.user,
    authToken: state.app.authToken,
    currentlyEditing: state.carouselWidgetContainer.currentlyEditing
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(CarouselWidgetActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(CarouselWidgetContainer, _indexModule2.default);

var allSpotlightImageQuery = (0, _graphqlTag2.default)(_templateObject);

var ContainerWithData = (0, _reactApollo.graphql)(allSpotlightImageQuery, {
  props: function props(_ref3) {
    var _ref3$data = _ref3.data;
    var loading = _ref3$data.loading;
    var spotlightImages = _ref3$data.spotlightImages;
    var error = _ref3$data.error;
    var refetch = _ref3$data.refetch;
    return {
      imagesLoading: loading,
      spotlightImages: spotlightImages,
      imageError: error,
      refetch: refetch
    };
  }
})(Container);

var createSpotlightImageMutation = (0, _graphqlTag2.default)(_templateObject2);
var updateSpotlightImageMutation = (0, _graphqlTag2.default)(_templateObject3);
var deleteSpotlightImageMutation = (0, _graphqlTag2.default)(_templateObject4);

var ContainerWithCreateMutation = (0, _reactApollo.graphql)(createSpotlightImageMutation, {
  props: function props(_ref4) {
    var loading = _ref4.loading;
    var mutate = _ref4.mutate;
    var error = _ref4.error;
    return {
      createMutation: mutate,
      createLoading: loading,
      createError: error
    };
  }
})(ContainerWithData);
var ContainerWithUpdateMutation = (0, _reactApollo.graphql)(updateSpotlightImageMutation, {
  props: function props(_ref5) {
    var loading = _ref5.loading;
    var mutate = _ref5.mutate;
    var error = _ref5.error;
    return {
      updateMutation: mutate,
      updateLoading: loading,
      updateError: error
    };
  }
})(ContainerWithCreateMutation);
var ContainerWithDeleteMutation = (0, _reactApollo.graphql)(deleteSpotlightImageMutation, {
  props: function props(_ref6) {
    var loading = _ref6.loading;
    var mutate = _ref6.mutate;
    var error = _ref6.error;
    return {
      deleteMutation: mutate,
      deleteLoading: loading,
      deleteError: error
    };
  }
})(ContainerWithUpdateMutation);

var FormContainer = (0, _reduxForm.reduxForm)({
  form: 'CarouselWidget',
  fields: formFields
})(ContainerWithDeleteMutation);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormContainer);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CarouselWidgetContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CarouselWidgetContainer/index.js"); } } })();

/***/ },

/***/ 1369:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculateLoading;
function calculateLoading(images, imagesLoading, createLoading, updateLoading, deleteLoading) {
  return !images || imagesLoading || createLoading || deleteLoading;
}

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CarouselWidgetContainer/utils/loading.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CarouselWidgetContainer/utils/loading.js"); } } })();

/***/ },

/***/ 1370:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cmsSetStateFromArticle = exports.cmsSetArticleId = exports.cmsClosePreview = exports.cmsSetPreviewState = exports.cmsSetEditorTitle = exports.setFeatureImage = exports.cmsSetEditorState = exports.cmsToggleSpotlight = exports.cmsSetSelectedTags = exports.cmsSetStatus = exports.cmsCloseModal = exports.cmsOpenModal = exports.handleClearingToast = exports.clearCmsError = exports.clearCmsMessage = exports.submitArticleSucces = exports.submitArticleFailure = exports.submitArticleInitiation = undefined;

var _constants = __webpack_require__(582);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// submitArticleInitiation :: None -> {Action}
var submitArticleInitiation = exports.submitArticleInitiation = function submitArticleInitiation() {
  return {
    type: types.SUBMIT_ARTICLE_INITIATION
  };
};

// submitArticleFailure :: Err -> {Action}
var submitArticleFailure = exports.submitArticleFailure = function submitArticleFailure(error) {
  return {
    type: types.SUBMIT_ARTICLE_FAILURE,
    error: error
  };
};

// submitArticleSucces :: JSON -> {Action}
var submitArticleSucces = exports.submitArticleSucces = function submitArticleSucces(message) {
  return {
    type: types.SUBMIT_ARTICLE_SUCCESS,
    message: message
  };
};

// clearCmsMessage :: None -> {Action}
var clearCmsMessage = exports.clearCmsMessage = function clearCmsMessage() {
  return {
    type: types.CLEAR_CMS_MESSAGE
  };
};

// clearCmsError :: None -> {Action}
var clearCmsError = exports.clearCmsError = function clearCmsError() {
  return {
    type: types.CLEAR_CMS_ERROR
  };
};

var handleClearingToast = exports.handleClearingToast = function handleClearingToast(type) {
  return function (dispatch) {
    switch (type) {
      case 'error':
        dispatch(clearCmsError());
        break;
      case 'message':
        dispatch(clearCmsMessage());
        break;
      default:
        break;
    }
  };
};

var cmsOpenModal = exports.cmsOpenModal = function cmsOpenModal() {
  return {
    type: types.CMS_OPEN_MODAL
  };
};

var cmsCloseModal = exports.cmsCloseModal = function cmsCloseModal() {
  return {
    type: types.CMS_CLOSE_MODAL
  };
};

var cmsSetStatus = exports.cmsSetStatus = function cmsSetStatus(status) {
  return {
    type: types.CMS_SET_STATUS,
    status: status
  };
};

var cmsSetSelectedTags = exports.cmsSetSelectedTags = function cmsSetSelectedTags(tags) {
  return {
    type: types.CMS_SET_SELECTED_TAGS,
    tags: tags
  };
};

var cmsToggleSpotlight = exports.cmsToggleSpotlight = function cmsToggleSpotlight() {
  return {
    type: types.CMS_TOGGLE_SPOTLIGHT
  };
};

var cmsSetEditorState = exports.cmsSetEditorState = function cmsSetEditorState(state) {
  return {
    type: types.CMS_SET_EDITOR_STATE,
    state: state
  };
};

var setFeatureImage = exports.setFeatureImage = function setFeatureImage(image) {
  return {
    type: types.CMS_SET_FEATURE_IMAGE,
    image: image
  };
};

var cmsSetEditorTitle = exports.cmsSetEditorTitle = function cmsSetEditorTitle(title) {
  return {
    type: types.CMS_SET_EDITOR_TITLE,
    title: title
  };
};

var cmsSetPreviewState = exports.cmsSetPreviewState = function cmsSetPreviewState(_ref) {
  var markdown = _ref.markdown;
  var title = _ref.title;
  return {
    type: types.CMS_SET_PREVIEW_STATE,
    markdown: markdown,
    title: title
  };
};

var cmsClosePreview = exports.cmsClosePreview = function cmsClosePreview() {
  return {
    type: types.CMS_CLOSE_PREVIEW
  };
};

var cmsSetArticleId = exports.cmsSetArticleId = function cmsSetArticleId(id, action) {
  return {
    type: types.CMS_SET_ARTICLE_ID,
    id: id,
    action: action
  };
};

var cmsSetStateFromArticle = exports.cmsSetStateFromArticle = function cmsSetStateFromArticle(article) {
  return {
    type: types.CMS_SET_STATE_FROM_ARTICLE,
    article: article
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CmsEditorContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CmsEditorContainer/actions.js"); } } })();

/***/ },

/***/ 1371:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    fragment articleDataFragment on Article {\n      title\n      status\n      content\n      json\n      spotlighted\n      featured\n      feature_image\n      tags {\n        id\n        tag\n      }\n    }\n  '], ['\n    fragment articleDataFragment on Article {\n      title\n      status\n      content\n      json\n      spotlighted\n      featured\n      feature_image\n      tags {\n        id\n        tag\n      }\n    }\n  ']);

var _apolloClient = __webpack_require__(172);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var articleDataFragment = (0, _apolloClient.createFragment)((0, _graphqlTag2.default)(_templateObject));

exports.default = articleDataFragment;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CmsEditorContainer/graph/fragments.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CmsEditorContainer/graph/fragments.js"); } } })();

/***/ },

/***/ 1372:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query loadPastTags {\n    tags {\n      id\n      slug\n      tag\n    }\n  }\n'], ['\n  query loadPastTags {\n    tags {\n      id\n      slug\n      tag\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  query getArticle($id: ID) {\n    article(id: $id) {\n      ...articleDataFragment\n    }\n  }\n'], ['\n  query getArticle($id: ID) {\n    article(id: $id) {\n      ...articleDataFragment\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\nmutation updateArticleMutation($id: ID!,\n  $authToken: String!, $article: ArticleInput) {\n    UpdateArticle(input: { id: $id, auth_token: $authToken, article: $article }) {\n      article {\n        ...articleDataFragment\n      }\n    }\n  }\n'], ['\nmutation updateArticleMutation($id: ID!,\n  $authToken: String!, $article: ArticleInput) {\n    UpdateArticle(input: { id: $id, auth_token: $authToken, article: $article }) {\n      article {\n        ...articleDataFragment\n      }\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  mutation createArticleMutation($authToken: String!, $article: ArticleInput) {\n    CreateArticle(input: { auth_token: $authToken, article: $article }) {\n      article {\n        ...articleDataFragment\n      }\n    }\n  }\n'], ['\n  mutation createArticleMutation($authToken: String!, $article: ArticleInput) {\n    CreateArticle(input: { auth_token: $authToken, article: $article }) {\n      article {\n        ...articleDataFragment\n      }\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1370);

var CmsEditorActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1343);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _megadraftJsExportMarkdown = __webpack_require__(1361);

var _megadraft = __webpack_require__(379);

var _draftJs = __webpack_require__(53);

var _reactApollo = __webpack_require__(572);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _fragments = __webpack_require__(1371);

var _fragments2 = _interopRequireDefault(_fragments);

var _articleSubmission = __webpack_require__(1373);

var _articleSubmission2 = _interopRequireDefault(_articleSubmission);

var _components = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CmsEditorContainer = function (_Component) {
  _inherits(CmsEditorContainer, _Component);

  function CmsEditorContainer() {
    _classCallCheck(this, CmsEditorContainer);

    var _this = _possibleConstructorReturn(this, (CmsEditorContainer.__proto__ || Object.getPrototypeOf(CmsEditorContainer)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleCloseToast = _this.handleCloseToast.bind(_this);
    _this.handleCloseModal = _this.handleCloseModal.bind(_this);
    _this.handleOpenModal = _this.handleOpenModal.bind(_this);
    _this.handleChangeSelectedTags = _this.handleChangeSelectedTags.bind(_this);
    _this.handleToggleSpotlight = _this.handleToggleSpotlight.bind(_this);
    _this.handleSetStatus = _this.handleSetStatus.bind(_this);
    _this.handleEditorSetContent = _this.handleEditorSetContent.bind(_this);
    _this.handleEditorSetTitle = _this.handleEditorSetTitle.bind(_this);
    _this.handleClosePreview = _this.handleClosePreview.bind(_this);
    _this.handlePreviewArticle = _this.handlePreviewArticle.bind(_this);
    _this.handleLoadingArticle = _this.handleLoadingArticle.bind(_this);
    _this.handleNewArticleSubmission = _this.handleNewArticleSubmission.bind(_this);
    _this.handleUpdateArticleSubmission = _this.handleUpdateArticleSubmission.bind(_this);
    return _this;
  }

  _createClass(CmsEditorContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var location = _props.location;
      var actions = _props.actions;
      var _location$query = location.query;
      var articleId = _location$query.articleId;
      var action = _location$query.action;

      if (articleId && action) {
        actions.cmsSetArticleId(articleId, action);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var _this2 = this;

      var message = _ref.message;
      var articleId = _ref.articleId;
      var article = _ref.article;

      if (message) {
        (function () {
          var router = _this2.context.router;

          setTimeout(function () {
            var path = '/admin/content-dashboard';
            _this2.context.router.push(path);
            router.push(path);
          }, 3000);
        })();
      }
      if (articleId && !article) {
        this.handleLoadingArticle();
      }
      if (article && !this.props.article) {
        var actions = this.props.actions;

        actions.cmsSetStateFromArticle(article);
      }
    }
  }, {
    key: 'handleLoadingArticle',
    value: function handleLoadingArticle() {
      var refetchArticle = this.props.refetchArticle;

      if (typeof refetchArticle === 'function') {
        refetchArticle();
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _props2 = this.props;
      var action = _props2.action;
      var editorTitle = _props2.editorTitle;
      var editorState = _props2.editorState;
      var modal = _props2.modal;

      var json = (0, _megadraft.editorStateToJSON)(editorState);
      var blockArray = (0, _draftJs.convertFromRaw)(JSON.parse(json));
      var content = (0, _megadraftJsExportMarkdown.stateToMarkdown)(blockArray);
      var article = (0, _articleSubmission2.default)({
        json: json,
        content: content,
        title: editorTitle,
        status: modal.status,
        spotlighted: modal.spotlighted,
        tags: modal.selectedTags,
        feature_image: modal.featureImage || ''
      });
      if (action && action === 'edit') {
        this.handleUpdateArticleSubmission(article);
      } else {
        this.handleNewArticleSubmission(article);
      }
    }
  }, {
    key: 'handleNewArticleSubmission',
    value: function handleNewArticleSubmission(article) {
      var _props3 = this.props;
      var actions = _props3.actions;
      var authToken = _props3.authToken;
      var createArticleMutation = _props3.createArticleMutation;

      actions.submitArticleInitiation();
      createArticleMutation({
        variables: {
          authToken: authToken,
          article: article
        }
      }).then(function () {
        actions.submitArticleSucces('Successfully created the article.');
      }).catch(function (err) {
        actions.submitArticleFailure(err);
      });
    }
  }, {
    key: 'handleUpdateArticleSubmission',
    value: function handleUpdateArticleSubmission(article) {
      var _props4 = this.props;
      var updateArticleMutation = _props4.updateArticleMutation;
      var articleId = _props4.articleId;
      var authToken = _props4.authToken;
      var actions = _props4.actions;

      actions.submitArticleInitiation();
      updateArticleMutation({
        variables: {
          authToken: authToken,
          id: articleId,
          article: article
        }
      }).then(function () {
        actions.submitArticleSucces('Successfully updated the article.');
      }).catch(function (err) {
        actions.submitArticleFailure(err);
      });
    }
  }, {
    key: 'handleCloseToast',
    value: function handleCloseToast(_ref2) {
      var type = _ref2.type;
      var handleClearingToast = this.props.actions.handleClearingToast;

      handleClearingToast(type);
    }
  }, {
    key: 'handleOpenModal',
    value: function handleOpenModal() {
      var cmsOpenModal = this.props.actions.cmsOpenModal;

      cmsOpenModal();
    }
  }, {
    key: 'handleCloseModal',
    value: function handleCloseModal() {
      var cmsCloseModal = this.props.actions.cmsCloseModal;

      cmsCloseModal();
    }
  }, {
    key: 'handleSetStatus',
    value: function handleSetStatus(status) {
      var cmsSetStatus = this.props.actions.cmsSetStatus;

      cmsSetStatus(status.value);
    }
  }, {
    key: 'handleChangeSelectedTags',
    value: function handleChangeSelectedTags(tags) {
      var cmsSetSelectedTags = this.props.actions.cmsSetSelectedTags;

      cmsSetSelectedTags(tags);
    }
  }, {
    key: 'handleToggleSpotlight',
    value: function handleToggleSpotlight() {
      var cmsToggleSpotlight = this.props.actions.cmsToggleSpotlight;

      cmsToggleSpotlight();
    }
  }, {
    key: 'handleEditorSetContent',
    value: function handleEditorSetContent(state) {
      var cmsSetEditorState = this.props.actions.cmsSetEditorState;

      cmsSetEditorState(state);
    }
  }, {
    key: 'handleEditorSetTitle',
    value: function handleEditorSetTitle(_ref3) {
      var target = _ref3.target;
      var cmsSetEditorTitle = this.props.actions.cmsSetEditorTitle;

      cmsSetEditorTitle(target.value);
    }
  }, {
    key: 'handlePreviewArticle',
    value: function handlePreviewArticle() {
      var _props5 = this.props;
      var editorState = _props5.editorState;
      var editorTitle = _props5.editorTitle;
      var actions = _props5.actions;

      var rawState = (0, _megadraft.editorStateToJSON)(editorState);
      var blockArray = (0, _draftJs.convertFromRaw)(JSON.parse(rawState));
      var markdown = (0, _megadraftJsExportMarkdown.stateToMarkdown)(blockArray);
      actions.cmsSetPreviewState({ markdown: markdown, title: editorTitle });
    }
  }, {
    key: 'handleClosePreview',
    value: function handleClosePreview() {
      var cmsClosePreview = this.props.actions.cmsClosePreview;

      cmsClosePreview();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props6 = this.props;
      var submissionError = _props6.submissionError;
      var message = _props6.message;
      var modal = _props6.modal;
      var tags = _props6.tags;
      var loadingTags = _props6.loadingTags;
      var articleLoading = _props6.articleLoading;
      var editorState = _props6.editorState;
      var editorTitle = _props6.editorTitle;
      var isValid = _props6.isValid;
      var preview = _props6.preview;
      var isLoading = _props6.isLoading;
      var actions = _props6.actions;

      var loading = loadingTags || articleLoading || isLoading;
      return _react2.default.createElement(
        'div',
        { className: _indexModule2.default.cmsEditor },
        submissionError && _react2.default.createElement(_components.ToastMessage, {
          message: submissionError.message,
          onClose: function onClose() {
            return _this3.handleCloseToast({ type: 'error' });
          },
          status: 'critical'
        }),
        message && _react2.default.createElement(_components.ToastMessage, {
          message: message,
          onClose: function onClose() {
            return _this3.handleCloseToast({ type: 'message' });
          }
        }),
        loading ? _react2.default.createElement(
          _Section2.default,
          {
            align: 'center',
            justify: 'center',
            className: 'loading__box'
          },
          _react2.default.createElement(_components.LoadingIndicator, { isLoading: true })
        ) : _react2.default.createElement(_components.CmsEditor, {
          onSubmit: this.handleOpenModal,
          onChangeContent: this.handleEditorSetContent,
          onChangeTitle: this.handleEditorSetTitle,
          editorState: editorState,
          editorTitle: editorTitle,
          isValid: isValid,
          onTapToPreview: this.handlePreviewArticle
        }),
        _react2.default.createElement(_components.CmsModal, {
          isShowing: modal.isShowing,
          onClose: this.handleCloseModal,
          spotlighted: modal.spotlighted,
          onToggleSpotlight: this.handleToggleSpotlight,
          onSetStatus: this.handleSetStatus,
          status: modal.status,
          onSave: this.handleSubmit,
          canSubmit: isValid,
          tags: tags,
          selectedTags: modal.selectedTags,
          onChangeValue: this.handleChangeSelectedTags,
          featureImage: modal.featureImage,
          onChangeFeatureImage: function onChangeFeatureImage(_ref4) {
            var target = _ref4.target;
            return actions.setFeatureImage(target.value);
          }
        }),
        _react2.default.createElement(_components.CmsEditorPreview, {
          isShowing: preview.isPreviewing,
          onClose: this.handleClosePreview,
          content: preview.content,
          title: preview.title
        })
      );
    }
  }]);

  return CmsEditorContainer;
}(_react.Component);

CmsEditorContainer.propTypes = {
  updateArticleMutation: _react.PropTypes.func.isRequired,
  articleId: _react.PropTypes.number,
  action: _react.PropTypes.string,
  actions: _react.PropTypes.object.isRequired,
  submissionError: _react.PropTypes.object,
  message: _react.PropTypes.string,
  modal: _react.PropTypes.object.isRequired,
  tags: _react.PropTypes.array.isRequired,
  loadingTags: _react.PropTypes.bool.isRequired,
  user: _react.PropTypes.object.isRequired,
  authToken: _react.PropTypes.string.isRequired,
  refetch: _react.PropTypes.func.isRequired,
  editorState: _react.PropTypes.object,
  editorTitle: _react.PropTypes.string,
  isValid: _react.PropTypes.bool.isRequired,
  preview: _react.PropTypes.object.isRequired,
  params: _react.PropTypes.object,
  location: _react.PropTypes.object.isRequired,
  article: _react.PropTypes.object,
  articleLoading: _react.PropTypes.bool.isRequired,
  refetchArticle: _react.PropTypes.func.isRequired,
  createArticleMutation: _react.PropTypes.func.isRequired,
  isLoading: _react.PropTypes.bool.isRequired
};

CmsEditorContainer.contextTypes = {
  router: _react.PropTypes.object.isRequired
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    submissionError: state.cmsEditorContainer.error,
    message: state.cmsEditorContainer.message,
    modal: state.cmsEditorContainer.modal,
    editorState: state.cmsEditorContainer.editorState,
    editorTitle: state.cmsEditorContainer.editorTitle,
    isValid: state.cmsEditorContainer.isValid,
    preview: state.cmsEditorContainer.preview,
    articleId: state.cmsEditorContainer.article.id,
    action: state.cmsEditorContainer.article.action,
    user: state.app.user,
    authToken: state.app.authToken,
    isLoading: state.cmsEditorContainer.isLoading
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(CmsEditorActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(CmsEditorContainer, _indexModule2.default);

var loadTagsQuery = (0, _graphqlTag2.default)(_templateObject);

var ContainerWithTags = (0, _reactApollo.graphql)(loadTagsQuery, {
  props: function props(_ref5) {
    var _ref5$data = _ref5.data;
    var tags = _ref5$data.tags;
    var loading = _ref5$data.loading;
    return {
      loadingTags: loading,
      tags: tags
    };
  }
})(Container);

var loadArticleQuery = (0, _graphqlTag2.default)(_templateObject2);

var ContainerWithArticle = (0, _reactApollo.graphql)(loadArticleQuery, {
  options: function options(ownProps) {
    return {
      skip: !ownProps.articleId,
      variables: {
        id: parseInt(ownProps.articleId, 10)
      },
      fragments: [_fragments2.default]
    };
  },
  props: function props(_ref6) {
    var _ref6$data = _ref6.data;
    var article = _ref6$data.article;
    var loading = _ref6$data.loading;
    var refetch = _ref6$data.refetch;
    return {
      articleLoading: loading,
      article: article,
      refetchArticle: refetch
    };
  }
})(ContainerWithTags);

var updateArticleMutation = (0, _graphqlTag2.default)(_templateObject3);

var ContainerWithMutations = (0, _reactApollo.graphql)(updateArticleMutation, {
  options: function options() {
    return {
      fragments: [_fragments2.default]
    };
  },
  props: function props(_ref7) {
    var mutate = _ref7.mutate;
    return {
      updateArticleMutation: mutate
    };
  }
})(ContainerWithArticle);

var createArticleMutation = (0, _graphqlTag2.default)(_templateObject4);

var ContainerWithMoreMutations = (0, _reactApollo.graphql)(createArticleMutation, {
  options: function options() {
    return {
      fragments: [_fragments2.default]
    };
  },
  props: function props(_ref8) {
    var mutate = _ref8.mutate;
    return {
      createArticleMutation: mutate
    };
  }
})(ContainerWithMutations);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContainerWithMoreMutations);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CmsEditorContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CmsEditorContainer/index.js"); } } })();

/***/ },

/***/ 1373:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArticleSubmission = exports.ArticleSubmission = function () {
  function ArticleSubmission() {
    _classCallCheck(this, ArticleSubmission);

    this.statusEnum = {
      0: 'draft',
      1: 'published',
      2: 'archived'
    };
    this.toArticle = this.toArticle.bind(this);
    var args = arguments[0];
    this.content = args.content;
    this.title = args.title;
    this.status = this.statusEnum['' + args.status];
    this.tags = args.tags.map(function (tag) {
      return {
        tag: tag.label
      };
    });
    this.spotlighted = args.spotlighted;
    this.json = args.json;
    this.feature_image = args.feature_image;
  }

  _createClass(ArticleSubmission, [{
    key: 'toArticle',
    value: function toArticle() {
      return {
        title: this.title,
        content: this.content,
        json: this.json,
        status: this.status,
        spotlighted: this.spotlighted,
        tags: this.tags,
        feature_image: this.feature_image
      };
    }
  }]);

  return ArticleSubmission;
}();

var inputToArticle = function inputToArticle(input) {
  return new ArticleSubmission(input).toArticle();
};

exports.default = inputToArticle;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CmsEditorContainer/model/articleSubmission.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/CmsEditorContainer/model/articleSubmission.js"); } } })();

/***/ },

/***/ 1374:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClearingToast = exports.clearDashboardMessage = exports.dashboardDeleteArticleFailure = exports.dashboardDeleteArticleSuccess = exports.dashboardDeleteArticleInitiation = exports.dashboardModalCancelation = exports.dashboardModalConfirmation = exports.dashboardToggleModalToDelete = exports.loadDashboardArticles = exports.clearDashboardError = exports.loadDashboardArticlesFailure = exports.loadDashboardArticlesSuccess = exports.loadDashboardArticlesInitiation = undefined;

var _constants = __webpack_require__(583);

var types = _interopRequireWildcard(_constants);

__webpack_require__(373);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var baseUrl = typeof process.env.BASE_URL !== 'undefined' ? process.env.BASE_URL : 'https://udacity-api.herokuapp.com/';
var articlesUrl = baseUrl + 'api/v1/articles';

// loadDashboardArticlesInitiation :: None -> {Action}
var loadDashboardArticlesInitiation = exports.loadDashboardArticlesInitiation = function loadDashboardArticlesInitiation() {
  return {
    type: types.DASHBOARD_ARTICLES_INITIATION
  };
};

// loadDashboardArticlesSuccess :: JSON -> {Action}
var loadDashboardArticlesSuccess = exports.loadDashboardArticlesSuccess = function loadDashboardArticlesSuccess(articles) {
  return {
    type: types.DASHBOARD_ARTICLES_SUCCESS,
    articles: articles
  };
};

// loadDashboardArticlesFailure :: Err -> {Action}
var loadDashboardArticlesFailure = exports.loadDashboardArticlesFailure = function loadDashboardArticlesFailure(error) {
  return {
    type: types.DASHBOARD_ARTICLES_FAILURE,
    error: error
  };
};

// clearDashboardError :: None -> {Action}
var clearDashboardError = exports.clearDashboardError = function clearDashboardError() {
  return {
    type: types.CLEAR_DASHBOARD_ERROR
  };
};

// loadDashboardArticles :: None -> Thunk
var loadDashboardArticles = exports.loadDashboardArticles = function loadDashboardArticles() {
  return function (dispatch) {
    dispatch(loadDashboardArticlesInitiation());
    fetch(articlesUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.articles;
    }).then(function (articles) {
      return articles.sort(function (a, b) {
        return new Date(a.updated_at) - new Date(b.updated_at);
      });
    }).then(function (articles) {
      dispatch(loadDashboardArticlesSuccess(articles));
    }).catch(function (error) {
      return dispatch(loadDashboardArticlesFailure(error.message || 'An unknown error has occured'));
    });
  };
};

var dashboardToggleModalToDelete = exports.dashboardToggleModalToDelete = function dashboardToggleModalToDelete(id) {
  return {
    type: types.DASHBOARD_TOGGLE_MODAL,
    id: id
  };
};

var dashboardModalConfirmation = exports.dashboardModalConfirmation = function dashboardModalConfirmation() {
  return {
    type: types.DASHBOARD_MODAL_CONFIRMATION
  };
};

var dashboardModalCancelation = exports.dashboardModalCancelation = function dashboardModalCancelation() {
  return {
    type: types.DASHBOARD_MODAL_CANCEL
  };
};

var dashboardDeleteArticleInitiation = exports.dashboardDeleteArticleInitiation = function dashboardDeleteArticleInitiation() {
  return {
    type: types.DASHBOARD_DELETE_ARTICLE_INITIATION
  };
};

var dashboardDeleteArticleSuccess = exports.dashboardDeleteArticleSuccess = function dashboardDeleteArticleSuccess(message) {
  return {
    type: types.DASHBOARD_DELETE_ARTICLE_SUCCESS,
    message: message
  };
};

var dashboardDeleteArticleFailure = exports.dashboardDeleteArticleFailure = function dashboardDeleteArticleFailure(error) {
  return {
    type: types.DASHBOARD_DELETE_ARTICLE_FAILURE,
    error: error
  };
};

// clearCmsMessage :: None -> {Action}
var clearDashboardMessage = exports.clearDashboardMessage = function clearDashboardMessage() {
  return {
    type: types.CLEAR_DASHBOARD_MESSAGE
  };
};

var handleClearingToast = exports.handleClearingToast = function handleClearingToast(type) {
  return function (dispatch) {
    switch (type) {
      case 'error':
        dispatch(clearDashboardError());
        break;
      case 'message':
        dispatch(clearDashboardMessage());
        break;
      default:
        break;
    }
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ContentDashboardContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ContentDashboardContainer/actions.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ },

/***/ 1375:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  mutation deleteArticle($authToken: String!, $id: ID!) {\n    DeleteArticle(input: { id: $id, auth_token: $authToken }) {\n      id: deleted_id\n    }\n  }\n'], ['\n  mutation deleteArticle($authToken: String!, $id: ID!) {\n    DeleteArticle(input: { id: $id, auth_token: $authToken }) {\n      id: deleted_id\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1374);

var ContentDashboardActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1344);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Heading = __webpack_require__(20);

var _Heading2 = _interopRequireDefault(_Heading);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _components = __webpack_require__(26);

var _reactApollo = __webpack_require__(572);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentDashboard = function (_Component) {
  _inherits(ContentDashboard, _Component);

  function ContentDashboard() {
    _classCallCheck(this, ContentDashboard);

    var _this = _possibleConstructorReturn(this, (ContentDashboard.__proto__ || Object.getPrototypeOf(ContentDashboard)).call(this));

    _this.handleDeletingArticle = _this.handleDeletingArticle.bind(_this);
    _this.handleOpenModal = _this.handleOpenModal.bind(_this);
    return _this;
  }

  _createClass(ContentDashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actions.loadDashboardArticles();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var message = _ref.message;

      // New message, so that means something was deleted
      // Refetch at this point.
      if (message && !this.props.message) {
        this.props.actions.loadDashboardArticles();
      }
    }
  }, {
    key: 'handleOpenModal',
    value: function handleOpenModal(id) {
      var actions = this.props.actions;

      actions.dashboardToggleModalToDelete(id);
    }
  }, {
    key: 'handleDeletingArticle',
    value: function handleDeletingArticle() {
      var _props = this.props;
      var deleteArticleMutation = _props.deleteArticleMutation;
      var selectedArticleId = _props.selectedArticleId;
      var authToken = _props.authToken;
      var actions = _props.actions;

      var data = {
        variables: {
          id: selectedArticleId,
          authToken: authToken
        }
      };
      actions.dashboardModalConfirmation();
      actions.dashboardDeleteArticleInitiation();
      deleteArticleMutation(data).then(function () {
        actions.dashboardDeleteArticleSuccess('The article was successfully deleted');
      }).catch(function (err) {
        actions.dashboardDeleteArticleFailure(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var user = _props2.user;
      var articles = _props2.articles;
      var isShowingModal = _props2.isShowingModal;
      var actions = _props2.actions;
      var isLoading = _props2.isLoading;
      var message = _props2.message;
      var errorMessage = _props2.errorMessage;
      var isMobile = _props2.isMobile;

      return _react2.default.createElement(
        'div',
        { className: _indexModule2.default.contentDashboard },
        message && _react2.default.createElement(_components.ToastMessage, {
          message: message,
          onClose: function onClose() {
            return actions.handleClearingToast('message');
          }
        }),
        errorMessage && _react2.default.createElement(_components.ToastMessage, {
          message: errorMessage,
          status: 'critical',
          onClose: function onClose() {
            return actions.handleClearingToast('error');
          }
        }),
        _react2.default.createElement(_components.ConfirmationModal, {
          isVisible: isShowingModal,
          onConfirm: function onConfirm() {
            return _this2.handleDeletingArticle();
          },
          onCancel: function onCancel() {
            return actions.dashboardModalCancelation();
          },
          title: 'Confirm Deletion'
        }),
        _react2.default.createElement(
          _Section2.default,
          {
            alignContent: 'center',
            align: 'center'
          },
          isLoading ? _react2.default.createElement(
            _Section2.default,
            {
              align: 'center',
              justify: 'center',
              className: 'loading__box'
            },
            _react2.default.createElement(_components.LoadingIndicator, { isLoading: true })
          ) : _react2.default.createElement(
            _Box2.default,
            { direction: 'row' },
            _react2.default.createElement(
              _Box2.default,
              {
                basis: isMobile ? 'full' : '2/3',
                pad: 'medium',
                align: 'center',
                justify: isMobile ? 'center' : 'start',
                className: _indexModule2.default.mainContent
              },
              _react2.default.createElement(
                _Heading2.default,
                { align: 'center' },
                'Content Dashboard'
              ),
              _react2.default.createElement(
                _Box2.default,
                { pad: 'large' },
                articles && articles.length > 0 && _react2.default.createElement(_components.DashboardTable, {
                  isMobile: isMobile,
                  articles: articles,
                  onDeleteArticle: function onDeleteArticle(id) {
                    return _this2.handleOpenModal(id);
                  }
                })
              )
            ),
            user && user.role === 'admin' && _react2.default.createElement(_components.MainAside, {
              user: user
            })
          )
        )
      );
    }
  }]);

  return ContentDashboard;
}(_react.Component);

ContentDashboard.propTypes = {
  isLoading: _react.PropTypes.bool.isRequired,
  errorMessage: _react.PropTypes.string,
  message: _react.PropTypes.string,
  articles: _react.PropTypes.array,
  user: _react.PropTypes.object.isRequired,
  actions: _react.PropTypes.object.isRequired,
  isShowingModal: _react.PropTypes.bool.isRequired,
  selectedArticleId: _react.PropTypes.number,
  deleteArticleMutation: _react.PropTypes.func.isRequired,
  authToken: _react.PropTypes.string.isRequired,
  isMobile: _react.PropTypes.bool.isRequired
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.contentDashboardContainer.isLoading,
    errorMessage: state.contentDashboardContainer.error,
    articles: state.contentDashboardContainer.articles,
    isShowingModal: state.contentDashboardContainer.isShowingModal,
    selectedArticleId: state.contentDashboardContainer.selectedArticleId,
    message: state.contentDashboardContainer.message,
    user: state.app.user,
    authToken: state.app.authToken,
    isMobile: state.app.isMobile
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(ContentDashboardActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(ContentDashboard, _indexModule2.default);

var deleteArticleMutation = (0, _graphqlTag2.default)(_templateObject);

var ContainerWithMutations = (0, _reactApollo.graphql)(deleteArticleMutation, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      deleteArticleMutation: mutate
    };
  }
})(Container);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContainerWithMutations);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ContentDashboardContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ContentDashboardContainer/index.js"); } } })();

/***/ },

/***/ 1376:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSpotlightedImages = exports.loadSpotlightedImagesFailure = exports.loadSpotlightedImagesSuccess = exports.loadSpotlightedImagesInitiation = exports.loadFeaturedArticles = exports.clearLandingError = exports.loadFeaturedArticlesFailure = exports.loadFeaturedArticlesSuccess = exports.loadFeaturedArticlesInitiation = undefined;

var _constants = __webpack_require__(584);

var types = _interopRequireWildcard(_constants);

__webpack_require__(373);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var baseUrl = typeof process.env.BASE_URL !== 'undefined' ? process.env.BASE_URL : 'https://udacity-api.herokuapp.com/';
var articlesUrl = baseUrl + 'api/v1/articles';
var spotlightedImagesUrl = baseUrl + 'api/v1/spotlight_images';

// loadFeaturedArticlesInitiation :: None -> {Action}
var loadFeaturedArticlesInitiation = exports.loadFeaturedArticlesInitiation = function loadFeaturedArticlesInitiation() {
  return {
    type: types.FEATURED_ARTICLES_INITIATION
  };
};

// loadFeaturedArticlesSuccess :: JSON -> {Action}
var loadFeaturedArticlesSuccess = exports.loadFeaturedArticlesSuccess = function loadFeaturedArticlesSuccess(articles) {
  return {
    type: types.FEATURED_ARTICLES_SUCCESS,
    articles: articles
  };
};

// loadFeaturedArticlesFailure :: Err -> {Action}
var loadFeaturedArticlesFailure = exports.loadFeaturedArticlesFailure = function loadFeaturedArticlesFailure(error) {
  return {
    type: types.FEATURE_ARTICLES_FAILURE,
    error: error
  };
};

// clearLandingErrors :: None -> {Action}
var clearLandingError = exports.clearLandingError = function clearLandingError() {
  return {
    type: types.CLEAR_LANDING_ERRORS
  };
};

// loadFeaturedArticles :: None -> Thunk
var loadFeaturedArticles = exports.loadFeaturedArticles = function loadFeaturedArticles() {
  return function (dispatch) {
    dispatch(loadFeaturedArticlesInitiation());
    fetch(articlesUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.articles;
    }).then(function (articles) {
      return articles.filter(function (article) {
        return article.status === 'published';
      });
    }).then(function (articles) {
      return articles.filter(function (article) {
        return article.spotlighted;
      });
    }).then(function (articles) {
      return articles.sort(function (a, b) {
        return new Date(a.updated_at) - new Date(b.updated_at);
      });
    }).then(function (articles) {
      dispatch(loadFeaturedArticlesSuccess(articles));
    }).catch(function (error) {
      return dispatch(loadFeaturedArticlesFailure(error));
    });
  };
};

var loadSpotlightedImagesInitiation = exports.loadSpotlightedImagesInitiation = function loadSpotlightedImagesInitiation() {
  return {
    type: types.SPOTLIGHTED_IMAGES_INITIATION
  };
};

var loadSpotlightedImagesSuccess = exports.loadSpotlightedImagesSuccess = function loadSpotlightedImagesSuccess(images) {
  return {
    type: types.SPOTLIGHTED_IMAGES_SUCCESS,
    images: images
  };
};

var loadSpotlightedImagesFailure = exports.loadSpotlightedImagesFailure = function loadSpotlightedImagesFailure(error) {
  return {
    type: types.SPOTLIGHTED_IMAGES_FAILURE,
    error: error
  };
};

var loadSpotlightedImages = exports.loadSpotlightedImages = function loadSpotlightedImages() {
  return function (dispatch) {
    dispatch(loadSpotlightedImagesInitiation());
    fetch(spotlightedImagesUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.spotlight_images;
    }).then(function (images) {
      return dispatch(loadSpotlightedImagesSuccess(images));
    }).catch(function (error) {
      return dispatch(loadSpotlightedImagesFailure(error));
    });
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/LandingContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/LandingContainer/actions.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ },

/***/ 1377:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _components = __webpack_require__(26);

var _actions = __webpack_require__(1376);

var LandingActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1345);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = function (_Component) {
  _inherits(Landing, _Component);

  function Landing() {
    _classCallCheck(this, Landing);

    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
  }

  _createClass(Landing, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var actions = _props.actions;
      var featuredArticles = _props.featuredArticles;

      if (!featuredArticles || !featuredArticles.length > 0) {
        actions.loadFeaturedArticles();
      }
      actions.loadSpotlightedImages();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var isLoading = _props2.isLoading;
      var carouselImages = _props2.carouselImages;
      var featuredArticles = _props2.featuredArticles;
      var error = _props2.error;
      var user = _props2.user;
      var actions = _props2.actions;

      return _react2.default.createElement(
        'div',
        { className: _indexModule2.default.landing },
        error && _react2.default.createElement(_components.ToastMessage, {
          message: error.message,
          status: 'critical',
          onClose: function onClose() {
            return actions.clearLandingError();
          }
        }),
        isLoading ? _react2.default.createElement(
          _Section2.default,
          {
            align: 'center',
            justify: 'center',
            className: _indexModule2.default.loadingBox
          },
          _react2.default.createElement(_components.LoadingIndicator, { isLoading: isLoading })
        ) : _react2.default.createElement(
          _Section2.default,
          {
            primary: true,
            alignContent: 'center',
            align: 'center',
            className: _indexModule2.default.mainSection
          },
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row' },
            _react2.default.createElement(
              _Box2.default,
              {
                align: 'center',
                justify: 'center',
                className: _indexModule2.default.mainContent
              },
              _react2.default.createElement(_components.MainCarousel, { images: carouselImages }),
              featuredArticles && featuredArticles.length > 0 && _react2.default.createElement(_components.SpotlightArticles, { articles: featuredArticles })
            ),
            user && user.role === 'admin' && _react2.default.createElement(_components.MainAside, { user: user })
          )
        )
      );
    }
  }]);

  return Landing;
}(_react.Component);

Landing.propTypes = {
  isLoading: _react.PropTypes.bool.isRequired,
  actions: _react.PropTypes.object.isRequired,
  carouselImages: _react.PropTypes.array.isRequired,
  featuredArticles: _react.PropTypes.array,
  error: _react.PropTypes.object,
  user: _react.PropTypes.object
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.landing.isLoading,
    carouselImages: state.landing.carouselImages,
    featuredArticles: state.landing.featuredArticles,
    error: state.landing.error,
    user: state.app.user
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(LandingActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(Landing, _indexModule2.default);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Container);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/LandingContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/LandingContainer/index.js"); } } })();

/***/ },

/***/ 1378:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.performLogin = exports.loginClearMessage = exports.loginSetMessage = exports.loginClearError = exports.loginRequestFailure = exports.loginRequestSuccess = exports.loginInitiateRequest = exports.handleToggleForgotPassword = exports.forgotPasswordSetEmailInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(585);

var types = _interopRequireWildcard(_constants);

__webpack_require__(373);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseUrl = typeof process.env.BASE_URL !== 'undefined' ? process.env.BASE_URL : 'https://udacity-api.herokuapp.com/';
var sessionsUrl = baseUrl + 'api/v1/sessions';
var usersUrl = baseUrl + 'api/v1/users';

var forgotPasswordSetEmailInput = exports.forgotPasswordSetEmailInput = function forgotPasswordSetEmailInput(input) {
  return {
    type: types.FORGOT_PASSWORD_SET_EMAIL_INPUT,
    input: input
  };
};

var handleToggleForgotPassword = exports.handleToggleForgotPassword = function handleToggleForgotPassword() {
  return {
    type: types.LOGIN_TOGGLE_FORGOT_PASSWORD
  };
};

// loginInitiateRequest :: None -> Action
var loginInitiateRequest = exports.loginInitiateRequest = function loginInitiateRequest() {
  return {
    type: types.LOGIN_INITIATE_REQUEST
  };
};

// loginRequestSuccess :: JSON -> Action
var loginRequestSuccess = exports.loginRequestSuccess = function loginRequestSuccess(user) {
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    user: user
  };
};

// loginRequestFailure :: [Err] -> Action
var loginRequestFailure = exports.loginRequestFailure = function loginRequestFailure(error) {
  return {
    type: types.LOGIN_REQUEST_FAILURE,
    error: error
  };
};

// loginClearError :: None -> Action
var loginClearError = exports.loginClearError = function loginClearError() {
  return {
    type: types.LOGIN_CLEAR_ERROR
  };
};

var loginSetMessage = exports.loginSetMessage = function loginSetMessage(message) {
  return {
    type: types.LOGIN_SET_MESSAGE,
    message: message
  };
};

var loginClearMessage = exports.loginClearMessage = function loginClearMessage() {
  return {
    type: types.LOGIN_CLEAR_MESSAGE
  };
};

var SessionParams = function () {
  function SessionParams() {
    _classCallCheck(this, SessionParams);

    this.toJson = this.toJson.bind(this);
    var args = arguments[0];
    this.email = args.email;
    this.password = args.password;
    this.valid = this.email && this.password;
  }

  _createClass(SessionParams, [{
    key: 'toJson',
    value: function toJson() {
      var body = {
        session: {
          email: this.email,
          password: this.password
        }
      };
      return JSON.stringify(body);
    }
  }]);

  return SessionParams;
}();

var persistAuthToken = function persistAuthToken(authToken) {
  return new Promise(function (resolve) {
    var token = localStorage.setItem('auth_token', authToken);
    resolve(token);
  });
};

var performLogin = exports.performLogin = function performLogin(params) {
  return function (dispatch) {
    dispatch(loginInitiateRequest());
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var session = new SessionParams(params);
    if (!session.valid) {
      throw new Error('A valid email and password are required');
    }
    var body = session.toJson();
    fetch(sessionsUrl, {
      method: 'POST',
      headers: headers,
      body: body
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      var token = res.session.auth_token;
      if (!token) {
        throw new Error('The request failed.');
      }
      persistAuthToken(token).then(function (t) {
        return t;
      });
      return token;
    }).then(function (token) {
      var userHeaders = new Headers();
      userHeaders.append('Content-Type', 'application/json');
      userHeaders.append('Authorization', token);
      return fetch(usersUrl, {
        method: 'GET',
        headers: userHeaders
      });
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      if (!res.user) {
        throw new Error('Unexpected response from server.  ' + 'Please check your password and try again.');
      }
      return res.user;
    }).then(function (user) {
      dispatch(loginRequestSuccess(user));
    }).then(function () {
      var message = 'Login was successful!  Redirecting to your profile.';
      dispatch(loginSetMessage(message));
    }).catch(function (err) {
      var p1 = 'An error has occured while logging you in.';
      var p2 = 'Please make sure your credentials are valid and try again.';
      var message = p1 + ' ' + p2 + ' Error: ' + err.message;
      dispatch(loginRequestFailure(message));
    });
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/LoginContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/LoginContainer/actions.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ },

/***/ 1379:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formFields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1378);

var LoginActionCreators = _interopRequireWildcard(_actions);

var _actions2 = __webpack_require__(574);

var AppActions = _interopRequireWildcard(_actions2);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1346);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _validation = __webpack_require__(1380);

var _validation2 = _interopRequireDefault(_validation);

var _reduxForm = __webpack_require__(573);

var _components = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formFields = exports.formFields = ['emailInput', 'passwordInput'];

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleSubmitLostPassword = _this.handleSubmitLostPassword.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var _this2 = this;

      var user = _ref.user;

      if (user) {
        var actions = this.props.actions;

        actions.setPersistentUser(user);
        setTimeout(function () {
          _this2.context.router.push('/me/profile');
        }, 3000);
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _props = this.props;
      var actions = _props.actions;
      var fields = _props.fields;

      var data = {
        email: fields.emailInput.value,
        password: fields.passwordInput.value
      };
      actions.performLogin(data);
    }
  }, {
    key: 'handleSubmitLostPassword',
    value: function handleSubmitLostPassword() {
      // TODO: implement me.
      // The email address is stored in the
      // this.props.emailInput state
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var isLoading = _props2.isLoading;
      var errorMessage = _props2.errorMessage;
      var message = _props2.message;
      var fields = _props2.fields;
      var invalid = _props2.invalid;
      var actions = _props2.actions;
      var isShowingModal = _props2.isShowingModal;
      var emailInput = _props2.emailInput;

      return _react2.default.createElement(
        _Section2.default,
        {
          primary: true,
          pad: { horizontal: 'large' },
          align: 'center',
          justify: 'center',
          className: _indexModule2.default.login
        },
        _react2.default.createElement(_components.LostPasswordModal, {
          emailInput: emailInput,
          onChangeEmailInput: function onChangeEmailInput(_ref2) {
            var target = _ref2.target;
            return actions.forgotPasswordSetEmailInput(target.value);
          },
          onClose: function onClose() {
            return actions.handleToggleForgotPassword();
          },
          onSubmit: this.handleSubmitLostPassword,
          isVisible: isShowingModal
        }),
        isLoading && _react2.default.createElement(_components.LoadingIndicator, {
          message: 'Submitting',
          isLoading: isLoading
        }),
        errorMessage && _react2.default.createElement(_components.ToastMessage, {
          message: errorMessage,
          status: 'critical',
          onClose: function onClose() {
            return actions.loginClearError();
          }
        }),
        message && _react2.default.createElement(_components.ToastMessage, {
          message: message,
          onClose: function onClose() {
            return actions.loginClearMessage();
          }
        }),
        _react2.default.createElement(
          _Box2.default,
          {
            size: 'large',
            className: _indexModule2.default.loginFormWrapper,
            align: 'center',
            pad: { horizontal: 'small', vertical: 'small' }
          },
          _react2.default.createElement(_components.LoginForm, _extends({}, fields, {
            onForgotPassword: function onForgotPassword() {
              return actions.handleToggleForgotPassword();
            },
            invalid: invalid,
            onSubmit: this.handleSubmit
          }))
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

Login.propTypes = {
  actions: _react.PropTypes.object.isRequired,
  isLoading: _react.PropTypes.bool.isRequired,
  loggedInUser: _react.PropTypes.object,
  errorMessage: _react.PropTypes.string,
  user: _react.PropTypes.object,
  message: _react.PropTypes.string,
  fields: _react.PropTypes.object.isRequired,
  invalid: _react.PropTypes.bool.isRequired,
  isShowingModal: _react.PropTypes.bool.isRequired,
  emailInput: _react.PropTypes.string
};

Login.contextTypes = {
  router: _react.PropTypes.func.isRequired
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.loginContainer.user,
    errorMessage: state.loginContainer.error,
    loggedInUser: state.loginContainer.loggedInUser,
    isLoading: state.loginContainer.isLoading,
    message: state.loginContainer.message,
    isShowingModal: state.loginContainer.forgotPassword.isShowingModal,
    emailInput: state.loginContainer.forgotPassword.emailInput
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(Object.assign({}, LoginActionCreators, AppActions), dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(Login, _indexModule2.default);

var FormContainer = (0, _reduxForm.reduxForm)({
  form: 'Login',
  fields: formFields,
  validate: _validation2.default
})(Container);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormContainer);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/LoginContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/LoginContainer/index.js"); } } })();

/***/ },

/***/ 1380:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validation = __webpack_require__(1315);

var validation = _interopRequireWildcard(_validation);

var _lruMemoize = __webpack_require__(1317);

var _lruMemoize2 = _interopRequireDefault(_lruMemoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Compose validation functions for all input fields
var passwordInput = [validation.containsLowercase, validation.containsUppercase, validation.minLength(8), validation.maxLength(20), validation.containsNumber, validation.valueRequired, validation.containsSpecialChar];

var emailInput = [validation.isEmail, validation.valueRequired, validation.maxLength(50), validation.minLength(2)];

// Create the validator
var signupValidation = validation.createValidator({
  passwordInput: passwordInput,
  emailInput: emailInput
});

/* Memoize and export */
var validator = (0, _lruMemoize2.default)(10)(signupValidation);
exports.default = validator;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/LoginContainer/utils/validation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/LoginContainer/utils/validation.js"); } } })();

/***/ },

/***/ 1381:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meetupsDefaultAction = undefined;

var _constants = __webpack_require__(1382);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// meetupsdefaultAction :: None -> {Action}
var meetupsDefaultAction = exports.meetupsDefaultAction = function meetupsDefaultAction() {
  return {
    type: types.MEETUPS_DEFAULT_ACTION
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MeetupsContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MeetupsContainer/actions.js"); } } })();

/***/ },

/***/ 1382:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MEETUPS_DEFAULT_ACTION = exports.MEETUPS_DEFAULT_ACTION = 'MEETUPS_DEFAULT_ACTION';

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MeetupsContainer/constants.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MeetupsContainer/constants.js"); } } })();

/***/ },

/***/ 1383:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1381);

var MeetupsActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1347);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Hero = __webpack_require__(1318);

var _Hero2 = _interopRequireDefault(_Hero);

var _Headline = __webpack_require__(171);

var _Headline2 = _interopRequireDefault(_Headline);

var _components = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeetupsImage = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/meetups.jpeg?raw=true';

var Meetups = function (_Component) {
  _inherits(Meetups, _Component);

  function Meetups() {
    _classCallCheck(this, Meetups);

    return _possibleConstructorReturn(this, (Meetups.__proto__ || Object.getPrototypeOf(Meetups)).apply(this, arguments));
  }

  _createClass(Meetups, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _indexModule2.default.meetups },
        _react2.default.createElement(
          _Hero2.default,
          {
            backgroundImage: MeetupsImage
          },
          _react2.default.createElement(
            _Headline2.default,
            { strong: true },
            'Udacity Meetups'
          )
        ),
        _react2.default.createElement(_components.MartinRulz, null)
      );
    }
  }]);

  return Meetups;
}(_react.Component);

// mapStateToProps :: {State} -> {Props}


var mapStateToProps = function mapStateToProps(state) {
  return {
    // myProp: state.myProp,
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(MeetupsActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(Meetups, _indexModule2.default);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Container);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MeetupsContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MeetupsContainer/index.js"); } } })();

/***/ },

/***/ 1384:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.membersDefaultAction = undefined;

var _constants = __webpack_require__(1385);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// membersdefaultAction :: None -> {Action}
var membersDefaultAction = exports.membersDefaultAction = function membersDefaultAction() {
  return {
    type: types.MEMBERS_DEFAULT_ACTION
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MembersContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MembersContainer/actions.js"); } } })();

/***/ },

/***/ 1385:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MEMBERS_DEFAULT_ACTION = exports.MEMBERS_DEFAULT_ACTION = 'MEMBERS_DEFAULT_ACTION';

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MembersContainer/constants.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MembersContainer/constants.js"); } } })();

/***/ },

/***/ 1386:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query publicUsers {\n    publicUsers {\n      name\n      avatar\n      bio\n    }\n  }\n'], ['\n  query publicUsers {\n    publicUsers {\n      name\n      avatar\n      bio\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1384);

var MembersActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1348);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _reactApollo = __webpack_require__(572);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _Headline = __webpack_require__(171);

var _Headline2 = _interopRequireDefault(_Headline);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Columns = __webpack_require__(576);

var _Columns2 = _interopRequireDefault(_Columns);

var _components = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MembersContainer = function (_Component) {
  _inherits(MembersContainer, _Component);

  function MembersContainer() {
    _classCallCheck(this, MembersContainer);

    return _possibleConstructorReturn(this, (MembersContainer.__proto__ || Object.getPrototypeOf(MembersContainer)).apply(this, arguments));
  }

  _createClass(MembersContainer, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _props = this.props;
      var users = _props.users;
      var usersLoading = _props.usersLoading;

      return _react2.default.createElement(
        _Section2.default,
        { align: 'center', justify: 'center' },
        usersLoading ? _react2.default.createElement(
          _Section2.default,
          { className: 'full-height', align: 'center', justify: 'center' },
          _react2.default.createElement(_components.LoadingIndicator, { isLoading: true })
        ) : _react2.default.createElement(
          _Box2.default,
          { className: _indexModule2.default.members },
          _react2.default.createElement(
            _Headline2.default,
            { align: 'center', style: { marginTop: 60 } },
            'Our Awesome Members'
          ),
          _react2.default.createElement(_components.Divider, null),
          _react2.default.createElement(
            _Columns2.default,
            {
              className: _indexModule2.default.masonry,
              masonry: true,
              justify: 'center',
              size: 'small',
              maxCount: 3
            },
            users.map(function (user, i) {
              return _react2.default.createElement(
                _Box2.default,
                { size: 'medium', key: i },
                _react2.default.createElement(_components.Member, { user: user })
              );
            })
          )
        )
      );
    }
  }]);

  return MembersContainer;
}(_react.Component);

MembersContainer.propTypes = {
  users: _react.PropTypes.array,
  usersLoading: _react.PropTypes.bool.isRequired,
  usersError: _react.PropTypes.object
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    // myProp: state.myProp,
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(MembersActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(MembersContainer, _indexModule2.default);

var publicUsersQuery = (0, _graphqlTag2.default)(_templateObject);

var ContainerWithData = (0, _reactApollo.graphql)(publicUsersQuery, {
  props: function props(_ref) {
    var _ref$data = _ref.data;
    var error = _ref$data.error;
    var loading = _ref$data.loading;
    var publicUsers = _ref$data.publicUsers;
    return {
      users: publicUsers,
      usersError: error,
      usersLoading: loading
    };
  }
})(Container);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContainerWithData);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MembersContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MembersContainer/index.js"); } } })();

/***/ },

/***/ 1387:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mentorshipDefaultAction = undefined;

var _constants = __webpack_require__(1388);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// mentorshipdefaultAction :: None -> {Action}
var mentorshipDefaultAction = exports.mentorshipDefaultAction = function mentorshipDefaultAction() {
  return {
    type: types.MENTORSHIP_DEFAULT_ACTION
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MentorshipContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MentorshipContainer/actions.js"); } } })();

/***/ },

/***/ 1388:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MENTORSHIP_DEFAULT_ACTION = exports.MENTORSHIP_DEFAULT_ACTION = 'MENTORSHIP_DEFAULT_ACTION';

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MentorshipContainer/constants.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MentorshipContainer/constants.js"); } } })();

/***/ },

/***/ 1389:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1387);

var MentorshipActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1349);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Heading = __webpack_require__(20);

var _Heading2 = _interopRequireDefault(_Heading);

var _Hero = __webpack_require__(1318);

var _Hero2 = _interopRequireDefault(_Hero);

var _Headline = __webpack_require__(171);

var _Headline2 = _interopRequireDefault(_Headline);

var _components = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MentorshipPageImage = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/mentoring.jpg?raw=true';

var Mentorship = function (_Component) {
  _inherits(Mentorship, _Component);

  function Mentorship() {
    _classCallCheck(this, Mentorship);

    return _possibleConstructorReturn(this, (Mentorship.__proto__ || Object.getPrototypeOf(Mentorship)).apply(this, arguments));
  }

  _createClass(Mentorship, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _indexModule2.default.mentorship },
        _react2.default.createElement(
          _Hero2.default,
          {
            backgroundImage: MentorshipPageImage
          },
          _react2.default.createElement(
            _Headline2.default,
            { strong: true },
            'Udacity Mentorship'
          ),
          _react2.default.createElement(
            _Heading2.default,
            { tag: 'h2', strong: true },
            'Together, we are stronger'
          )
        ),
        _react2.default.createElement(_components.MartinRulz, null)
      );
    }
  }]);

  return Mentorship;
}(_react.Component);

// mapStateToProps :: {State} -> {Props}


var mapStateToProps = function mapStateToProps(state) {
  return {
    // myProp: state.myProp,
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(MentorshipActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(Mentorship, _indexModule2.default);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Container);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MentorshipContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/MentorshipContainer/index.js"); } } })();

/***/ },

/***/ 1390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1350);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Heading = __webpack_require__(20);

var _Heading2 = _interopRequireDefault(_Heading);

var _Paragraph = __webpack_require__(121);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Anchor = __webpack_require__(29);

var _Anchor2 = _interopRequireDefault(_Anchor);

var _messageData = __webpack_require__(1391);

var _messageData2 = _interopRequireDefault(_messageData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// importing the gromment components used in this page

// importing the Udacity loading messages and their adapted versions


var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  // eslint-disable-line react/prefer-stateless-function

  function NotFound() {
    _classCallCheck(this, NotFound);

    var _this = _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this));

    _this.renderContent = _this.renderContent.bind(_this);
    return _this;
  }

  _createClass(NotFound, [{
    key: 'renderContent',
    value: function renderContent() {
      // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      // choosing a random entry for the 404 page from messageData
      var randomArticle = getRandomInt(0, _messageData2.default.length);

      return _react2.default.createElement(
        _Box2.default,
        {
          pad: 'large',
          textAlign: 'center',
          className: _indexModule2.default.fillHeight
        },
        _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(
            _Heading2.default,
            { tag: 'h3' },
            'Hello curious adventurer! : )'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            { textAlign: 'center' },
            'You\'ve wandered into uncharted territory. 404-Land.',
            _react2.default.createElement('br', null),
            'If that is right were you belong, then get ready to map!'
          )
        ),
        _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(
            _Heading2.default,
            { tag: 'h1', className: 'problem', alignContent: 'center' },
            _messageData2.default[randomArticle].title
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            { className: 'solution' },
            _messageData2.default[randomArticle].body
          ),
          _react2.default.createElement(
            _Anchor2.default,
            { className: 'solution-link', href: _messageData2.default[randomArticle].link },
            _messageData2.default[randomArticle].description
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _indexModule2.default.notFound },
        this.renderContent()
      );
    }
  }]);

  return NotFound;
}(_react.Component);

var Container = (0, _reactCssModules2.default)(NotFound, _indexModule2.default);

exports.default = Container;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/NotFoundContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/NotFoundContainer/index.js"); } } })();

/***/ },

/***/ 1391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* contains all loading messages from the old Udacity classroom ("original")
and adaptations that refer to these messages. The latter are displayed in case
when there is a 404 error, alongside some links to educate yourself more.

This is both meant to be a nudge to those fun messages, and also an expression
of what I think is an essential trait that Udacity alumnis share:

We like it that there's always more to learn! :) */

var messageData = [{
  original: 'Contemplating banana bread recipes',
  title: 'We could not think of enough banana bread recipes',
  body: 'Learn to make an app that shuffles ingredients endlessly!',
  link: 'https://www.udacity.com/course/ios-developer-nanodegree--nd003',
  description: 'iOS Developer Nanodegree'
}, {
  original: 'Reticulating Splines',
  title: 'We did not manage to reticulate all splines',
  body: 'Learn to reticulate inputs to make cars spin their splines autonomously!',
  link: 'https://www.udacity.com/drive',
  description: 'Self-Driving Car Nanodegree'
}, {
  original: 'The instructors are getting camera-ready for you',
  title: 'The instructors are not quite camera-ready',
  body: 'Learn to make them look good anyways!',
  link: 'https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802',
  description: 'Senior Web-Developer Nanodegree'
}, {
  original: 'The instructor is setting up the classroom',
  title: 'None of the classrooms are currently set up',
  body: 'Learn to create a virtual classroom that is always ready (and needs no brooming)!',
  link: 'https://www.udacity.com/course/vr-developer-nanodegree--nd017',
  description: 'Virtual-Reality Nanodegree'
}, {
  original: 'Thanks for waiting while we prepare the classroom',
  title: 'These classrooms take a while to be prepared',
  body: 'Learn to teach machines that need no classrooms!',
  link: 'https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009',
  description: 'Machine Learning Nanodegree'
}, {
  original: 'Adding duplication fluid to our ditto machine...',
  title: 'Ran out of duplication fluid',
  body: 'Learn to code and make smart functions do the work!',
  link: 'https://www.udacity.com/course/android-developer-nanodegree-by-google--nd801',
  description: 'Android Developer Nanodegree'
}, {
  original: 'Once you have completed the course, cake will be served',
  title: 'There should be some cake here for you.',
  body: 'Learn to make digital cake that almost smells home-made!',
  link: 'https://www.udacity.com/course/vr-developer-nanodegree--nd017',
  description: 'Virtual-Reality Nanodegree'
}, {
  original: 'Dust off your slide-rule...',
  title: 'No need for dusty slide-rules',
  body: 'Learn to move the numbers on your computer!',
  link: 'https://www.udacity.com/course/data-analyst-nanodegree--nd002',
  description: 'Data Analyst Nanodegree'
}, {
  original: 'Cleaning the whiteboard',
  title: 'Clean up this white board',
  body: 'And fill it up with useful information!',
  link: 'https://github.com/udacityalumni/',
  description: 'Contribute to the Alumni-Web-App'
}, {
  original: 'And now for something completely different...',
  title: 'And now for something slightly different...',
  body: 'Learn about Business Analysis, because, you know... money.',
  link: 'https://www.udacity.com/course/predictive-analytics-for-business--nd008',
  description: 'Predictive Analytics for Business Nanodegree'
}, {
  original: 'Check the materials section for each class to find helpful course notes and other information from fellow Udacians!',
  title: 'Check out the wiki for this project to find helpful notes from fellow Alumni!',
  body: 'There is enough to read to fill a rainy day!',
  link: 'https://github.com/udacityalumni/resources/wiki',
  description: 'Learn about the Alumni-Web-App'
}, {
  original: 'Did you know you can meet other Udacians on the Forums?',
  title: 'Did you know you can meet other Alumnis through contributing?',
  body: 'Bring this page into existence (and learn a lot on the way)!',
  link: 'https://github.com/udacityalumni/',
  description: 'Contribute to the Alumni-Web-App'
}, {
  original: 'Waking up the sleepers in the front row...',
  title: 'Good morning front-row-sleeper! Put your dreams onto this page',
  body: 'Become a part of the Developer-Team!',
  link: 'https://github.com/udacityalumni/',
  description: 'Contribute to the Alumni-Web-App'
}, {
  original: 'None',
  title: 'Your code here',
  body: 'If it is empty and you want it, come and make it!',
  link: 'https://github.com/udacityalumni/',
  description: 'Contribute to the Alumni-Web-App'
}];

exports.default = messageData;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/NotFoundContainer/messageData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/NotFoundContainer/messageData.js"); } } })();

/***/ },

/***/ 1392:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPasswordDefaultAction = undefined;

var _constants = __webpack_require__(1393);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// resetPassworddefaultAction :: None -> {Action}
var resetPasswordDefaultAction = exports.resetPasswordDefaultAction = function resetPasswordDefaultAction() {
  return {
    type: types.RESETPASSWORD_DEFAULT_ACTION
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ResetPasswordContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ResetPasswordContainer/actions.js"); } } })();

/***/ },

/***/ 1393:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RESETPASSWORD_DEFAULT_ACTION = exports.RESETPASSWORD_DEFAULT_ACTION = 'RESETPASSWORD_DEFAULT_ACTION';

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ResetPasswordContainer/constants.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ResetPasswordContainer/constants.js"); } } })();

/***/ },

/***/ 1394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formFields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1392);

var ResetPasswordActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1351);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _components = __webpack_require__(26);

var _validation = __webpack_require__(1395);

var _validation2 = _interopRequireDefault(_validation);

var _reduxForm = __webpack_require__(573);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formFields = exports.formFields = ['passwordInput', 'passwordConfirmationInput'];

var ResetPasswordContainer = function (_Component) {
  _inherits(ResetPasswordContainer, _Component);

  function ResetPasswordContainer() {
    _classCallCheck(this, ResetPasswordContainer);

    var _this = _possibleConstructorReturn(this, (ResetPasswordContainer.__proto__ || Object.getPrototypeOf(ResetPasswordContainer)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ResetPasswordContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var query = this.props.location.query;

      if (query.token != null) {
        // Do something with the token
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var fields = _props.fields;
      var invalid = _props.invalid;

      return _react2.default.createElement(
        _Section2.default,
        {
          primary: true,
          pad: { horizontal: 'large' },
          align: 'center',
          justify: 'center',
          className: _indexModule2.default.resetPassword
        },
        _react2.default.createElement(
          _Box2.default,
          {
            size: 'large',
            className: _indexModule2.default.loginFormWrapper,
            align: 'center',
            pad: { horizontal: 'small', vertical: 'small' }
          },
          _react2.default.createElement(_components.PasswordResetForm, _extends({}, fields, {
            invalid: invalid,
            onSubmit: this.handleSubmit
          }))
        )
      );
    }
  }]);

  return ResetPasswordContainer;
}(_react.Component);

ResetPasswordContainer.propTypes = {
  fields: _react.PropTypes.object.isRequired,
  invalid: _react.PropTypes.bool.isRequired,
  location: _react.PropTypes.object.isRequired
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    // myProp: state.myProp,
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(ResetPasswordActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(ResetPasswordContainer, _indexModule2.default);

var FormContainer = (0, _reduxForm.reduxForm)({
  form: 'ResetPassword',
  fields: formFields,
  validate: _validation2.default
})(Container);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormContainer);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ResetPasswordContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ResetPasswordContainer/index.js"); } } })();

/***/ },

/***/ 1395:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validation = __webpack_require__(1315);

var validation = _interopRequireWildcard(_validation);

var _lruMemoize = __webpack_require__(1317);

var _lruMemoize2 = _interopRequireDefault(_lruMemoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Compose validation functions for all input fields
var passwordInput = [validation.containsLowercase, validation.containsUppercase, validation.minLength(8), validation.maxLength(20), validation.containsNumber, validation.valueRequired, validation.containsSpecialChar];

var passwordConfirmationInput = [validation.valueRequired];

// Create the validator
var signupValidation = validation.createValidator({
  passwordInput: passwordInput,
  passwordConfirmationInput: passwordConfirmationInput
});

/* Memoize and export */
var validator = (0, _lruMemoize2.default)(10)(signupValidation);
exports.default = validator;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ResetPasswordContainer/utils/validation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/ResetPasswordContainer/utils/validation.js"); } } })();

/***/ },

/***/ 1396:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSearchArticles = exports.clearSearchError = exports.loadSearchArticlesFailure = exports.loadSearchArticlesSuccess = exports.loadSearchArticlesInitiation = undefined;

var _constants = __webpack_require__(586);

var types = _interopRequireWildcard(_constants);

__webpack_require__(373);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var baseUrl = typeof process.env.BASE_URL !== 'undefined' ? process.env.BASE_URL : 'https://udacity-api.herokuapp.com/';
var articlesUrl = baseUrl + 'api/v1/articles';

// loadSearchArticlesInitiation :: None -> {Action}
var loadSearchArticlesInitiation = exports.loadSearchArticlesInitiation = function loadSearchArticlesInitiation() {
  return {
    type: types.SEARCH_ARTICLES_INITIATION
  };
};

// loadSearchArticlesSuccess :: JSON -> {Action}
var loadSearchArticlesSuccess = exports.loadSearchArticlesSuccess = function loadSearchArticlesSuccess(articles) {
  return {
    type: types.SEARCH_ARTICLES_SUCCESS,
    articles: articles
  };
};

// loadSearchArticlesFailure :: Err -> {Action}
var loadSearchArticlesFailure = exports.loadSearchArticlesFailure = function loadSearchArticlesFailure(error) {
  return {
    type: types.SEARCH_ARTICLES_FAILURE,
    error: error
  };
};

// clearSearchErrors :: None -> {Action}
var clearSearchError = exports.clearSearchError = function clearSearchError() {
  return {
    type: types.CLEAR_SEARCH_ERROR
  };
};

// loadFeaturedArticles :: None -> Thunk
var loadSearchArticles = exports.loadSearchArticles = function loadSearchArticles() {
  return function (dispatch) {
    dispatch(loadSearchArticlesInitiation());
    fetch(articlesUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.articles;
    }).then(function (articles) {
      return articles.filter(function (article) {
        return article.status === 'published';
      });
    }).then(function (articles) {
      return articles.sort(function (a, b) {
        return new Date(a.updated_at) - new Date(b.updated_at);
      });
    }).then(function (articles) {
      dispatch(loadSearchArticlesSuccess(articles));
    }).catch(function (error) {
      return dispatch(loadSearchArticlesFailure(error.message || 'An unknown error has occured'));
    });
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SearchContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SearchContainer/actions.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ },

/***/ 1397:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1396);

var SearchActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1352);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _Anchor = __webpack_require__(29);

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Search = __webpack_require__(577);

var _Search2 = _interopRequireDefault(_Search);

var _LinkPrevious = __webpack_require__(376);

var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

var _List = __webpack_require__(374);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(375);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Header = __webpack_require__(173);

var _Header2 = _interopRequireDefault(_Header);

var _Title = __webpack_require__(174);

var _Title2 = _interopRequireDefault(_Title);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _components = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';


var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

    _this.handleClearError = _this.handleClearError.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var loadSearchArticles = this.props.actions.loadSearchArticles;

      loadSearchArticles();
    }
  }, {
    key: 'handleClearError',
    value: function handleClearError() {
      var clearSearchError = this.props.actions.clearSearchError;

      clearSearchError();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var searchTerm = _props.searchTerm;
      var articles = _props.articles;
      var errorMessage = _props.errorMessage;
      var isLoading = _props.isLoading;

      var filterableTerm = searchTerm && searchTerm.toLowerCase();
      var filteredArticles = articles && articles.filter(function (article) {
        return article.title.toLowerCase().includes(filterableTerm) || article.content.toLowerCase().includes(filterableTerm) || article.user.name.toLowerCase().includes(filterableTerm);
      });
      var articleCount = filteredArticles ? filteredArticles.length : 0;
      return _react2.default.createElement(
        _Section2.default,
        { className: _indexModule2.default.search },
        isLoading && _react2.default.createElement(_components.LoadingIndicator, { isLoading: isLoading }),
        errorMessage && _react2.default.createElement(_components.ErrorAlert, {
          errors: [new Error(errorMessage)],
          onClose: this.handleClearError
        }),
        searchTerm && searchTerm !== '' && _react2.default.createElement(
          _Box2.default,
          { align: 'center', justify: 'center' },
          _react2.default.createElement(
            _Header2.default,
            { justify: 'between' },
            _react2.default.createElement(
              _Title2.default,
              null,
              'Found ' + articleCount + ' results for the term "' + searchTerm + '"'
            )
          ),
          filteredArticles && filteredArticles.length > 0 && _react2.default.createElement(
            _List2.default,
            null,
            filteredArticles.map(function (article, i) {
              return _react2.default.createElement(
                _ListItem2.default,
                { key: i },
                _react2.default.createElement(_components.ArticlePreview, { article: article, searchTerm: searchTerm })
              );
            })
          )
        ),
        (searchTerm && searchTerm === '' || filteredArticles && filteredArticles.length < 1) && _react2.default.createElement(
          _Box2.default,
          { align: 'center', justify: 'center', className: _indexModule2.default.centerBox },
          _react2.default.createElement(_Search2.default, { size: 'xlarge', colorIndex: 'brand' }),
          _react2.default.createElement(_Anchor2.default, {
            icon: _react2.default.createElement(_LinkPrevious2.default, { size: 'small' }),
            href: '/',
            label: 'Back to Home'
          })
        )
      );
    }
  }]);

  return Search;
}(_react.Component);

Search.propTypes = {
  searchTerm: _react.PropTypes.string,
  errorMessage: _react.PropTypes.string,
  articles: _react.PropTypes.array,
  isLoading: _react.PropTypes.bool.isRequired,
  actions: _react.PropTypes.object.isRequired
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    searchTerm: state.app.searchTerm,
    errorMessage: state.searchContainer.error,
    articles: state.searchContainer.articles,
    isLoading: state.searchContainer.isLoading
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(SearchActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(Search, _indexModule2.default);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Container);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SearchContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SearchContainer/index.js"); } } })();

/***/ },

/***/ 1398:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSignup = exports.signupClearMessage = exports.signupSetMessage = exports.clearSignupError = exports.signupRequestFailure = exports.signupRequestSuccess = exports.signupRequestInitiation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(587);

var types = _interopRequireWildcard(_constants);

__webpack_require__(373);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseUrl = typeof process.env.BASE_URL !== 'undefined' ? process.env.BASE_URL : 'https://udacity-api.herokuapp.com/';
var sessionsUrl = baseUrl + 'api/v1/sessions';
var usersUrl = baseUrl + 'api/v1/users';

// signupRequestInitiation :: None -> {Action}
var signupRequestInitiation = exports.signupRequestInitiation = function signupRequestInitiation() {
  return {
    type: types.SIGNUP_REQUEST_INITIATION
  };
};

// signupRequestSuccess :: JSON -> {Action}
var signupRequestSuccess = exports.signupRequestSuccess = function signupRequestSuccess(user) {
  return {
    type: types.SIGNUP_REQUEST_SUCCESS,
    user: user
  };
};

// signupRequestSuccess :: String -> {Action}
var signupRequestFailure = exports.signupRequestFailure = function signupRequestFailure(error) {
  return {
    type: types.SIGNUP_REQUEST_FAILURE,
    error: error
  };
};

// clearSignupError :: None -> {Action}
var clearSignupError = exports.clearSignupError = function clearSignupError() {
  return {
    type: types.CLEAR_SIGNUP_ERROR
  };
};

// signupSetMessage :: String -> {Action}
var signupSetMessage = exports.signupSetMessage = function signupSetMessage(message) {
  return {
    type: types.SIGNUP_SET_MESSAGE,
    message: message
  };
};

// signupClearMessage :: None -> {Action}
var signupClearMessage = exports.signupClearMessage = function signupClearMessage() {
  return {
    type: types.SIGNUP_CLEAR_MESSAGE
  };
};

var SignupParams = function () {
  function SignupParams() {
    _classCallCheck(this, SignupParams);

    this.toJson = this.toJson.bind(this);
    this.toSignin = this.toSignin.bind(this);
    var args = arguments[0];
    this.password = args.password;
    this.email = args.email;
    this.passwordConfirmation = args.passwordConfirmation;
    this.name = args.name;
  }

  _createClass(SignupParams, [{
    key: 'toJson',
    value: function toJson() {
      var body = {
        user: {
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
          name: this.name
        }
      };
      return JSON.stringify(body);
    }
  }, {
    key: 'toSignin',
    value: function toSignin() {
      var body = {
        session: {
          email: this.email,
          password: this.password
        }
      };
      return JSON.stringify(body);
    }
  }]);

  return SignupParams;
}();

var persistAuthToken = function persistAuthToken(authToken) {
  return new Promise(function (resolve) {
    var token = localStorage.setItem('auth_token', authToken);
    resolve(token);
  });
};

var handleSignup = exports.handleSignup = function handleSignup(params) {
  return function (dispatch) {
    dispatch(signupRequestInitiation());
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var signup = new SignupParams(params);
    fetch(usersUrl, {
      method: 'POST',
      headers: headers,
      body: signup.toJson()
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      if (!json.user || json.errors) {
        (function () {
          var errors = [];
          Object.keys(json.errors).map(function (key) {
            errors.push(json.errors[key]);
          });
          throw new Error('The following error occured: ' + Object.keys(json.errors)[0] + ' ' + errors[0]);
        })();
      }
      return json.user;
    }).then(function (user) {
      dispatch(signupRequestSuccess(user));
      return user;
    }).then(function () {
      return fetch(sessionsUrl, {
        method: 'POST',
        headers: headers,
        body: signup.toSignin()
      });
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      var token = json.session.auth_token;
      if (!token) {
        throw new Error('The request failed, please try again.');
      }
      return persistAuthToken(token).then(function (t) {
        return t;
      });
    }).then(function () {
      dispatch(signupSetMessage('Signup was successful!  Redirecting to your profile.'));
    }).catch(function (err) {
      dispatch(signupRequestFailure(err.message));
    });
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SignupContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SignupContainer/actions.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ },

/***/ 1399:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formFields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1398);

var SignupActionCreators = _interopRequireWildcard(_actions);

var _actions2 = __webpack_require__(574);

var AppActions = _interopRequireWildcard(_actions2);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1353);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _validations = __webpack_require__(1400);

var _validations2 = _interopRequireDefault(_validations);

var _reduxForm = __webpack_require__(573);

var _components = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formFields = exports.formFields = ['nameInput', 'emailInput', 'passwordInput', 'passwordConfirmationInput'];

var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleErrorClose = _this.handleErrorClose.bind(_this);
    _this.handleToastClose = _this.handleToastClose.bind(_this);
    return _this;
  }

  _createClass(Signup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var _this2 = this;

      var user = _ref.user;

      if (user) {
        var actions = this.props.actions;

        actions.setPersistentUser(user);
        setTimeout(function () {
          _this2.context.router.push('/me/profile');
        }, 3000);
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _props$fields = this.props.fields;
      var nameInput = _props$fields.nameInput;
      var emailInput = _props$fields.emailInput;
      var passwordInput = _props$fields.passwordInput;
      var passwordConfirmationInput = _props$fields.passwordConfirmationInput;

      this.props.actions.handleSignup({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        passwordConfirmation: passwordConfirmationInput.value
      });
    }
  }, {
    key: 'handleErrorClose',
    value: function handleErrorClose() {
      var clearSignupError = this.props.actions.clearSignupError;

      clearSignupError();
    }
  }, {
    key: 'handleToastClose',
    value: function handleToastClose() {
      var signupClearMessage = this.props.actions.signupClearMessage;

      signupClearMessage();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var fields = _props.fields;
      var isLoading = _props.isLoading;
      var errorMessage = _props.errorMessage;
      var valid = _props.valid;
      var message = _props.message;

      return _react2.default.createElement(
        _Section2.default,
        {
          primary: true,
          pad: { horizontal: 'large' },
          align: 'center',
          justify: 'center',
          className: _indexModule2.default.signup
        },
        message && _react2.default.createElement(_components.ToastMessage, {
          message: message,
          onClose: this.handleToastClose
        }),
        isLoading && _react2.default.createElement(_components.LoadingIndicator, {
          message: 'Submitting',
          isLoading: isLoading
        }),
        errorMessage && _react2.default.createElement(_components.ErrorAlert, {
          errors: [new Error(errorMessage)],
          onClose: this.handleErrorClose
        }),
        _react2.default.createElement(
          _Box2.default,
          {
            size: 'large',
            className: _indexModule2.default.loginFormWrapper,
            align: 'center',
            pad: { horizontal: 'small', vertical: 'small' }
          },
          _react2.default.createElement(_components.SignupForm, _extends({}, fields, {
            isValid: valid,
            onSubmit: this.handleSubmit
          }))
        )
      );
    }
  }]);

  return Signup;
}(_react.Component);

Signup.propTypes = {
  fields: _react.PropTypes.object.isRequired,
  actions: _react.PropTypes.object.isRequired,
  errorMessage: _react.PropTypes.string,
  isLoading: _react.PropTypes.bool.isRequired,
  valid: _react.PropTypes.bool.isRequired,
  message: _react.PropTypes.string.isRequired
};

Signup.contextTypes = {
  router: _react.PropTypes.object.isRequired
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    errorMessage: state.signupContainer.error,
    isLoading: state.signupContainer.isLoading,
    user: state.signupContainer.user,
    message: state.signupContainer.message
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(Object.assign({}, SignupActionCreators, AppActions), dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(Signup, _indexModule2.default);

var FormContainer = (0, _reduxForm.reduxForm)({
  form: 'Signup',
  fields: formFields,
  validate: _validations2.default
})(Container);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormContainer);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SignupContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SignupContainer/index.js"); } } })();

/***/ },

/***/ 1400:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validation = __webpack_require__(1315);

var validation = _interopRequireWildcard(_validation);

var _lruMemoize = __webpack_require__(1317);

var _lruMemoize2 = _interopRequireDefault(_lruMemoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Compose validation functions for all input fields
var passwordInput = [validation.containsLowercase, validation.containsUppercase, validation.minLength(8), validation.maxLength(20), validation.containsNumber, validation.valueRequired, validation.containsSpecialChar];

var nameInput = [validation.containsTwoWords, validation.valueRequired, validation.maxLength(50)];

var emailInput = [validation.isEmail, validation.valueRequired, validation.maxLength(50), validation.minLength(2)];

var passwordConfirmationInput = [validation.valueRequired];

// Create the validator
var signupValidation = validation.createValidator({
  passwordInput: passwordInput,
  nameInput: nameInput,
  emailInput: emailInput,
  passwordConfirmationInput: passwordConfirmationInput
});

/* Memoize and export */
var validator = (0, _lruMemoize2.default)(10)(signupValidation);
exports.default = validator;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SignupContainer/utils/validations.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SignupContainer/utils/validations.js"); } } })();

/***/ },

/***/ 1401:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadArticle = exports.closeArticleErrors = exports.loadArticleFailure = exports.loadArticleSuccess = exports.loadArticleInitiation = undefined;

var _constants = __webpack_require__(588);

var types = _interopRequireWildcard(_constants);

__webpack_require__(373);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var baseUrl = typeof process.env.BASE_URL !== 'undefined' ? process.env.BASE_URL : 'https://udacity-api.herokuapp.com/';
var articleUrl = function articleUrl(id) {
  return baseUrl + 'api/v1/articles/' + id;
};

// loadArticleInitiation :: None -> {Action}
var loadArticleInitiation = exports.loadArticleInitiation = function loadArticleInitiation(articleId) {
  return {
    type: types.ARTICLE_INITIATION,
    articleId: articleId
  };
};

// loadArticleSuccess :: JSON -> {Action}
var loadArticleSuccess = exports.loadArticleSuccess = function loadArticleSuccess(article) {
  return {
    type: types.ARTICLE_SUCCESS,
    article: article
  };
};

// loadArticleFailure :: Err -> {Action}
var loadArticleFailure = exports.loadArticleFailure = function loadArticleFailure(errors) {
  return {
    type: types.ARTICLE_FAILURE,
    errors: errors
  };
};

var closeArticleErrors = exports.closeArticleErrors = function closeArticleErrors() {
  return {
    type: types.CLOSE_ARTICLE_ERRORS
  };
};

var loadArticle = exports.loadArticle = function loadArticle(articleId) {
  return function (dispatch) {
    dispatch(loadArticleInitiation(articleId));
    fetch(articleUrl(articleId)).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.article;
    }).then(function (article) {
      if (article.status !== 'published') {
        return null;
      }
      return article;
    }).then(function (article) {
      dispatch(loadArticleSuccess(article));
    }).catch(function (error) {
      return dispatch(loadArticleFailure([error]));
    });
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SingleArticleContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SingleArticleContainer/actions.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ },

/***/ 1402:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    fragment singleArticleFragment on Article {\n      title\n      status\n      content\n      spotlighted\n      feature_image\n      created_at\n      updated_at\n      tags {\n        id\n        tag\n      }\n      user {\n        name\n        bio\n        avatar\n      }\n    }\n  '], ['\n    fragment singleArticleFragment on Article {\n      title\n      status\n      content\n      spotlighted\n      feature_image\n      created_at\n      updated_at\n      tags {\n        id\n        tag\n      }\n      user {\n        name\n        bio\n        avatar\n      }\n    }\n  ']);

var _apolloClient = __webpack_require__(172);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var singleArticleFragment = (0, _apolloClient.createFragment)((0, _graphqlTag2.default)(_templateObject));

exports.default = singleArticleFragment;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SingleArticleContainer/graph/fragments.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SingleArticleContainer/graph/fragments.js"); } } })();

/***/ },

/***/ 1403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query article($slug: String) {\n    article(slug: $slug) {\n      ...singleArticleFragment\n    }\n  }\n'], ['\n  query article($slug: String) {\n    article(slug: $slug) {\n      ...singleArticleFragment\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1401);

var SingleArticleActionCreators = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1354);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _components = __webpack_require__(26);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Status = __webpack_require__(378);

var _Status2 = _interopRequireDefault(_Status);

var _reactApollo = __webpack_require__(572);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _a11y = __webpack_require__(575);

var _fragments = __webpack_require__(1402);

var _fragments2 = _interopRequireDefault(_fragments);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleArticleContainer = function (_Component) {
  _inherits(SingleArticleContainer, _Component);

  function SingleArticleContainer(props) {
    _classCallCheck(this, SingleArticleContainer);

    var _this = _possibleConstructorReturn(this, (SingleArticleContainer.__proto__ || Object.getPrototypeOf(SingleArticleContainer)).call(this, props));

    _this.handleLoadingOfArticle = _this.handleLoadingOfArticle.bind(_this);
    return _this;
  }

  _createClass(SingleArticleContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleLoadingOfArticle();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var article = newProps.article;

      if (article) {
        if (window) {
          (0, _a11y.updatePageTitle)(article.title.slice(0, 10) + ' | Udacity Alumni Blog');
        }
      }
    }
  }, {
    key: 'handleLoadingOfArticle',
    value: function handleLoadingOfArticle() {
      var params = this.props.params;

      var slug = params.slug;
      if (!slug) {
        var router = this.context.router;

        router.push('/');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var articleLoading = _props.articleLoading;
      var singleArticle = _props.singleArticle;
      var errors = _props.errors;
      var actions = _props.actions;

      return _react2.default.createElement(
        _Section2.default,
        {
          align: 'center',
          justify: 'center',
          className: _indexModule2.default.singleArticleContainer
        },
        articleLoading ? _react2.default.createElement(
          _Section2.default,
          {
            align: 'center',
            justify: 'center',
            className: 'full-height'
          },
          _react2.default.createElement(_components.LoadingIndicator, {
            isLoading: true
          })
        ) : _react2.default.createElement(
          _Box2.default,
          { className: _indexModule2.default.mainSection },
          singleArticle ? _react2.default.createElement(
            'div',
            { className: _indexModule2.default.singleArticle },
            _react2.default.createElement(_components.SingleArticle, { article: singleArticle })
          ) : _react2.default.createElement(
            'div',
            { className: _indexModule2.default.center },
            _react2.default.createElement(_Status2.default, { value: 'unknown' }),
            _react2.default.createElement(
              'figcaption',
              null,
              ' No Article Found '
            )
          ),
          errors && errors.length > 0 && _react2.default.createElement(_components.ErrorAlert, {
            errors: errors,
            onClose: function onClose() {
              return actions.closeArticleErrors();
            }
          })
        )
      );
    }
  }]);

  return SingleArticleContainer;
}(_react.Component);

SingleArticleContainer.propTypes = {
  articleLoading: _react.PropTypes.bool.isRequired,
  actions: _react.PropTypes.object.isRequired,
  singleArticle: _react.PropTypes.object,
  errors: _react.PropTypes.array,
  params: _react.PropTypes.object.isRequired,
  location: _react.PropTypes.object.isRequired
};

SingleArticleContainer.contextTypes = {
  router: _react.PropTypes.object.isRequired
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    errors: state.singleArticleContainer.errors
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(SingleArticleActionCreators, dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(SingleArticleContainer, _indexModule2.default);

var loadArticleQuery = (0, _graphqlTag2.default)(_templateObject);

var ContainerWithData = (0, _reactApollo.graphql)(loadArticleQuery, {
  options: function options(ownProps) {
    return {
      fragments: [_fragments2.default],
      skip: !ownProps.params.slug,
      variables: {
        slug: ownProps.params.slug
      }
    };
  },
  props: function props(_ref) {
    var _ref$data = _ref.data;
    var loading = _ref$data.loading;
    var article = _ref$data.article;
    var error = _ref$data.error;
    return {
      singleArticle: article,
      articleLoading: loading,
      articleError: error
    };
  }
})(Container);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContainerWithData);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SingleArticleContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/SingleArticleContainer/index.js"); } } })();

/***/ },

/***/ 1404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileTogglePublic = exports.setDefaultInputs = exports.profileEditEmployer = exports.profileEditEmail = exports.profileEditAvatar = exports.profileCancelEditing = exports.profileClearError = exports.profileSubmissionFailure = exports.profileSubmissionSuccess = exports.profileSubmissionInitiation = exports.profileEditBio = exports.profileStartEditing = undefined;

var _constants = __webpack_require__(589);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// profileStartEditing :: None -> {Action}
var profileStartEditing = exports.profileStartEditing = function profileStartEditing() {
  return {
    type: types.PROFILE_START_EDITING
  };
};

// profileEditBio :: String -> {Action}
var profileEditBio = exports.profileEditBio = function profileEditBio(bio) {
  return {
    type: types.PROFILE_EDIT_BIO,
    bio: bio
  };
};

// profileSubmissionInitiation :: None -> {Action}
var profileSubmissionInitiation = exports.profileSubmissionInitiation = function profileSubmissionInitiation() {
  return {
    type: types.PROFILE_SUBMISSION_INITIATION
  };
};

// profileSubmissionSuccess :: None -> {Action}
var profileSubmissionSuccess = exports.profileSubmissionSuccess = function profileSubmissionSuccess() {
  return {
    type: types.PROFILE_SUBMISSION_SUCCESS
  };
};

// profileSubmissionFailure :: JSON -> {Action}
var profileSubmissionFailure = exports.profileSubmissionFailure = function profileSubmissionFailure(error) {
  return {
    type: types.PROFILE_SUBMISSION_FAILURE,
    error: error
  };
};

// profileClearError :: None -> {Action}
var profileClearError = exports.profileClearError = function profileClearError() {
  return {
    type: types.PROFILE_CLEAR_ERROR
  };
};

// profileClearError :: None -> {Action}
var profileCancelEditing = exports.profileCancelEditing = function profileCancelEditing() {
  return {
    type: types.PROFILE_CANCEL_EDITING
  };
};

// profileEditAvatar :: String -> {Action}
var profileEditAvatar = exports.profileEditAvatar = function profileEditAvatar(avatar) {
  return {
    type: types.PROFILE_EDIT_AVATAR,
    avatar: avatar
  };
};

// profileEditEmail :: String -> {Action}
var profileEditEmail = exports.profileEditEmail = function profileEditEmail(email) {
  return {
    type: types.PROFILE_EDIT_EMAIL,
    email: email
  };
};

// profileEditEmployer :: String -> {Action}
var profileEditEmployer = exports.profileEditEmployer = function profileEditEmployer(employer) {
  return {
    type: types.PROFILE_EDIT_EMPLOYER,
    employer: employer
  };
};

// setDefaultInputs :: Object -> {Action}
var setDefaultInputs = exports.setDefaultInputs = function setDefaultInputs(inputs) {
  return {
    type: types.PROFILE_SET_DEFAULT_INPUTS,
    inputs: inputs
  };
};

var profileTogglePublic = exports.profileTogglePublic = function profileTogglePublic() {
  return {
    type: types.PROFILE_TOGGLE_PUBLIC
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/UserProfileContainer/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/UserProfileContainer/actions.js"); } } })();

/***/ },

/***/ 1405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authUserDataFragment = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    fragment authUserData on AuthUser {\n      id\n      bio\n      email\n      name\n      avatar\n      public\n      role\n    }\n  '], ['\n    fragment authUserData on AuthUser {\n      id\n      bio\n      email\n      name\n      avatar\n      public\n      role\n    }\n  ']);

var _apolloClient = __webpack_require__(172);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var authUserDataFragment = exports.authUserDataFragment = (0, _apolloClient.createFragment)((0, _graphqlTag2.default)(_templateObject));

exports.default = authUserDataFragment;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/UserProfileContainer/graph/authUserDataFragment.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/UserProfileContainer/graph/authUserDataFragment.js"); } } })();

/***/ },

/***/ 1406:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  mutation updateProfile($profile: ProfileInput, $authToken: String!) {\n    UpdateProfile(input: { profile: $profile, auth_token: $authToken }) {\n      user {\n        ...authUserData\n      }\n    }\n  }\n'], ['\n  mutation updateProfile($profile: ProfileInput, $authToken: String!) {\n    UpdateProfile(input: { profile: $profile, auth_token: $authToken }) {\n      user {\n        ...authUserData\n      }\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(170);

var _redux = __webpack_require__(85);

var _actions = __webpack_require__(1404);

var UserProfileActionCreators = _interopRequireWildcard(_actions);

var _actions2 = __webpack_require__(574);

var AppActions = _interopRequireWildcard(_actions2);

var _reactCssModules = __webpack_require__(13);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _indexModule = __webpack_require__(1355);

var _indexModule2 = _interopRequireDefault(_indexModule);

var _Section = __webpack_require__(63);

var _Section2 = _interopRequireDefault(_Section);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _authUserDataFragment = __webpack_require__(1405);

var _authUserDataFragment2 = _interopRequireDefault(_authUserDataFragment);

var _reactApollo = __webpack_require__(572);

var _graphqlTag = __webpack_require__(1314);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _components = __webpack_require__(26);

var _submission = __webpack_require__(1407);

var _submission2 = _interopRequireDefault(_submission);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserProfileContainer = function (_Component) {
  _inherits(UserProfileContainer, _Component);

  function UserProfileContainer() {
    _classCallCheck(this, UserProfileContainer);

    var _this = _possibleConstructorReturn(this, (UserProfileContainer.__proto__ || Object.getPrototypeOf(UserProfileContainer)).call(this));

    _this.setDefaultValues = _this.setDefaultValues.bind(_this);
    _this.handleSubmission = _this.handleSubmission.bind(_this);
    return _this;
  }

  _createClass(UserProfileContainer, [{
    key: 'setDefaultValues',
    value: function setDefaultValues() {
      var _props = this.props;
      var user = _props.user;
      var actions = _props.actions;

      actions.setDefaultInputs({
        bio: user.bio,
        email: user.email,
        avatar: user.avatar,
        public: user.public
      });
    }
  }, {
    key: 'handleSubmission',
    value: function handleSubmission() {
      var _props2 = this.props;
      var bioInput = _props2.bioInput;
      var emailInput = _props2.emailInput;
      var avatarInput = _props2.avatarInput;
      var publicInput = _props2.publicInput;
      var actions = _props2.actions;
      var authToken = _props2.authToken;
      var updateProfile = _props2.updateProfile;

      var profileData = new _submission2.default({
        authToken: authToken,
        bioInput: bioInput,
        avatarInput: avatarInput,
        emailInput: emailInput,
        publicInput: publicInput
      }).toData();
      actions.profileSubmissionInitiation();
      updateProfile(profileData).then(function () {
        return actions.profileSubmissionSuccess();
      }).catch(function (err) {
        return actions.profileSubmissionFailure(err.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props;
      var user = _props3.user;
      var bioInput = _props3.bioInput;
      var avatarInput = _props3.avatarInput;
      var isEditing = _props3.isEditing;
      var emailInput = _props3.emailInput;
      var isLoading = _props3.isLoading;
      var submissionError = _props3.submissionError;
      var actions = _props3.actions;
      var publicInput = _props3.publicInput;

      return _react2.default.createElement(
        _Section2.default,
        { className: _indexModule2.default.userProfile },
        _react2.default.createElement(
          _Box2.default,
          {
            justify: 'center',
            align: 'center',
            pad: { horizontal: 'large' }
          },
          isLoading && _react2.default.createElement(
            _Section2.default,
            {
              className: 'full-height',
              align: 'center',
              justify: 'center'
            },
            _react2.default.createElement(_components.LoadingIndicator, { isLoading: true })
          ),
          submissionError && _react2.default.createElement(_components.ToastMessage, {
            status: 'critical',
            message: submissionError,
            onClose: function onClose() {
              return actions.profileClearError();
            }
          }),
          user && _react2.default.createElement(_components.UserProfile, {
            user: user,
            isEditing: isEditing,
            onTogglePublic: function onTogglePublic() {
              return actions.profileTogglePublic();
            },
            onEditEmail: function onEditEmail(_ref) {
              var target = _ref.target;
              return actions.profileEditEmail(target.value);
            },
            onEditBio: function onEditBio(_ref2) {
              var target = _ref2.target;
              return actions.profileEditBio(target.value);
            },
            onEditAvatar: function onEditAvatar(_ref3) {
              var target = _ref3.target;
              return actions.profileEditAvatar(target.value);
            },
            onClickToEdit: function onClickToEdit() {
              _this2.setDefaultValues();
              actions.profileStartEditing();
            },
            onCancel: function onCancel() {
              return actions.profileCancelEditing();
            },
            onSaveEdit: this.handleSubmission,
            bioInput: bioInput,
            avatarInput: avatarInput,
            emailInput: emailInput,
            publicInput: publicInput
          })
        )
      );
    }
  }]);

  return UserProfileContainer;
}(_react.Component);

UserProfileContainer.propTypes = {
  actions: _react.PropTypes.object.isRequired,
  updateProfile: _react.PropTypes.func.isRequired,
  user: _react.PropTypes.object,
  isEditing: _react.PropTypes.bool.isRequired,
  bioInput: _react.PropTypes.string,
  submissionError: _react.PropTypes.string,
  refetch: _react.PropTypes.func.isRequired,
  avatarInput: _react.PropTypes.string,
  employerInput: _react.PropTypes.string,
  emailInput: _react.PropTypes.string,
  isLoading: _react.PropTypes.bool.isRequired,
  authToken: _react.PropTypes.string.isRequired,
  publicInput: _react.PropTypes.bool.isRequired
};

// mapStateToProps :: {State} -> {Props}
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.app.user,
    authToken: state.app.authToken,
    bioInput: state.userProfileContainer.bioInput,
    submissionError: state.userProfileContainer.error,
    isEditing: state.userProfileContainer.isEditing,
    avatarInput: state.userProfileContainer.avatarInput,
    emailInput: state.userProfileContainer.emailInput,
    employerInput: state.userProfileContainer.employerInput,
    publicInput: state.userProfileContainer.publicInput,
    isLoading: state.userProfileContainer.isLoading
  };
};

// mapDispatchToProps :: Dispatch -> {Action}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(Object.assign({}, AppActions, UserProfileActionCreators), dispatch)
  };
};

var Container = (0, _reactCssModules2.default)(UserProfileContainer, _indexModule2.default);

var updateProfileMutation = (0, _graphqlTag2.default)(_templateObject);

var ContainerWithMutation = (0, _reactApollo.graphql)(updateProfileMutation, {
  options: function options() {
    return {
      fragments: [_authUserDataFragment2.default]
    };
  },
  props: function props(_ref4) {
    var ownProps = _ref4.ownProps;
    var mutate = _ref4.mutate;
    return {
      updateProfile: function updateProfile(_ref5) {
        var authToken = _ref5.authToken;
        var profile = _ref5.profile;

        return new Promise(function (resolve, reject) {
          return mutate({
            variables: { authToken: authToken, profile: profile }
          }).then(function (mutationResult) {
            ownProps.actions.setPersistentUser(mutationResult.data.UpdateProfile.user);
            resolve(mutationResult);
          }).catch(function (err) {
            return reject(err);
          });
        });
      }
    };
  }
})(Container);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContainerWithMutation);

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/UserProfileContainer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/UserProfileContainer/index.js"); } } })();

/***/ },

/***/ 1407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProfileSubmission = function () {
  function ProfileSubmission() {
    _classCallCheck(this, ProfileSubmission);

    this.toData = this.toData.bind(this);
    var args = arguments[0];
    this.authToken = args.authToken;
    this.profile = {
      bio: args.bioInput,
      avatar: args.avatarInput,
      email: args.emailInput,
      public: args.publicInput
    };
  }

  _createClass(ProfileSubmission, [{
    key: "toData",
    value: function toData() {
      return {
        authToken: this.authToken,
        profile: this.profile
      };
    }
  }]);

  return ProfileSubmission;
}();

exports.default = ProfileSubmission;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/UserProfileContainer/model/submission.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/UserProfileContainer/model/submission.js"); } } })();

/***/ },

/***/ 1408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LandingContainer = exports.ContentDashboardContainer = exports.LoginContainer = exports.SignupContainer = exports.CmsEditorContainer = exports.SingleArticleContainer = exports.ArticleFeedContainer = exports.SearchContainer = exports.NotFoundContainer = exports.MeetupsContainer = exports.MentorshipContainer = exports.CarouselWidgetContainer = exports.UserProfileContainer = exports.ArticleArchiveContainer = exports.MembersContainer = exports.ResetPasswordContainer = undefined;

var _ResetPasswordContainer2 = __webpack_require__(1394);

var _ResetPasswordContainer3 = _interopRequireDefault(_ResetPasswordContainer2);

var _MembersContainer2 = __webpack_require__(1386);

var _MembersContainer3 = _interopRequireDefault(_MembersContainer2);

var _ArticleArchiveContainer2 = __webpack_require__(1364);

var _ArticleArchiveContainer3 = _interopRequireDefault(_ArticleArchiveContainer2);

var _UserProfileContainer2 = __webpack_require__(1406);

var _UserProfileContainer3 = _interopRequireDefault(_UserProfileContainer2);

var _CarouselWidgetContainer2 = __webpack_require__(1368);

var _CarouselWidgetContainer3 = _interopRequireDefault(_CarouselWidgetContainer2);

var _MentorshipContainer2 = __webpack_require__(1389);

var _MentorshipContainer3 = _interopRequireDefault(_MentorshipContainer2);

var _MeetupsContainer2 = __webpack_require__(1383);

var _MeetupsContainer3 = _interopRequireDefault(_MeetupsContainer2);

var _NotFoundContainer2 = __webpack_require__(1390);

var _NotFoundContainer3 = _interopRequireDefault(_NotFoundContainer2);

var _SearchContainer2 = __webpack_require__(1397);

var _SearchContainer3 = _interopRequireDefault(_SearchContainer2);

var _ArticleFeedContainer2 = __webpack_require__(1366);

var _ArticleFeedContainer3 = _interopRequireDefault(_ArticleFeedContainer2);

var _SingleArticleContainer2 = __webpack_require__(1403);

var _SingleArticleContainer3 = _interopRequireDefault(_SingleArticleContainer2);

var _CmsEditorContainer2 = __webpack_require__(1372);

var _CmsEditorContainer3 = _interopRequireDefault(_CmsEditorContainer2);

var _SignupContainer2 = __webpack_require__(1399);

var _SignupContainer3 = _interopRequireDefault(_SignupContainer2);

var _LoginContainer2 = __webpack_require__(1379);

var _LoginContainer3 = _interopRequireDefault(_LoginContainer2);

var _ContentDashboardContainer2 = __webpack_require__(1375);

var _ContentDashboardContainer3 = _interopRequireDefault(_ContentDashboardContainer2);

var _LandingContainer2 = __webpack_require__(1377);

var _LandingContainer3 = _interopRequireDefault(_LandingContainer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ResetPasswordContainer = _ResetPasswordContainer3.default; /* Assemble all containers for export */

exports.MembersContainer = _MembersContainer3.default;
exports.ArticleArchiveContainer = _ArticleArchiveContainer3.default;
exports.UserProfileContainer = _UserProfileContainer3.default;
exports.CarouselWidgetContainer = _CarouselWidgetContainer3.default;
exports.MentorshipContainer = _MentorshipContainer3.default;
exports.MeetupsContainer = _MeetupsContainer3.default;
exports.NotFoundContainer = _NotFoundContainer3.default;
exports.SearchContainer = _SearchContainer3.default;
exports.ArticleFeedContainer = _ArticleFeedContainer3.default;
exports.SingleArticleContainer = _SingleArticleContainer3.default;
exports.CmsEditorContainer = _CmsEditorContainer3.default;
exports.SignupContainer = _SignupContainer3.default;
exports.LoginContainer = _LoginContainer3.default;
exports.ContentDashboardContainer = _ContentDashboardContainer3.default;
exports.LandingContainer = _LandingContainer3.default;

 ;(function register() { /* react-hot-loader/webpack */ if (false) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/myMac/Developer/works-in-progress/udacity-alumni/client/app/src/containers/index.js"); } } })();

/***/ },

/***/ 1414:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1294)();
// imports


// module
exports.push([module.i, ".app-src-pages-LandingPage-___index-module__container___3hjVU {\n  min-height: 100vh;\n  width: 100%;\n  background: #fafbfc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFvQixFQUFFIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZmJmYzsgfVxuIl19 */", ""]);

// exports
exports.locals = {
	"container": "app-src-pages-LandingPage-___index-module__container___3hjVU"
};

/***/ },

/***/ 1432:
[1449, 1414],

/***/ 1449:
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(__webpack_module_template_argument_0__);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1295)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/resolve-url-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./index.module.scss", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/resolve-url-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./index.module.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

});