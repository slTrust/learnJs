/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
(function (global, factory) {

	"use strict";

	if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var _slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call(Object);

	var support = {};

	function DOMEval(code, doc) {
		doc = doc || document;

		var script = doc.createElement("script");

		script.text = code;
		doc.head.appendChild(script).parentNode.removeChild(script);
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module


	var version = "3.2.1",


	// Define a local copy of jQuery
	jQuery = function jQuery(selector, context) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([a-z])/g,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function fcamelCase(all, letter) {
		return letter.toUpperCase();
	};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function toArray() {
			return _slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function get(num) {

			// Return all the elements in a clean array
			if (num == null) {
				return _slice.call(this);
			}

			// Return just the one element from the set
			return num < 0 ? this[num + this.length] : this[num];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function pushStack(elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function each(callback) {
			return jQuery.each(this, callback);
		},

		map: function map(callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function slice() {
			return this.pushStack(_slice.apply(this, arguments));
		},

		first: function first() {
			return this.eq(0);
		},

		last: function last() {
			return this.eq(-1);
		},

		eq: function eq(i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function end() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {

			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {

				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

						if (copyIsArray) {
							copyIsArray = false;
							clone = src && Array.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function error(msg) {
			throw new Error(msg);
		},

		noop: function noop() {},

		isFunction: function isFunction(obj) {
			return jQuery.type(obj) === "function";
		},

		isWindow: function isWindow(obj) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function isNumeric(obj) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type(obj);
			return (type === "number" || type === "string") &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN(obj - parseFloat(obj));
		},

		isPlainObject: function isPlainObject(obj) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if (!obj || toString.call(obj) !== "[object Object]") {
				return false;
			}

			proto = getProto(obj);

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if (!proto) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
		},

		isEmptyObject: function isEmptyObject(obj) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for (name in obj) {
				return false;
			}
			return true;
		},

		type: function type(obj) {
			if (obj == null) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		},

		// Evaluates a script in a global context
		globalEval: function globalEval(code) {
			DOMEval(code);
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function camelCase(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		each: function each(obj, callback) {
			var length,
			    i = 0;

			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function trim(text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function makeArray(arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArrayLike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function inArray(elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function merge(first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			for (; j < len; j++) {
				first[i++] = second[j];
			}

			first.length = i;

			return first;
		},

		grep: function grep(elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function map(elems, callback, arg) {
			var length,
			    value,
			    i = 0,
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function proxy(fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = _slice.call(arguments, 2);
			proxy = function proxy() {
				return fn.apply(context || this, args.concat(_slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	if (typeof Symbol === "function") {
		jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	}

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArrayLike(obj) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
		    type = jQuery.type(obj);

		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.3.3
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-08-08
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function sortOrder(a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function indexOf(list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",


		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + identifier + ")"),
			"CLASS": new RegExp("^\\.(" + identifier + ")"),
			"TAG": new RegExp("^(" + identifier + "|[*])"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,


		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function funescape(_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    fcssescape = function fcssescape(ch, asCodePoint) {
			if (asCodePoint) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if (ch === "\0") {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function unloadHandler() {
			setDocument();
		},
		    disabledAncestor = addCombinator(function (elem) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		}, { dir: "parentNode", next: "legend" });

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var m,
			    i,
			    elem,
			    nid,
			    match,
			    groups,
			    newSelector,
			    newContext = context && context.ownerDocument,


			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

			results = results || [];

			// Return early from calls with invalid selector or context
			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			// Try to shortcut find operations (as opposed to filters) in HTML documents
			if (!seed) {

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
				context = context || document;

				if (documentIsHTML) {

					// If the selector is sufficiently simple, try using a "get*By*" DOM method
					// (excepting DocumentFragment context, where the methods don't exist)
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

						// ID selector
						if (m = match[1]) {

							// Document context
							if (nodeType === 9) {
								if (elem = context.getElementById(m)) {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}

								// Element context
							} else {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

									results.push(elem);
									return results;
								}
							}

							// Type selector
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;

							// Class selector
						} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					// Take advantage of querySelectorAll
					if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

						if (nodeType !== 1) {
							newContext = context;
							newSelector = selector;

							// qSA looks outside Element context, which is not what we want
							// Thanks to Andrew Dupont for this workaround technique
							// Support: IE <=8
							// Exclude object elements
						} else if (context.nodeName.toLowerCase() !== "object") {

							// Capture the context ID, setting it first if necessary
							if (nid = context.getAttribute("id")) {
								nid = nid.replace(rcssescape, fcssescape);
							} else {
								context.setAttribute("id", nid = expando);
							}

							// Prefix every selector in the list
							groups = tokenize(selector);
							i = groups.length;
							while (i--) {
								groups[i] = "#" + nid + " " + toSelector(groups[i]);
							}
							newSelector = groups.join(",");

							// Expand context for sibling selectors
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (nid === expando) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
		function assert(fn) {
			var el = document.createElement("fieldset");

			try {
				return !!fn(el);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (el.parentNode) {
					el.parentNode.removeChild(el);
				}
				// release memory in IE
				el = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = arr.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
		function createDisabledPseudo(disabled) {

			// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
			return function (elem) {

				// Only certain elements can match :enabled or :disabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
				if ("form" in elem) {

					// Check for inherited disabledness on relevant non-disabled elements:
					// * listed form-associated elements in a disabled fieldset
					//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
					// * option elements in a disabled optgroup
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
					// All such elements have a "form" property.
					if (elem.parentNode && elem.disabled === false) {

						// Option elements defer to a parent optgroup if present
						if ("label" in elem) {
							if ("label" in elem.parentNode) {
								return elem.parentNode.disabled === disabled;
							} else {
								return elem.disabled === disabled;
							}
						}

						// Support: IE 6 - 11
						// Use the isDisabled shortcut property to check for disabled fieldset ancestors
						return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
					}

					return elem.disabled === disabled;

					// Try to winnow out elements that can't be disabled before trusting the disabled property.
					// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
					// even exist on them, let alone have a boolean value.
				} else if ("label" in elem) {
					return elem.disabled === disabled;
				}

				// Remaining elements are neither :enabled nor :disabled
				return false;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    subWindow,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// Return early if doc is invalid or already selected
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Update global variables
			document = doc;
			docElem = document.documentElement;
			documentIsHTML = !isXML(document);

			// Support: IE 9-11, Edge
			// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
			if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

				// Support: IE 11, Edge
				if (subWindow.addEventListener) {
					subWindow.addEventListener("unload", unloadHandler, false);

					// Support: IE 9 - 10 only
				} else if (subWindow.attachEvent) {
					subWindow.attachEvent("onunload", unloadHandler);
				}
			}

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (el) {
				el.className = "i";
				return !el.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (el) {
				el.appendChild(document.createComment(""));
				return !el.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(document.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programmatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (el) {
				docElem.appendChild(el).id = expando;
				return !document.getElementsByName || !document.getElementsByName(expando).length;
			});

			// ID filter and find
			if (support.getById) {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var elem = context.getElementById(id);
						return elem ? [elem] : [];
					}
				};
			} else {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};

				// Support: IE 6 - 7 only
				// getElementById is not reliable as a find shortcut
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var node,
						    i,
						    elems,
						    elem = context.getElementById(id);

						if (elem) {

							// Verify the id attribute
							node = elem.getAttributeNode("id");
							if (node && node.value === id) {
								return [elem];
							}

							// Fall back on getElementsByName
							elems = context.getElementsByName(id);
							i = 0;
							while (elem = elems[i++]) {
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}
							}
						}

						return [];
					}
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See https://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(document.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (el) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// https://bugs.jquery.com/ticket/12359
					docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (el.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!el.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
					if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!el.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibling-combinator selector` fails
					if (!el.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (el) {
					el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = document.createElement("input");
					input.setAttribute("type", "hidden");
					el.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (el.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (el.querySelectorAll(":enabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Support: IE9-11+
					// IE's :disabled selector does not pick up the children of disabled fieldsets
					docElem.appendChild(el).disabled = true;
					if (el.querySelectorAll(":disabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					el.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (el) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(el, "*");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(el, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully self-exclusive
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return document;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.escape = function (sel) {
			return (sel + "").replace(rcssescape, fcssescape);
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function ATTR(match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function CHILD(match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function PSEUDO(match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function TAG(nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function CLASS(className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function ATTR(name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function CHILD(type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    uniqueCache,
						    outerCache,
						    node,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType,
						    diff = false;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[expando] || (node[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

								cache = uniqueCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = nodeIndex && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										uniqueCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}
							} else {
								// Use previously-cached element index if available
								if (useCache) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if (diff === false) {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

											// Cache the index of each encountered element
											if (useCache) {
												outerCache = node[expando] || (node[expando] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

												uniqueCache[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function PSEUDO(pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function target(elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function root(elem) {
					return elem === docElem;
				},

				"focus": function focus(elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": createDisabledPseudo(false),
				"disabled": createDisabledPseudo(true),

				"checked": function checked(elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function selected(elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function empty(elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function parent(elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function header(elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function input(elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function button(elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function text(elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    skip = combinator.next,
			    key = skip || dir,
			    checkNonElements = base && key === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    uniqueCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

							if (skip && skip === elem.nodeName.toLowerCase()) {
								elem = elem[dir] || elem;
							} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[key] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						if (!context && elem.ownerDocument !== document) {
							setDocument(elem);
							xml = !documentIsHTML;
						}
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context || document, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is only one selector in the list and no seed
			// (the latter of which guarantees us context)
			if (match.length === 1) {

				// Reduce context if the leading compound selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (el) {
			// Should return 1, but returns 4 (following)
			return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (el) {
			el.innerHTML = "<a href='#'></a>";
			return el.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (el) {
			el.innerHTML = "<input/>";
			el.firstChild.setAttribute("value", "");
			return el.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (el) {
			return el.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;

	var dir = function dir(elem, _dir, until) {
		var matched = [],
		    truncate = until !== undefined;

		while ((elem = elem[_dir]) && elem.nodeType !== 9) {
			if (elem.nodeType === 1) {
				if (truncate && jQuery(elem).is(until)) {
					break;
				}
				matched.push(elem);
			}
		}
		return matched;
	};

	var _siblings = function _siblings(n, elem) {
		var matched = [];

		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				matched.push(n);
			}
		}

		return matched;
	};

	var rneedsContext = jQuery.expr.match.needsContext;

	function nodeName(elem, name) {

		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	};
	var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		// Single element
		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if (typeof qualifier !== "string") {
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not;
			});
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if (risSimple.test(qualifier)) {
			return jQuery.filter(qualifier, elements, not);
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter(qualifier, elements);
		return jQuery.grep(elements, function (elem) {
			return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
		});
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		if (elems.length === 1 && elem.nodeType === 1) {
			return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
		}

		return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function find(selector) {
			var i,
			    ret,
			    len = this.length,
			    self = this;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			ret = this.pushStack([]);

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			return len > 1 ? jQuery.uniqueSort(ret) : ret;
		},
		filter: function filter(selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function not(selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function is(selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {

							// Properties of context are called as methods if possible
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					if (elem) {

						// Inject the element directly into the jQuery object
						this[0] = elem;
						this.length = 1;
					}
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || root).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (jQuery.isFunction(selector)) {
			return root.ready !== undefined ? root.ready(selector) :

			// Execute immediately if ready is not present
			selector(jQuery);
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,


	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.fn.extend({
		has: function has(target) {
			var targets = jQuery(target, this),
			    l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function closest(selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    targets = typeof selectors !== "string" && jQuery(selectors);

			// Positional selectors never match, since there's no _selection_ context
			if (!rneedsContext.test(selectors)) {
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

						// Always skip document fragments
						if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},

		// Determine the position of an element within the set
		index: function index(elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if (typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return indexOf.call(this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem);
		},

		add: function add(selector, context) {
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function addBack(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) {}
		return cur;
	}

	jQuery.each({
		parent: function parent(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function parents(elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil: function parentsUntil(elem, i, until) {
			return dir(elem, "parentNode", until);
		},
		next: function next(elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function prev(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function nextAll(elem) {
			return dir(elem, "nextSibling");
		},
		prevAll: function prevAll(elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil: function nextUntil(elem, i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil: function prevUntil(elem, i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings: function siblings(elem) {
			return _siblings((elem.parentNode || {}).firstChild, elem);
		},
		children: function children(elem) {
			return _siblings(elem.firstChild);
		},
		contents: function contents(elem) {
			if (nodeName(elem, "iframe")) {
				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if (nodeName(elem, "template")) {
				elem = elem.content || elem;
			}

			return jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {

				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.uniqueSort(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});
	var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

	// Convert String-formatted options into Object-formatted ones
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

		var // Flag to know if list is currently firing
		firing,


		// Last fire value for non-forgettable lists
		memory,


		// Flag to know if list was already fired
		_fired,


		// Flag to prevent firing
		_locked,


		// Actual callback list
		list = [],


		// Queue of execution data for repeatable lists
		queue = [],


		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,


		// Fire callbacks
		fire = function fire() {

			// Enforce single-firing
			_locked = _locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			_fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift();
				while (++firingIndex < list.length) {

					// Run callback and check for early termination
					if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if (!options.memory) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if (_locked) {

				// Keep an empty list if we have data for future add calls
				if (memory) {
					list = [];

					// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},


		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function add() {
				if (list) {

					// If we have memory from a past run, we should fire after adding
					if (memory && !firing) {
						firingIndex = list.length - 1;
						queue.push(memory);
					}

					(function add(args) {
						jQuery.each(args, function (_, arg) {
							if (jQuery.isFunction(arg)) {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && jQuery.type(arg) !== "string") {

								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);

					if (memory && !firing) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function remove() {
				jQuery.each(arguments, function (_, arg) {
					var index;
					while ((index = jQuery.inArray(arg, list, index)) > -1) {
						list.splice(index, 1);

						// Handle firing indexes
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function has(fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function empty() {
				if (list) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function disable() {
				_locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function disabled() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function lock() {
				_locked = queue = [];
				if (!memory && !firing) {
					list = memory = "";
				}
				return this;
			},
			locked: function locked() {
				return !!_locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function fireWith(context, args) {
				if (!_locked) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					queue.push(args);
					if (!firing) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function fire() {
				self.fireWith(this, arguments);
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function fired() {
				return !!_fired;
			}
		};

		return self;
	};

	function Identity(v) {
		return v;
	}
	function Thrower(ex) {
		throw ex;
	}

	function adoptValue(value, resolve, reject, noValue) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if (value && jQuery.isFunction(method = value.promise)) {
				method.call(value).done(resolve).fail(reject);

				// Other thenables
			} else if (value && jQuery.isFunction(method = value.then)) {
				method.call(value, resolve, reject);

				// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply(undefined, [value].slice(noValue));
			}

			// For Promises/A+, convert exceptions into rejections
			// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
			// Deferred#then to conditionally suppress rejection.
		} catch (value) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply(undefined, [value]);
		}
	}

	jQuery.extend({

		Deferred: function Deferred(func) {
			var tuples = [

			// action, add listener, callbacks,
			// ... .then handlers, argument index, [final state]
			["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
			    _state = "pending",
			    _promise = {
				state: function state() {
					return _state;
				},
				always: function always() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				"catch": function _catch(fn) {
					return _promise.then(null, fn);
				},

				// Keep pipe for back-compat
				pipe: function pipe() /* fnDone, fnFail, fnProgress */{
					var fns = arguments;

					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								} else {
									newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				then: function then(onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve(depth, deferred, handler, special) {
						return function () {
							var that = this,
							    args = arguments,
							    mightThrow = function mightThrow() {
								var returned, then;

								// Support: Promises/A+ section 2.3.3.3.3
								// https://promisesaplus.com/#point-59
								// Ignore double-resolution attempts
								if (depth < maxDepth) {
									return;
								}

								returned = handler.apply(that, args);

								// Support: Promises/A+ section 2.3.1
								// https://promisesaplus.com/#point-48
								if (returned === deferred.promise()) {
									throw new TypeError("Thenable self-resolution");
								}

								// Support: Promises/A+ sections 2.3.3.1, 3.5
								// https://promisesaplus.com/#point-54
								// https://promisesaplus.com/#point-75
								// Retrieve `then` only once
								then = returned && (

								// Support: Promises/A+ section 2.3.4
								// https://promisesaplus.com/#point-64
								// Only check objects and functions for thenability
								(typeof returned === "undefined" ? "undefined" : _typeof(returned)) === "object" || typeof returned === "function") && returned.then;

								// Handle a returned thenable
								if (jQuery.isFunction(then)) {

									// Special processors (notify) just wait for resolution
									if (special) {
										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

										// Normal processors (resolve) also hook into progress
									} else {

										// ...and disregard older resolution values
										maxDepth++;

										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
									}

									// Handle all other returned values
								} else {

									// Only substitute handlers pass on context
									// and multiple values (non-spec behavior)
									if (handler !== Identity) {
										that = undefined;
										args = [returned];
									}

									// Process the value(s)
									// Default process is resolve
									(special || deferred.resolveWith)(that, args);
								}
							},


							// Only normal processors (resolve) catch and reject exceptions
							process = special ? mightThrow : function () {
								try {
									mightThrow();
								} catch (e) {

									if (jQuery.Deferred.exceptionHook) {
										jQuery.Deferred.exceptionHook(e, process.stackTrace);
									}

									// Support: Promises/A+ section 2.3.3.3.4.1
									// https://promisesaplus.com/#point-61
									// Ignore post-resolution exceptions
									if (depth + 1 >= maxDepth) {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Thrower) {
											that = undefined;
											args = [e];
										}

										deferred.rejectWith(that, args);
									}
								}
							};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if (depth) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					return jQuery.Deferred(function (newDefer) {

						// progress_handlers.add( ... )
						tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

						// fulfilled_handlers.add( ... )
						tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));

						// rejected_handlers.add( ... )
						tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
					}).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function promise(obj) {
					return obj != null ? jQuery.extend(obj, _promise) : _promise;
				}
			},
			    deferred = {};

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[5];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				_promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						_state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[3 - i][2].disable,

					// progress_callbacks.lock
					tuples[0][2].lock);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add(tuple[3].fire);

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			_promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function when(singleValue) {
			var

			// count of uncompleted subordinates
			remaining = arguments.length,


			// count of unprocessed arguments
			i = remaining,


			// subordinate fulfillment data
			resolveContexts = Array(i),
			    resolveValues = _slice.call(arguments),


			// the master Deferred
			master = jQuery.Deferred(),


			// subordinate callback factory
			updateFunc = function updateFunc(i) {
				return function (value) {
					resolveContexts[i] = this;
					resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
					if (! --remaining) {
						master.resolveWith(resolveContexts, resolveValues);
					}
				};
			};

			// Single- and empty arguments are adopted like Promise.resolve
			if (remaining <= 1) {
				adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while (i--) {
				adoptValue(resolveValues[i], updateFunc(i), master.reject);
			}

			return master.promise();
		}
	});

	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function (error, stack) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
			window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
		}
	};

	jQuery.readyException = function (error) {
		window.setTimeout(function () {
			throw error;
		});
	};

	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function (fn) {

		readyList.then(fn)

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch(function (error) {
			jQuery.readyException(error);
		});

		return this;
	};

	jQuery.extend({

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function ready(wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);
		}
	});

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed);
		window.removeEventListener("load", completed);
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout(jQuery.ready);
	} else {

		// Use the handy event callback
		document.addEventListener("DOMContentLoaded", completed);

		// A fallback to window.onload, that will always work
		window.addEventListener("load", completed);
	}

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {

				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function fn(elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		if (chainable) {
			return elems;
		}

		// Gets
		if (bulk) {
			return fn.call(elems);
		}

		return len ? fn(elems[0], key) : emptyGet;
	};
	var acceptData = function acceptData(owner) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	};

	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function cache(owner) {

			// Check if the owner object already has a cache
			var value = owner[this.expando];

			// If not, create one
			if (!value) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if (acceptData(owner)) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if (owner.nodeType) {
						owner[this.expando] = value;

						// Otherwise secure it in a non-enumerable property
						// configurable must be true to allow the property to be
						// deleted when data is removed
					} else {
						Object.defineProperty(owner, this.expando, {
							value: value,
							configurable: true
						});
					}
				}
			}

			return value;
		},
		set: function set(owner, data, value) {
			var prop,
			    cache = this.cache(owner);

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if (typeof data === "string") {
				cache[jQuery.camelCase(data)] = value;

				// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for (prop in data) {
					cache[jQuery.camelCase(prop)] = data[prop];
				}
			}
			return cache;
		},
		get: function get(owner, key) {
			return key === undefined ? this.cache(owner) :

			// Always use camelCase key (gh-2257)
			owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
		},
		access: function access(owner, key, value) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined || key && typeof key === "string" && value === undefined) {

				return this.get(owner, key);
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function remove(owner, key) {
			var i,
			    cache = owner[this.expando];

			if (cache === undefined) {
				return;
			}

			if (key !== undefined) {

				// Support array or space separated string of keys
				if (Array.isArray(key)) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map(jQuery.camelCase);
				} else {
					key = jQuery.camelCase(key);

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
				}

				i = key.length;

				while (i--) {
					delete cache[key[i]];
				}
			}

			// Remove the expando if there's no more data
			if (key === undefined || jQuery.isEmptyObject(cache)) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if (owner.nodeType) {
					owner[this.expando] = undefined;
				} else {
					delete owner[this.expando];
				}
			}
		},
		hasData: function hasData(owner) {
			var cache = owner[this.expando];
			return cache !== undefined && !jQuery.isEmptyObject(cache);
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();

	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /[A-Z]/g;

	function getData(data) {
		if (data === "true") {
			return true;
		}

		if (data === "false") {
			return false;
		}

		if (data === "null") {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if (data === +data + "") {
			return +data;
		}

		if (rbrace.test(data)) {
			return JSON.parse(data);
		}

		return data;
	}

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = getData(data);
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function hasData(elem) {
			return dataUser.hasData(elem) || dataPriv.hasData(elem);
		},

		data: function data(elem, name, _data) {
			return dataUser.access(elem, name, _data);
		},

		removeData: function removeData(elem, name) {
			dataUser.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function _data(elem, name, data) {
			return dataPriv.access(elem, name, data);
		},

		_removeData: function _removeData(elem, name) {
			dataPriv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function data(key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = dataUser.get(elem);

					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						dataPriv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
				return this.each(function () {
					dataUser.set(this, key);
				});
			}

			return access(this, function (value) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, key);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {

					// We always store the camelCased key
					dataUser.set(this, key, value);
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function removeData(key) {
			return this.each(function () {
				dataUser.remove(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function queue(elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = dataPriv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || Array.isArray(data)) {
						queue = dataPriv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function dequeue(elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function next() {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function _queueHooks(elem, type) {
			var key = type + "queueHooks";
			return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					dataPriv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function queue(type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// Ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function dequeue(type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function clearQueue(type) {
			return this.queue(type || "fx", []);
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function promise(type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function resolve() {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = dataPriv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" || elem.style.display === "" &&

		// Otherwise, check computed style
		// Support: Firefox <=43 - 45
		// Disconnected elements can have computed display: none, so first confirm that elem is
		// in the document.
		jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
	};

	var swap = function swap(elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted,
		    scale = 1,
		    maxIterations = 20,
		    currentValue = tween ? function () {
			return tween.cur();
		} : function () {
			return jQuery.css(elem, prop, "");
		},
		    initial = currentValue(),
		    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


		// Starting value computation is required for potential unit mismatches
		initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

		if (initialInUnit && initialInUnit[3] !== unit) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[3];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style(elem, prop, initialInUnit + unit);

				// Update scale, tolerating zero or NaN from tween.cur()
				// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
		}

		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}

	var defaultDisplayMap = {};

	function getDefaultDisplay(elem) {
		var temp,
		    doc = elem.ownerDocument,
		    nodeName = elem.nodeName,
		    display = defaultDisplayMap[nodeName];

		if (display) {
			return display;
		}

		temp = doc.body.appendChild(doc.createElement(nodeName));
		display = jQuery.css(temp, "display");

		temp.parentNode.removeChild(temp);

		if (display === "none") {
			display = "block";
		}
		defaultDisplayMap[nodeName] = display;

		return display;
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    values = [],
		    index = 0,
		    length = elements.length;

		// Determine new display value for elements that need to change
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			display = elem.style.display;
			if (show) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if (display === "none") {
					values[index] = dataPriv.get(elem, "display") || null;
					if (!values[index]) {
						elem.style.display = "";
					}
				}
				if (elem.style.display === "" && isHiddenWithinTree(elem)) {
					values[index] = getDefaultDisplay(elem);
				}
			} else {
				if (display !== "none") {
					values[index] = "none";

					// Remember what we're overwriting
					dataPriv.set(elem, "display", display);
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for (index = 0; index < length; index++) {
			if (values[index] != null) {
				elements[index].style.display = values[index];
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		show: function show() {
			return showHide(this, true);
		},
		hide: function hide() {
			return showHide(this);
		},
		toggle: function toggle(state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHiddenWithinTree(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});
	var rcheckableType = /^(?:checkbox|radio)$/i;

	var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

	var rscriptType = /^$|\/(?:java|ecma)script/i;

	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [1, "<select multiple='multiple'>", "</select>"],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		_default: [0, "", ""]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll(context, tag) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if (typeof context.getElementsByTagName !== "undefined") {
			ret = context.getElementsByTagName(tag || "*");
		} else if (typeof context.querySelectorAll !== "undefined") {
			ret = context.querySelectorAll(tag || "*");
		} else {
			ret = [];
		}

		if (tag === undefined || tag && nodeName(context, tag)) {
			return jQuery.merge([context], ret);
		}

		return ret;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
		}
	}

	var rhtml = /<|&#?\w+;/;

	function buildFragment(elems, context, scripts, selection, ignored) {
		var elem,
		    tmp,
		    tag,
		    wrap,
		    contains,
		    j,
		    fragment = context.createDocumentFragment(),
		    nodes = [],
		    i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			elem = elems[i];

			if (elem || elem === 0) {

				// Add nodes directly
				if (jQuery.type(elem) === "object") {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

					// Convert non-html into a text node
				} else if (!rhtml.test(elem)) {
					nodes.push(context.createTextNode(elem));

					// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild(context.createElement("div"));

					// Deserialize a standard representation
					tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
					wrap = wrapMap[tag] || wrapMap._default;
					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while (j--) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, tmp.childNodes);

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while (elem = nodes[i++]) {

			// Skip elements already in the context collection (trac-4087)
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) {
					ignored.push(elem);
				}
				continue;
			}

			contains = jQuery.contains(elem.ownerDocument, elem);

			// Append to fragment
			tmp = getAll(fragment.appendChild(elem), "script");

			// Preserve script evaluation history
			if (contains) {
				setGlobalEval(tmp);
			}

			// Capture executables
			if (scripts) {
				j = 0;
				while (elem = tmp[j++]) {
					if (rscriptType.test(elem.type || "")) {
						scripts.push(elem);
					}
				}
			}
		}

		return fragment;
	}

	(function () {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var documentElement = document.documentElement;

	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	function _on(elem, types, selector, data, fn, one) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

			// ( types-Object, selector, data )
			if (typeof selector !== "string") {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for (type in types) {
				_on(elem, type, selector, data, types[type], one);
			}
			return elem;
		}

		if (data == null && fn == null) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if (typeof selector === "string") {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if (fn === false) {
			fn = returnFalse;
		} else if (!fn) {
			return elem;
		}

		if (one === 1) {
			origFn = fn;
			fn = function fn(event) {

				// Can use an empty set, since event contains the info
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function () {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function add(elem, types, handler, data, selector) {

			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if (selector) {
				jQuery.find.matchesSelector(documentElement, selector);
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}
		},

		// Detach an event or set of events from an element
		remove: function remove(elem, types, handler, selector, mappedTypes) {

			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove data and the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				dataPriv.remove(elem, "handle events");
			}
		},

		dispatch: function dispatch(nativeEvent) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix(nativeEvent);

			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue,
			    args = new Array(arguments.length),
			    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;

			for (i = 1; i < arguments.length; i++) {
				args[i] = arguments[i];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function handlers(event, _handlers) {
			var i,
			    handleObj,
			    sel,
			    matchedHandlers,
			    matchedSelectors,
			    handlerQueue = [],
			    delegateCount = _handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			if (delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!(event.type === "click" && event.button >= 1)) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
						matchedHandlers = [];
						matchedSelectors = {};
						for (i = 0; i < delegateCount; i++) {
							handleObj = _handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matchedSelectors[sel] === undefined) {
								matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matchedSelectors[sel]) {
								matchedHandlers.push(handleObj);
							}
						}
						if (matchedHandlers.length) {
							handlerQueue.push({ elem: cur, handlers: matchedHandlers });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if (delegateCount < _handlers.length) {
				handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		addProp: function addProp(name, hook) {
			Object.defineProperty(jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction(hook) ? function () {
					if (this.originalEvent) {
						return hook(this.originalEvent);
					}
				} : function () {
					if (this.originalEvent) {
						return this.originalEvent[name];
					}
				},

				set: function set(value) {
					Object.defineProperty(this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					});
				}
			});
		},

		fix: function fix(originalEvent) {
			return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function trigger() {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function trigger() {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function trigger() {
					if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function _default(event) {
					return nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function postDispatch(event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {

		// This "if" is needed for plain objects
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle);
		}
	};

	jQuery.Event = function (src, props) {

		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

			// Support: Android <=2.3 only
			src.returnValue === false ? returnTrue : returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function preventDefault() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && !this.isSimulated) {
				e.preventDefault();
			}
		},
		stopPropagation: function stopPropagation() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function stopImmediatePropagation() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function which(event) {
			var button = event.button;

			// Add which for key events
			if (event.which == null && rkeyEvent.test(event.type)) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
				if (button & 1) {
					return 1;
				}

				if (button & 2) {
					return 3;
				}

				if (button & 4) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp);

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function handle(event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	jQuery.fn.extend({

		on: function on(types, selector, data, fn) {
			return _on(this, types, selector, data, fn);
		},
		one: function one(types, selector, data, fn) {
			return _on(this, types, selector, data, fn, 1);
		},
		off: function off(types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		}
	});

	var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,


	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget(elem, content) {
		if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

			return jQuery(">tbody", elem)[0] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);

		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (dataPriv.hasData(src)) {
			pdataOld = dataPriv.access(src);
			pdataCur = dataPriv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (dataUser.hasData(src)) {
			udataOld = dataUser.access(src);
			udataCur = jQuery.extend({}, udataOld);

			dataUser.set(dest, udataCur);
		}
	}

	// Fix IE bugs, see support tests
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip(collection, args, callback, ignored) {

		// Flatten any nested arrays
		args = concat.apply([], args);

		var fragment,
		    first,
		    scripts,
		    hasScripts,
		    node,
		    doc,
		    i = 0,
		    l = collection.length,
		    iNoClone = l - 1,
		    value = args[0],
		    isFunction = jQuery.isFunction(value);

		// We can't cloneNode fragments that contain checked, in WebKit
		if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
			return collection.each(function (index) {
				var self = collection.eq(index);
				if (isFunction) {
					args[0] = value.call(this, index, self.html());
				}
				domManip(self, args, callback, ignored);
			});
		}

		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;

			if (fragment.childNodes.length === 1) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for (; i < l; i++) {
					node = fragment;

					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);

						// Keep references to cloned scripts for later restoration
						if (hasScripts) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(scripts, getAll(node, "script"));
						}
					}

					callback.call(collection[i], node, i);
				}

				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;

					// Reenable scripts
					jQuery.map(scripts, restoreScript);

					// Evaluate executable scripts on first document insertion
					for (i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

							if (node.src) {

								// Optional AJAX dependency, but won't run scripts if not present
								if (jQuery._evalUrl) {
									jQuery._evalUrl(node.src);
								}
							} else {
								DOMEval(node.textContent.replace(rcleanScript, ""), doc);
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function _remove(elem, selector, keepData) {
		var node,
		    nodes = selector ? jQuery.filter(selector, elem) : elem,
		    i = 0;

		for (; (node = nodes[i]) != null; i++) {
			if (!keepData && node.nodeType === 1) {
				jQuery.cleanData(getAll(node));
			}

			if (node.parentNode) {
				if (keepData && jQuery.contains(node.ownerDocument, node)) {
					setGlobalEval(getAll(node, "script"));
				}
				node.parentNode.removeChild(node);
			}
		}

		return elem;
	}

	jQuery.extend({
		htmlPrefilter: function htmlPrefilter(html) {
			return html.replace(rxhtmlTag, "<$1></$2>");
		},

		clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			// Fix IE cloning issues
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function cleanData(elems) {
			var data,
			    elem,
			    type,
			    special = jQuery.event.special,
			    i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (acceptData(elem)) {
					if (data = elem[dataPriv.expando]) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataPriv.expando] = undefined;
					}
					if (elem[dataUser.expando]) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataUser.expando] = undefined;
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		detach: function detach(selector) {
			return _remove(this, selector, true);
		},

		remove: function remove(selector) {
			return _remove(this, selector);
		},

		text: function text(value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},

		append: function append() {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function prepend() {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function before() {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function after() {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		empty: function empty() {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function clone(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function html(value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = jQuery.htmlPrefilter(value);

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function replaceWith() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip(this, arguments, function (elem) {
				var parent = this.parentNode;

				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) {
						parent.replaceChild(elem, this);
					}
				}

				// Force callback invocation
			}, ignored);
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});
	var rmargin = /^margin/;

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles = function getStyles(elem) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (!view || !view.opener) {
			view = window;
		}

		return view.getComputedStyle(elem);
	};

	(function () {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if (!div) {
				return;
			}

			div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild(container);

			var divStyle = window.getComputedStyle(div);
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild(container);

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal,
		    boxSizingReliableVal,
		    pixelMarginRightVal,
		    reliableMarginLeftVal,
		    container = document.createElement("div"),
		    div = document.createElement("div");

		// Finish early in limited (non-browser) environments
		if (!div.style) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
		container.appendChild(div);

		jQuery.extend(support, {
			pixelPosition: function pixelPosition() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function boxSizingReliable() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function pixelMarginRight() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function reliableMarginLeft() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		});
	})();

	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,


		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

		computed = computed || getStyles(elem);

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function get() {
				if (conditionFn()) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rcustomProp = /^--/,
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "Moz", "ms"],
	    emptyStyle = document.createElement("div").style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name) {

		// Shortcut for names that are not vendor prefixed
		if (name in emptyStyle) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in emptyStyle) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName(name) {
		var ret = jQuery.cssProps[name];
		if (!ret) {
			ret = jQuery.cssProps[name] = vendorPropName(name) || name;
		}
		return ret;
	}

	function setPositiveNumber(elem, value, subtract) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec(value);
		return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i,
		    val = 0;

		// If we already have the right measurement, avoid augmentation
		if (extra === (isBorderBox ? "border" : "content")) {
			i = 4;

			// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for (; i < 4; i += 2) {

			// Both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {

				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// At this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// At this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with computed style
		var valueIsBorderBox,
		    styles = getStyles(elem),
		    val = curCSS(elem, name, styles),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// Computed unit is not pixels. Stop here and return.
		if (rnumnonpx.test(val)) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

		// Fall back to offsetWidth/Height when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		if (val === "auto") {
			val = elem["offset" + name[0].toUpperCase() + name.slice(1)];
		}

		// Normalize "", auto, and prepare for extra
		val = parseFloat(val) || 0;

		// Use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function get(elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function style(elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    isCustomProp = rcustomProp.test(name),
			    style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value === "undefined" ? "undefined" : _typeof(value);

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if (value == null || value !== value) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if (type === "number") {
					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
				}

				// background-* props affect original clone's values
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

					if (isCustomProp) {
						style.setProperty(name, value);
					} else {
						style[name] = value;
					}
				}
			} else {

				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function css(elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = jQuery.camelCase(name),
			    isCustomProp = rcustomProp.test(name);

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			// Convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}

			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function get(elem, computed, extra) {
				if (computed) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test(jQuery.css(elem, "display")) && (

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},

			set: function set(elem, value, extra) {
				var matches,
				    styles = extra && getStyles(elem),
				    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

				// Convert to pixels if value adjustment is needed
				if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

					elem.style[name] = value;
					value = jQuery.css(elem, name);
				}

				return setPositiveNumber(elem, value, subtract);
			}
		};
	});

	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
		if (computed) {
			return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
				return elem.getBoundingClientRect().left;
			})) + "px";
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function expand(value) {
				var i = 0,
				    expanded = {},


				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function css(name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (Array.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function init(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function cur() {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function run(percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function get(tween) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
					return tween.elem[tween.prop];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css(tween.elem, tween.prop, "");

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function set(tween) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function set(tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function linear(p) {
			return p;
		},
		swing: function swing(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    inProgress,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rrun = /queueHooks$/;

	function schedule() {
		if (inProgress) {
			if (document.hidden === false && window.requestAnimationFrame) {
				window.requestAnimationFrame(schedule);
			} else {
				window.setTimeout(schedule, jQuery.fx.interval);
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = jQuery.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		var prop,
		    value,
		    toggle,
		    hooks,
		    oldfire,
		    propTween,
		    restoreDisplay,
		    display,
		    isBox = "width" in props || "height" in props,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHiddenWithinTree(elem),
		    dataShow = dataPriv.get(elem, "fxshow");

		// Queue-skipping animations hijack the fx hooks
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {

				// Ensure the complete handler is called before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Detect show/hide animations
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.test(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;

						// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject(props);
		if (!propTween && jQuery.isEmptyObject(orig)) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if (isBox && elem.nodeType === 1) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if (restoreDisplay == null) {
				restoreDisplay = dataPriv.get(elem, "display");
			}
			display = jQuery.css(elem, "display");
			if (display === "none") {
				if (restoreDisplay) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide([elem], true);
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css(elem, "display");
					showHide([elem]);
				}
			}

			// Animate inline elements as inline-block
			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
				if (jQuery.css(elem, "float") === "none") {

					// Restore the original display value at the end of pure show/hide animations
					if (!propTween) {
						anim.done(function () {
							style.display = restoreDisplay;
						});
						if (restoreDisplay == null) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}

		// Implement show/hide animations
		propTween = false;
		for (prop in orig) {

			// General show/hide setup for this element animation
			if (!propTween) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if (toggle) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if (hidden) {
					showHide([elem], true);
				}

				/* eslint-disable no-loop-func */

				anim.done(function () {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if (!hidden) {
						showHide([elem]);
					}
					dataPriv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
			}

			// Per-property setup
			propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
			if (!(prop in dataShow)) {
				dataShow[prop] = propTween.start;
				if (hidden) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (Array.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = Animation.prefilters.length,
		    deferred = jQuery.Deferred().always(function () {

			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function tick() {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


			// Support: Android 2.3 only
			// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			// If there's more to do, yield
			if (percent < 1 && length) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if (!length) {
				deferred.notifyWith(elem, [animation, 1, 0]);
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith(elem, [animation]);
			return false;
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function createTween(prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function stop(gotoEnd) {
				var index = 0,


				// If we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// Resolve when we played the last frame; otherwise, reject
				if (gotoEnd) {
					deferred.notifyWith(elem, [animation, 1, 0]);
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (jQuery.isFunction(result.stop)) {
					jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
				}
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		// Attach callbacks from options
		animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		return animation;
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweeners: {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value);
				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
				return tween;
			}]
		},

		tweener: function tweener(props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.match(rnothtmlwhite);
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},

		prefilters: [defaultPrefilter],

		prefilter: function prefilter(callback, prepend) {
			if (prepend) {
				Animation.prefilters.unshift(callback);
			} else {
				Animation.prefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		// Go to the end state if fx are off
		if (jQuery.fx.off) {
			opt.duration = 0;
		} else {
			if (typeof opt.duration !== "number") {
				if (opt.duration in jQuery.fx.speeds) {
					opt.duration = jQuery.fx.speeds[opt.duration];
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function fadeTo(speed, to, easing, callback) {

			// Show any hidden elements after setting opacity to 0
			return this.filter(isHiddenWithinTree).css("opacity", 0).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function animate(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function doAnimation() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || dataPriv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function stop(type, clearQueue, gotoEnd) {
			var stopQueue = function stopQueue(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = dataPriv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function finish(type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = dataPriv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// Look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// Look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    i = 0,
		    timers = jQuery.timers;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];

			// Run the timer and safely remove it when done (allowing for external removal)
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function () {
		if (inProgress) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function () {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function () {
				window.clearTimeout(timeout);
			};
		});
	};

	(function () {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();

	var boolHook,
	    attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function attr(name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function removeAttr(name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function attr(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
			}

			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				}

				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				elem.setAttribute(name, value + "");
				return value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			ret = jQuery.find.attr(elem, name);

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function set(elem, value) {
					if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function removeAttr(elem, value) {
			var name,
			    i = 0,


			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match(rnothtmlwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					elem.removeAttribute(name);
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function set(elem, value, name) {
			if (value === false) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};

	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = function (elem, name, isXML) {
			var ret,
			    handle,
			    lowercaseName = name.toLowerCase();

			if (!isXML) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[lowercaseName];
				attrHandle[lowercaseName] = ret;
				ret = getter(elem, name, isXML) != null ? lowercaseName : null;
				attrHandle[lowercaseName] = handle;
			}
			return ret;
		};
	});

	var rfocusable = /^(?:input|select|textarea|button)$/i,
	    rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function prop(name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function removeProp(name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});

	jQuery.extend({
		prop: function prop(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				return elem[name] = value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			return elem[name];
		},

		propHooks: {
			tabIndex: {
				get: function get(elem) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					if (tabindex) {
						return parseInt(tabindex, 10);
					}

					if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function get(elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function set(elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex;

					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse(value) {
		var tokens = value.match(rnothtmlwhite) || [];
		return tokens.join(" ");
	}

	function getClass(elem) {
		return elem.getAttribute && elem.getAttribute("class") || "";
	}

	jQuery.fn.extend({
		addClass: function addClass(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, getClass(this)));
				});
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		removeClass: function removeClass(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, getClass(this)));
				});
			}

			if (!arguments.length) {
				return this.attr("class", "");
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {

							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") > -1) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		toggleClass: function toggleClass(value, stateVal) {
			var type = typeof value === "undefined" ? "undefined" : _typeof(value);

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
				});
			}

			return this.each(function () {
				var className, i, self, classNames;

				if (type === "string") {

					// Toggle individual class names
					i = 0;
					self = jQuery(this);
					classNames = value.match(rnothtmlwhite) || [];

					while (className = classNames[i++]) {

						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (value === undefined || type === "boolean") {
					className = getClass(this);
					if (className) {

						// Store className if set
						dataPriv.set(this, "__className__", className);
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if (this.setAttribute) {
						this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
					}
				}
			});
		},

		hasClass: function hasClass(selector) {
			var className,
			    elem,
			    i = 0;

			className = " " + selector + " ";
			while (elem = this[i++]) {
				if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
					return true;
				}
			}

			return false;
		}
	});

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function val(value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if (typeof ret === "string") {
						return ret.replace(rreturn, "");
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (Array.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function get(elem) {

					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elem));
				}
			},
			select: {
				get: function get(elem) {
					var value,
					    option,
					    i,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one",
					    values = one ? null : [],
					    max = one ? index + 1 : options.length;

					if (index < 0) {
						i = max;
					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) &&

						// Don't return options that are disabled or in a disabled optgroup
						!option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function set(elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];

						/* eslint-disable no-cond-assign */

						if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function set(elem, value) {
				if (Array.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend(jQuery.event, {

		trigger: function trigger(event, data, elem, onlyHandlers) {

			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") > -1) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function simulate(type, elem, event) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true
			});

			jQuery.event.trigger(e, null, elem);
		}

	});

	jQuery.fn.extend({

		trigger: function trigger(type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function triggerHandler(type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function hover(fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});

	support.focusin = "onfocusin" in window;

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if (!support.focusin) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function handler(event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
			};

			jQuery.event.special[fix] = {
				setup: function setup() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					dataPriv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown: function teardown() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						dataPriv.remove(doc, fix);
					} else {
						dataPriv.access(doc, fix, attaches);
					}
				}
			};
		});
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = /\?/;

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = new window.DOMParser().parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (Array.isArray(obj)) {

			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {

					// Treat each array item as a scalar.
					add(prefix, v);
				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {

			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {

			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function add(key, valueOrFunction) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
		};

		// If an array was passed in, assume that it is an array of form elements.
		if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&");
	};

	jQuery.fn.extend({
		serialize: function serialize() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function serializeArray() {
			return this.map(function () {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				if (val == null) {
					return null;
				}

				if (Array.isArray(val)) {
					return jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					});
				}

				return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	var r20 = /%20/g,
	    rhash = /#.*$/,
	    rantiCache = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*"),


	// Anchor tag for parsing the document origin
	originAnchor = document.createElement("a");
	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

			if (jQuery.isFunction(func)) {

				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {

					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {

			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},


		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {

									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s.throws) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test(location.protocol),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function ajaxSetup(target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function ajax(url, options) {

			// If url is an object, simulate pre-1.5 signature
			if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,


			// URL without anti-cache param
			cacheURL,


			// Response headers
			responseHeadersString,
			    responseHeaders,


			// timeout handle
			timeoutTimer,


			// Url cleanup var
			urlAnchor,


			// Request state (becomes false upon send and true upon completion)
			completed,


			// To know if global events are to be dispatched
			fireGlobals,


			// Loop variable
			i,


			// uncached part of the url
			uncached,


			// Create the final options object
			s = jQuery.ajaxSetup({}, options),


			// Callbacks context
			callbackContext = s.context || s,


			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),


			// Status-dependent callbacks
			_statusCode = s.statusCode || {},


			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},


			// Default abort message
			strAbort = "canceled",


			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function getResponseHeader(key) {
					var match;
					if (completed) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function getAllResponseHeaders() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function setRequestHeader(name, value) {
					if (completed == null) {
						name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function overrideMimeType(type) {
					if (completed == null) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function statusCode(map) {
					var code;
					if (map) {
						if (completed) {

							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for (code in map) {
								_statusCode[code] = [_statusCode[code], map[code]];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function abort(statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR);

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if (s.crossDomain == null) {
				urlAnchor = document.createElement("a");

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
				} catch (e) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (completed) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace(rhash, "");

			// More options handling for requests with no content
			if (!s.hasContent) {

				// Remember the hash so we can put it back
				uncached = s.url.slice(cacheURL.length);

				// If data is available, append data to url
				if (s.data) {
					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if (s.cache === false) {
					cacheURL = cacheURL.replace(rantiCache, "$1");
					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

				// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
				s.data = s.data.replace(r20, "+");
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add(s.complete);
			jqXHR.done(s.success);
			jqXHR.fail(s.error);

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}

				// If request was aborted inside ajaxSend, stop there
				if (completed) {
					return jqXHR;
				}

				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = window.setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					completed = false;
					transport.send(requestHeaders, done);
				} catch (e) {

					// Rethrow post-completion exceptions
					if (completed) {
						throw e;
					}

					// Propagate others as results
					done(-1, e);
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Ignore repeat invocations
				if (completed) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if (timeoutTimer) {
					window.clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(_statusCode);
				_statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function getJSON(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function getScript(url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {

			// Shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax(jQuery.extend({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject(url) && url));
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function wrapAll(html) {
			var wrap;

			if (this[0]) {
				if (jQuery.isFunction(html)) {
					html = html.call(this[0]);
				}

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function wrapInner(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function wrap(html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function unwrap(selector) {
			this.parent(selector).not("body").each(function () {
				jQuery(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});

	jQuery.expr.pseudos.hidden = function (elem) {
		return !jQuery.expr.pseudos.visible(elem);
	};
	jQuery.expr.pseudos.visible = function (elem) {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	};

	jQuery.ajaxSettings.xhr = function () {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	};

	var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var _callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function send(headers, complete) {
					var i,
					    xhr = options.xhr();

					xhr.open(options.type, options.url, options.async, options.username, options.password);

					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}

					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

					// Callback
					_callback = function callback(type) {
						return function () {
							if (_callback) {
								_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if (typeof xhr.status !== "number") {
										complete(0, "error");
									} else {
										complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status, xhr.statusText);
									}
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
								}
							}
						};
					};

					// Listen to events
					xhr.onload = _callback();
					errorCallback = xhr.onerror = _callback("error");

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if (xhr.onabort !== undefined) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function () {

							// Check readyState before timeout as it changes
							if (xhr.readyState === 4) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout(function () {
									if (_callback) {
										errorCallback();
									}
								});
							}
						};
					}

					// Create the abort callback
					_callback = _callback("abort");

					try {

						// Do send the request (this may raise an exception)
						xhr.send(options.hasContent && options.data || null);
					} catch (e) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if (_callback) {
							throw e;
						}
					}
				},

				abort: function abort() {
					if (_callback) {
						_callback();
					}
				}
			};
		}
	});

	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function (s) {
		if (s.crossDomain) {
			s.contents.script = false;
		}
	});

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function textScript(text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, _callback2;
			return {
				send: function send(_, complete) {
					script = jQuery("<script>").prop({
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", _callback2 = function callback(evt) {
						script.remove();
						_callback2 = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild(script[0]);
				},
				abort: function abort() {
					if (_callback2) {
						_callback2();
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function jsonpCallback() {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// Force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {

				// If previous value didn't exist - remove it
				if (overwritten === undefined) {
					jQuery(window).removeProp(callbackName);

					// Otherwise restore preexisting value
				} else {
					window[callbackName] = overwritten;
				}

				// Save back as free
				if (s[callbackName]) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = function () {
		var body = document.implementation.createHTMLDocument("").body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	}();

	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (typeof data !== "string") {
			return [];
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if (!context) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if (support.createHTMLDocument) {
				context = document.implementation.createHTMLDocument("");

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement("base");
				base.href = document.location.href;
				context.head.appendChild(base);
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec(data);
		scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off > -1) {
			selector = stripAndCollapse(url.slice(off));
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);

				// If the request succeeds, this function gets "data", "status", "jqXHR"
				// but they are ignored because response was set above.
				// If it fails, this function gets "jqXHR", "status", "error"
			}).always(callback && function (jqXHR, status) {
				self.each(function () {
					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
				});
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.pseudos.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	jQuery.offset = {
		setOffset: function setOffset(elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call(elem, i, jQuery.extend({}, curOffset));
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({
		offset: function offset(options) {

			// Preserve chaining for setter
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var doc,
			    docElem,
			    rect,
			    win,
			    elem = this[0];

			if (!elem) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if (!elem.getClientRects().length) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			doc = elem.ownerDocument;
			docElem = doc.documentElement;
			win = doc.defaultView;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function position() {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    elem = this[0],
			    parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if (jQuery.css(elem, "position") === "fixed") {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
					left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function offsetParent() {
			return this.map(function () {
				var offsetParent = this.offsetParent;

				while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {

				// Coalesce documents and windows
				var win;
				if (jQuery.isWindow(elem)) {
					win = elem;
				} else if (elem.nodeType === 9) {
					win = elem.defaultView;
				}

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length);
		};
	});

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable);
			};
		});
	});

	jQuery.fn.extend({

		bind: function bind(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function unbind(types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function delegate(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function undelegate(selector, types, fn) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	jQuery.holdReady = function (hold) {
		if (hold) {
			jQuery.readyWait++;
		} else {
			jQuery.ready(true);
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 Highcharts JS v6.0.3 (2017-11-14)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (S, N) {
  "object" === ( false ? "undefined" : _typeof(module)) && module.exports ? module.exports = S.document ? N(S) : N : S.Highcharts = N(S);
})("undefined" !== typeof window ? window : undefined, function (S) {
  var N = function () {
    var a = "undefined" === typeof S ? window : S,
        D = a.document,
        B = a.navigator && a.navigator.userAgent || "",
        G = D && D.createElementNS && !!D.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        p = /(edge|msie|trident)/i.test(B) && !a.opera,
        g = /Firefox/.test(B),
        l = g && 4 > parseInt(B.split("Firefox/")[1], 10);return a.Highcharts ? a.Highcharts.error(16, !0) : { product: "Highcharts", version: "6.0.3", deg2rad: 2 * Math.PI / 360, doc: D, hasBidiBug: l, hasTouch: D && void 0 !== D.documentElement.ontouchstart, isMS: p, isWebKit: /AppleWebKit/.test(B), isFirefox: g, isTouchDevice: /(Mobile|Android|Windows Phone)/.test(B), SVG_NS: "http://www.w3.org/2000/svg", chartCount: 0, seriesTypes: {}, symbolSizes: {}, svg: G, win: a, marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"], noop: function noop() {}, charts: [] };
  }();(function (a) {
    a.timers = [];var D = a.charts,
        B = a.doc,
        G = a.win;a.error = function (p, g) {
      p = a.isNumber(p) ? "Highcharts error #" + p + ": www.highcharts.com/errors/" + p : p;if (g) throw Error(p);G.console && console.log(p);
    };a.Fx = function (a, g, l) {
      this.options = g;this.elem = a;this.prop = l;
    };a.Fx.prototype = { dSetter: function dSetter() {
        var a = this.paths[0],
            g = this.paths[1],
            l = [],
            r = this.now,
            n = a.length,
            w;if (1 === r) l = this.toD;else if (n === g.length && 1 > r) for (; n--;) {
          w = parseFloat(a[n]), l[n] = isNaN(w) ? g[n] : r * parseFloat(g[n] - w) + w;
        } else l = g;this.elem.attr("d", l, null, !0);
      }, update: function update() {
        var a = this.elem,
            g = this.prop,
            l = this.now,
            r = this.options.step;if (this[g + "Setter"]) this[g + "Setter"]();else a.attr ? a.element && a.attr(g, l, null, !0) : a.style[g] = l + this.unit;r && r.call(a, l, this);
      }, run: function run(p, g, l) {
        var r = this,
            n = r.options,
            w = function w(a) {
          return w.stopped ? !1 : r.step(a);
        },
            v = G.requestAnimationFrame || function (a) {
          setTimeout(a, 13);
        },
            e = function e() {
          a.timers = a.grep(a.timers, function (a) {
            return a();
          });a.timers.length && v(e);
        };p === g ? (delete n.curAnim[this.prop], n.complete && 0 === a.keys(n.curAnim).length && n.complete()) : (this.startTime = +new Date(), this.start = p, this.end = g, this.unit = l, this.now = this.start, this.pos = 0, w.elem = this.elem, w.prop = this.prop, w() && 1 === a.timers.push(w) && v(e));
      }, step: function step(p) {
        var g = +new Date(),
            l,
            r = this.options,
            n = this.elem,
            w = r.complete,
            v = r.duration,
            e = r.curAnim;n.attr && !n.element ? p = !1 : p || g >= v + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), l = e[this.prop] = !0, a.objectEach(e, function (a) {
          !0 !== a && (l = !1);
        }), l && w && w.call(n), p = !1) : (this.pos = r.easing((g - this.startTime) / v), this.now = this.start + (this.end - this.start) * this.pos, this.update(), p = !0);return p;
      }, initPath: function initPath(p, g, l) {
        function r(a) {
          var b, f;for (d = a.length; d--;) {
            b = "M" === a[d] || "L" === a[d], f = /[a-zA-Z]/.test(a[d + 3]), b && f && a.splice(d + 1, 0, a[d + 1], a[d + 2], a[d + 1], a[d + 2]);
          }
        }function n(a, b) {
          for (; a.length < f;) {
            a[0] = b[f - a.length];var e = a.slice(0, c);[].splice.apply(a, [0, 0].concat(e));y && (e = a.slice(a.length - c), [].splice.apply(a, [a.length, 0].concat(e)), d--);
          }a[0] = "M";
        }function w(a, d) {
          for (var e = (f - a.length) / c; 0 < e && e--;) {
            b = a.slice().splice(a.length / H - c, c * H), b[0] = d[f - c - e * c], m && (b[c - 6] = b[c - 2], b[c - 5] = b[c - 1]), [].splice.apply(a, [a.length / H, 0].concat(b)), y && e--;
          }
        }g = g || "";var v,
            e = p.startX,
            h = p.endX,
            m = -1 < g.indexOf("C"),
            c = m ? 7 : 3,
            f,
            b,
            d;g = g.split(" ");l = l.slice();var y = p.isArea,
            H = y ? 2 : 1,
            J;m && (r(g), r(l));if (e && h) {
          for (d = 0; d < e.length; d++) {
            if (e[d] === h[0]) {
              v = d;break;
            } else if (e[0] === h[h.length - e.length + d]) {
              v = d;J = !0;break;
            }
          }void 0 === v && (g = []);
        }g.length && a.isNumber(v) && (f = l.length + v * H * c, J ? (n(g, l), w(l, g)) : (n(l, g), w(g, l)));return [g, l];
      } };a.Fx.prototype.fillSetter = a.Fx.prototype.strokeSetter = function () {
      this.elem.attr(this.prop, a.color(this.start).tweenTo(a.color(this.end), this.pos), null, !0);
    };a.extend = function (a, g) {
      var l;a || (a = {});for (l in g) {
        a[l] = g[l];
      }return a;
    };a.merge = function () {
      var p,
          g = arguments,
          l,
          r = {},
          n = function n(l, v) {
        "object" !== (typeof l === "undefined" ? "undefined" : _typeof(l)) && (l = {});a.objectEach(v, function (e, h) {
          !a.isObject(e, !0) || a.isClass(e) || a.isDOMElement(e) ? l[h] = v[h] : l[h] = n(l[h] || {}, e);
        });return l;
      };!0 === g[0] && (r = g[1], g = Array.prototype.slice.call(g, 2));l = g.length;for (p = 0; p < l; p++) {
        r = n(r, g[p]);
      }return r;
    };a.pInt = function (a, g) {
      return parseInt(a, g || 10);
    };a.isString = function (a) {
      return "string" === typeof a;
    };a.isArray = function (a) {
      a = Object.prototype.toString.call(a);return "[object Array]" === a || "[object Array Iterator]" === a;
    };a.isObject = function (p, g) {
      return !!p && "object" === (typeof p === "undefined" ? "undefined" : _typeof(p)) && (!g || !a.isArray(p));
    };a.isDOMElement = function (p) {
      return a.isObject(p) && "number" === typeof p.nodeType;
    };a.isClass = function (p) {
      var g = p && p.constructor;return !(!a.isObject(p, !0) || a.isDOMElement(p) || !g || !g.name || "Object" === g.name);
    };a.isNumber = function (a) {
      return "number" === typeof a && !isNaN(a);
    };a.erase = function (a, g) {
      for (var l = a.length; l--;) {
        if (a[l] === g) {
          a.splice(l, 1);break;
        }
      }
    };a.defined = function (a) {
      return void 0 !== a && null !== a;
    };a.attr = function (p, g, l) {
      var r;a.isString(g) ? a.defined(l) ? p.setAttribute(g, l) : p && p.getAttribute && (r = p.getAttribute(g)) : a.defined(g) && a.isObject(g) && a.objectEach(g, function (a, l) {
        p.setAttribute(l, a);
      });return r;
    };a.splat = function (p) {
      return a.isArray(p) ? p : [p];
    };a.syncTimeout = function (a, g, l) {
      if (g) return setTimeout(a, g, l);a.call(0, l);
    };a.pick = function () {
      var a = arguments,
          g,
          l,
          r = a.length;for (g = 0; g < r; g++) {
        if (l = a[g], void 0 !== l && null !== l) return l;
      }
    };a.css = function (p, g) {
      a.isMS && !a.svg && g && void 0 !== g.opacity && (g.filter = "alpha(opacity\x3d" + 100 * g.opacity + ")");a.extend(p.style, g);
    };a.createElement = function (p, g, l, r, n) {
      p = B.createElement(p);var w = a.css;g && a.extend(p, g);n && w(p, { padding: 0, border: "none", margin: 0 });l && w(p, l);r && r.appendChild(p);return p;
    };a.extendClass = function (p, g) {
      var l = function l() {};l.prototype = new p();a.extend(l.prototype, g);return l;
    };a.pad = function (a, g, l) {
      return Array((g || 2) + 1 - String(a).length).join(l || 0) + a;
    };a.relativeLength = function (a, g, l) {
      return (/%$/.test(a) ? g * parseFloat(a) / 100 + (l || 0) : parseFloat(a)
      );
    };a.wrap = function (a, g, l) {
      var r = a[g];a[g] = function () {
        var a = Array.prototype.slice.call(arguments),
            g = arguments,
            v = this;v.proceed = function () {
          r.apply(v, arguments.length ? arguments : g);
        };a.unshift(r);a = l.apply(this, a);v.proceed = null;return a;
      };
    };a.getTZOffset = function (p) {
      var g = a.Date;return 6E4 * (g.hcGetTimezoneOffset && g.hcGetTimezoneOffset(p) || g.hcTimezoneOffset || 0);
    };a.dateFormat = function (p, g, l) {
      if (!a.defined(g) || isNaN(g)) return a.defaultOptions.lang.invalidDate || "";p = a.pick(p, "%Y-%m-%d %H:%M:%S");var r = a.Date,
          n = new r(g - a.getTZOffset(g)),
          w = n[r.hcGetHours](),
          v = n[r.hcGetDay](),
          e = n[r.hcGetDate](),
          h = n[r.hcGetMonth](),
          m = n[r.hcGetFullYear](),
          c = a.defaultOptions.lang,
          f = c.weekdays,
          b = c.shortWeekdays,
          d = a.pad,
          r = a.extend({ a: b ? b[v] : f[v].substr(0, 3), A: f[v], d: d(e), e: d(e, 2, " "), w: v, b: c.shortMonths[h], B: c.months[h], m: d(h + 1), y: m.toString().substr(2, 2), Y: m, H: d(w), k: w, I: d(w % 12 || 12), l: w % 12 || 12, M: d(n[r.hcGetMinutes]()), p: 12 > w ? "AM" : "PM", P: 12 > w ? "am" : "pm", S: d(n.getSeconds()), L: d(Math.round(g % 1E3), 3) }, a.dateFormats);a.objectEach(r, function (a, b) {
        for (; -1 !== p.indexOf("%" + b);) {
          p = p.replace("%" + b, "function" === typeof a ? a(g) : a);
        }
      });return l ? p.substr(0, 1).toUpperCase() + p.substr(1) : p;
    };a.formatSingle = function (p, g) {
      var l = /\.([0-9])/,
          r = a.defaultOptions.lang;/f$/.test(p) ? (l = (l = p.match(l)) ? l[1] : -1, null !== g && (g = a.numberFormat(g, l, r.decimalPoint, -1 < p.indexOf(",") ? r.thousandsSep : ""))) : g = a.dateFormat(p, g);return g;
    };a.format = function (p, g) {
      for (var l = "{", r = !1, n, w, v, e, h = [], m; p;) {
        l = p.indexOf(l);if (-1 === l) break;n = p.slice(0, l);if (r) {
          n = n.split(":");w = n.shift().split(".");e = w.length;m = g;for (v = 0; v < e; v++) {
            m && (m = m[w[v]]);
          }n.length && (m = a.formatSingle(n.join(":"), m));h.push(m);
        } else h.push(n);p = p.slice(l + 1);l = (r = !r) ? "}" : "{";
      }h.push(p);return h.join("");
    };a.getMagnitude = function (a) {
      return Math.pow(10, Math.floor(Math.log(a) / Math.LN10));
    };a.normalizeTickInterval = function (p, g, l, r, n) {
      var w,
          v = p;l = a.pick(l, 1);w = p / l;g || (g = n ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === r && (1 === l ? g = a.grep(g, function (a) {
        return 0 === a % 1;
      }) : .1 >= l && (g = [1 / l])));for (r = 0; r < g.length && !(v = g[r], n && v * l >= p || !n && w <= (g[r] + (g[r + 1] || g[r])) / 2); r++) {}return v = a.correctFloat(v * l, -Math.round(Math.log(.001) / Math.LN10));
    };a.stableSort = function (a, g) {
      var l = a.length,
          r,
          n;for (n = 0; n < l; n++) {
        a[n].safeI = n;
      }a.sort(function (a, n) {
        r = g(a, n);return 0 === r ? a.safeI - n.safeI : r;
      });for (n = 0; n < l; n++) {
        delete a[n].safeI;
      }
    };a.arrayMin = function (a) {
      for (var g = a.length, l = a[0]; g--;) {
        a[g] < l && (l = a[g]);
      }return l;
    };a.arrayMax = function (a) {
      for (var g = a.length, l = a[0]; g--;) {
        a[g] > l && (l = a[g]);
      }return l;
    };a.destroyObjectProperties = function (p, g) {
      a.objectEach(p, function (a, r) {
        a && a !== g && a.destroy && a.destroy();delete p[r];
      });
    };a.discardElement = function (p) {
      var g = a.garbageBin;g || (g = a.createElement("div"));p && g.appendChild(p);g.innerHTML = "";
    };a.correctFloat = function (a, g) {
      return parseFloat(a.toPrecision(g || 14));
    };a.setAnimation = function (p, g) {
      g.renderer.globalAnimation = a.pick(p, g.options.chart.animation, !0);
    };a.animObject = function (p) {
      return a.isObject(p) ? a.merge(p) : { duration: p ? 500 : 0 };
    };a.timeUnits = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 };a.numberFormat = function (p, g, l, r) {
      p = +p || 0;g = +g;var n = a.defaultOptions.lang,
          w = (p.toString().split(".")[1] || "").split("e")[0].length,
          v,
          e,
          h = p.toString().split("e");-1 === g ? g = Math.min(w, 20) : a.isNumber(g) || (g = 2);e = (Math.abs(h[1] ? h[0] : p) + Math.pow(10, -Math.max(g, w) - 1)).toFixed(g);w = String(a.pInt(e));v = 3 < w.length ? w.length % 3 : 0;l = a.pick(l, n.decimalPoint);r = a.pick(r, n.thousandsSep);
      p = (0 > p ? "-" : "") + (v ? w.substr(0, v) + r : "");p += w.substr(v).replace(/(\d{3})(?=\d)/g, "$1" + r);g && (p += l + e.slice(-g));h[1] && (p += "e" + h[1]);return p;
    };Math.easeInOutSine = function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1);
    };a.getStyle = function (p, g, l) {
      if ("width" === g) return Math.min(p.offsetWidth, p.scrollWidth) - a.getStyle(p, "padding-left") - a.getStyle(p, "padding-right");if ("height" === g) return Math.min(p.offsetHeight, p.scrollHeight) - a.getStyle(p, "padding-top") - a.getStyle(p, "padding-bottom");G.getComputedStyle || a.error(27, !0);if (p = G.getComputedStyle(p, void 0)) p = p.getPropertyValue(g), a.pick(l, "opacity" !== g) && (p = a.pInt(p));return p;
    };a.inArray = function (p, g) {
      return (a.indexOfPolyfill || Array.prototype.indexOf).call(g, p);
    };a.grep = function (p, g) {
      return (a.filterPolyfill || Array.prototype.filter).call(p, g);
    };a.find = Array.prototype.find ? function (a, g) {
      return a.find(g);
    } : function (a, g) {
      var l,
          r = a.length;for (l = 0; l < r; l++) {
        if (g(a[l], l)) return a[l];
      }
    };a.map = function (a, g) {
      for (var l = [], r = 0, n = a.length; r < n; r++) {
        l[r] = g.call(a[r], a[r], r, a);
      }return l;
    };
    a.keys = function (p) {
      return (a.keysPolyfill || Object.keys).call(void 0, p);
    };a.reduce = function (p, g, l) {
      return (a.reducePolyfill || Array.prototype.reduce).call(p, g, l);
    };a.offset = function (a) {
      var g = B.documentElement;a = a.parentElement ? a.getBoundingClientRect() : { top: 0, left: 0 };return { top: a.top + (G.pageYOffset || g.scrollTop) - (g.clientTop || 0), left: a.left + (G.pageXOffset || g.scrollLeft) - (g.clientLeft || 0) };
    };a.stop = function (p, g) {
      for (var l = a.timers.length; l--;) {
        a.timers[l].elem !== p || g && g !== a.timers[l].prop || (a.timers[l].stopped = !0);
      }
    };a.each = function (p, g, l) {
      return (a.forEachPolyfill || Array.prototype.forEach).call(p, g, l);
    };a.objectEach = function (a, g, l) {
      for (var r in a) {
        a.hasOwnProperty(r) && g.call(l, a[r], r, a);
      }
    };a.addEvent = function (p, g, l) {
      var r,
          n,
          w = p.addEventListener || a.addEventListenerPolyfill;p.hcEvents && !p.hasOwnProperty("hcEvents") && (n = {}, a.objectEach(p.hcEvents, function (a, e) {
        n[e] = a.slice(0);
      }), p.hcEvents = n);r = p.hcEvents = p.hcEvents || {};w && w.call(p, g, l, !1);r[g] || (r[g] = []);r[g].push(l);return function () {
        a.removeEvent(p, g, l);
      };
    };a.removeEvent = function (p, g, l) {
      function r(e, m) {
        var c = p.removeEventListener || a.removeEventListenerPolyfill;c && c.call(p, e, m, !1);
      }function n() {
        var e, m;p.nodeName && (g ? (e = {}, e[g] = !0) : e = v, a.objectEach(e, function (a, f) {
          if (v[f]) for (m = v[f].length; m--;) {
            r(f, v[f][m]);
          }
        }));
      }var w,
          v = p.hcEvents,
          e;v && (g ? (w = v[g] || [], l ? (e = a.inArray(l, w), -1 < e && (w.splice(e, 1), v[g] = w), r(g, l)) : (n(), v[g] = [])) : (n(), p.hcEvents = {}));
    };a.fireEvent = function (p, g, l, r) {
      var n;n = p.hcEvents;var w, v;l = l || {};if (B.createEvent && (p.dispatchEvent || p.fireEvent)) n = B.createEvent("Events"), n.initEvent(g, !0, !0), a.extend(n, l), p.dispatchEvent ? p.dispatchEvent(n) : p.fireEvent(g, n);else if (n) for (n = n[g] || [], w = n.length, l.target || a.extend(l, { preventDefault: function preventDefault() {
          l.defaultPrevented = !0;
        }, target: p, type: g }), g = 0; g < w; g++) {
        (v = n[g]) && !1 === v.call(p, l) && l.preventDefault();
      }r && !l.defaultPrevented && r(l);
    };a.animate = function (p, g, l) {
      var r,
          n = "",
          w,
          v,
          e;a.isObject(l) || (e = arguments, l = { duration: e[2], easing: e[3], complete: e[4] });a.isNumber(l.duration) || (l.duration = 400);l.easing = "function" === typeof l.easing ? l.easing : Math[l.easing] || Math.easeInOutSine;l.curAnim = a.merge(g);a.objectEach(g, function (e, m) {
        a.stop(p, m);v = new a.Fx(p, l, m);w = null;"d" === m ? (v.paths = v.initPath(p, p.d, g.d), v.toD = g.d, r = 0, w = 1) : p.attr ? r = p.attr(m) : (r = parseFloat(a.getStyle(p, m)) || 0, "opacity" !== m && (n = "px"));w || (w = e);w && w.match && w.match("px") && (w = w.replace(/px/g, ""));v.run(r, w, n);
      });
    };a.seriesType = function (p, g, l, r, n) {
      var w = a.getOptions(),
          v = a.seriesTypes;w.plotOptions[p] = a.merge(w.plotOptions[g], l);v[p] = a.extendClass(v[g] || function () {}, r);v[p].prototype.type = p;n && (v[p].prototype.pointClass = a.extendClass(a.Point, n));return v[p];
    };a.uniqueKey = function () {
      var a = Math.random().toString(36).substring(2, 9),
          g = 0;return function () {
        return "highcharts-" + a + "-" + g++;
      };
    }();G.jQuery && (G.jQuery.fn.highcharts = function () {
      var p = [].slice.call(arguments);if (this[0]) return p[0] ? (new a[a.isString(p[0]) ? p.shift() : "Chart"](this[0], p[0], p[1]), this) : D[a.attr(this[0], "data-highcharts-chart")];
    });
  })(N);(function (a) {
    var D = a.each,
        B = a.isNumber,
        G = a.map,
        p = a.merge,
        g = a.pInt;a.Color = function (l) {
      if (!(this instanceof a.Color)) return new a.Color(l);this.init(l);
    };a.Color.prototype = { parsers: [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function parse(a) {
          return [g(a[1]), g(a[2]), g(a[3]), parseFloat(a[4], 10)];
        } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function parse(a) {
          return [g(a[1]), g(a[2]), g(a[3]), 1];
        } }], names: { none: "rgba(255,255,255,0)", white: "#ffffff", black: "#000000" }, init: function init(l) {
        var g, n, w, v;if ((this.input = l = this.names[l && l.toLowerCase ? l.toLowerCase() : ""] || l) && l.stops) this.stops = G(l.stops, function (e) {
          return new a.Color(e[1]);
        });else if (l && l.charAt && "#" === l.charAt() && (g = l.length, l = parseInt(l.substr(1), 16), 7 === g ? n = [(l & 16711680) >> 16, (l & 65280) >> 8, l & 255, 1] : 4 === g && (n = [(l & 3840) >> 4 | (l & 3840) >> 8, (l & 240) >> 4 | l & 240, (l & 15) << 4 | l & 15, 1])), !n) for (w = this.parsers.length; w-- && !n;) {
          v = this.parsers[w], (g = v.regex.exec(l)) && (n = v.parse(g));
        }this.rgba = n || [];
      }, get: function get(a) {
        var l = this.input,
            n = this.rgba,
            g;this.stops ? (g = p(l), g.stops = [].concat(g.stops), D(this.stops, function (n, e) {
          g.stops[e] = [g.stops[e][0], n.get(a)];
        })) : g = n && B(n[0]) ? "rgb" === a || !a && 1 === n[3] ? "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")" : "a" === a ? n[3] : "rgba(" + n.join(",") + ")" : l;return g;
      }, brighten: function brighten(a) {
        var l,
            n = this.rgba;if (this.stops) D(this.stops, function (n) {
          n.brighten(a);
        });else if (B(a) && 0 !== a) for (l = 0; 3 > l; l++) {
          n[l] += g(255 * a), 0 > n[l] && (n[l] = 0), 255 < n[l] && (n[l] = 255);
        }return this;
      }, setOpacity: function setOpacity(a) {
        this.rgba[3] = a;return this;
      }, tweenTo: function tweenTo(a, g) {
        var n = this.rgba,
            l = a.rgba;l.length && n && n.length ? (a = 1 !== l[3] || 1 !== n[3], g = (a ? "rgba(" : "rgb(") + Math.round(l[0] + (n[0] - l[0]) * (1 - g)) + "," + Math.round(l[1] + (n[1] - l[1]) * (1 - g)) + "," + Math.round(l[2] + (n[2] - l[2]) * (1 - g)) + (a ? "," + (l[3] + (n[3] - l[3]) * (1 - g)) : "") + ")") : g = a.input || "none";return g;
      } };a.color = function (g) {
      return new a.Color(g);
    };
  })(N);(function (a) {
    var D,
        B,
        G = a.addEvent,
        p = a.animate,
        g = a.attr,
        l = a.charts,
        r = a.color,
        n = a.css,
        w = a.createElement,
        v = a.defined,
        e = a.deg2rad,
        h = a.destroyObjectProperties,
        m = a.doc,
        c = a.each,
        f = a.extend,
        b = a.erase,
        d = a.grep,
        y = a.hasTouch,
        H = a.inArray,
        J = a.isArray,
        t = a.isFirefox,
        K = a.isMS,
        x = a.isObject,
        C = a.isString,
        L = a.isWebKit,
        q = a.merge,
        A = a.noop,
        E = a.objectEach,
        F = a.pick,
        k = a.pInt,
        u = a.removeEvent,
        R = a.stop,
        M = a.svg,
        P = a.SVG_NS,
        I = a.symbolSizes,
        Q = a.win;D = a.SVGElement = function () {
      return this;
    };f(D.prototype, { opacity: 1, SVG_NS: P, textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "), init: function init(a, k) {
        this.element = "span" === k ? w(k) : m.createElementNS(this.SVG_NS, k);this.renderer = a;
      }, animate: function animate(z, k, b) {
        k = a.animObject(F(k, this.renderer.globalAnimation, !0));0 !== k.duration ? (b && (k.complete = b), p(this, z, k)) : (this.attr(z, null, b), k.step && k.step.call(this));return this;
      }, colorGradient: function colorGradient(z, k, b) {
        var u = this.renderer,
            f,
            O,
            d,
            e,
            y,
            m,
            h,
            M,
            A,
            I,
            x = [],
            t;z.radialGradient ? O = "radialGradient" : z.linearGradient && (O = "linearGradient");O && (d = z[O], y = u.gradients, h = z.stops, I = b.radialReference, J(d) && (z[O] = d = { x1: d[0], y1: d[1], x2: d[2], y2: d[3], gradientUnits: "userSpaceOnUse" }), "radialGradient" === O && I && !v(d.gradientUnits) && (e = d, d = q(d, u.getRadialAttr(I, e), { gradientUnits: "userSpaceOnUse" })), E(d, function (a, z) {
          "id" !== z && x.push(z, a);
        }), E(h, function (a) {
          x.push(a);
        }), x = x.join(","), y[x] ? I = y[x].attr("id") : (d.id = I = a.uniqueKey(), y[x] = m = u.createElement(O).attr(d).add(u.defs), m.radAttr = e, m.stops = [], c(h, function (z) {
          0 === z[1].indexOf("rgba") ? (f = a.color(z[1]), M = f.get("rgb"), A = f.get("a")) : (M = z[1], A = 1);z = u.createElement("stop").attr({ offset: z[0], "stop-color": M, "stop-opacity": A }).add(m);m.stops.push(z);
        })), t = "url(" + u.url + "#" + I + ")", b.setAttribute(k, t), b.gradient = x, z.toString = function () {
          return t;
        });
      }, applyTextOutline: function applyTextOutline(z) {
        var k = this.element,
            u,
            f,
            d,
            q,
            e;-1 !== z.indexOf("contrast") && (z = z.replace(/contrast/g, this.renderer.getContrast(k.style.fill)));z = z.split(" ");f = z[z.length - 1];if ((d = z[0]) && "none" !== d && a.svg) {
          this.fakeTS = !0;z = [].slice.call(k.getElementsByTagName("tspan"));this.ySetter = this.xSetter;d = d.replace(/(^[\d\.]+)(.*?)$/g, function (a, z, k) {
            return 2 * z + k;
          });for (e = z.length; e--;) {
            u = z[e], "highcharts-text-outline" === u.getAttribute("class") && b(z, k.removeChild(u));
          }q = k.firstChild;c(z, function (a, z) {
            0 === z && (a.setAttribute("x", k.getAttribute("x")), z = k.getAttribute("y"), a.setAttribute("y", z || 0), null === z && k.setAttribute("y", 0));a = a.cloneNode(1);g(a, { "class": "highcharts-text-outline", fill: f, stroke: f, "stroke-width": d, "stroke-linejoin": "round" });k.insertBefore(a, q);
          });
        }
      }, attr: function attr(a, k, b, u) {
        var z,
            f = this.element,
            d,
            c = this,
            O,
            q;"string" === typeof a && void 0 !== k && (z = a, a = {}, a[z] = k);"string" === typeof a ? c = (this[a + "Getter"] || this._defaultGetter).call(this, a, f) : (E(a, function (z, k) {
          O = !1;u || R(this, k);this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(k) && (d || (this.symbolAttr(a), d = !0), O = !0);!this.rotation || "x" !== k && "y" !== k || (this.doTransform = !0);O || (q = this[k + "Setter"] || this._defaultSetter, q.call(this, z, k, f), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(k) && this.updateShadows(k, z, q));
        }, this), this.afterSetters());b && b();return c;
      }, afterSetters: function afterSetters() {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      }, updateShadows: function updateShadows(a, k, b) {
        for (var z = this.shadows, u = z.length; u--;) {
          b.call(z[u], "height" === a ? Math.max(k - (z[u].cutHeight || 0), 0) : "d" === a ? this.d : k, a, z[u]);
        }
      }, addClass: function addClass(a, k) {
        var z = this.attr("class") || "";-1 === z.indexOf(a) && (k || (a = (z + (z ? " " : "") + a).replace("  ", " ")), this.attr("class", a));return this;
      }, hasClass: function hasClass(a) {
        return -1 !== H(a, (this.attr("class") || "").split(" "));
      }, removeClass: function removeClass(a) {
        return this.attr("class", (this.attr("class") || "").replace(a, ""));
      }, symbolAttr: function symbolAttr(a) {
        var z = this;c("x y r start end width height innerR anchorX anchorY".split(" "), function (k) {
          z[k] = F(a[k], z[k]);
        });z.attr({ d: z.renderer.symbols[z.symbolName](z.x, z.y, z.width, z.height, z) });
      }, clip: function clip(a) {
        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
      }, crisp: function crisp(a, k) {
        var z = this,
            b = {},
            u;k = k || a.strokeWidth || 0;u = Math.round(k) % 2 / 2;a.x = Math.floor(a.x || z.x || 0) + u;a.y = Math.floor(a.y || z.y || 0) + u;a.width = Math.floor((a.width || z.width || 0) - 2 * u);a.height = Math.floor((a.height || z.height || 0) - 2 * u);v(a.strokeWidth) && (a.strokeWidth = k);E(a, function (a, k) {
          z[k] !== a && (z[k] = b[k] = a);
        });return b;
      }, css: function css(a) {
        var z = this.styles,
            b = {},
            u = this.element,
            d,
            c = "",
            q,
            e = !z,
            y = ["textOutline", "textOverflow", "width"];a && a.color && (a.fill = a.color);z && E(a, function (a, k) {
          a !== z[k] && (b[k] = a, e = !0);
        });e && (z && (a = f(z, b)), d = this.textWidth = a && a.width && "auto" !== a.width && "text" === u.nodeName.toLowerCase() && k(a.width), this.styles = a, d && !M && this.renderer.forExport && delete a.width, K && !M ? n(this.element, a) : (q = function q(a, z) {
          return "-" + z.toLowerCase();
        }, E(a, function (a, z) {
          -1 === H(z, y) && (c += z.replace(/([A-Z])/g, q) + ":" + a + ";");
        }), c && g(u, "style", c)), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline)));return this;
      }, strokeWidth: function strokeWidth() {
        return this["stroke-width"] || 0;
      }, on: function on(a, k) {
        var z = this,
            b = z.element;y && "click" === a ? (b.ontouchstart = function (a) {
          z.touchEventFired = Date.now();a.preventDefault();k.call(b, a);
        }, b.onclick = function (a) {
          (-1 === Q.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (z.touchEventFired || 0)) && k.call(b, a);
        }) : b["on" + a] = k;return this;
      }, setRadialReference: function setRadialReference(a) {
        var z = this.renderer.gradients[this.element.gradient];this.element.radialReference = a;z && z.radAttr && z.animate(this.renderer.getRadialAttr(a, z.radAttr));return this;
      }, translate: function translate(a, k) {
        return this.attr({ translateX: a, translateY: k });
      }, invert: function invert(a) {
        this.inverted = a;this.updateTransform();return this;
      }, updateTransform: function updateTransform() {
        var a = this.translateX || 0,
            k = this.translateY || 0,
            b = this.scaleX,
            u = this.scaleY,
            f = this.inverted,
            d = this.rotation,
            c = this.matrix,
            q = this.element;f && (a += this.width, k += this.height);a = ["translate(" + a + "," + k + ")"];v(c) && a.push("matrix(" + c.join(",") + ")");f ? a.push("rotate(90) scale(-1,1)") : d && a.push("rotate(" + d + " " + F(this.rotationOriginX, q.getAttribute("x"), 0) + " " + F(this.rotationOriginY, q.getAttribute("y") || 0) + ")");(v(b) || v(u)) && a.push("scale(" + F(b, 1) + " " + F(u, 1) + ")");a.length && q.setAttribute("transform", a.join(" "));
      }, toFront: function toFront() {
        var a = this.element;a.parentNode.appendChild(a);
        return this;
      }, align: function align(a, k, u) {
        var z,
            f,
            d,
            c,
            q = {};f = this.renderer;d = f.alignedObjects;var e, O;if (a) {
          if (this.alignOptions = a, this.alignByTranslate = k, !u || C(u)) this.alignTo = z = u || "renderer", b(d, this), d.push(this), u = null;
        } else a = this.alignOptions, k = this.alignByTranslate, z = this.alignTo;u = F(u, f[z], f);z = a.align;f = a.verticalAlign;d = (u.x || 0) + (a.x || 0);c = (u.y || 0) + (a.y || 0);"right" === z ? e = 1 : "center" === z && (e = 2);e && (d += (u.width - (a.width || 0)) / e);q[k ? "translateX" : "x"] = Math.round(d);"bottom" === f ? O = 1 : "middle" === f && (O = 2);O && (c += (u.height - (a.height || 0)) / O);q[k ? "translateY" : "y"] = Math.round(c);this[this.placed ? "animate" : "attr"](q);this.placed = !0;this.alignAttr = q;return this;
      }, getBBox: function getBBox(a, k) {
        var z,
            b = this.renderer,
            u,
            d = this.element,
            q = this.styles,
            O,
            y = this.textStr,
            m,
            h = b.cache,
            M = b.cacheKeys,
            A;k = F(k, this.rotation);u = k * e;O = q && q.fontSize;v(y) && (A = y.toString(), -1 === A.indexOf("\x3c") && (A = A.replace(/[0-9]/g, "0")), A += ["", k || 0, O, q && q.width, q && q.textOverflow].join());A && !a && (z = h[A]);if (!z) {
          if (d.namespaceURI === this.SVG_NS || b.forExport) {
            try {
              (m = this.fakeTS && function (a) {
                c(d.querySelectorAll(".highcharts-text-outline"), function (z) {
                  z.style.display = a;
                });
              }) && m("none"), z = d.getBBox ? f({}, d.getBBox()) : { width: d.offsetWidth, height: d.offsetHeight }, m && m("");
            } catch (W) {}if (!z || 0 > z.width) z = { width: 0, height: 0 };
          } else z = this.htmlGetBBox();b.isSVG && (a = z.width, b = z.height, q && "11px" === q.fontSize && 17 === Math.round(b) && (z.height = b = 14), k && (z.width = Math.abs(b * Math.sin(u)) + Math.abs(a * Math.cos(u)), z.height = Math.abs(b * Math.cos(u)) + Math.abs(a * Math.sin(u))));
          if (A && 0 < z.height) {
            for (; 250 < M.length;) {
              delete h[M.shift()];
            }h[A] || M.push(A);h[A] = z;
          }
        }return z;
      }, show: function show(a) {
        return this.attr({ visibility: a ? "inherit" : "visible" });
      }, hide: function hide() {
        return this.attr({ visibility: "hidden" });
      }, fadeOut: function fadeOut(a) {
        var z = this;z.animate({ opacity: 0 }, { duration: a || 150, complete: function complete() {
            z.attr({ y: -9999 });
          } });
      }, add: function add(a) {
        var z = this.renderer,
            k = this.element,
            b;a && (this.parentGroup = a);this.parentInverted = a && a.inverted;void 0 !== this.textStr && z.buildText(this);this.added = !0;if (!a || a.handleZ || this.zIndex) b = this.zIndexSetter();b || (a ? a.element : z.box).appendChild(k);if (this.onAdd) this.onAdd();return this;
      }, safeRemoveChild: function safeRemoveChild(a) {
        var z = a.parentNode;z && z.removeChild(a);
      }, destroy: function destroy() {
        var a = this,
            k = a.element || {},
            u = a.renderer.isSVG && "SPAN" === k.nodeName && a.parentGroup,
            f = k.ownerSVGElement;k.onclick = k.onmouseout = k.onmouseover = k.onmousemove = k.point = null;R(a);a.clipPath && f && (c(f.querySelectorAll("[clip-path],[CLIP-PATH]"), function (k) {
          k.getAttribute("clip-path").match(RegExp('[("]#' + a.clipPath.element.id + '[)"]')) && k.removeAttribute("clip-path");
        }), a.clipPath = a.clipPath.destroy());if (a.stops) {
          for (f = 0; f < a.stops.length; f++) {
            a.stops[f] = a.stops[f].destroy();
          }a.stops = null;
        }a.safeRemoveChild(k);for (a.destroyShadows(); u && u.div && 0 === u.div.childNodes.length;) {
          k = u.parentGroup, a.safeRemoveChild(u.div), delete u.div, u = k;
        }a.alignTo && b(a.renderer.alignedObjects, a);E(a, function (k, z) {
          delete a[z];
        });return null;
      }, shadow: function shadow(a, k, b) {
        var z = [],
            u,
            f,
            d = this.element,
            c,
            q,
            e,
            y;if (!a) this.destroyShadows();else if (!this.shadows) {
          q = F(a.width, 3);e = (a.opacity || .15) / q;y = this.parentInverted ? "(-1,-1)" : "(" + F(a.offsetX, 1) + ", " + F(a.offsetY, 1) + ")";for (u = 1; u <= q; u++) {
            f = d.cloneNode(0), c = 2 * q + 1 - 2 * u, g(f, { isShadow: "true", stroke: a.color || "#000000", "stroke-opacity": e * u, "stroke-width": c, transform: "translate" + y, fill: "none" }), b && (g(f, "height", Math.max(g(f, "height") - c, 0)), f.cutHeight = c), k ? k.element.appendChild(f) : d.parentNode && d.parentNode.insertBefore(f, d), z.push(f);
          }this.shadows = z;
        }return this;
      }, destroyShadows: function destroyShadows() {
        c(this.shadows || [], function (a) {
          this.safeRemoveChild(a);
        }, this);this.shadows = void 0;
      }, xGetter: function xGetter(a) {
        "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));return this._defaultGetter(a);
      }, _defaultGetter: function _defaultGetter(a) {
        a = F(this[a], this.element ? this.element.getAttribute(a) : null, 0);/^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));return a;
      }, dSetter: function dSetter(a, k, b) {
        a && a.join && (a = a.join(" "));/(NaN| {2}|^$)/.test(a) && (a = "M 0 0");this[k] !== a && (b.setAttribute(k, a), this[k] = a);
      }, dashstyleSetter: function dashstyleSetter(a) {
        var b,
            u = this["stroke-width"];"inherit" === u && (u = 1);if (a = a && a.toLowerCase()) {
          a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");for (b = a.length; b--;) {
            a[b] = k(a[b]) * u;
          }a = a.join(",").replace(/NaN/g, "none");this.element.setAttribute("stroke-dasharray", a);
        }
      }, alignSetter: function alignSetter(a) {
        this.element.setAttribute("text-anchor", { left: "start", center: "middle", right: "end" }[a]);
      }, opacitySetter: function opacitySetter(a, k, b) {
        this[k] = a;b.setAttribute(k, a);
      }, titleSetter: function titleSetter(a) {
        var k = this.element.getElementsByTagName("title")[0];k || (k = m.createElementNS(this.SVG_NS, "title"), this.element.appendChild(k));k.firstChild && k.removeChild(k.firstChild);k.appendChild(m.createTextNode(String(F(a), "").replace(/<[^>]*>/g, "")));
      }, textSetter: function textSetter(a) {
        a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this));
      }, fillSetter: function fillSetter(a, k, b) {
        "string" === typeof a ? b.setAttribute(k, a) : a && this.colorGradient(a, k, b);
      }, visibilitySetter: function visibilitySetter(a, k, b) {
        "inherit" === a ? b.removeAttribute(k) : this[k] !== a && b.setAttribute(k, a);this[k] = a;
      }, zIndexSetter: function zIndexSetter(a, b) {
        var u = this.renderer,
            z = this.parentGroup,
            f = (z || u).element || u.box,
            d,
            c = this.element,
            q,
            e,
            u = f === u.box;d = this.added;var y;v(a) && (c.zIndex = a, a = +a, this[b] === a && (d = !1), this[b] = a);if (d) {
          (a = this.zIndex) && z && (z.handleZ = !0);b = f.childNodes;for (y = b.length - 1; 0 <= y && !q; y--) {
            if (z = b[y], d = z.zIndex, e = !v(d), z !== c) if (0 > a && e && !u && !y) f.insertBefore(c, b[y]), q = !0;else if (k(d) <= a || e && (!v(a) || 0 <= a)) f.insertBefore(c, b[y + 1] || null), q = !0;
          }q || (f.insertBefore(c, b[u ? 3 : 0] || null), q = !0);
        }return q;
      }, _defaultSetter: function _defaultSetter(a, k, b) {
        b.setAttribute(k, a);
      } });D.prototype.yGetter = D.prototype.xGetter;D.prototype.translateXSetter = D.prototype.translateYSetter = D.prototype.rotationSetter = D.prototype.verticalAlignSetter = D.prototype.rotationOriginXSetter = D.prototype.rotationOriginYSetter = D.prototype.scaleXSetter = D.prototype.scaleYSetter = D.prototype.matrixSetter = function (a, k) {
      this[k] = a;this.doTransform = !0;
    };
    D.prototype["stroke-widthSetter"] = D.prototype.strokeSetter = function (a, k, b) {
      this[k] = a;this.stroke && this["stroke-width"] ? (D.prototype.fillSetter.call(this, this.stroke, "stroke", b), b.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === k && 0 === a && this.hasStroke && (b.removeAttribute("stroke"), this.hasStroke = !1);
    };B = a.SVGRenderer = function () {
      this.init.apply(this, arguments);
    };f(B.prototype, { Element: D, SVG_NS: P, init: function init(a, k, b, u, f, d) {
        var z;u = this.createElement("svg").attr({ version: "1.1",
          "class": "highcharts-root" }).css(this.getStyle(u));z = u.element;a.appendChild(z);g(a, "dir", "ltr");-1 === a.innerHTML.indexOf("xmlns") && g(z, "xmlns", this.SVG_NS);this.isSVG = !0;this.box = z;this.boxWrapper = u;this.alignedObjects = [];this.url = (t || L) && m.getElementsByTagName("base").length ? Q.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";this.createElement("desc").add().element.appendChild(m.createTextNode("Created with Highcharts 6.0.3"));this.defs = this.createElement("defs").add();this.allowHTML = d;this.forExport = f;this.gradients = {};this.cache = {};this.cacheKeys = [];this.imgCount = 0;this.setSize(k, b, !1);var c;t && a.getBoundingClientRect && (k = function k() {
          n(a, { left: 0, top: 0 });c = a.getBoundingClientRect();n(a, { left: Math.ceil(c.left) - c.left + "px", top: Math.ceil(c.top) - c.top + "px" });
        }, k(), this.unSubPixelFix = G(Q, "resize", k));
      }, getStyle: function getStyle(a) {
        return this.style = f({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, a);
      }, setStyle: function setStyle(a) {
        this.boxWrapper.css(this.getStyle(a));
      }, isHidden: function isHidden() {
        return !this.boxWrapper.getBBox().width;
      }, destroy: function destroy() {
        var a = this.defs;this.box = null;this.boxWrapper = this.boxWrapper.destroy();h(this.gradients || {});this.gradients = null;a && (this.defs = a.destroy());this.unSubPixelFix && this.unSubPixelFix();return this.alignedObjects = null;
      }, createElement: function createElement(a) {
        var k = new this.Element();k.init(this, a);return k;
      }, draw: A, getRadialAttr: function getRadialAttr(a, k) {
        return { cx: a[0] - a[2] / 2 + k.cx * a[2], cy: a[1] - a[2] / 2 + k.cy * a[2], r: k.r * a[2] };
      }, getSpanWidth: function getSpanWidth(a, k) {
        var b = a.getBBox(!0).width;!M && this.forExport && (b = this.measureSpanWidth(k.firstChild.data, a.styles));return b;
      }, applyEllipsis: function applyEllipsis(a, k, b, u) {
        var f = a.rotation,
            z = b,
            d,
            c = 0,
            q = b.length,
            e = function e(a) {
          k.removeChild(k.firstChild);a && k.appendChild(m.createTextNode(a));
        },
            y;a.rotation = 0;z = this.getSpanWidth(a, k);if (y = z > u) {
          for (; c <= q;) {
            d = Math.ceil((c + q) / 2), z = b.substring(0, d) + "\u2026", e(z), z = this.getSpanWidth(a, k), c === q ? c = q + 1 : z > u ? q = d - 1 : c = d;
          }0 === q && e("");
        }a.rotation = f;return y;
      }, escapes: { "\x26": "\x26amp;", "\x3c": "\x26lt;", "\x3e": "\x26gt;", "'": "\x26#39;", '"': "\x26quot" }, buildText: function buildText(a) {
        var b = a.element,
            u = this,
            f = u.forExport,
            z = F(a.textStr, "").toString(),
            q = -1 !== z.indexOf("\x3c"),
            e = b.childNodes,
            y,
            h,
            A,
            I,
            x = g(b, "x"),
            t = a.styles,
            H = a.textWidth,
            l = t && t.lineHeight,
            C = t && t.textOutline,
            v = t && "ellipsis" === t.textOverflow,
            R = t && "nowrap" === t.whiteSpace,
            w = t && t.fontSize,
            Q,
            J,
            r = e.length,
            t = H && !a.added && this.box,
            K = function K(a) {
          var f;f = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : w || u.style.fontSize || 12;return l ? k(l) : u.fontMetrics(f, a.getAttribute("style") ? a : b).h;
        },
            p = function p(a) {
          E(u.escapes, function (k, b) {
            a = a.replace(new RegExp(k, "g"), b);
          });return a;
        };Q = [z, v, R, l, C, w, H].join();if (Q !== a.textCache) {
          for (a.textCache = Q; r--;) {
            b.removeChild(e[r]);
          }q || C || v || H || -1 !== z.indexOf(" ") ? (y = /<.*class="([^"]+)".*>/, h = /<.*style="([^"]+)".*>/, A = /<.*href="([^"]+)".*>/, t && t.appendChild(b), z = q ? z.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g, '\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g, "\x3c/span\x3e").split(/<br.*?>/g) : [z], z = d(z, function (a) {
            return "" !== a;
          }), c(z, function (k, z) {
            var d,
                q = 0;k = k.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||");d = k.split("|||");c(d, function (k) {
              if ("" !== k || 1 === d.length) {
                var c = {},
                    e = m.createElementNS(u.SVG_NS, "tspan"),
                    t,
                    E;y.test(k) && (t = k.match(y)[1], g(e, "class", t));h.test(k) && (E = k.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), g(e, "style", E));A.test(k) && !f && (g(e, "onclick", 'location.href\x3d"' + k.match(A)[1] + '"'), g(e, "class", "highcharts-anchor"), n(e, { cursor: "pointer" }));k = p(k.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");if (" " !== k) {
                  e.appendChild(m.createTextNode(k));q ? c.dx = 0 : z && null !== x && (c.x = x);g(e, c);b.appendChild(e);!q && J && (!M && f && n(e, { display: "block" }), g(e, "dy", K(e)));if (H) {
                    c = k.replace(/([^\^])-/g, "$1- ").split(" ");t = 1 < d.length || z || 1 < c.length && !R;var O = [],
                        l,
                        C = K(e),
                        F = a.rotation;for (v && (I = u.applyEllipsis(a, e, k, H)); !v && t && (c.length || O.length);) {
                      a.rotation = 0, l = u.getSpanWidth(a, e), k = l > H, void 0 === I && (I = k), k && 1 !== c.length ? (e.removeChild(e.firstChild), O.unshift(c.pop())) : (c = O, O = [], c.length && !R && (e = m.createElementNS(P, "tspan"), g(e, { dy: C, x: x }), E && g(e, "style", E), b.appendChild(e)), l > H && (H = l)), c.length && e.appendChild(m.createTextNode(c.join(" ").replace(/- /g, "-")));
                    }a.rotation = F;
                  }q++;
                }
              }
            });J = J || b.childNodes.length;
          }), I && a.attr("title", a.textStr), t && t.removeChild(b), C && a.applyTextOutline && a.applyTextOutline(C)) : b.appendChild(m.createTextNode(p(z)));
        }
      }, getContrast: function getContrast(a) {
        a = r(a).rgba;return 510 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF";
      }, button: function button(a, k, b, u, d, c, e, y, m) {
        var z = this.label(a, k, b, m, null, null, null, null, "button"),
            h = 0;z.attr(q({ padding: 8, r: 2 }, d));var A, M, I, t;d = q({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontWeight: "normal" } }, d);A = d.style;delete d.style;c = q(d, { fill: "#e6e6e6" }, c);M = c.style;delete c.style;e = q(d, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, e);I = e.style;delete e.style;y = q(d, { style: { color: "#cccccc" } }, y);t = y.style;delete y.style;G(z.element, K ? "mouseover" : "mouseenter", function () {
          3 !== h && z.setState(1);
        });G(z.element, K ? "mouseout" : "mouseleave", function () {
          3 !== h && z.setState(h);
        });z.setState = function (a) {
          1 !== a && (z.state = h = a);z.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);z.attr([d, c, e, y][a || 0]).css([A, M, I, t][a || 0]);
        };z.attr(d).css(f({ cursor: "default" }, A));return z.on("click", function (a) {
          3 !== h && u.call(z, a);
        });
      }, crispLine: function crispLine(a, k) {
        a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - k % 2 / 2);a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + k % 2 / 2);return a;
      }, path: function path(a) {
        var k = { fill: "none" };J(a) ? k.d = a : x(a) && f(k, a);return this.createElement("path").attr(k);
      }, circle: function circle(a, k, b) {
        a = x(a) ? a : { x: a, y: k, r: b };k = this.createElement("circle");k.xSetter = k.ySetter = function (a, k, b) {
          b.setAttribute("c" + k, a);
        };return k.attr(a);
      }, arc: function arc(a, k, b, u, d, f) {
        x(a) ? (u = a, k = u.y, b = u.r, a = u.x) : u = { innerR: u, start: d, end: f };a = this.symbol("arc", a, k, b, b, u);a.r = b;return a;
      }, rect: function rect(a, k, b, u, d, f) {
        d = x(a) ? a.r : d;var c = this.createElement("rect");a = x(a) ? a : void 0 === a ? {} : { x: a, y: k, width: Math.max(b, 0), height: Math.max(u, 0) };void 0 !== f && (a.strokeWidth = f, a = c.crisp(a));a.fill = "none";d && (a.r = d);c.rSetter = function (a, k, b) {
          g(b, { rx: a, ry: a });
        };return c.attr(a);
      }, setSize: function setSize(a, k, b) {
        var u = this.alignedObjects,
            d = u.length;this.width = a;this.height = k;for (this.boxWrapper.animate({ width: a, height: k }, { step: function step() {
            this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
          }, duration: F(b, !0) ? void 0 : 0 }); d--;) {
          u[d].align();
        }
      }, g: function g(a) {
        var k = this.createElement("g");return a ? k.attr({ "class": "highcharts-" + a }) : k;
      }, image: function image(a, k, b, u, d) {
        var c = { preserveAspectRatio: "none" };1 < arguments.length && f(c, { x: k, y: b, width: u, height: d });c = this.createElement("image").attr(c);c.element.setAttributeNS ? c.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : c.element.setAttribute("hc-svg-href", a);return c;
      }, symbol: function symbol(a, k, b, u, d, q) {
        var e = this,
            z,
            y = /^url\((.*?)\)$/,
            h = y.test(a),
            A = !h && (this.symbols[a] ? a : "circle"),
            M = A && this.symbols[A],
            t = v(k) && M && M.call(this.symbols, Math.round(k), Math.round(b), u, d, q),
            x,
            E;M ? (z = this.path(t), z.attr("fill", "none"), f(z, { symbolName: A, x: k, y: b, width: u, height: d }), q && f(z, q)) : h && (x = a.match(y)[1], z = this.image(x), z.imgwidth = F(I[x] && I[x].width, q && q.width), z.imgheight = F(I[x] && I[x].height, q && q.height), E = function E() {
          z.attr({ width: z.width, height: z.height });
        }, c(["width", "height"], function (a) {
          z[a + "Setter"] = function (a, k) {
            var b = {},
                u = this["img" + k],
                d = "width" === k ? "translateX" : "translateY";
            this[k] = a;v(u) && (this.element && this.element.setAttribute(k, u), this.alignByTranslate || (b[d] = ((this[k] || 0) - u) / 2, this.attr(b)));
          };
        }), v(k) && z.attr({ x: k, y: b }), z.isImg = !0, v(z.imgwidth) && v(z.imgheight) ? E() : (z.attr({ width: 0, height: 0 }), w("img", { onload: function onload() {
            var a = l[e.chartIndex];0 === this.width && (n(this, { position: "absolute", top: "-999em" }), m.body.appendChild(this));I[x] = { width: this.width, height: this.height };z.imgwidth = this.width;z.imgheight = this.height;z.element && E();this.parentNode && this.parentNode.removeChild(this);
            e.imgCount--;if (!e.imgCount && a && a.onload) a.onload();
          }, src: x }), this.imgCount++));return z;
      }, symbols: { circle: function circle(a, k, b, u) {
          return this.arc(a + b / 2, k + u / 2, b / 2, u / 2, { start: 0, end: 2 * Math.PI, open: !1 });
        }, square: function square(a, k, b, u) {
          return ["M", a, k, "L", a + b, k, a + b, k + u, a, k + u, "Z"];
        }, triangle: function triangle(a, k, b, u) {
          return ["M", a + b / 2, k, "L", a + b, k + u, a, k + u, "Z"];
        }, "triangle-down": function triangleDown(a, k, b, u) {
          return ["M", a, k, "L", a + b, k, a + b / 2, k + u, "Z"];
        }, diamond: function diamond(a, k, b, u) {
          return ["M", a + b / 2, k, "L", a + b, k + u / 2, a + b / 2, k + u, a, k + u / 2, "Z"];
        }, arc: function arc(a, k, b, u, d) {
          var f = d.start,
              c = d.r || b,
              q = d.r || u || b,
              e = d.end - .001;b = d.innerR;u = F(d.open, .001 > Math.abs(d.end - d.start - 2 * Math.PI));var z = Math.cos(f),
              y = Math.sin(f),
              h = Math.cos(e),
              e = Math.sin(e);d = .001 > d.end - f - Math.PI ? 0 : 1;c = ["M", a + c * z, k + q * y, "A", c, q, 0, d, 1, a + c * h, k + q * e];v(b) && c.push(u ? "M" : "L", a + b * h, k + b * e, "A", b, b, 0, d, 0, a + b * z, k + b * y);c.push(u ? "" : "Z");return c;
        }, callout: function callout(a, k, b, u, d) {
          var f = Math.min(d && d.r || 0, b, u),
              c = f + 6,
              q = d && d.anchorX;d = d && d.anchorY;var e;e = ["M", a + f, k, "L", a + b - f, k, "C", a + b, k, a + b, k, a + b, k + f, "L", a + b, k + u - f, "C", a + b, k + u, a + b, k + u, a + b - f, k + u, "L", a + f, k + u, "C", a, k + u, a, k + u, a, k + u - f, "L", a, k + f, "C", a, k, a, k, a + f, k];q && q > b ? d > k + c && d < k + u - c ? e.splice(13, 3, "L", a + b, d - 6, a + b + 6, d, a + b, d + 6, a + b, k + u - f) : e.splice(13, 3, "L", a + b, u / 2, q, d, a + b, u / 2, a + b, k + u - f) : q && 0 > q ? d > k + c && d < k + u - c ? e.splice(33, 3, "L", a, d + 6, a - 6, d, a, d - 6, a, k + f) : e.splice(33, 3, "L", a, u / 2, q, d, a, u / 2, a, k + f) : d && d > u && q > a + c && q < a + b - c ? e.splice(23, 3, "L", q + 6, k + u, q, k + u + 6, q - 6, k + u, a + f, k + u) : d && 0 > d && q > a + c && q < a + b - c && e.splice(3, 3, "L", q - 6, k, q, k - 6, q + 6, k, b - f, k);return e;
        } }, clipRect: function clipRect(k, b, u, d) {
        var f = a.uniqueKey(),
            c = this.createElement("clipPath").attr({ id: f }).add(this.defs);k = this.rect(k, b, u, d, 0).add(c);k.id = f;k.clipPath = c;k.count = 0;return k;
      }, text: function text(a, k, b, u) {
        var d = {};if (u && (this.allowHTML || !this.forExport)) return this.html(a, k, b);d.x = Math.round(k || 0);b && (d.y = Math.round(b));if (a || 0 === a) d.text = a;a = this.createElement("text").attr(d);u || (a.xSetter = function (a, k, b) {
          var u = b.getElementsByTagName("tspan"),
              d,
              f = b.getAttribute(k),
              c;for (c = 0; c < u.length; c++) {
            d = u[c], d.getAttribute(k) === f && d.setAttribute(k, a);
          }b.setAttribute(k, a);
        });return a;
      }, fontMetrics: function fontMetrics(a, b) {
        a = a || b && b.style && b.style.fontSize || this.style && this.style.fontSize;a = /px/.test(a) ? k(a) : /em/.test(a) ? parseFloat(a) * (b ? this.fontMetrics(null, b.parentNode).f : 16) : 12;b = 24 > a ? a + 3 : Math.round(1.2 * a);return { h: b, b: Math.round(.8 * b), f: a };
      }, rotCorr: function rotCorr(a, k, b) {
        var u = a;k && b && (u = Math.max(u * Math.cos(k * e), 4));return { x: -a / 3 * Math.sin(k * e), y: u };
      }, label: function label(k, b, d, e, y, h, m, A, M) {
        var z = this,
            I = z.g("button" !== M && "label"),
            x = I.text = z.text("", 0, 0, m).attr({ zIndex: 1 }),
            t,
            E,
            H = 0,
            n = 3,
            l = 0,
            g,
            C,
            R,
            F,
            w,
            Q = {},
            P,
            J,
            r = /^url\((.*?)\)$/.test(e),
            K = r,
            p,
            O,
            L,
            T;M && I.addClass("highcharts-" + M);K = r;p = function p() {
          return (P || 0) % 2 / 2;
        };O = function O() {
          var a = x.element.style,
              k = {};E = (void 0 === g || void 0 === C || w) && v(x.textStr) && x.getBBox();I.width = (g || E.width || 0) + 2 * n + l;I.height = (C || E.height || 0) + 2 * n;J = n + z.fontMetrics(a && a.fontSize, x).b;K && (t || (I.box = t = z.symbols[e] || r ? z.symbol(e) : z.rect(), t.addClass(("button" === M ? "" : "highcharts-label-box") + (M ? " highcharts-" + M + "-box" : "")), t.add(I), a = p(), k.x = a, k.y = (A ? -J : 0) + a), k.width = Math.round(I.width), k.height = Math.round(I.height), t.attr(f(k, Q)), Q = {});
        };L = function L() {
          var a = l + n,
              k;k = A ? 0 : J;v(g) && E && ("center" === w || "right" === w) && (a += { center: .5, right: 1 }[w] * (g - E.width));if (a !== x.x || k !== x.y) x.attr("x", a), void 0 !== k && x.attr("y", k);x.x = a;x.y = k;
        };T = function T(a, k) {
          t ? t.attr(a, k) : Q[a] = k;
        };I.onAdd = function () {
          x.add(I);I.attr({ text: k || 0 === k ? k : "", x: b, y: d });t && v(y) && I.attr({ anchorX: y, anchorY: h });
        };I.widthSetter = function (k) {
          g = a.isNumber(k) ? k : null;
        };I.heightSetter = function (a) {
          C = a;
        };I["text-alignSetter"] = function (a) {
          w = a;
        };I.paddingSetter = function (a) {
          v(a) && a !== n && (n = I.padding = a, L());
        };I.paddingLeftSetter = function (a) {
          v(a) && a !== l && (l = a, L());
        };I.alignSetter = function (a) {
          a = { left: 0, center: .5, right: 1 }[a];a !== H && (H = a, E && I.attr({ x: R }));
        };I.textSetter = function (a) {
          void 0 !== a && x.textSetter(a);O();L();
        };I["stroke-widthSetter"] = function (a, k) {
          a && (K = !0);P = this["stroke-width"] = a;T(k, a);
        };I.strokeSetter = I.fillSetter = I.rSetter = function (a, k) {
          "r" !== k && ("fill" === k && a && (K = !0), I[k] = a);T(k, a);
        };I.anchorXSetter = function (a, k) {
          y = I.anchorX = a;T(k, Math.round(a) - p() - R);
        };I.anchorYSetter = function (a, k) {
          h = I.anchorY = a;T(k, a - F);
        };I.xSetter = function (a) {
          I.x = a;H && (a -= H * ((g || E.width) + 2 * n));R = Math.round(a);I.attr("translateX", R);
        };I.ySetter = function (a) {
          F = I.y = Math.round(a);I.attr("translateY", F);
        };var U = I.css;return f(I, { css: function css(a) {
            if (a) {
              var k = {};a = q(a);c(I.textProps, function (b) {
                void 0 !== a[b] && (k[b] = a[b], delete a[b]);
              });x.css(k);
            }return U.call(I, a);
          }, getBBox: function getBBox() {
            return { width: E.width + 2 * n, height: E.height + 2 * n, x: E.x - n, y: E.y - n };
          }, shadow: function shadow(a) {
            a && (O(), t && t.shadow(a));return I;
          }, destroy: function destroy() {
            u(I.element, "mouseenter");u(I.element, "mouseleave");x && (x = x.destroy());t && (t = t.destroy());D.prototype.destroy.call(I);I = z = O = L = T = null;
          } });
      } });a.Renderer = B;
  })(N);(function (a) {
    var D = a.attr,
        B = a.createElement,
        G = a.css,
        p = a.defined,
        g = a.each,
        l = a.extend,
        r = a.isFirefox,
        n = a.isMS,
        w = a.isWebKit,
        v = a.pick,
        e = a.pInt,
        h = a.SVGRenderer,
        m = a.win,
        c = a.wrap;l(a.SVGElement.prototype, { htmlCss: function htmlCss(a) {
        var b = this.element;if (b = a && "SPAN" === b.tagName && a.width) delete a.width, this.textWidth = b, this.updateTransform();a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");this.styles = l(this.styles, a);G(this.element, a);return this;
      }, htmlGetBBox: function htmlGetBBox() {
        var a = this.element;return { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight };
      }, htmlUpdateTransform: function htmlUpdateTransform() {
        if (this.added) {
          var a = this.renderer,
              b = this.element,
              d = this.translateX || 0,
              c = this.translateY || 0,
              h = this.x || 0,
              m = this.y || 0,
              t = this.textAlign || "left",
              n = { left: 0, center: .5, right: 1 }[t],
              x = this.styles;
          G(b, { marginLeft: d, marginTop: c });this.shadows && g(this.shadows, function (a) {
            G(a, { marginLeft: d + 1, marginTop: c + 1 });
          });this.inverted && g(b.childNodes, function (d) {
            a.invertChild(d, b);
          });if ("SPAN" === b.tagName) {
            var l = this.rotation,
                v = e(this.textWidth),
                q = x && x.whiteSpace,
                A = [l, t, b.innerHTML, this.textWidth, this.textAlign].join();A !== this.cTT && (x = a.fontMetrics(b.style.fontSize).b, p(l) && this.setSpanRotation(l, n, x), G(b, { width: "", whiteSpace: q || "nowrap" }), b.offsetWidth > v && /[ \-]/.test(b.textContent || b.innerText) && G(b, { width: v + "px", display: "block", whiteSpace: q || "normal" }), this.getSpanCorrection(b.offsetWidth, x, n, l, t));G(b, { left: h + (this.xCorr || 0) + "px", top: m + (this.yCorr || 0) + "px" });w && (x = b.offsetHeight);this.cTT = A;
          }
        } else this.alignOnAdd = !0;
      }, setSpanRotation: function setSpanRotation(a, b, d) {
        var c = {},
            f = this.renderer.getTransformKey();c[f] = c.transform = "rotate(" + a + "deg)";c[f + (r ? "Origin" : "-origin")] = c.transformOrigin = 100 * b + "% " + d + "px";G(this.element, c);
      }, getSpanCorrection: function getSpanCorrection(a, b, d) {
        this.xCorr = -a * d;this.yCorr = -b;
      } });l(h.prototype, { getTransformKey: function getTransformKey() {
        return n && !/Edge/.test(m.navigator.userAgent) ? "-ms-transform" : w ? "-webkit-transform" : r ? "MozTransform" : m.opera ? "-o-transform" : "";
      }, html: function html(a, b, d) {
        var f = this.createElement("span"),
            e = f.element,
            h = f.renderer,
            m = h.isSVG,
            w = function w(a, b) {
          g(["opacity", "visibility"], function (d) {
            c(a, d + "Setter", function (a, d, f, c) {
              a.call(this, d, f, c);b[f] = d;
            });
          });
        };f.textSetter = function (a) {
          a !== e.innerHTML && delete this.bBox;this.textStr = a;e.innerHTML = v(a, "");f.htmlUpdateTransform();
        };m && w(f, f.element.style);f.xSetter = f.ySetter = f.alignSetter = f.rotationSetter = function (a, b) {
          "align" === b && (b = "textAlign");f[b] = a;f.htmlUpdateTransform();
        };f.attr({ text: a, x: Math.round(b), y: Math.round(d) }).css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize, position: "absolute" });e.style.whiteSpace = "nowrap";f.css = f.htmlCss;m && (f.add = function (a) {
          var b,
              d = h.box.parentNode,
              c = [];if (this.parentGroup = a) {
            if (b = a.div, !b) {
              for (; a;) {
                c.push(a), a = a.parentGroup;
              }g(c.reverse(), function (a) {
                function e(k, b) {
                  a[b] = k;n ? q[h.getTransformKey()] = "translate(" + (a.x || a.translateX) + "px," + (a.y || a.translateY) + "px)" : "translateX" === b ? q.left = k + "px" : q.top = k + "px";a.doTransform = !0;
                }var q,
                    k = D(a.element, "class");k && (k = { className: k });b = a.div = a.div || B("div", k, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", display: a.display, opacity: a.opacity, pointerEvents: a.styles && a.styles.pointerEvents }, b || d);q = b.style;l(a, { classSetter: function classSetter(a) {
                    this.element.setAttribute("class", a);b.className = a;
                  }, on: function on() {
                    c[0].div && f.on.apply({ element: c[0].div }, arguments);return a;
                  }, translateXSetter: e,
                  translateYSetter: e });w(a, q);
              });
            }
          } else b = d;b.appendChild(e);f.added = !0;f.alignOnAdd && f.htmlUpdateTransform();return f;
        });return f;
      } });
  })(N);(function (a) {
    function D() {
      var n = a.defaultOptions.global,
          l = r.moment;if (n.timezone) {
        if (l) return function (a) {
          return -l.tz(a, n.timezone).utcOffset();
        };a.error(25);
      }return n.useUTC && n.getTimezoneOffset;
    }function B() {
      var n = a.defaultOptions.global,
          g,
          v = n.useUTC,
          e = v ? "getUTC" : "get",
          h = v ? "setUTC" : "set",
          m = "Minutes Hours Day Date Month FullYear".split(" "),
          c = m.concat(["Milliseconds", "Seconds"]);a.Date = g = n.Date || r.Date;g.hcTimezoneOffset = v && n.timezoneOffset;g.hcGetTimezoneOffset = D();g.hcMakeTime = function (a, b, d, c, e, h) {
        var f;v ? (f = g.UTC.apply(0, arguments), f += p(f)) : f = new g(a, b, l(d, 1), l(c, 0), l(e, 0), l(h, 0)).getTime();return f;
      };for (n = 0; n < m.length; n++) {
        g["hcGet" + m[n]] = e + m[n];
      }for (n = 0; n < c.length; n++) {
        g["hcSet" + c[n]] = h + c[n];
      }
    }var G = a.color,
        p = a.getTZOffset,
        g = a.merge,
        l = a.pick,
        r = a.win;a.defaultOptions = { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
      symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: { useUTC: !0 }, chart: { borderRadius: 0,
        defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 20 }, position: { align: "right", x: -10, y: 10 } }, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" }, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: { enabled: !0, align: "center", layout: "horizontal", labelFormatter: function labelFormatter() {
          return this.name;
        },
        borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute",
          backgroundColor: "#ffffff", opacity: .5, textAlign: "center" } }, tooltip: { enabled: !0, animation: a.svg, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", padding: 8, snap: a.isTouchDevice ? 25 : 10, backgroundColor: G("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
        pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>", shadow: !0, style: { color: "#333333", cursor: "default", fontSize: "12px", pointerEvents: "none", whiteSpace: "nowrap" } }, credits: { enabled: !0, href: "http://www.highcharts.com", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com" } };a.setOptions = function (n) {
      a.defaultOptions = g(!0, a.defaultOptions, n);B();
      return a.defaultOptions;
    };a.getOptions = function () {
      return a.defaultOptions;
    };a.defaultPlotOptions = a.defaultOptions.plotOptions;B();
  })(N);(function (a) {
    var D = a.correctFloat,
        B = a.defined,
        G = a.destroyObjectProperties,
        p = a.isNumber,
        g = a.merge,
        l = a.pick,
        r = a.deg2rad;a.Tick = function (a, g, l, e) {
      this.axis = a;this.pos = g;this.type = l || "";this.isNewLabel = this.isNew = !0;l || e || this.addLabel();
    };a.Tick.prototype = { addLabel: function addLabel() {
        var a = this.axis,
            w = a.options,
            v = a.chart,
            e = a.categories,
            h = a.names,
            m = this.pos,
            c = w.labels,
            f = a.tickPositions,
            b = m === f[0],
            d = m === f[f.length - 1],
            h = e ? l(e[m], h[m], m) : m,
            e = this.label,
            f = f.info,
            y;a.isDatetimeAxis && f && (y = w.dateTimeLabelFormats[f.higherRanks[m] || f.unitName]);this.isFirst = b;this.isLast = d;w = a.labelFormatter.call({ axis: a, chart: v, isFirst: b, isLast: d, dateTimeLabelFormat: y, value: a.isLog ? D(a.lin2log(h)) : h, pos: m });B(e) ? e && e.attr({ text: w }) : (this.labelLength = (this.label = e = B(w) && c.enabled ? v.renderer.text(w, 0, 0, c.useHTML).css(g(c.style)).add(a.labelGroup) : null) && e.getBBox().width, this.rotation = 0);
      }, getLabelSize: function getLabelSize() {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      }, handleOverflow: function handleOverflow(a) {
        var g = this.axis,
            n = a.x,
            e = g.chart.chartWidth,
            h = g.chart.spacing,
            m = l(g.labelLeft, Math.min(g.pos, h[3])),
            h = l(g.labelRight, Math.max(g.pos + g.len, e - h[1])),
            c = this.label,
            f = this.rotation,
            b = { left: 0, center: .5, right: 1 }[g.labelAlign],
            d = c.getBBox().width,
            y = g.getSlotWidth(),
            H = y,
            J = 1,
            t,
            p = {};if (f) 0 > f && n - b * d < m ? t = Math.round(n / Math.cos(f * r) - m) : 0 < f && n + b * d > h && (t = Math.round((e - n) / Math.cos(f * r)));else if (e = n + (1 - b) * d, n - b * d < m ? H = a.x + H * (1 - b) - m : e > h && (H = h - a.x + H * b, J = -1), H = Math.min(y, H), H < y && "center" === g.labelAlign && (a.x += J * (y - H - b * (y - Math.min(d, H)))), d > H || g.autoRotation && (c.styles || {}).width) t = H;t && (p.width = t, (g.options.labels.style || {}).textOverflow || (p.textOverflow = "ellipsis"), c.css(p));
      }, getPosition: function getPosition(a, g, l, e) {
        var h = this.axis,
            m = h.chart,
            c = e && m.oldChartHeight || m.chartHeight;return { x: a ? h.translate(g + l, null, null, e) + h.transB : h.left + h.offset + (h.opposite ? (e && m.oldChartWidth || m.chartWidth) - h.right - h.left : 0), y: a ? c - h.bottom + h.offset - (h.opposite ? h.height : 0) : c - h.translate(g + l, null, null, e) - h.transB };
      }, getLabelPosition: function getLabelPosition(a, g, l, e, h, m, c, f) {
        var b = this.axis,
            d = b.transA,
            y = b.reversed,
            n = b.staggerLines,
            v = b.tickRotCorr || { x: 0, y: 0 },
            t = h.y;B(t) || (t = 0 === b.side ? l.rotation ? -8 : -l.getBBox().height : 2 === b.side ? v.y + 8 : Math.cos(l.rotation * r) * (v.y - l.getBBox(!1, 0).height / 2));a = a + h.x + v.x - (m && e ? m * d * (y ? -1 : 1) : 0);g = g + t - (m && !e ? m * d * (y ? 1 : -1) : 0);n && (l = c / (f || 1) % n, b.opposite && (l = n - l - 1), g += b.labelOffset / n * l);return { x: a, y: Math.round(g) };
      }, getMarkPath: function getMarkPath(a, g, l, e, h, m) {
        return m.crispLine(["M", a, g, "L", a + (h ? 0 : -l), g + (h ? l : 0)], e);
      }, renderGridLine: function renderGridLine(a, g, l) {
        var e = this.axis,
            h = e.options,
            m = this.gridLine,
            c = {},
            f = this.pos,
            b = this.type,
            d = e.tickmarkOffset,
            y = e.chart.renderer,
            n = b ? b + "Grid" : "grid",
            v = h[n + "LineWidth"],
            t = h[n + "LineColor"],
            h = h[n + "LineDashStyle"];m || (c.stroke = t, c["stroke-width"] = v, h && (c.dashstyle = h), b || (c.zIndex = 1), a && (c.opacity = 0), this.gridLine = m = y.path().attr(c).addClass("highcharts-" + (b ? b + "-" : "") + "grid-line").add(e.gridGroup));if (!a && m && (a = e.getPlotLinePath(f + d, m.strokeWidth() * l, a, !0))) m[this.isNew ? "attr" : "animate"]({ d: a, opacity: g });
      }, renderMark: function renderMark(a, g, v) {
        var e = this.axis,
            h = e.options,
            m = e.chart.renderer,
            c = this.type,
            f = c ? c + "Tick" : "tick",
            b = e.tickSize(f),
            d = this.mark,
            y = !d,
            n = a.x;a = a.y;var r = l(h[f + "Width"], !c && e.isXAxis ? 1 : 0),
            h = h[f + "Color"];b && (e.opposite && (b[0] = -b[0]), y && (this.mark = d = m.path().addClass("highcharts-" + (c ? c + "-" : "") + "tick").add(e.axisGroup), d.attr({ stroke: h, "stroke-width": r })), d[y ? "attr" : "animate"]({ d: this.getMarkPath(n, a, b[0], d.strokeWidth() * v, e.horiz, m), opacity: g }));
      }, renderLabel: function renderLabel(a, g, v, e) {
        var h = this.axis,
            m = h.horiz,
            c = h.options,
            f = this.label,
            b = c.labels,
            d = b.step,
            y = h.tickmarkOffset,
            H = !0,
            n = a.x;a = a.y;f && p(n) && (f.xy = a = this.getLabelPosition(n, a, f, m, b, y, e, d), this.isFirst && !this.isLast && !l(c.showFirstLabel, 1) || this.isLast && !this.isFirst && !l(c.showLastLabel, 1) ? H = !1 : !m || h.isRadial || b.step || b.rotation || g || 0 === v || this.handleOverflow(a), d && e % d && (H = !1), H && p(a.y) ? (a.opacity = v, f[this.isNewLabel ? "attr" : "animate"](a), this.isNewLabel = !1) : (f.attr("y", -9999), this.isNewLabel = !0));
      }, render: function render(a, g, v) {
        var e = this.axis,
            h = e.horiz,
            m = this.getPosition(h, this.pos, e.tickmarkOffset, g),
            c = m.x,
            f = m.y,
            e = h && c === e.pos + e.len || !h && f === e.pos ? -1 : 1;v = l(v, 1);this.isActive = !0;this.renderGridLine(g, v, e);this.renderMark(m, v, e);this.renderLabel(m, g, v, a);this.isNew = !1;
      }, destroy: function destroy() {
        G(this, this.axis);
      } };
  })(N);var V = function (a) {
    var D = a.addEvent,
        B = a.animObject,
        G = a.arrayMax,
        p = a.arrayMin,
        g = a.color,
        l = a.correctFloat,
        r = a.defaultOptions,
        n = a.defined,
        w = a.deg2rad,
        v = a.destroyObjectProperties,
        e = a.each,
        h = a.extend,
        m = a.fireEvent,
        c = a.format,
        f = a.getMagnitude,
        b = a.grep,
        d = a.inArray,
        y = a.isArray,
        H = a.isNumber,
        J = a.isString,
        t = a.merge,
        K = a.normalizeTickInterval,
        x = a.objectEach,
        C = a.pick,
        L = a.removeEvent,
        q = a.splat,
        A = a.syncTimeout,
        E = a.Tick,
        F = function F() {
      this.init.apply(this, arguments);
    };a.extend(F.prototype, { defaultOptions: { dateTimeLabelFormats: { millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y" }, endOnTick: !1, labels: { enabled: !0, style: { color: "#666666", cursor: "default",
            fontSize: "11px" }, x: 0 }, maxPadding: .01, minorTickLength: 2, minorTickPosition: "outside", minPadding: .01, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", title: { align: "middle", style: { color: "#666666" } }, type: "linear", minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", tickColor: "#ccd6eb" }, defaultYAxisOptions: { endOnTick: !0, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 },
        maxPadding: .05, minPadding: .05, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { allowOverlap: !1, enabled: !1, formatter: function formatter() {
            return a.numberFormat(this.total, -1);
          }, style: { fontSize: "11px", fontWeight: "bold", color: "#000000", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 }, defaultLeftAxisOptions: { labels: { x: -15 }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 15 }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, defaultTopAxisOptions: { labels: { autoRotation: [-45],
          x: 0 }, title: { rotation: 0 } }, init: function init(a, b) {
        var k = b.isX,
            u = this;u.chart = a;u.horiz = a.inverted && !u.isZAxis ? !k : k;u.isXAxis = k;u.coll = u.coll || (k ? "xAxis" : "yAxis");u.opposite = b.opposite;u.side = b.side || (u.horiz ? u.opposite ? 0 : 2 : u.opposite ? 1 : 3);u.setOptions(b);var f = this.options,
            c = f.type;u.labelFormatter = f.labels.formatter || u.defaultLabelFormatter;u.userOptions = b;u.minPixelPadding = 0;u.reversed = f.reversed;u.visible = !1 !== f.visible;u.zoomEnabled = !1 !== f.zoomEnabled;u.hasNames = "category" === c || !0 === f.categories;u.categories = f.categories || u.hasNames;u.names = u.names || [];u.plotLinesAndBandsGroups = {};u.isLog = "logarithmic" === c;u.isDatetimeAxis = "datetime" === c;u.positiveValuesOnly = u.isLog && !u.allowNegativeLog;u.isLinked = n(f.linkedTo);u.ticks = {};u.labelEdge = [];u.minorTicks = {};u.plotLinesAndBands = [];u.alternateBands = {};u.len = 0;u.minRange = u.userMinRange = f.minRange || f.maxZoom;u.range = f.range;u.offset = f.offset || 0;u.stacks = {};u.oldStacks = {};u.stacksTouched = 0;u.max = null;u.min = null;u.crosshair = C(f.crosshair, q(a.options.tooltip.crosshairs)[k ? 0 : 1], !1);b = u.options.events;-1 === d(u, a.axes) && (k ? a.axes.splice(a.xAxis.length, 0, u) : a.axes.push(u), a[u.coll].push(u));u.series = u.series || [];a.inverted && !u.isZAxis && k && void 0 === u.reversed && (u.reversed = !0);x(b, function (a, k) {
          D(u, k, a);
        });u.lin2log = f.linearToLogConverter || u.lin2log;u.isLog && (u.val2lin = u.log2lin, u.lin2val = u.lin2log);
      }, setOptions: function setOptions(a) {
        this.options = t(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], t(r[this.coll], a));
      }, defaultLabelFormatter: function defaultLabelFormatter() {
        var k = this.axis,
            b = this.value,
            d = k.categories,
            f = this.dateTimeLabelFormat,
            e = r.lang,
            q = e.numericSymbols,
            e = e.numericSymbolMagnitude || 1E3,
            h = q && q.length,
            m,
            y = k.options.labels.format,
            k = k.isLog ? Math.abs(b) : k.tickInterval;if (y) m = c(y, this);else if (d) m = b;else if (f) m = a.dateFormat(f, b);else if (h && 1E3 <= k) for (; h-- && void 0 === m;) {
          d = Math.pow(e, h + 1), k >= d && 0 === 10 * b % d && null !== q[h] && 0 !== b && (m = a.numberFormat(b / d, -1) + q[h]);
        }void 0 === m && (m = 1E4 <= Math.abs(b) ? a.numberFormat(b, -1) : a.numberFormat(b, -1, void 0, ""));return m;
      }, getSeriesExtremes: function getSeriesExtremes() {
        var a = this,
            u = a.chart;a.hasVisibleSeries = !1;a.dataMin = a.dataMax = a.threshold = null;a.softThreshold = !a.isXAxis;a.buildStacks && a.buildStacks();e(a.series, function (k) {
          if (k.visible || !u.options.chart.ignoreHiddenSeries) {
            var d = k.options,
                f = d.threshold,
                c;a.hasVisibleSeries = !0;a.positiveValuesOnly && 0 >= f && (f = null);if (a.isXAxis) d = k.xData, d.length && (k = p(d), c = G(d), H(k) || k instanceof Date || (d = b(d, H), k = p(d)), a.dataMin = Math.min(C(a.dataMin, d[0], k), k), a.dataMax = Math.max(C(a.dataMax, d[0], c), c));else if (k.getExtremes(), c = k.dataMax, k = k.dataMin, n(k) && n(c) && (a.dataMin = Math.min(C(a.dataMin, k), k), a.dataMax = Math.max(C(a.dataMax, c), c)), n(f) && (a.threshold = f), !d.softThreshold || a.positiveValuesOnly) a.softThreshold = !1;
          }
        });
      }, translate: function translate(a, b, d, f, c, e) {
        var k = this.linkedParent || this,
            u = 1,
            q = 0,
            h = f ? k.oldTransA : k.transA;f = f ? k.oldMin : k.min;var m = k.minPixelPadding;c = (k.isOrdinal || k.isBroken || k.isLog && c) && k.lin2val;
        h || (h = k.transA);d && (u *= -1, q = k.len);k.reversed && (u *= -1, q -= u * (k.sector || k.len));b ? (a = (a * u + q - m) / h + f, c && (a = k.lin2val(a))) : (c && (a = k.val2lin(a)), a = H(f) ? u * (a - f) * h + q + u * m + (H(e) ? h * e : 0) : void 0);return a;
      }, toPixels: function toPixels(a, b) {
        return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
      }, toValue: function toValue(a, b) {
        return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
      }, getPlotLinePath: function getPlotLinePath(a, b, d, f, c) {
        var k = this.chart,
            u = this.left,
            q = this.top,
            e,
            h,
            m = d && k.oldChartHeight || k.chartHeight,
            y = d && k.oldChartWidth || k.chartWidth,
            A;e = this.transB;var t = function t(a, k, b) {
          if (a < k || a > b) f ? a = Math.min(Math.max(k, a), b) : A = !0;return a;
        };c = C(c, this.translate(a, null, null, d));a = d = Math.round(c + e);e = h = Math.round(m - c - e);H(c) ? this.horiz ? (e = q, h = m - this.bottom, a = d = t(a, u, u + this.width)) : (a = u, d = y - this.right, e = h = t(e, q, q + this.height)) : (A = !0, f = !1);return A && !f ? null : k.renderer.crispLine(["M", a, e, "L", d, h], b || 1);
      }, getLinearTickPositions: function getLinearTickPositions(a, b, d) {
        var k,
            u = l(Math.floor(b / a) * a);d = l(Math.ceil(d / a) * a);var f = [],
            c;l(u + a) === u && (c = 20);if (this.single) return [b];
        for (b = u; b <= d;) {
          f.push(b);b = l(b + a, c);if (b === k) break;k = b;
        }return f;
      }, getMinorTickInterval: function getMinorTickInterval() {
        var a = this.options;return !0 === a.minorTicks ? C(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval;
      }, getMinorTickPositions: function getMinorTickPositions() {
        var a = this,
            b = a.options,
            d = a.tickPositions,
            f = a.minorTickInterval,
            c = [],
            q = a.pointRangePadding || 0,
            h = a.min - q,
            q = a.max + q,
            m = q - h;if (m && m / f < a.len / 3) if (a.isLog) e(this.paddedTicks, function (k, b, u) {
          b && c.push.apply(c, a.getLogTickPositions(f, u[b - 1], u[b], !0));
        });else if (a.isDatetimeAxis && "auto" === this.getMinorTickInterval()) c = c.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f), h, q, b.startOfWeek));else for (b = h + (d[0] - h) % f; b <= q && b !== c[0]; b += f) {
          c.push(b);
        }0 !== c.length && a.trimTicks(c);return c;
      }, adjustForMinRange: function adjustForMinRange() {
        var a = this.options,
            b = this.min,
            d = this.max,
            f,
            c,
            q,
            h,
            m,
            y,
            A,
            t;this.isXAxis && void 0 === this.minRange && !this.isLog && (n(a.min) || n(a.max) ? this.minRange = null : (e(this.series, function (a) {
          y = a.xData;for (h = A = a.xIncrement ? 1 : y.length - 1; 0 < h; h--) {
            if (m = y[h] - y[h - 1], void 0 === q || m < q) q = m;
          }
        }), this.minRange = Math.min(5 * q, this.dataMax - this.dataMin)));d - b < this.minRange && (c = this.dataMax - this.dataMin >= this.minRange, t = this.minRange, f = (t - d + b) / 2, f = [b - f, C(a.min, b - f)], c && (f[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), b = G(f), d = [b + t, C(a.max, b + t)], c && (d[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), d = p(d), d - b < t && (f[0] = d - t, f[1] = C(a.min, d - t), b = G(f)));this.min = b;this.max = d;
      }, getClosest: function getClosest() {
        var a;this.categories ? a = 1 : e(this.series, function (k) {
          var b = k.closestPointRange,
              u = k.visible || !k.chart.options.chart.ignoreHiddenSeries;!k.noSharedTooltip && n(b) && u && (a = n(a) ? Math.min(a, b) : b);
        });return a;
      }, nameToX: function nameToX(a) {
        var k = y(this.categories),
            b = k ? this.categories : this.names,
            f = a.options.x,
            c;a.series.requireSorting = !1;n(f) || (f = !1 === this.options.uniqueNames ? a.series.autoIncrement() : d(a.name, b));-1 === f ? k || (c = b.length) : c = f;void 0 !== c && (this.names[c] = a.name);return c;
      }, updateNames: function updateNames() {
        var a = this;0 < this.names.length && (this.names.length = 0, this.minRange = this.userMinRange, e(this.series || [], function (k) {
          k.xIncrement = null;if (!k.points || k.isDirtyData) k.processData(), k.generatePoints();e(k.points, function (b, u) {
            var d;b.options && (d = a.nameToX(b), void 0 !== d && d !== b.x && (b.x = d, k.xData[u] = d));
          });
        }));
      }, setAxisTranslation: function setAxisTranslation(a) {
        var k = this,
            b = k.max - k.min,
            d = k.axisPointRange || 0,
            f,
            c = 0,
            q = 0,
            h = k.linkedParent,
            m = !!k.categories,
            y = k.transA,
            A = k.isXAxis;if (A || m || d) f = k.getClosest(), h ? (c = h.minPointOffset, q = h.pointRangePadding) : e(k.series, function (a) {
          var b = m ? 1 : A ? C(a.options.pointRange, f, 0) : k.axisPointRange || 0;
          a = a.options.pointPlacement;d = Math.max(d, b);k.single || (c = Math.max(c, J(a) ? 0 : b / 2), q = Math.max(q, "on" === a ? 0 : b));
        }), h = k.ordinalSlope && f ? k.ordinalSlope / f : 1, k.minPointOffset = c *= h, k.pointRangePadding = q *= h, k.pointRange = Math.min(d, b), A && (k.closestPointRange = f);a && (k.oldTransA = y);k.translationSlope = k.transA = y = k.options.staticScale || k.len / (b + q || 1);k.transB = k.horiz ? k.left : k.bottom;k.minPixelPadding = y * c;
      }, minFromRange: function minFromRange() {
        return this.max - this.range;
      }, setTickInterval: function setTickInterval(k) {
        var b = this,
            d = b.chart,
            c = b.options,
            q = b.isLog,
            h = b.log2lin,
            y = b.isDatetimeAxis,
            A = b.isXAxis,
            t = b.isLinked,
            x = c.maxPadding,
            g = c.minPadding,
            E = c.tickInterval,
            v = c.tickPixelInterval,
            F = b.categories,
            r = b.threshold,
            J = b.softThreshold,
            p,
            w,
            L,
            B;y || F || t || this.getTickAmount();L = C(b.userMin, c.min);B = C(b.userMax, c.max);t ? (b.linkedParent = d[b.coll][c.linkedTo], d = b.linkedParent.getExtremes(), b.min = C(d.min, d.dataMin), b.max = C(d.max, d.dataMax), c.type !== b.linkedParent.options.type && a.error(11, 1)) : (!J && n(r) && (b.dataMin >= r ? (p = r, g = 0) : b.dataMax <= r && (w = r, x = 0)), b.min = C(L, p, b.dataMin), b.max = C(B, w, b.dataMax));q && (b.positiveValuesOnly && !k && 0 >= Math.min(b.min, C(b.dataMin, b.min)) && a.error(10, 1), b.min = l(h(b.min), 15), b.max = l(h(b.max), 15));b.range && n(b.max) && (b.userMin = b.min = L = Math.max(b.dataMin, b.minFromRange()), b.userMax = B = b.max, b.range = null);m(b, "foundExtremes");b.beforePadding && b.beforePadding();b.adjustForMinRange();!(F || b.axisPointRange || b.usePercentage || t) && n(b.min) && n(b.max) && (h = b.max - b.min) && (!n(L) && g && (b.min -= h * g), !n(B) && x && (b.max += h * x));H(c.softMin) && (b.min = Math.min(b.min, c.softMin));H(c.softMax) && (b.max = Math.max(b.max, c.softMax));H(c.floor) && (b.min = Math.max(b.min, c.floor));H(c.ceiling) && (b.max = Math.min(b.max, c.ceiling));J && n(b.dataMin) && (r = r || 0, !n(L) && b.min < r && b.dataMin >= r ? b.min = r : !n(B) && b.max > r && b.dataMax <= r && (b.max = r));b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : t && !E && v === b.linkedParent.options.tickPixelInterval ? E = b.linkedParent.tickInterval : C(E, this.tickAmount ? (b.max - b.min) / Math.max(this.tickAmount - 1, 1) : void 0, F ? 1 : (b.max - b.min) * v / Math.max(b.len, v));A && !k && e(b.series, function (a) {
          a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
        });b.setAxisTranslation(!0);b.beforeSetTickPositions && b.beforeSetTickPositions();b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));b.pointRange && !E && (b.tickInterval = Math.max(b.pointRange, b.tickInterval));k = C(c.minTickInterval, b.isDatetimeAxis && b.closestPointRange);!E && b.tickInterval < k && (b.tickInterval = k);y || q || E || (b.tickInterval = K(b.tickInterval, null, f(b.tickInterval), C(c.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount));this.tickAmount || (b.tickInterval = b.unsquish());this.setTickPositions();
      }, setTickPositions: function setTickPositions() {
        var a = this.options,
            b,
            d = a.tickPositions;b = this.getMinorTickInterval();var c = a.tickPositioner,
            f = a.startOnTick,
            q = a.endOnTick;this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;this.minorTickInterval = "auto" === b && this.tickInterval ? this.tickInterval / 5 : b;this.single = this.min === this.max && n(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals);this.tickPositions = b = d && d.slice();!b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()], b[0] === b[1] && (b.length = 1)), this.tickPositions = b, c && (c = c.apply(this, [this.min, this.max]))) && (this.tickPositions = b = c);this.paddedTicks = b.slice(0);this.trimTicks(b, f, q);this.isLinked || (this.single && 2 > b.length && (this.min -= .5, this.max += .5), d || c || this.adjustTickAmount());
      }, trimTicks: function trimTicks(a, b, d) {
        var k = a[0],
            c = a[a.length - 1],
            f = this.minPointOffset || 0;if (!this.isLinked) {
          if (b && -Infinity !== k) this.min = k;else for (; this.min - f > a[0];) {
            a.shift();
          }if (d) this.max = c;else for (; this.max + f < a[a.length - 1];) {
            a.pop();
          }0 === a.length && n(k) && a.push((c + k) / 2);
        }
      }, alignToOthers: function alignToOthers() {
        var a = {},
            b,
            d = this.options;!1 === this.chart.options.chart.alignTicks || !1 === d.alignTicks || this.isLog || e(this.chart[this.coll], function (k) {
          var d = k.options,
              d = [k.horiz ? d.left : d.top, d.width, d.height, d.pane].join();k.series.length && (a[d] ? b = !0 : a[d] = 1);
        });return b;
      }, getTickAmount: function getTickAmount() {
        var a = this.options,
            b = a.tickAmount,
            d = a.tickPixelInterval;!n(a.tickInterval) && this.len < d && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);!b && this.alignToOthers() && (b = Math.ceil(this.len / d) + 1);4 > b && (this.finalTickAmt = b, b = 5);this.tickAmount = b;
      }, adjustTickAmount: function adjustTickAmount() {
        var a = this.tickInterval,
            b = this.tickPositions,
            d = this.tickAmount,
            c = this.finalTickAmt,
            f = b && b.length;if (f < d) {
          for (; b.length < d;) {
            b.push(l(b[b.length - 1] + a));
          }this.transA *= (f - 1) / (d - 1);this.max = b[b.length - 1];
        } else f > d && (this.tickInterval *= 2, this.setTickPositions());if (n(c)) {
          for (a = d = b.length; a--;) {
            (3 === c && 1 === a % 2 || 2 >= c && 0 < a && a < d - 1) && b.splice(a, 1);
          }this.finalTickAmt = void 0;
        }
      }, setScale: function setScale() {
        var a, b;this.oldMin = this.min;this.oldMax = this.max;this.oldAxisLength = this.len;this.setAxisSize();b = this.len !== this.oldAxisLength;e(this.series, function (b) {
          if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0;
        });b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks();
      }, setExtremes: function setExtremes(a, b, d, c, f) {
        var k = this,
            q = k.chart;d = C(d, !0);e(k.series, function (a) {
          delete a.kdTree;
        });f = h(f, { min: a, max: b });m(k, "setExtremes", f, function () {
          k.userMin = a;k.userMax = b;k.eventArgs = f;d && q.redraw(c);
        });
      }, zoom: function zoom(a, b) {
        var k = this.dataMin,
            d = this.dataMax,
            c = this.options,
            f = Math.min(k, C(c.min, k)),
            c = Math.max(d, C(c.max, d));if (a !== this.min || b !== this.max) this.allowZoomOutside || (n(k) && (a < f && (a = f), a > c && (a = c)), n(d) && (b < f && (b = f), b > c && (b = c))), this.displayBtn = void 0 !== a || void 0 !== b, this.setExtremes(a, b, !1, void 0, { trigger: "zoom" });return !0;
      }, setAxisSize: function setAxisSize() {
        var b = this.chart,
            d = this.options,
            c = d.offsets || [0, 0, 0, 0],
            f = this.horiz,
            q = this.width = Math.round(a.relativeLength(C(d.width, b.plotWidth - c[3] + c[1]), b.plotWidth)),
            e = this.height = Math.round(a.relativeLength(C(d.height, b.plotHeight - c[0] + c[2]), b.plotHeight)),
            h = this.top = Math.round(a.relativeLength(C(d.top, b.plotTop + c[0]), b.plotHeight, b.plotTop)),
            d = this.left = Math.round(a.relativeLength(C(d.left, b.plotLeft + c[3]), b.plotWidth, b.plotLeft));this.bottom = b.chartHeight - e - h;this.right = b.chartWidth - q - d;this.len = Math.max(f ? q : e, 0);this.pos = f ? d : h;
      }, getExtremes: function getExtremes() {
        var a = this.isLog,
            b = this.lin2log;return { min: a ? l(b(this.min)) : this.min, max: a ? l(b(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
      }, getThreshold: function getThreshold(a) {
        var b = this.isLog,
            k = this.lin2log,
            d = b ? k(this.min) : this.min,
            b = b ? k(this.max) : this.max;null === a ? a = d : d > a ? a = d : b < a && (a = b);return this.translate(a, 0, 1, 0, 1);
      }, autoLabelAlign: function autoLabelAlign(a) {
        a = (C(a, 0) - 90 * this.side + 720) % 360;return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center";
      }, tickSize: function tickSize(a) {
        var b = this.options,
            k = b[a + "Length"],
            d = C(b[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0);if (d && k) return "inside" === b[a + "Position"] && (k = -k), [k, d];
      }, labelMetrics: function labelMetrics() {
        var a = this.tickPositions && this.tickPositions[0] || 0;return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label);
      }, unsquish: function unsquish() {
        var a = this.options.labels,
            b = this.horiz,
            d = this.tickInterval,
            c = d,
            f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d),
            q,
            h = a.rotation,
            m = this.labelMetrics(),
            y,
            A = Number.MAX_VALUE,
            t,
            x = function x(a) {
          a /= f || 1;a = 1 < a ? Math.ceil(a) : 1;return a * d;
        };b ? (t = !a.staggerLines && !a.step && (n(h) ? [h] : f < C(a.autoRotationLimit, 80) && a.autoRotation)) && e(t, function (a) {
          var b;if (a === h || a && -90 <= a && 90 >= a) y = x(Math.abs(m.h / Math.sin(w * a))), b = y + Math.abs(a / 360), b < A && (A = b, q = a, c = y);
        }) : a.step || (c = x(m.h));this.autoRotation = t;this.labelRotation = C(q, h);return c;
      }, getSlotWidth: function getSlotWidth() {
        var a = this.chart,
            b = this.horiz,
            d = this.options.labels,
            c = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
            f = a.margin[3];return b && 2 > (d.step || 0) && !d.rotation && (this.staggerLines || 1) * this.len / c || !b && (d.style && parseInt(d.style.width, 10) || f && f - a.spacing[3] || .33 * a.chartWidth);
      }, renderUnsquish: function renderUnsquish() {
        var a = this.chart,
            b = a.renderer,
            d = this.tickPositions,
            c = this.ticks,
            f = this.options.labels,
            q = this.horiz,
            h = this.getSlotWidth(),
            m = Math.max(1, Math.round(h - 2 * (f.padding || 5))),
            y = {},
            A = this.labelMetrics(),
            x = f.style && f.style.textOverflow,
            g,
            E = 0,
            l,
            n;J(f.rotation) || (y.rotation = f.rotation || 0);e(d, function (a) {
          (a = c[a]) && a.labelLength > E && (E = a.labelLength);
        });this.maxLabelLength = E;if (this.autoRotation) E > m && E > A.h ? y.rotation = this.labelRotation : this.labelRotation = 0;else if (h && (g = { width: m + "px" }, !x)) for (g.textOverflow = "clip", l = d.length; !q && l--;) {
          if (n = d[l], m = c[n].label) m.styles && "ellipsis" === m.styles.textOverflow ? m.css({ textOverflow: "clip" }) : c[n].labelLength > h && m.css({ width: h + "px" }), m.getBBox().height > this.len / d.length - (A.h - A.f) && (m.specCss = { textOverflow: "ellipsis" });
        }y.rotation && (g = { width: (E > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px" }, x || (g.textOverflow = "ellipsis"));if (this.labelAlign = f.align || this.autoLabelAlign(this.labelRotation)) y.align = this.labelAlign;e(d, function (a) {
          var b = (a = c[a]) && a.label;b && (b.attr(y), g && b.css(t(g, b.specCss)), delete b.specCss, a.rotation = y.rotation);
        });this.tickRotCorr = b.rotCorr(A.b, this.labelRotation || 0, 0 !== this.side);
      }, hasData: function hasData() {
        return this.hasVisibleSeries || n(this.min) && n(this.max) && this.tickPositions && 0 < this.tickPositions.length;
      }, addTitle: function addTitle(a) {
        var b = this.chart.renderer,
            k = this.horiz,
            d = this.opposite,
            c = this.options.title,
            f;this.axisTitle || ((f = c.textAlign) || (f = (k ? { low: "left", middle: "center", high: "right" } : { low: d ? "right" : "left", middle: "center", high: d ? "left" : "right" })[c.align]), this.axisTitle = b.text(c.text, 0, 0, c.useHTML).attr({ zIndex: 7, rotation: c.rotation || 0, align: f }).addClass("highcharts-axis-title").css(c.style).add(this.axisGroup), this.axisTitle.isNew = !0);c.style.width || this.isRadial || this.axisTitle.css({ width: this.len });this.axisTitle[a ? "show" : "hide"](!0);
      }, generateTick: function generateTick(a) {
        var b = this.ticks;b[a] ? b[a].addLabel() : b[a] = new E(this, a);
      }, getOffset: function getOffset() {
        var a = this,
            b = a.chart,
            d = b.renderer,
            c = a.options,
            f = a.tickPositions,
            q = a.ticks,
            h = a.horiz,
            m = a.side,
            y = b.inverted && !a.isZAxis ? [1, 0, 3, 2][m] : m,
            A,
            t,
            g = 0,
            E,
            l = 0,
            H = c.title,
            v = c.labels,
            F = 0,
            r = b.axisOffset,
            b = b.clipOffset,
            J = [-1, 1, 1, -1][m],
            p = c.className,
            w = a.axisParent,
            K = this.tickSize("tick");A = a.hasData();a.showAxis = t = A || C(c.showEmpty, !0);a.staggerLines = a.horiz && v.staggerLines;a.axisGroup || (a.gridGroup = d.g("grid").attr({ zIndex: c.gridZIndex || 1 }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (p || "")).add(w), a.axisGroup = d.g("axis").attr({ zIndex: c.zIndex || 2 }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (p || "")).add(w), a.labelGroup = d.g("axis-labels").attr({ zIndex: v.zIndex || 7 }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (p || "")).add(w));A || a.isLinked ? (e(f, function (b, k) {
          a.generateTick(b, k);
        }), a.renderUnsquish(), !1 === v.reserveSpace || 0 !== m && 2 !== m && { 1: "left", 3: "right" }[m] !== a.labelAlign && "center" !== a.labelAlign || e(f, function (a) {
          F = Math.max(q[a].getLabelSize(), F);
        }), a.staggerLines && (F *= a.staggerLines, a.labelOffset = F * (a.opposite ? -1 : 1))) : x(q, function (a, b) {
          a.destroy();delete q[b];
        });H && H.text && !1 !== H.enabled && (a.addTitle(t), t && !1 !== H.reserveSpace && (a.titleOffset = g = a.axisTitle.getBBox()[h ? "height" : "width"], E = H.offset, l = n(E) ? 0 : C(H.margin, h ? 5 : 10)));a.renderLine();a.offset = J * C(c.offset, r[m]);a.tickRotCorr = a.tickRotCorr || { x: 0, y: 0 };d = 0 === m ? -a.labelMetrics().h : 2 === m ? a.tickRotCorr.y : 0;l = Math.abs(F) + l;F && (l = l - d + J * (h ? C(v.y, a.tickRotCorr.y + 8 * J) : v.x));a.axisTitleMargin = C(E, l);r[m] = Math.max(r[m], a.axisTitleMargin + g + J * a.offset, l, A && f.length && K ? K[0] + J * a.offset : 0);c = c.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);b[y] = Math.max(b[y], c);
      }, getLinePath: function getLinePath(a) {
        var b = this.chart,
            k = this.opposite,
            d = this.offset,
            c = this.horiz,
            f = this.left + (k ? this.width : 0) + d,
            d = b.chartHeight - this.bottom - (k ? this.height : 0) + d;k && (a *= -1);
        return b.renderer.crispLine(["M", c ? this.left : f, c ? d : this.top, "L", c ? b.chartWidth - this.right : f, c ? d : b.chartHeight - this.bottom], a);
      }, renderLine: function renderLine() {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
      }, getTitlePosition: function getTitlePosition() {
        var a = this.horiz,
            b = this.left,
            d = this.top,
            c = this.len,
            f = this.options.title,
            q = a ? b : d,
            e = this.opposite,
            h = this.offset,
            m = f.x || 0,
            y = f.y || 0,
            A = this.axisTitle,
            t = this.chart.renderer.fontMetrics(f.style && f.style.fontSize, A),
            A = Math.max(A.getBBox(null, 0).height - t.h - 1, 0),
            c = { low: q + (a ? 0 : c), middle: q + c / 2, high: q + (a ? c : 0) }[f.align],
            b = (a ? d + this.height : b) + (a ? 1 : -1) * (e ? -1 : 1) * this.axisTitleMargin + [-A, A, t.f, -A][this.side];return { x: a ? c + m : b + (e ? this.width : 0) + h + m, y: a ? b + y - (e ? this.height : 0) + h : c + y };
      }, renderMinorTick: function renderMinorTick(a) {
        var b = this.chart.hasRendered && H(this.oldMin),
            d = this.minorTicks;d[a] || (d[a] = new E(this, a, "minor"));b && d[a].isNew && d[a].render(null, !0);d[a].render(null, !1, 1);
      }, renderTick: function renderTick(a, b) {
        var d = this.isLinked,
            k = this.ticks,
            c = this.chart.hasRendered && H(this.oldMin);if (!d || a >= this.min && a <= this.max) k[a] || (k[a] = new E(this, a)), c && k[a].isNew && k[a].render(b, !0, .1), k[a].render(b);
      }, render: function render() {
        var b = this,
            d = b.chart,
            c = b.options,
            f = b.isLog,
            q = b.lin2log,
            h = b.isLinked,
            m = b.tickPositions,
            y = b.axisTitle,
            t = b.ticks,
            g = b.minorTicks,
            l = b.alternateBands,
            n = c.stackLabels,
            C = c.alternateGridColor,
            v = b.tickmarkOffset,
            F = b.axisLine,
            r = b.showAxis,
            J = B(d.renderer.globalAnimation),
            p,
            w;b.labelEdge.length = 0;b.overlap = !1;e([t, g, l], function (a) {
          x(a, function (a) {
            a.isActive = !1;
          });
        });if (b.hasData() || h) b.minorTickInterval && !b.categories && e(b.getMinorTickPositions(), function (a) {
          b.renderMinorTick(a);
        }), m.length && (e(m, function (a, d) {
          b.renderTick(a, d);
        }), v && (0 === b.min || b.single) && (t[-1] || (t[-1] = new E(b, -1, null, !0)), t[-1].render(-1))), C && e(m, function (c, k) {
          w = void 0 !== m[k + 1] ? m[k + 1] + v : b.max - v;0 === k % 2 && c < b.max && w <= b.max + (d.polar ? -v : v) && (l[c] || (l[c] = new a.PlotLineOrBand(b)), p = c + v, l[c].options = { from: f ? q(p) : p, to: f ? q(w) : w, color: C }, l[c].render(), l[c].isActive = !0);
        }), b._addedPlotLB || (e((c.plotLines || []).concat(c.plotBands || []), function (a) {
          b.addPlotBandOrLine(a);
        }), b._addedPlotLB = !0);e([t, g, l], function (a) {
          var b,
              c = [],
              k = J.duration;x(a, function (a, b) {
            a.isActive || (a.render(b, !1, 0), a.isActive = !1, c.push(b));
          });A(function () {
            for (b = c.length; b--;) {
              a[c[b]] && !a[c[b]].isActive && (a[c[b]].destroy(), delete a[c[b]]);
            }
          }, a !== l && d.hasRendered && k ? k : 0);
        });F && (F[F.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(F.strokeWidth()) }), F.isPlaced = !0, F[r ? "show" : "hide"](!0));y && r && (c = b.getTitlePosition(), H(c.y) ? (y[y.isNew ? "attr" : "animate"](c), y.isNew = !1) : (y.attr("y", -9999), y.isNew = !0));n && n.enabled && b.renderStackTotals();b.isDirty = !1;
      }, redraw: function redraw() {
        this.visible && (this.render(), e(this.plotLinesAndBands, function (a) {
          a.render();
        }));e(this.series, function (a) {
          a.isDirty = !0;
        });
      }, keepProps: "extKey hcEvents names series userMax userMin".split(" "), destroy: function destroy(a) {
        var b = this,
            c = b.stacks,
            k = b.plotLinesAndBands,
            f;a || L(b);x(c, function (a, b) {
          v(a);
          c[b] = null;
        });e([b.ticks, b.minorTicks, b.alternateBands], function (a) {
          v(a);
        });if (k) for (a = k.length; a--;) {
          k[a].destroy();
        }e("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function (a) {
          b[a] && (b[a] = b[a].destroy());
        });for (f in b.plotLinesAndBandsGroups) {
          b.plotLinesAndBandsGroups[f] = b.plotLinesAndBandsGroups[f].destroy();
        }x(b, function (a, c) {
          -1 === d(c, b.keepProps) && delete b[c];
        });
      }, drawCrosshair: function drawCrosshair(a, b) {
        var d,
            c = this.crosshair,
            k = C(c.snap, !0),
            f,
            q = this.cross;a || (a = this.cross && this.cross.e);
        this.crosshair && !1 !== (n(b) || !k) ? (k ? n(b) && (f = this.isXAxis ? b.plotX : this.len - b.plotY) : f = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos), n(f) && (d = this.getPlotLinePath(b && (this.isXAxis ? b.x : C(b.stackY, b.y)), null, null, null, f) || null), n(d) ? (b = this.categories && !this.isRadial, q || (this.cross = q = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (b ? "category " : "thin ") + c.className).attr({ zIndex: C(c.zIndex, 2) }).add(), q.attr({ stroke: c.color || (b ? g("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": C(c.width, 1) }).css({ "pointer-events": "none" }), c.dashStyle && q.attr({ dashstyle: c.dashStyle })), q.show().attr({ d: d }), b && !c.width && q.attr({ "stroke-width": this.transA }), this.cross.e = a) : this.hideCrosshair()) : this.hideCrosshair();
      }, hideCrosshair: function hideCrosshair() {
        this.cross && this.cross.hide();
      } });return a.Axis = F;
  }(N);(function (a) {
    var D = a.Axis,
        B = a.Date,
        G = a.dateFormat,
        p = a.defaultOptions,
        g = a.defined,
        l = a.each,
        r = a.extend,
        n = a.getMagnitude,
        w = a.getTZOffset,
        v = a.normalizeTickInterval,
        e = a.pick,
        h = a.timeUnits;
    D.prototype.getTimeTicks = function (a, c, f, b) {
      var d = [],
          m = {},
          n = p.global.useUTC,
          v,
          t = new B(c - Math.max(w(c), w(f))),
          K = B.hcMakeTime,
          x = a.unitRange,
          C = a.count,
          L,
          q;if (g(c)) {
        t[B.hcSetMilliseconds](x >= h.second ? 0 : C * Math.floor(t.getMilliseconds() / C));if (x >= h.second) t[B.hcSetSeconds](x >= h.minute ? 0 : C * Math.floor(t.getSeconds() / C));if (x >= h.minute) t[B.hcSetMinutes](x >= h.hour ? 0 : C * Math.floor(t[B.hcGetMinutes]() / C));if (x >= h.hour) t[B.hcSetHours](x >= h.day ? 0 : C * Math.floor(t[B.hcGetHours]() / C));if (x >= h.day) t[B.hcSetDate](x >= h.month ? 1 : C * Math.floor(t[B.hcGetDate]() / C));x >= h.month && (t[B.hcSetMonth](x >= h.year ? 0 : C * Math.floor(t[B.hcGetMonth]() / C)), v = t[B.hcGetFullYear]());if (x >= h.year) t[B.hcSetFullYear](v - v % C);if (x === h.week) t[B.hcSetDate](t[B.hcGetDate]() - t[B.hcGetDay]() + e(b, 1));v = t[B.hcGetFullYear]();b = t[B.hcGetMonth]();var A = t[B.hcGetDate](),
            E = t[B.hcGetHours]();if (B.hcTimezoneOffset || B.hcGetTimezoneOffset) q = (!n || !!B.hcGetTimezoneOffset) && (f - c > 4 * h.month || w(c) !== w(f)), t = t.getTime(), L = w(t), t = new B(t + L);n = t.getTime();for (c = 1; n < f;) {
          d.push(n), n = x === h.year ? K(v + c * C, 0) : x === h.month ? K(v, b + c * C) : !q || x !== h.day && x !== h.week ? q && x === h.hour ? K(v, b, A, E + c * C, 0, 0, L) - L : n + x * C : K(v, b, A + c * C * (x === h.day ? 1 : 7)), c++;
        }d.push(n);x <= h.hour && 1E4 > d.length && l(d, function (a) {
          0 === a % 18E5 && "000000000" === G("%H%M%S%L", a) && (m[a] = "day");
        });
      }d.info = r(a, { higherRanks: m, totalRange: x * C });return d;
    };D.prototype.normalizeTimeTickInterval = function (a, c) {
      var f = c || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];c = f[f.length - 1];var b = h[c[0]],
          d = c[1],
          e;for (e = 0; e < f.length && !(c = f[e], b = h[c[0]], d = c[1], f[e + 1] && a <= (b * d[d.length - 1] + h[f[e + 1][0]]) / 2); e++) {}b === h.year && a < 5 * b && (d = [1, 2, 5]);a = v(a / b, d, "year" === c[0] ? Math.max(n(a / b), 1) : 1);return { unitRange: b, count: a, unitName: c[0] };
    };
  })(N);(function (a) {
    var D = a.Axis,
        B = a.getMagnitude,
        G = a.map,
        p = a.normalizeTickInterval,
        g = a.pick;D.prototype.getLogTickPositions = function (a, r, n, w) {
      var l = this.options,
          e = this.len,
          h = this.lin2log,
          m = this.log2lin,
          c = [];w || (this._minorAutoInterval = null);if (.5 <= a) a = Math.round(a), c = this.getLinearTickPositions(a, r, n);else if (.08 <= a) for (var e = Math.floor(r), f, b, d, y, H, l = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; e < n + 1 && !H; e++) {
        for (b = l.length, f = 0; f < b && !H; f++) {
          d = m(h(e) * l[f]), d > r && (!w || y <= n) && void 0 !== y && c.push(y), y > n && (H = !0), y = d;
        }
      } else r = h(r), n = h(n), a = w ? this.getMinorTickInterval() : l.tickInterval, a = g("auto" === a ? null : a, this._minorAutoInterval, l.tickPixelInterval / (w ? 5 : 1) * (n - r) / ((w ? e / this.tickPositions.length : e) || 1)), a = p(a, null, B(a)), c = G(this.getLinearTickPositions(a, r, n), m), w || (this._minorAutoInterval = a / 5);w || (this.tickInterval = a);return c;
    };D.prototype.log2lin = function (a) {
      return Math.log(a) / Math.LN10;
    };D.prototype.lin2log = function (a) {
      return Math.pow(10, a);
    };
  })(N);(function (a, D) {
    var B = a.arrayMax,
        G = a.arrayMin,
        p = a.defined,
        g = a.destroyObjectProperties,
        l = a.each,
        r = a.erase,
        n = a.merge,
        w = a.pick;a.PlotLineOrBand = function (a, e) {
      this.axis = a;e && (this.options = e, this.id = e.id);
    };a.PlotLineOrBand.prototype = { render: function render() {
        var g = this,
            e = g.axis,
            h = e.horiz,
            m = g.options,
            c = m.label,
            f = g.label,
            b = m.to,
            d = m.from,
            y = m.value,
            l = p(d) && p(b),
            r = p(y),
            t = g.svgElem,
            K = !t,
            x = [],
            C = m.color,
            L = w(m.zIndex, 0),
            q = m.events,
            x = { "class": "highcharts-plot-" + (l ? "band " : "line ") + (m.className || "") },
            A = {},
            E = e.chart.renderer,
            F = l ? "bands" : "lines",
            k = e.log2lin;e.isLog && (d = k(d), b = k(b), y = k(y));r ? (x = { stroke: C, "stroke-width": m.width }, m.dashStyle && (x.dashstyle = m.dashStyle)) : l && (C && (x.fill = C), m.borderWidth && (x.stroke = m.borderColor, x["stroke-width"] = m.borderWidth));A.zIndex = L;F += "-" + L;(C = e.plotLinesAndBandsGroups[F]) || (e.plotLinesAndBandsGroups[F] = C = E.g("plot-" + F).attr(A).add());K && (g.svgElem = t = E.path().attr(x).add(C));if (r) x = e.getPlotLinePath(y, t.strokeWidth());else if (l) x = e.getPlotBandPath(d, b, m);else return;K && x && x.length ? (t.attr({ d: x }), q && a.objectEach(q, function (a, b) {
          t.on(b, function (a) {
            q[b].apply(g, [a]);
          });
        })) : t && (x ? (t.show(), t.animate({ d: x })) : (t.hide(), f && (g.label = f = f.destroy())));c && p(c.text) && x && x.length && 0 < e.width && 0 < e.height && !x.flat ? (c = n({ align: h && l && "center", x: h ? !l && 4 : 10, verticalAlign: !h && l && "middle", y: h ? l ? 16 : 10 : l ? 6 : -4, rotation: h && !l && 90 }, c), this.renderLabel(c, x, l, L)) : f && f.hide();return g;
      }, renderLabel: function renderLabel(a, e, h, m) {
        var c = this.label,
            f = this.axis.chart.renderer;c || (c = { align: a.textAlign || a.align, rotation: a.rotation, "class": "highcharts-plot-" + (h ? "band" : "line") + "-label " + (a.className || "") }, c.zIndex = m, this.label = c = f.text(a.text, 0, 0, a.useHTML).attr(c).add(), c.css(a.style));m = e.xBounds || [e[1], e[4], h ? e[6] : e[1]];e = e.yBounds || [e[2], e[5], h ? e[7] : e[2]];h = G(m);f = G(e);
        c.align(a, !1, { x: h, y: f, width: B(m) - h, height: B(e) - f });c.show();
      }, destroy: function destroy() {
        r(this.axis.plotLinesAndBands, this);delete this.axis;g(this);
      } };a.extend(D.prototype, { getPlotBandPath: function getPlotBandPath(a, e) {
        var h = this.getPlotLinePath(e, null, null, !0),
            m = this.getPlotLinePath(a, null, null, !0),
            c = [],
            f = this.horiz,
            b = 1,
            d;a = a < this.min && e < this.min || a > this.max && e > this.max;if (m && h) for (a && (d = m.toString() === h.toString(), b = 0), a = 0; a < m.length; a += 6) {
          f && h[a + 1] === m[a + 1] ? (h[a + 1] += b, h[a + 4] += b) : f || h[a + 2] !== m[a + 2] || (h[a + 2] += b, h[a + 5] += b), c.push("M", m[a + 1], m[a + 2], "L", m[a + 4], m[a + 5], h[a + 4], h[a + 5], h[a + 1], h[a + 2], "z"), c.flat = d;
        }return c;
      }, addPlotBand: function addPlotBand(a) {
        return this.addPlotBandOrLine(a, "plotBands");
      }, addPlotLine: function addPlotLine(a) {
        return this.addPlotBandOrLine(a, "plotLines");
      }, addPlotBandOrLine: function addPlotBandOrLine(g, e) {
        var h = new a.PlotLineOrBand(this, g).render(),
            m = this.userOptions;h && (e && (m[e] = m[e] || [], m[e].push(g)), this.plotLinesAndBands.push(h));return h;
      }, removePlotBandOrLine: function removePlotBandOrLine(a) {
        for (var e = this.plotLinesAndBands, h = this.options, m = this.userOptions, c = e.length; c--;) {
          e[c].id === a && e[c].destroy();
        }l([h.plotLines || [], m.plotLines || [], h.plotBands || [], m.plotBands || []], function (f) {
          for (c = f.length; c--;) {
            f[c].id === a && r(f, f[c]);
          }
        });
      }, removePlotBand: function removePlotBand(a) {
        this.removePlotBandOrLine(a);
      }, removePlotLine: function removePlotLine(a) {
        this.removePlotBandOrLine(a);
      } });
  })(N, V);(function (a) {
    var D = a.dateFormat,
        B = a.each,
        G = a.extend,
        p = a.format,
        g = a.isNumber,
        l = a.map,
        r = a.merge,
        n = a.pick,
        w = a.splat,
        v = a.syncTimeout,
        e = a.timeUnits;a.Tooltip = function () {
      this.init.apply(this, arguments);
    };a.Tooltip.prototype = { init: function init(a, e) {
        this.chart = a;this.options = e;this.crosshairs = [];this.now = { x: 0, y: 0 };this.isHidden = !0;this.split = e.split && !a.inverted;this.shared = e.shared || this.split;
      }, cleanSplit: function cleanSplit(a) {
        B(this.chart.series, function (e) {
          var c = e && e.tt;c && (!c.isActive || a ? e.tt = c.destroy() : c.isActive = !1);
        });
      }, getLabel: function getLabel() {
        var a = this.chart.renderer,
            e = this.options;this.label || (this.split ? this.label = a.g("tooltip") : (this.label = a.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({ padding: e.padding,
          r: e.borderRadius }), this.label.attr({ fill: e.backgroundColor, "stroke-width": e.borderWidth }).css(e.style).shadow(e.shadow)), this.label.attr({ zIndex: 8 }).add());return this.label;
      }, update: function update(a) {
        this.destroy();r(!0, this.chart.options.tooltip.userOptions, a);this.init(this.chart, r(!0, this.options, a));
      }, destroy: function destroy() {
        this.label && (this.label = this.label.destroy());this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout);
      },
      move: function move(a, e, c, f) {
        var b = this,
            d = b.now,
            h = !1 !== b.options.animation && !b.isHidden && (1 < Math.abs(a - d.x) || 1 < Math.abs(e - d.y)),
            m = b.followPointer || 1 < b.len;G(d, { x: h ? (2 * d.x + a) / 3 : a, y: h ? (d.y + e) / 2 : e, anchorX: m ? void 0 : h ? (2 * d.anchorX + c) / 3 : c, anchorY: m ? void 0 : h ? (d.anchorY + f) / 2 : f });b.getLabel().attr(d);h && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
          b && b.move(a, e, c, f);
        }, 32));
      }, hide: function hide(a) {
        var e = this;clearTimeout(this.hideTimer);a = n(a, this.options.hideDelay, 500);this.isHidden || (this.hideTimer = v(function () {
          e.getLabel()[a ? "fadeOut" : "hide"]();e.isHidden = !0;
        }, a));
      }, getAnchor: function getAnchor(a, e) {
        var c,
            f = this.chart,
            b = f.inverted,
            d = f.plotTop,
            h = f.plotLeft,
            m = 0,
            g = 0,
            t,
            n;a = w(a);c = a[0].tooltipPos;this.followPointer && e && (void 0 === e.chartX && (e = f.pointer.normalize(e)), c = [e.chartX - f.plotLeft, e.chartY - d]);c || (B(a, function (a) {
          t = a.series.yAxis;n = a.series.xAxis;m += a.plotX + (!b && n ? n.left - h : 0);g += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!b && t ? t.top - d : 0);
        }), m /= a.length, g /= a.length, c = [b ? f.plotWidth - g : m, this.shared && !b && 1 < a.length && e ? e.chartY - d : b ? f.plotHeight - m : g]);return l(c, Math.round);
      }, getPosition: function getPosition(a, e, c) {
        var f = this.chart,
            b = this.distance,
            d = {},
            h = f.inverted && c.h || 0,
            m,
            g = ["y", f.chartHeight, e, c.plotY + f.plotTop, f.plotTop, f.plotTop + f.plotHeight],
            t = ["x", f.chartWidth, a, c.plotX + f.plotLeft, f.plotLeft, f.plotLeft + f.plotWidth],
            l = !this.followPointer && n(c.ttBelow, !f.inverted === !!c.negative),
            x = function x(a, c, f, k, e, q) {
          var m = f < k - b,
              y = k + b + f < c,
              u = k - b - f;k += b;if (l && y) d[a] = k;else if (!l && m) d[a] = u;else if (m) d[a] = Math.min(q - f, 0 > u - h ? u : u - h);else if (y) d[a] = Math.max(e, k + h + f > c ? k : k + h);else return !1;
        },
            C = function C(a, c, f, k) {
          var e;k < b || k > c - b ? e = !1 : d[a] = k < f / 2 ? 1 : k > c - f / 2 ? c - f - 2 : k - f / 2;return e;
        },
            r = function r(a) {
          var b = g;g = t;t = b;m = a;
        },
            q = function q() {
          !1 !== x.apply(0, g) ? !1 !== C.apply(0, t) || m || (r(!0), q()) : m ? d.x = d.y = 0 : (r(!0), q());
        };(f.inverted || 1 < this.len) && r();q();return d;
      }, defaultFormatter: function defaultFormatter(a) {
        var e = this.points || w(this),
            c;c = [a.tooltipFooterHeaderFormatter(e[0])];c = c.concat(a.bodyFormatter(e));c.push(a.tooltipFooterHeaderFormatter(e[0], !0));return c;
      },
      refresh: function refresh(a, e) {
        var c,
            f = this.options,
            b,
            d = a,
            h,
            m = {},
            g = [];c = f.formatter || this.defaultFormatter;var m = this.shared,
            t;f.enabled && (clearTimeout(this.hideTimer), this.followPointer = w(d)[0].series.tooltipOptions.followPointer, h = this.getAnchor(d, e), e = h[0], b = h[1], !m || d.series && d.series.noSharedTooltip ? m = d.getLabelConfig() : (B(d, function (a) {
          a.setState("hover");g.push(a.getLabelConfig());
        }), m = { x: d[0].category, y: d[0].y }, m.points = g, d = d[0]), this.len = g.length, m = c.call(m, this), t = d.series, this.distance = n(t.tooltipOptions.distance, 16), !1 === m ? this.hide() : (c = this.getLabel(), this.isHidden && c.attr({ opacity: 1 }).show(), this.split ? this.renderSplit(m, w(a)) : (f.style.width || c.css({ width: this.chart.spacingBox.width }), c.attr({ text: m && m.join ? m.join("") : m }), c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + n(d.colorIndex, t.colorIndex)), c.attr({ stroke: f.borderColor || d.color || t.color || "#666666" }), this.updatePosition({ plotX: e, plotY: b, negative: d.negative, ttBelow: d.ttBelow, h: h[2] || 0 })), this.isHidden = !1));
      }, renderSplit: function renderSplit(e, m) {
        var c = this,
            f = [],
            b = this.chart,
            d = b.renderer,
            h = !0,
            g = this.options,
            l = 0,
            t = this.getLabel();a.isString(e) && (e = [!1, e]);B(e.slice(0, m.length + 1), function (a, e) {
          if (!1 !== a) {
            e = m[e - 1] || { isHeader: !0, plotX: m[0].plotX };var y = e.series || c,
                x = y.tt,
                q = e.series || {},
                A = "highcharts-color-" + n(e.colorIndex, q.colorIndex, "none");x || (y.tt = x = d.label(null, null, null, "callout", null, null, g.useHTML).addClass("highcharts-tooltip-box " + A).attr({ padding: g.padding, r: g.borderRadius, fill: g.backgroundColor, stroke: g.borderColor || e.color || q.color || "#333333", "stroke-width": g.borderWidth }).add(t));x.isActive = !0;x.attr({ text: a });x.css(g.style).shadow(g.shadow);a = x.getBBox();q = a.width + x.strokeWidth();e.isHeader ? (l = a.height, q = Math.max(0, Math.min(e.plotX + b.plotLeft - q / 2, b.chartWidth - q))) : q = e.plotX + b.plotLeft - n(g.distance, 16) - q;0 > q && (h = !1);a = (e.series && e.series.yAxis && e.series.yAxis.pos) + (e.plotY || 0);a -= b.plotTop;f.push({ target: e.isHeader ? b.plotHeight + l : a, rank: e.isHeader ? 1 : 0, size: y.tt.getBBox().height + 1, point: e, x: q, tt: x });
          }
        });this.cleanSplit();a.distribute(f, b.plotHeight + l);B(f, function (a) {
          var d = a.point,
              c = d.series;a.tt.attr({ visibility: void 0 === a.pos ? "hidden" : "inherit", x: h || d.isHeader ? a.x : d.plotX + b.plotLeft + n(g.distance, 16), y: a.pos + b.plotTop, anchorX: d.isHeader ? d.plotX + b.plotLeft : d.plotX + c.xAxis.pos, anchorY: d.isHeader ? a.pos + b.plotTop - 15 : d.plotY + c.yAxis.pos });
        });
      }, updatePosition: function updatePosition(a) {
        var e = this.chart,
            c = this.getLabel(),
            c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);this.move(Math.round(c.x), Math.round(c.y || 0), a.plotX + e.plotLeft, a.plotY + e.plotTop);
      }, getDateFormat: function getDateFormat(a, m, c, f) {
        var b = D("%m-%d %H:%M:%S.%L", m),
            d,
            h,
            g = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
            l = "millisecond";for (h in e) {
          if (a === e.week && +D("%w", m) === c && "00:00:00.000" === b.substr(6)) {
            h = "week";break;
          }if (e[h] > a) {
            h = l;break;
          }if (g[h] && b.substr(g[h]) !== "01-01 00:00:00.000".substr(g[h])) break;"week" !== h && (l = h);
        }h && (d = f[h]);return d;
      }, getXDateFormat: function getXDateFormat(a, e, c) {
        e = e.dateTimeLabelFormats;var f = c && c.closestPointRange;return (f ? this.getDateFormat(f, a.x, c.options.startOfWeek, e) : e.day) || e.year;
      }, tooltipFooterHeaderFormatter: function tooltipFooterHeaderFormatter(a, e) {
        e = e ? "footer" : "header";var c = a.series,
            f = c.tooltipOptions,
            b = f.xDateFormat,
            d = c.xAxis,
            h = d && "datetime" === d.options.type && g(a.key),
            m = f[e + "Format"];h && !b && (b = this.getXDateFormat(a, f, d));h && b && B(a.point && a.point.tooltipDateKeys || ["key"], function (a) {
          m = m.replace("{point." + a + "}", "{point." + a + ":" + b + "}");
        });return p(m, { point: a, series: c });
      }, bodyFormatter: function bodyFormatter(a) {
        return l(a, function (a) {
          var c = a.series.tooltipOptions;return (c[(a.point.formatPrefix || "point") + "Formatter"] || a.point.tooltipFormatter).call(a.point, c[(a.point.formatPrefix || "point") + "Format"]);
        });
      } };
  })(N);(function (a) {
    var D = a.addEvent,
        B = a.attr,
        G = a.charts,
        p = a.color,
        g = a.css,
        l = a.defined,
        r = a.each,
        n = a.extend,
        w = a.find,
        v = a.fireEvent,
        e = a.isObject,
        h = a.offset,
        m = a.pick,
        c = a.splat,
        f = a.Tooltip;a.Pointer = function (a, d) {
      this.init(a, d);
    };a.Pointer.prototype = { init: function init(a, d) {
        this.options = d;this.chart = a;this.runChartClick = d.chart.events && !!d.chart.events.click;this.pinchDown = [];this.lastValidTouch = {};f && (a.tooltip = new f(a, d.tooltip), this.followTouchMove = m(d.tooltip.followTouchMove, !0));this.setDOMEvents();
      }, zoomOption: function zoomOption(a) {
        var b = this.chart,
            c = b.options.chart,
            f = c.zoomType || "",
            b = b.inverted;/touch/.test(a.type) && (f = m(c.pinchType, f));this.zoomX = a = /x/.test(f);this.zoomY = f = /y/.test(f);this.zoomHor = a && !b || f && b;this.zoomVert = f && !b || a && b;this.hasZoom = a || f;
      }, normalize: function normalize(a, d) {
        var b;b = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;d || (this.chartPosition = d = h(this.chart.container));return n(a, { chartX: Math.round(b.pageX - d.left), chartY: Math.round(b.pageY - d.top) });
      }, getCoordinates: function getCoordinates(a) {
        var b = { xAxis: [], yAxis: [] };r(this.chart.axes, function (d) {
          b[d.isXAxis ? "xAxis" : "yAxis"].push({ axis: d, value: d.toValue(a[d.horiz ? "chartX" : "chartY"]) });
        });return b;
      }, findNearestKDPoint: function findNearestKDPoint(a, d, c) {
        var b;r(a, function (a) {
          var f = !(a.noSharedTooltip && d) && 0 > a.options.findNearestPointBy.indexOf("y");a = a.searchPoint(c, f);if ((f = e(a, !0)) && !(f = !e(b, !0))) var f = b.distX - a.distX,
              h = b.dist - a.dist,
              m = (a.series.group && a.series.group.zIndex) - (b.series.group && b.series.group.zIndex),
              f = 0 < (0 !== f && d ? f : 0 !== h ? h : 0 !== m ? m : b.series.index > a.series.index ? -1 : 1);f && (b = a);
        });return b;
      }, getPointFromEvent: function getPointFromEvent(a) {
        a = a.target;for (var b; a && !b;) {
          b = a.point, a = a.parentNode;
        }return b;
      }, getChartCoordinatesFromPoint: function getChartCoordinatesFromPoint(a, d) {
        var b = a.series,
            c = b.xAxis,
            b = b.yAxis,
            f = m(a.clientX, a.plotX);if (c && b) return d ? { chartX: c.len + c.pos - f, chartY: b.len + b.pos - a.plotY } : { chartX: f + c.pos, chartY: a.plotY + b.pos };
      }, getHoverData: function getHoverData(b, c, f, h, g, t, l) {
        var d,
            y = [],
            n = l && l.isBoosting;h = !(!h || !b);l = c && !c.stickyTracking ? [c] : a.grep(f, function (a) {
          return a.visible && !(!g && a.directTouch) && m(a.options.enableMouseTracking, !0) && a.stickyTracking;
        });c = (d = h ? b : this.findNearestKDPoint(l, g, t)) && d.series;d && (g && !c.noSharedTooltip ? (l = a.grep(f, function (a) {
          return a.visible && !(!g && a.directTouch) && m(a.options.enableMouseTracking, !0) && !a.noSharedTooltip;
        }), r(l, function (a) {
          var b = w(a.points, function (a) {
            return a.x === d.x && !a.isNull;
          });e(b) && (n && (b = a.getPoint(b)), y.push(b));
        })) : y.push(d));return { hoverPoint: d, hoverSeries: c,
          hoverPoints: y };
      }, runPointActions: function runPointActions(b, c) {
        var d = this.chart,
            f = d.tooltip && d.tooltip.options.enabled ? d.tooltip : void 0,
            e = f ? f.shared : !1,
            h = c || d.hoverPoint,
            g = h && h.series || d.hoverSeries,
            g = this.getHoverData(h, g, d.series, !!c || g && g.directTouch && this.isDirectTouch, e, b, { isBoosting: d.isBoosting }),
            l,
            h = g.hoverPoint;l = g.hoverPoints;c = (g = g.hoverSeries) && g.tooltipOptions.followPointer;e = e && g && !g.noSharedTooltip;if (h && (h !== d.hoverPoint || f && f.isHidden)) {
          r(d.hoverPoints || [], function (b) {
            -1 === a.inArray(b, l) && b.setState();
          });
          r(l || [], function (a) {
            a.setState("hover");
          });if (d.hoverSeries !== g) g.onMouseOver();d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut");if (!h.series) return;h.firePointEvent("mouseOver");d.hoverPoints = l;d.hoverPoint = h;f && f.refresh(e ? l : h, b);
        } else c && f && !f.isHidden && (h = f.getAnchor([{}], b), f.updatePosition({ plotX: h[0], plotY: h[1] }));this.unDocMouseMove || (this.unDocMouseMove = D(d.container.ownerDocument, "mousemove", function (b) {
          var c = G[a.hoverChartIndex];if (c) c.pointer.onDocumentMouseMove(b);
        }));r(d.axes, function (c) {
          var d = m(c.crosshair.snap, !0),
              f = d ? a.find(l, function (a) {
            return a.series[c.coll] === c;
          }) : void 0;f || !d ? c.drawCrosshair(b, f) : c.hideCrosshair();
        });
      }, reset: function reset(a, d) {
        var b = this.chart,
            f = b.hoverSeries,
            e = b.hoverPoint,
            h = b.hoverPoints,
            g = b.tooltip,
            m = g && g.shared ? h : e;a && m && r(c(m), function (b) {
          b.series.isCartesian && void 0 === b.plotX && (a = !1);
        });if (a) g && m && (g.refresh(m), e && (e.setState(e.state, !0), r(b.axes, function (a) {
          a.crosshair && a.drawCrosshair(null, e);
        })));else {
          if (e) e.onMouseOut();h && r(h, function (a) {
            a.setState();
          });if (f) f.onMouseOut();
          g && g.hide(d);this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());r(b.axes, function (a) {
            a.hideCrosshair();
          });this.hoverX = b.hoverPoints = b.hoverPoint = null;
        }
      }, scaleGroups: function scaleGroups(a, c) {
        var b = this.chart,
            d;r(b.series, function (f) {
          d = a || f.getPlotBox();f.xAxis && f.xAxis.zoomEnabled && f.group && (f.group.attr(d), f.markerGroup && (f.markerGroup.attr(d), f.markerGroup.clip(c ? b.clipRect : null)), f.dataLabelsGroup && f.dataLabelsGroup.attr(d));
        });b.clipRect.attr(c || b.clipBox);
      }, dragStart: function dragStart(a) {
        var b = this.chart;
        b.mouseIsDown = a.type;b.cancelClick = !1;b.mouseDownX = this.mouseDownX = a.chartX;b.mouseDownY = this.mouseDownY = a.chartY;
      }, drag: function drag(a) {
        var b = this.chart,
            c = b.options.chart,
            f = a.chartX,
            e = a.chartY,
            h = this.zoomHor,
            g = this.zoomVert,
            m = b.plotLeft,
            l = b.plotTop,
            n = b.plotWidth,
            q = b.plotHeight,
            A,
            E = this.selectionMarker,
            F = this.mouseDownX,
            k = this.mouseDownY,
            u = c.panKey && a[c.panKey + "Key"];E && E.touch || (f < m ? f = m : f > m + n && (f = m + n), e < l ? e = l : e > l + q && (e = l + q), this.hasDragged = Math.sqrt(Math.pow(F - f, 2) + Math.pow(k - e, 2)), 10 < this.hasDragged && (A = b.isInsidePlot(F - m, k - l), b.hasCartesianSeries && (this.zoomX || this.zoomY) && A && !u && !E && (this.selectionMarker = E = b.renderer.rect(m, l, h ? 1 : n, g ? 1 : q, 0).attr({ fill: c.selectionMarkerFill || p("#335cad").setOpacity(.25).get(), "class": "highcharts-selection-marker", zIndex: 7 }).add()), E && h && (f -= F, E.attr({ width: Math.abs(f), x: (0 < f ? 0 : f) + F })), E && g && (f = e - k, E.attr({ height: Math.abs(f), y: (0 < f ? 0 : f) + k })), A && !E && c.panning && b.pan(a, c.panning)));
      }, drop: function drop(a) {
        var b = this,
            c = this.chart,
            f = this.hasPinched;if (this.selectionMarker) {
          var e = { originalEvent: a, xAxis: [], yAxis: [] },
              h = this.selectionMarker,
              m = h.attr ? h.attr("x") : h.x,
              x = h.attr ? h.attr("y") : h.y,
              C = h.attr ? h.attr("width") : h.width,
              p = h.attr ? h.attr("height") : h.height,
              q;if (this.hasDragged || f) r(c.axes, function (c) {
            if (c.zoomEnabled && l(c.min) && (f || b[{ xAxis: "zoomX", yAxis: "zoomY" }[c.coll]])) {
              var d = c.horiz,
                  h = "touchend" === a.type ? c.minPixelPadding : 0,
                  k = c.toValue((d ? m : x) + h),
                  d = c.toValue((d ? m + C : x + p) - h);e[c.coll].push({ axis: c, min: Math.min(k, d), max: Math.max(k, d) });q = !0;
            }
          }), q && v(c, "selection", e, function (a) {
            c.zoom(n(a, f ? { animation: !1 } : null));
          });this.selectionMarker = this.selectionMarker.destroy();f && this.scaleGroups();
        }c && (g(c.container, { cursor: c._cursor }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
      }, onContainerMouseDown: function onContainerMouseDown(a) {
        a = this.normalize(a);this.zoomOption(a);a.preventDefault && a.preventDefault();this.dragStart(a);
      }, onDocumentMouseUp: function onDocumentMouseUp(b) {
        G[a.hoverChartIndex] && G[a.hoverChartIndex].pointer.drop(b);
      }, onDocumentMouseMove: function onDocumentMouseMove(a) {
        var b = this.chart,
            c = this.chartPosition;a = this.normalize(a, c);!c || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset();
      }, onContainerMouseLeave: function onContainerMouseLeave(b) {
        var c = G[a.hoverChartIndex];c && (b.relatedTarget || b.toElement) && (c.pointer.reset(), c.pointer.chartPosition = null);
      }, onContainerMouseMove: function onContainerMouseMove(b) {
        var c = this.chart;l(a.hoverChartIndex) && G[a.hoverChartIndex] && G[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = c.index);b = this.normalize(b);b.returnValue = !1;
        "mousedown" === c.mouseIsDown && this.drag(b);!this.inClass(b.target, "highcharts-tracker") && !c.isInsidePlot(b.chartX - c.plotLeft, b.chartY - c.plotTop) || c.openMenu || this.runPointActions(b);
      }, inClass: function inClass(a, c) {
        for (var b; a;) {
          if (b = B(a, "class")) {
            if (-1 !== b.indexOf(c)) return !0;if (-1 !== b.indexOf("highcharts-container")) return !1;
          }a = a.parentNode;
        }
      }, onTrackerMouseOut: function onTrackerMouseOut(a) {
        var b = this.chart.hoverSeries;a = a.relatedTarget || a.toElement;this.isDirectTouch = !1;if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut();
      }, onContainerClick: function onContainerClick(a) {
        var b = this.chart,
            c = b.hoverPoint,
            f = b.plotLeft,
            e = b.plotTop;a = this.normalize(a);b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (v(c.series, "click", n(a, { point: c })), b.hoverPoint && c.firePointEvent("click", a)) : (n(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - f, a.chartY - e) && v(b, "click", a)));
      }, setDOMEvents: function setDOMEvents() {
        var b = this,
            c = b.chart.container,
            f = c.ownerDocument;
        c.onmousedown = function (a) {
          b.onContainerMouseDown(a);
        };c.onmousemove = function (a) {
          b.onContainerMouseMove(a);
        };c.onclick = function (a) {
          b.onContainerClick(a);
        };this.unbindContainerMouseLeave = D(c, "mouseleave", b.onContainerMouseLeave);a.unbindDocumentMouseUp || (a.unbindDocumentMouseUp = D(f, "mouseup", b.onDocumentMouseUp));a.hasTouch && (c.ontouchstart = function (a) {
          b.onContainerTouchStart(a);
        }, c.ontouchmove = function (a) {
          b.onContainerTouchMove(a);
        }, a.unbindDocumentTouchEnd || (a.unbindDocumentTouchEnd = D(f, "touchend", b.onDocumentTouchEnd)));
      },
      destroy: function destroy() {
        var b = this;b.unDocMouseMove && b.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount || (a.unbindDocumentMouseUp && (a.unbindDocumentMouseUp = a.unbindDocumentMouseUp()), a.unbindDocumentTouchEnd && (a.unbindDocumentTouchEnd = a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b, function (a, c) {
          b[c] = null;
        });
      } };
  })(N);(function (a) {
    var D = a.charts,
        B = a.each,
        G = a.extend,
        p = a.map,
        g = a.noop,
        l = a.pick;G(a.Pointer.prototype, { pinchTranslate: function pinchTranslate(a, g, l, p, e, h) {
        this.zoomHor && this.pinchTranslateDirection(!0, a, g, l, p, e, h);this.zoomVert && this.pinchTranslateDirection(!1, a, g, l, p, e, h);
      }, pinchTranslateDirection: function pinchTranslateDirection(a, g, l, p, e, h, m, c) {
        var f = this.chart,
            b = a ? "x" : "y",
            d = a ? "X" : "Y",
            y = "chart" + d,
            n = a ? "width" : "height",
            r = f["plot" + (a ? "Left" : "Top")],
            t,
            v,
            x = c || 1,
            C = f.inverted,
            w = f.bounds[a ? "h" : "v"],
            q = 1 === g.length,
            A = g[0][y],
            E = l[0][y],
            F = !q && g[1][y],
            k = !q && l[1][y],
            u;l = function l() {
          !q && 20 < Math.abs(A - F) && (x = c || Math.abs(E - k) / Math.abs(A - F));v = (r - E) / x + A;t = f["plot" + (a ? "Width" : "Height")] / x;
        };l();g = v;g < w.min ? (g = w.min, u = !0) : g + t > w.max && (g = w.max - t, u = !0);u ? (E -= .8 * (E - m[b][0]), q || (k -= .8 * (k - m[b][1])), l()) : m[b] = [E, k];C || (h[b] = v - r, h[n] = t);h = C ? 1 / x : x;e[n] = t;e[b] = g;p[C ? a ? "scaleY" : "scaleX" : "scale" + d] = x;p["translate" + d] = h * r + (E - h * A);
      }, pinch: function pinch(a) {
        var n = this,
            r = n.chart,
            v = n.pinchDown,
            e = a.touches,
            h = e.length,
            m = n.lastValidTouch,
            c = n.hasZoom,
            f = n.selectionMarker,
            b = {},
            d = 1 === h && (n.inClass(a.target, "highcharts-tracker") && r.runTrackerClick || n.runChartClick),
            y = {};1 < h && (n.initiated = !0);c && n.initiated && !d && a.preventDefault();
        p(e, function (a) {
          return n.normalize(a);
        });"touchstart" === a.type ? (B(e, function (a, b) {
          v[b] = { chartX: a.chartX, chartY: a.chartY };
        }), m.x = [v[0].chartX, v[1] && v[1].chartX], m.y = [v[0].chartY, v[1] && v[1].chartY], B(r.axes, function (a) {
          if (a.zoomEnabled) {
            var b = r.bounds[a.horiz ? "h" : "v"],
                c = a.minPixelPadding,
                f = a.toPixels(l(a.options.min, a.dataMin)),
                d = a.toPixels(l(a.options.max, a.dataMax)),
                e = Math.max(f, d);b.min = Math.min(a.pos, Math.min(f, d) - c);b.max = Math.max(a.pos + a.len, e + c);
          }
        }), n.res = !0) : n.followTouchMove && 1 === h ? this.runPointActions(n.normalize(a)) : v.length && (f || (n.selectionMarker = f = G({ destroy: g, touch: !0 }, r.plotBox)), n.pinchTranslate(v, e, b, f, y, m), n.hasPinched = c, n.scaleGroups(b, y), n.res && (n.res = !1, this.reset(!1, 0)));
      }, touch: function touch(g, n) {
        var r = this.chart,
            p,
            e;if (r.index !== a.hoverChartIndex) this.onContainerMouseLeave({ relatedTarget: !0 });a.hoverChartIndex = r.index;1 === g.touches.length ? (g = this.normalize(g), (e = r.isInsidePlot(g.chartX - r.plotLeft, g.chartY - r.plotTop)) && !r.openMenu ? (n && this.runPointActions(g), "touchmove" === g.type && (n = this.pinchDown, p = n[0] ? 4 <= Math.sqrt(Math.pow(n[0].chartX - g.chartX, 2) + Math.pow(n[0].chartY - g.chartY, 2)) : !1), l(p, !0) && this.pinch(g)) : n && this.reset()) : 2 === g.touches.length && this.pinch(g);
      }, onContainerTouchStart: function onContainerTouchStart(a) {
        this.zoomOption(a);this.touch(a, !0);
      }, onContainerTouchMove: function onContainerTouchMove(a) {
        this.touch(a);
      }, onDocumentTouchEnd: function onDocumentTouchEnd(g) {
        D[a.hoverChartIndex] && D[a.hoverChartIndex].pointer.drop(g);
      } });
  })(N);(function (a) {
    var D = a.addEvent,
        B = a.charts,
        G = a.css,
        p = a.doc,
        g = a.extend,
        l = a.noop,
        r = a.Pointer,
        n = a.removeEvent,
        w = a.win,
        v = a.wrap;
    if (!a.hasTouch && (w.PointerEvent || w.MSPointerEvent)) {
      var e = {},
          h = !!w.PointerEvent,
          m = function m() {
        var c = [];c.item = function (a) {
          return this[a];
        };a.objectEach(e, function (a) {
          c.push({ pageX: a.pageX, pageY: a.pageY, target: a.target });
        });return c;
      },
          c = function c(_c, b, d, e) {
        "touch" !== _c.pointerType && _c.pointerType !== _c.MSPOINTER_TYPE_TOUCH || !B[a.hoverChartIndex] || (e(_c), e = B[a.hoverChartIndex].pointer, e[b]({ type: d, target: _c.currentTarget, preventDefault: l, touches: m() }));
      };g(r.prototype, { onContainerPointerDown: function onContainerPointerDown(a) {
          c(a, "onContainerTouchStart", "touchstart", function (a) {
            e[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget };
          });
        }, onContainerPointerMove: function onContainerPointerMove(a) {
          c(a, "onContainerTouchMove", "touchmove", function (a) {
            e[a.pointerId] = { pageX: a.pageX, pageY: a.pageY };e[a.pointerId].target || (e[a.pointerId].target = a.currentTarget);
          });
        }, onDocumentPointerUp: function onDocumentPointerUp(a) {
          c(a, "onDocumentTouchEnd", "touchend", function (a) {
            delete e[a.pointerId];
          });
        }, batchMSEvents: function batchMSEvents(a) {
          a(this.chart.container, h ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
          a(this.chart.container, h ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);a(p, h ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
        } });v(r.prototype, "init", function (a, b, c) {
        a.call(this, b, c);this.hasZoom && G(b.container, { "-ms-touch-action": "none", "touch-action": "none" });
      });v(r.prototype, "setDOMEvents", function (a) {
        a.apply(this);(this.hasZoom || this.followTouchMove) && this.batchMSEvents(D);
      });v(r.prototype, "destroy", function (a) {
        this.batchMSEvents(n);a.call(this);
      });
    }
  })(N);(function (a) {
    var D = a.addEvent,
        B = a.css,
        G = a.discardElement,
        p = a.defined,
        g = a.each,
        l = a.isFirefox,
        r = a.marginNames,
        n = a.merge,
        w = a.pick,
        v = a.setAnimation,
        e = a.stableSort,
        h = a.win,
        m = a.wrap;a.Legend = function (a, f) {
      this.init(a, f);
    };a.Legend.prototype = { init: function init(a, f) {
        this.chart = a;this.setOptions(f);f.enabled && (this.render(), D(this.chart, "endResize", function () {
          this.legend.positionCheckboxes();
        }));
      }, setOptions: function setOptions(a) {
        var c = w(a.padding, 8);this.options = a;this.itemStyle = a.itemStyle;this.itemHiddenStyle = n(this.itemStyle, a.itemHiddenStyle);this.itemMarginTop = a.itemMarginTop || 0;this.padding = c;this.initialItemY = c - 5;this.itemHeight = this.maxItemWidth = 0;this.symbolWidth = w(a.symbolWidth, 16);this.pages = [];
      }, update: function update(a, f) {
        var b = this.chart;this.setOptions(n(!0, this.options, a));this.destroy();b.isDirtyLegend = b.isDirtyBox = !0;w(f, !0) && b.redraw();
      }, colorizeItem: function colorizeItem(a, f) {
        a.legendGroup[f ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");var b = this.options,
            c = a.legendItem,
            e = a.legendLine,
            h = a.legendSymbol,
            g = this.itemHiddenStyle.color,
            b = f ? b.itemStyle.color : g,
            m = f ? a.color || g : g,
            l = a.options && a.options.marker,
            x = { fill: m };c && c.css({ fill: b, color: b });e && e.attr({ stroke: m });h && (l && h.isMarker && (x = a.pointAttribs(), f || (x.stroke = x.fill = g)), h.attr(x));
      }, positionItem: function positionItem(a) {
        var c = this.options,
            b = c.symbolPadding,
            c = !c.rtl,
            d = a._legendItemPos,
            e = d[0],
            d = d[1],
            h = a.checkbox;(a = a.legendGroup) && a.element && a.translate(c ? e : this.legendWidth - e - 2 * b - 4, d);h && (h.x = e, h.y = d);
      }, destroyItem: function destroyItem(a) {
        var c = a.checkbox;g(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
          a[b] && (a[b] = a[b].destroy());
        });c && G(a.checkbox);
      }, destroy: function destroy() {
        function a(a) {
          this[a] && (this[a] = this[a].destroy());
        }g(this.getAllItems(), function (c) {
          g(["legendItem", "legendGroup"], a, c);
        });g("clipRect up down pager nav box title group".split(" "), a, this);this.display = null;
      }, positionCheckboxes: function positionCheckboxes() {
        var a = this.group && this.group.alignAttr,
            f,
            b = this.clipHeight || this.legendHeight,
            d = this.titleHeight;a && (f = a.translateY, g(this.allItems, function (c) {
          var e = c.checkbox,
              h;e && (h = f + d + e.y + (this.scrollOffset || 0) + 3, B(e, { left: a.translateX + c.checkboxOffset + e.x - 20 + "px", top: h + "px", display: h > f - 6 && h < f + b - 6 ? "" : "none" }));
        }, this));
      }, renderTitle: function renderTitle() {
        var a = this.options,
            f = this.padding,
            b = a.title,
            d = 0;b.text && (this.title || (this.title = this.chart.renderer.label(b.text, f - 3, f - 4, null, null, null, a.useHTML, null, "legend-title").attr({ zIndex: 1 }).css(b.style).add(this.group)), a = this.title.getBBox(), d = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: d }));this.titleHeight = d;
      }, setText: function setText(c) {
        var f = this.options;c.legendItem.attr({ text: f.labelFormat ? a.format(f.labelFormat, c) : f.labelFormatter.call(c) });
      }, renderItem: function renderItem(a) {
        var c = this.chart,
            b = c.renderer,
            d = this.options,
            e = "horizontal" === d.layout,
            h = this.symbolWidth,
            g = d.symbolPadding,
            m = this.itemStyle,
            l = this.itemHiddenStyle,
            x = this.padding,
            C = e ? w(d.itemDistance, 20) : 0,
            r = !d.rtl,
            q = d.width,
            A = d.itemMarginBottom || 0,
            E = this.itemMarginTop,
            F = a.legendItem,
            k = !a.series,
            u = !k && a.series.drawLegendSymbol ? a.series : a,
            p = u.options,
            v = this.createCheckboxForItem && p && p.showCheckbox,
            p = h + g + C + (v ? 20 : 0),
            P = d.useHTML,
            I = a.options.className;
        F || (a.legendGroup = b.g("legend-item").addClass("highcharts-" + u.type + "-series highcharts-color-" + a.colorIndex + (I ? " " + I : "") + (k ? " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = F = b.text("", r ? h + g : -g, this.baseline || 0, P).css(n(a.visible ? m : l)).attr({ align: r ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (h = m.fontSize, this.fontMetrics = b.fontMetrics(h, F), this.baseline = this.fontMetrics.f + 3 + E, F.attr("y", this.baseline)), this.symbolHeight = d.symbolHeight || this.fontMetrics.f, u.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, F, P), v && this.createCheckboxForItem(a));this.colorizeItem(a, a.visible);m.width || F.css({ width: (d.itemWidth || d.width || c.spacingBox.width) - p });this.setText(a);b = F.getBBox();m = a.checkboxOffset = d.itemWidth || a.legendItemWidth || b.width + p;this.itemHeight = b = Math.round(a.legendItemHeight || b.height || this.symbolHeight);e && this.itemX - x + m > (q || c.spacingBox.width - 2 * x - d.x) && (this.itemX = x, this.itemY += E + this.lastLineHeight + A, this.lastLineHeight = 0);this.maxItemWidth = Math.max(this.maxItemWidth, m);this.lastItemY = E + this.itemY + A;this.lastLineHeight = Math.max(b, this.lastLineHeight);a._legendItemPos = [this.itemX, this.itemY];e ? this.itemX += m : (this.itemY += E + b + A, this.lastLineHeight = b);this.offsetWidth = q || Math.max((e ? this.itemX - x - (a.checkbox ? 0 : C) : m) + x, this.offsetWidth);
      }, getAllItems: function getAllItems() {
        var a = [];g(this.chart.series, function (c) {
          var b = c && c.options;c && w(b.showInLegend, p(b.linkedTo) ? !1 : void 0, !0) && (a = a.concat(c.legendItems || ("point" === b.legendType ? c.data : c)));
        });return a;
      },
      adjustMargins: function adjustMargins(a, f) {
        var b = this.chart,
            c = this.options,
            e = c.align.charAt(0) + c.verticalAlign.charAt(0) + c.layout.charAt(0);c.floating || g([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (d, h) {
          d.test(e) && !p(a[h]) && (b[r[h]] = Math.max(b[r[h]], b.legend[(h + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][h] * c[h % 2 ? "x" : "y"] + w(c.margin, 12) + f[h]));
        });
      }, render: function render() {
        var a = this,
            f = a.chart,
            b = f.renderer,
            d = a.group,
            h,
            m,
            l,
            t,
            p = a.box,
            x = a.options,
            r = a.padding;a.itemX = r;a.itemY = a.initialItemY;a.offsetWidth = 0;a.lastItemY = 0;d || (a.group = d = b.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = b.g().attr({ zIndex: 1 }).add(d), a.scrollGroup = b.g().add(a.contentGroup));a.renderTitle();h = a.getAllItems();e(h, function (a, b) {
          return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
        });x.reversed && h.reverse();a.allItems = h;a.display = m = !!h.length;a.lastLineHeight = 0;g(h, function (b) {
          a.renderItem(b);
        });l = (x.width || a.offsetWidth) + r;t = a.lastItemY + a.lastLineHeight + a.titleHeight;t = a.handleOverflow(t);t += r;p || (a.box = p = b.rect().addClass("highcharts-legend-box").attr({ r: x.borderRadius }).add(d), p.isNew = !0);p.attr({ stroke: x.borderColor, "stroke-width": x.borderWidth || 0, fill: x.backgroundColor || "none" }).shadow(x.shadow);0 < l && 0 < t && (p[p.isNew ? "attr" : "animate"](p.crisp.call({}, { x: 0, y: 0, width: l, height: t }, p.strokeWidth())), p.isNew = !1);p[m ? "show" : "hide"]();a.legendWidth = l;a.legendHeight = t;g(h, function (b) {
          a.positionItem(b);
        });m && d.align(n(x, { width: l, height: t }), !0, "spacingBox");f.isResizing || this.positionCheckboxes();
      },
      handleOverflow: function handleOverflow(a) {
        var c = this,
            b = this.chart,
            d = b.renderer,
            e = this.options,
            h = e.y,
            m = this.padding,
            b = b.spacingBox.height + ("top" === e.verticalAlign ? -h : h) - m,
            h = e.maxHeight,
            l,
            n = this.clipRect,
            x = e.navigation,
            p = w(x.animation, !0),
            r = x.arrowSize || 12,
            q = this.nav,
            A = this.pages,
            E,
            F = this.allItems,
            k = function k(a) {
          "number" === typeof a ? n.attr({ height: a }) : n && (c.clipRect = n.destroy(), c.contentGroup.clip());c.contentGroup.div && (c.contentGroup.div.style.clip = a ? "rect(" + m + "px,9999px," + (m + a) + "px,0)" : "auto");
        };"horizontal" !== e.layout || "middle" === e.verticalAlign || e.floating || (b /= 2);h && (b = Math.min(b, h));A.length = 0;a > b && !1 !== x.enabled ? (this.clipHeight = l = Math.max(b - 20 - this.titleHeight - m, 0), this.currentPage = w(this.currentPage, 1), this.fullHeight = a, g(F, function (a, b) {
          var c = a._legendItemPos[1];a = Math.round(a.legendItem.getBBox().height);var d = A.length;if (!d || c - A[d - 1] > l && (E || c) !== A[d - 1]) A.push(E || c), d++;b === F.length - 1 && c + a - A[d - 1] > l && A.push(c);c !== E && (E = c);
        }), n || (n = c.clipRect = d.clipRect(0, m, 9999, 0), c.contentGroup.clip(n)), k(l), q || (this.nav = q = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle", 0, 0, r, r).on("click", function () {
          c.scroll(-1, p);
        }).add(q), this.pager = d.text("", 15, 10).addClass("highcharts-legend-navigation").css(x.style).add(q), this.down = d.symbol("triangle-down", 0, 0, r, r).on("click", function () {
          c.scroll(1, p);
        }).add(q)), c.scroll(0), a = b) : q && (k(), this.nav = q.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0);return a;
      }, scroll: function scroll(a, f) {
        var b = this.pages,
            c = b.length;a = this.currentPage + a;var e = this.clipHeight,
            h = this.options.navigation,
            g = this.pager,
            m = this.padding;a > c && (a = c);0 < a && (void 0 !== f && v(f, this.chart), this.nav.attr({ translateX: m, translateY: e + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), g.attr({ text: a + "/" + c }), this.down.attr({ x: 18 + this.pager.getBBox().width, "class": a === c ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), this.up.attr({ fill: 1 === a ? h.inactiveColor : h.activeColor }).css({ cursor: 1 === a ? "default" : "pointer" }), this.down.attr({ fill: a === c ? h.inactiveColor : h.activeColor }).css({ cursor: a === c ? "default" : "pointer" }), this.scrollOffset = -b[a - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = a, this.positionCheckboxes());
      } };a.LegendSymbolMixin = { drawRectangle: function drawRectangle(a, f) {
        var b = a.symbolHeight,
            c = a.options.squareSymbol;f.legendSymbol = this.chart.renderer.rect(c ? (a.symbolWidth - b) / 2 : 0, a.baseline - b + 1, c ? b : a.symbolWidth, b, w(a.options.symbolRadius, b / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(f.legendGroup);
      },
      drawLineMarker: function drawLineMarker(a) {
        var c = this.options,
            b = c.marker,
            d = a.symbolWidth,
            e = a.symbolHeight,
            h = e / 2,
            g = this.chart.renderer,
            m = this.legendGroup;a = a.baseline - Math.round(.3 * a.fontMetrics.b);var l;l = { "stroke-width": c.lineWidth || 0 };c.dashStyle && (l.dashstyle = c.dashStyle);this.legendLine = g.path(["M", 0, a, "L", d, a]).addClass("highcharts-graph").attr(l).add(m);b && !1 !== b.enabled && (c = Math.min(w(b.radius, h), h), 0 === this.symbol.indexOf("url") && (b = n(b, { width: e, height: e }), c = 0), this.legendSymbol = b = g.symbol(this.symbol, d / 2 - c, a - c, 2 * c, 2 * c, b).addClass("highcharts-point").add(m), b.isMarker = !0);
      } };(/Trident\/7\.0/.test(h.navigator.userAgent) || l) && m(a.Legend.prototype, "positionItem", function (a, f) {
      var b = this,
          c = function c() {
        f._legendItemPos && a.call(b, f);
      };c();setTimeout(c);
    });
  })(N);(function (a) {
    var D = a.addEvent,
        B = a.animate,
        G = a.animObject,
        p = a.attr,
        g = a.doc,
        l = a.Axis,
        r = a.createElement,
        n = a.defaultOptions,
        w = a.discardElement,
        v = a.charts,
        e = a.css,
        h = a.defined,
        m = a.each,
        c = a.extend,
        f = a.find,
        b = a.fireEvent,
        d = a.grep,
        y = a.isNumber,
        H = a.isObject,
        J = a.isString,
        t = a.Legend,
        K = a.marginNames,
        x = a.merge,
        C = a.objectEach,
        L = a.Pointer,
        q = a.pick,
        A = a.pInt,
        E = a.removeEvent,
        F = a.seriesTypes,
        k = a.splat,
        u = a.svg,
        R = a.syncTimeout,
        M = a.win,
        P = a.Chart = function () {
      this.getArgs.apply(this, arguments);
    };a.chart = function (a, b, c) {
      return new P(a, b, c);
    };c(P.prototype, { callbacks: [], getArgs: function getArgs() {
        var a = [].slice.call(arguments);if (J(a[0]) || a[0].nodeName) this.renderTo = a.shift();this.init(a[0], a[1]);
      }, init: function init(b, c) {
        var d,
            f,
            k = b.series,
            e = b.plotOptions || {};b.series = null;d = x(n, b);for (f in d.plotOptions) {
          d.plotOptions[f].tooltip = e[f] && x(e[f].tooltip) || void 0;
        }d.tooltip.userOptions = b.chart && b.chart.forExport && b.tooltip.userOptions || b.tooltip;d.series = b.series = k;this.userOptions = b;b = d.chart;f = b.events;this.margin = [];this.spacing = [];this.bounds = { h: {}, v: {} };this.labelCollectors = [];this.callback = c;this.isResizing = 0;this.options = d;this.axes = [];this.series = [];this.hasCartesianSeries = b.showAxes;var q = this;q.index = v.length;v.push(q);a.chartCount++;f && C(f, function (a, b) {
          D(q, b, a);
        });q.xAxis = [];q.yAxis = [];q.pointCount = q.colorCounter = q.symbolCounter = 0;q.firstRender();
      }, initSeries: function initSeries(b) {
        var c = this.options.chart;(c = F[b.type || c.type || c.defaultSeriesType]) || a.error(17, !0);c = new c();c.init(this, b);return c;
      }, orderSeries: function orderSeries(a) {
        var b = this.series;for (a = a || 0; a < b.length; a++) {
          b[a] && (b[a].index = a, b[a].name = b[a].name || "Series " + (b[a].index + 1));
        }
      }, isInsidePlot: function isInsidePlot(a, b, c) {
        var d = c ? b : a;a = c ? a : b;return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight;
      }, redraw: function redraw(d) {
        var f = this.axes,
            k = this.series,
            e = this.pointer,
            q = this.legend,
            h = this.isDirtyLegend,
            g,
            l,
            u = this.hasCartesianSeries,
            A = this.isDirtyBox,
            E,
            t = this.renderer,
            n = t.isHidden(),
            x = [];this.setResponsive && this.setResponsive(!1);a.setAnimation(d, this);n && this.temporaryDisplay();this.layOutTitles();for (d = k.length; d--;) {
          if (E = k[d], E.options.stacking && (g = !0, E.isDirty)) {
            l = !0;break;
          }
        }if (l) for (d = k.length; d--;) {
          E = k[d], E.options.stacking && (E.isDirty = !0);
        }m(k, function (a) {
          a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), h = !0);a.isDirtyData && b(a, "updatedData");
        });h && q.options.enabled && (q.render(), this.isDirtyLegend = !1);g && this.getStacks();u && m(f, function (a) {
          a.updateNames();a.setScale();
        });this.getMargins();u && (m(f, function (a) {
          a.isDirty && (A = !0);
        }), m(f, function (a) {
          var d = a.min + "," + a.max;a.extKey !== d && (a.extKey = d, x.push(function () {
            b(a, "afterSetExtremes", c(a.eventArgs, a.getExtremes()));delete a.eventArgs;
          }));(A || g) && a.redraw();
        }));A && this.drawChartBox();b(this, "predraw");m(k, function (a) {
          (A || a.isDirty) && a.visible && a.redraw();a.isDirtyData = !1;
        });e && e.reset(!0);t.draw();b(this, "redraw");b(this, "render");n && this.temporaryDisplay(!0);m(x, function (a) {
          a.call();
        });
      }, get: function get(a) {
        function b(b) {
          return b.id === a || b.options && b.options.id === a;
        }var c,
            d = this.series,
            k;c = f(this.axes, b) || f(this.series, b);for (k = 0; !c && k < d.length; k++) {
          c = f(d[k].points || [], b);
        }return c;
      }, getAxes: function getAxes() {
        var a = this,
            b = this.options,
            c = b.xAxis = k(b.xAxis || {}),
            b = b.yAxis = k(b.yAxis || {});m(c, function (a, b) {
          a.index = b;a.isX = !0;
        });m(b, function (a, b) {
          a.index = b;
        });c = c.concat(b);m(c, function (b) {
          new l(a, b);
        });
      }, getSelectedPoints: function getSelectedPoints() {
        var a = [];m(this.series, function (b) {
          a = a.concat(d(b.data || [], function (a) {
            return a.selected;
          }));
        });return a;
      }, getSelectedSeries: function getSelectedSeries() {
        return d(this.series, function (a) {
          return a.selected;
        });
      }, setTitle: function setTitle(a, b, c) {
        var d = this,
            f = d.options,
            k;k = f.title = x({ style: { color: "#333333", fontSize: f.isStock ? "16px" : "18px" } }, f.title, a);f = f.subtitle = x({ style: { color: "#666666" } }, f.subtitle, b);m([["title", a, k], ["subtitle", b, f]], function (a, b) {
          var c = a[0],
              f = d[c],
              k = a[1];a = a[2];f && k && (d[c] = f = f.destroy());a && !f && (d[c] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + c, zIndex: a.zIndex || 4 }).add(), d[c].update = function (a) {
            d.setTitle(!b && a, b && a);
          }, d[c].css(a.style));
        });d.layOutTitles(c);
      }, layOutTitles: function layOutTitles(a) {
        var b = 0,
            d,
            f = this.renderer,
            k = this.spacingBox;m(["title", "subtitle"], function (a) {
          var d = this[a],
              e = this.options[a];a = "title" === a ? -3 : e.verticalAlign ? 0 : b + 2;var q;d && (q = e.style.fontSize, q = f.fontMetrics(q, d).b, d.css({ width: (e.width || k.width + e.widthAdjust) + "px" }).align(c({ y: a + q }, e), !1, "spacingBox"), e.floating || e.verticalAlign || (b = Math.ceil(b + d.getBBox(e.useHTML).height)));
        }, this);d = this.titleOffset !== b;this.titleOffset = b;!this.isDirtyBox && d && (this.isDirtyBox = d, this.hasRendered && q(a, !0) && this.isDirtyBox && this.redraw());
      }, getChartSize: function getChartSize() {
        var b = this.options.chart,
            c = b.width,
            b = b.height,
            d = this.renderTo;h(c) || (this.containerWidth = a.getStyle(d, "width"));h(b) || (this.containerHeight = a.getStyle(d, "height"));this.chartWidth = Math.max(0, c || this.containerWidth || 600);this.chartHeight = Math.max(0, a.relativeLength(b, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
      }, temporaryDisplay: function temporaryDisplay(b) {
        var c = this.renderTo;if (b) for (; c && c.style;) {
          c.hcOrigStyle && (a.css(c, c.hcOrigStyle), delete c.hcOrigStyle), c.hcOrigDetached && (g.body.removeChild(c), c.hcOrigDetached = !1), c = c.parentNode;
        } else for (; c && c.style;) {
          g.body.contains(c) || c.parentNode || (c.hcOrigDetached = !0, g.body.appendChild(c));if ("none" === a.getStyle(c, "display", !1) || c.hcOricDetached) c.hcOrigStyle = { display: c.style.display, height: c.style.height, overflow: c.style.overflow }, b = { display: "block", overflow: "hidden" }, c !== this.renderTo && (b.height = 0), a.css(c, b), c.offsetWidth || c.style.setProperty("display", "block", "important");c = c.parentNode;if (c === g.body) break;
        }
      }, setClassName: function setClassName(a) {
        this.container.className = "highcharts-container " + (a || "");
      }, getContainer: function getContainer() {
        var b,
            d = this.options,
            f = d.chart,
            k,
            e;b = this.renderTo;var q = a.uniqueKey(),
            h;b || (this.renderTo = b = f.renderTo);J(b) && (this.renderTo = b = g.getElementById(b));b || a.error(13, !0);k = A(p(b, "data-highcharts-chart"));y(k) && v[k] && v[k].hasRendered && v[k].destroy();p(b, "data-highcharts-chart", this.index);b.innerHTML = "";f.skipClone || b.offsetWidth || this.temporaryDisplay();this.getChartSize();k = this.chartWidth;e = this.chartHeight;h = c({ position: "relative", overflow: "hidden", width: k + "px", height: e + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)" }, f.style);this.container = b = r("div", { id: q }, h, b);this._cursor = b.style.cursor;this.renderer = new (a[f.renderer] || a.Renderer)(b, k, e, null, f.forExport, d.exporting && d.exporting.allowHTML);this.setClassName(f.className);this.renderer.setStyle(f.style);this.renderer.chartIndex = this.index;
      }, getMargins: function getMargins(a) {
        var b = this.spacing,
            c = this.margin,
            d = this.titleOffset;this.resetMargins();d && !h(c[0]) && (this.plotTop = Math.max(this.plotTop, d + this.options.title.margin + b[0]));this.legend && this.legend.display && this.legend.adjustMargins(c, b);this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] || 0) + this.extraMargin.value);this.adjustPlotArea && this.adjustPlotArea();a || this.getAxisMargins();
      }, getAxisMargins: function getAxisMargins() {
        var a = this,
            b = a.axisOffset = [0, 0, 0, 0],
            c = a.margin;a.hasCartesianSeries && m(a.axes, function (a) {
          a.visible && a.getOffset();
        });m(K, function (d, f) {
          h(c[f]) || (a[d] += b[f]);
        });a.setChartSize();
      }, reflow: function reflow(b) {
        var c = this,
            d = c.options.chart,
            f = c.renderTo,
            k = h(d.width) && h(d.height),
            e = d.width || a.getStyle(f, "width"),
            d = d.height || a.getStyle(f, "height"),
            f = b ? b.target : M;if (!k && !c.isPrinting && e && d && (f === M || f === g)) {
          if (e !== c.containerWidth || d !== c.containerHeight) clearTimeout(c.reflowTimeout), c.reflowTimeout = R(function () {
            c.container && c.setSize(void 0, void 0, !1);
          }, b ? 100 : 0);c.containerWidth = e;c.containerHeight = d;
        }
      }, initReflow: function initReflow() {
        var a = this,
            b;b = D(M, "resize", function (b) {
          a.reflow(b);
        });D(a, "destroy", b);
      }, setSize: function setSize(c, d, f) {
        var k = this,
            q = k.renderer;k.isResizing += 1;a.setAnimation(f, k);k.oldChartHeight = k.chartHeight;k.oldChartWidth = k.chartWidth;void 0 !== c && (k.options.chart.width = c);void 0 !== d && (k.options.chart.height = d);k.getChartSize();c = q.globalAnimation;(c ? B : e)(k.container, { width: k.chartWidth + "px", height: k.chartHeight + "px" }, c);k.setChartSize(!0);q.setSize(k.chartWidth, k.chartHeight, f);m(k.axes, function (a) {
          a.isDirty = !0;a.setScale();
        });k.isDirtyLegend = !0;k.isDirtyBox = !0;k.layOutTitles();k.getMargins();k.redraw(f);k.oldChartHeight = null;b(k, "resize");R(function () {
          k && b(k, "endResize", null, function () {
            --k.isResizing;
          });
        }, G(c).duration);
      }, setChartSize: function setChartSize(a) {
        var b = this.inverted,
            c = this.renderer,
            d = this.chartWidth,
            k = this.chartHeight,
            f = this.options.chart,
            e = this.spacing,
            q = this.clipOffset,
            h,
            g,
            l,
            u;this.plotLeft = h = Math.round(this.plotLeft);this.plotTop = g = Math.round(this.plotTop);this.plotWidth = l = Math.max(0, Math.round(d - h - this.marginRight));this.plotHeight = u = Math.max(0, Math.round(k - g - this.marginBottom));this.plotSizeX = b ? u : l;this.plotSizeY = b ? l : u;this.plotBorderWidth = f.plotBorderWidth || 0;this.spacingBox = c.spacingBox = { x: e[3], y: e[0], width: d - e[3] - e[1], height: k - e[0] - e[2] };this.plotBox = c.plotBox = { x: h, y: g, width: l, height: u };d = 2 * Math.floor(this.plotBorderWidth / 2);b = Math.ceil(Math.max(d, q[3]) / 2);c = Math.ceil(Math.max(d, q[0]) / 2);this.clipBox = { x: b, y: c, width: Math.floor(this.plotSizeX - Math.max(d, q[1]) / 2 - b), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(d, q[2]) / 2 - c)) };a || m(this.axes, function (a) {
          a.setAxisSize();a.setAxisTranslation();
        });
      }, resetMargins: function resetMargins() {
        var a = this,
            b = a.options.chart;m(["margin", "spacing"], function (c) {
          var d = b[c],
              k = H(d) ? d : [d, d, d, d];m(["Top", "Right", "Bottom", "Left"], function (d, f) {
            a[c][f] = q(b[c + d], k[f]);
          });
        });m(K, function (b, c) {
          a[b] = q(a.margin[c], a.spacing[c]);
        });a.axisOffset = [0, 0, 0, 0];a.clipOffset = [0, 0, 0, 0];
      }, drawChartBox: function drawChartBox() {
        var a = this.options.chart,
            b = this.renderer,
            c = this.chartWidth,
            d = this.chartHeight,
            k = this.chartBackground,
            f = this.plotBackground,
            e = this.plotBorder,
            q,
            h = this.plotBGImage,
            g = a.backgroundColor,
            m = a.plotBackgroundColor,
            l = a.plotBackgroundImage,
            u,
            A = this.plotLeft,
            E = this.plotTop,
            t = this.plotWidth,
            n = this.plotHeight,
            x = this.plotBox,
            y = this.clipRect,
            F = this.clipBox,
            p = "animate";k || (this.chartBackground = k = b.rect().addClass("highcharts-background").add(), p = "attr");q = a.borderWidth || 0;u = q + (a.shadow ? 8 : 0);g = { fill: g || "none" };if (q || k["stroke-width"]) g.stroke = a.borderColor, g["stroke-width"] = q;k.attr(g).shadow(a.shadow);k[p]({ x: u / 2, y: u / 2, width: c - u - q % 2, height: d - u - q % 2, r: a.borderRadius });p = "animate";f || (p = "attr", this.plotBackground = f = b.rect().addClass("highcharts-plot-background").add());f[p](x);f.attr({ fill: m || "none" }).shadow(a.plotShadow);l && (h ? h.animate(x) : this.plotBGImage = b.image(l, A, E, t, n).add());y ? y.animate({ width: F.width, height: F.height }) : this.clipRect = b.clipRect(F);p = "animate";e || (p = "attr", this.plotBorder = e = b.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add());e.attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth || 0, fill: "none" });e[p](e.crisp({ x: A, y: E, width: t, height: n }, -e.strokeWidth()));this.isDirtyBox = !1;
      }, propFromSeries: function propFromSeries() {
        var a = this,
            b = a.options.chart,
            c,
            d = a.options.series,
            k,
            f;m(["inverted", "angular", "polar"], function (e) {
          c = F[b.type || b.defaultSeriesType];f = b[e] || c && c.prototype[e];for (k = d && d.length; !f && k--;) {
            (c = F[d[k].type]) && c.prototype[e] && (f = !0);
          }a[e] = f;
        });
      }, linkSeries: function linkSeries() {
        var a = this,
            b = a.series;m(b, function (a) {
          a.linkedSeries.length = 0;
        });m(b, function (b) {
          var c = b.options.linkedTo;J(c) && (c = ":previous" === c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, b.visible = q(b.options.visible, c.options.visible, b.visible));
        });
      }, renderSeries: function renderSeries() {
        m(this.series, function (a) {
          a.translate();a.render();
        });
      }, renderLabels: function renderLabels() {
        var a = this,
            b = a.options.labels;b.items && m(b.items, function (d) {
          var k = c(b.style, d.style),
              f = A(k.left) + a.plotLeft,
              e = A(k.top) + a.plotTop + 12;delete k.left;delete k.top;a.renderer.text(d.html, f, e).attr({ zIndex: 2 }).css(k).add();
        });
      }, render: function render() {
        var a = this.axes,
            b = this.renderer,
            c = this.options,
            d,
            k,
            f;this.setTitle();this.legend = new t(this, c.legend);this.getStacks && this.getStacks();this.getMargins(!0);this.setChartSize();c = this.plotWidth;d = this.plotHeight = Math.max(this.plotHeight - 21, 0);m(a, function (a) {
          a.setScale();
        });this.getAxisMargins();k = 1.1 < c / this.plotWidth;f = 1.05 < d / this.plotHeight;if (k || f) m(a, function (a) {
          (a.horiz && k || !a.horiz && f) && a.setTickInterval(!0);
        }), this.getMargins();this.drawChartBox();this.hasCartesianSeries && m(a, function (a) {
          a.visible && a.render();
        });this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive && this.setResponsive();this.hasRendered = !0;
      }, addCredits: function addCredits(a) {
        var b = this;a = x(!0, this.options.credits, a);a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
          a.href && (M.location.href = a.href);
        }).attr({ align: a.position.align, zIndex: 8 }).css(a.style).add().align(a.position), this.credits.update = function (a) {
          b.credits = b.credits.destroy();b.addCredits(a);
        });
      }, destroy: function destroy() {
        var c = this,
            d = c.axes,
            k = c.series,
            f = c.container,
            e,
            q = f && f.parentNode;b(c, "destroy");c.renderer.forExport ? a.erase(v, c) : v[c.index] = void 0;a.chartCount--;c.renderTo.removeAttribute("data-highcharts-chart");E(c);for (e = d.length; e--;) {
          d[e] = d[e].destroy();
        }this.scroller && this.scroller.destroy && this.scroller.destroy();for (e = k.length; e--;) {
          k[e] = k[e].destroy();
        }m("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (a) {
          var b = c[a];b && b.destroy && (c[a] = b.destroy());
        });f && (f.innerHTML = "", E(f), q && w(f));C(c, function (a, b) {
          delete c[b];
        });
      }, isReadyToRender: function isReadyToRender() {
        var a = this;return u || M != M.top || "complete" === g.readyState ? !0 : (g.attachEvent("onreadystatechange", function () {
          g.detachEvent("onreadystatechange", a.firstRender);"complete" === g.readyState && a.firstRender();
        }), !1);
      }, firstRender: function firstRender() {
        var a = this,
            c = a.options;if (a.isReadyToRender()) {
          a.getContainer();b(a, "init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();m(c.series || [], function (b) {
            a.initSeries(b);
          });a.linkSeries();b(a, "beforeRender");L && (a.pointer = new L(a, c));a.render();if (!a.renderer.imgCount && a.onload) a.onload();a.temporaryDisplay(!0);
        }
      }, onload: function onload() {
        m([this.callback].concat(this.callbacks), function (a) {
          a && void 0 !== this.index && a.apply(this, [this]);
        }, this);b(this, "load");b(this, "render");h(this.index) && !1 !== this.options.chart.reflow && this.initReflow();this.onload = null;
      } });
  })(N);(function (a) {
    var D,
        B = a.each,
        G = a.extend,
        p = a.erase,
        g = a.fireEvent,
        l = a.format,
        r = a.isArray,
        n = a.isNumber,
        w = a.pick,
        v = a.removeEvent;a.Point = D = function D() {};a.Point.prototype = { init: function init(a, h, g) {
        this.series = a;this.color = a.color;this.applyOptions(h, g);a.options.colorByPoint ? (h = a.options.colors || a.chart.options.colors, this.color = this.color || h[a.colorCounter], h = h.length, g = a.colorCounter, a.colorCounter++, a.colorCounter === h && (a.colorCounter = 0)) : g = a.colorIndex;this.colorIndex = w(this.colorIndex, g);a.chart.pointCount++;return this;
      }, applyOptions: function applyOptions(a, h) {
        var e = this.series,
            c = e.options.pointValKey || e.pointValKey;a = D.prototype.optionsToObject.call(this, a);G(this, a);this.options = this.options ? G(this.options, a) : a;a.group && delete this.group;c && (this.y = this[c]);this.isNull = w(this.isValid && !this.isValid(), null === this.x || !n(this.y, !0));this.selected && (this.state = "select");"name" in this && void 0 === h && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this));void 0 === this.x && e && (this.x = void 0 === h ? e.autoIncrement(this) : h);return this;
      }, optionsToObject: function optionsToObject(a) {
        var e = {},
            g = this.series,
            c = g.options.keys,
            f = c || g.pointArrayMap || ["y"],
            b = f.length,
            d = 0,
            l = 0;if (n(a) || null === a) e[f[0]] = a;else if (r(a)) for (!c && a.length > b && (g = _typeof(a[0]), "string" === g ? e.name = a[0] : "number" === g && (e.x = a[0]), d++); l < b;) {
          c && void 0 === a[d] || (e[f[l]] = a[d]), d++, l++;
        } else "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && (e = a, a.dataLabels && (g._hasPointLabels = !0), a.marker && (g._hasPointMarkers = !0));return e;
      }, getClassName: function getClassName() {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      }, getZone: function getZone() {
        var a = this.series,
            h = a.zones,
            a = a.zoneAxis || "y",
            g = 0,
            c;for (c = h[g]; this[a] >= c.value;) {
          c = h[++g];
        }c && c.color && !this.options.color && (this.color = c.color);return c;
      }, destroy: function destroy() {
        var a = this.series.chart,
            h = a.hoverPoints,
            g;a.pointCount--;h && (this.setState(), p(h, this), h.length || (a.hoverPoints = null));if (this === a.hoverPoint) this.onMouseOut();if (this.graphic || this.dataLabel) v(this), this.destroyElements();this.legendItem && a.legend.destroyItem(this);for (g in this) {
          this[g] = null;
        }
      }, destroyElements: function destroyElements() {
        for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], h, g = 6; g--;) {
          h = a[g], this[h] && (this[h] = this[h].destroy());
        }
      }, getLabelConfig: function getLabelConfig() {
        return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
      }, tooltipFormatter: function tooltipFormatter(a) {
        var e = this.series,
            g = e.tooltipOptions,
            c = w(g.valueDecimals, ""),
            f = g.valuePrefix || "",
            b = g.valueSuffix || "";B(e.pointArrayMap || ["y"], function (d) {
          d = "{point." + d;if (f || b) a = a.replace(d + "}", f + d + "}" + b);a = a.replace(d + "}", d + ":,." + c + "f}");
        });return l(a, { point: this, series: this.series });
      }, firePointEvent: function firePointEvent(a, h, m) {
        var c = this,
            f = this.series.options;(f.point.events[a] || c.options && c.options.events && c.options.events[a]) && this.importEvents();"click" === a && f.allowPointSelect && (m = function m(a) {
          c.select && c.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
        });g(this, a, h, m);
      }, visible: !0 };
  })(N);(function (a) {
    var D = a.addEvent,
        B = a.animObject,
        G = a.arrayMax,
        p = a.arrayMin,
        g = a.correctFloat,
        l = a.Date,
        r = a.defaultOptions,
        n = a.defaultPlotOptions,
        w = a.defined,
        v = a.each,
        e = a.erase,
        h = a.extend,
        m = a.fireEvent,
        c = a.grep,
        f = a.isArray,
        b = a.isNumber,
        d = a.isString,
        y = a.merge,
        H = a.objectEach,
        J = a.pick,
        t = a.removeEvent,
        K = a.splat,
        x = a.SVGElement,
        C = a.syncTimeout,
        L = a.win;a.Series = a.seriesType("line", null, { lineWidth: 2, allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: { lineWidth: 0, lineColor: "#ffffff", radius: 4, states: { hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc",
            lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { align: "center", formatter: function formatter() {
          return null === this.y ? "" : a.numberFormat(this.y, -1);
        }, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0, padding: 5 }, cropThreshold: 300, pointRange: 0, softThreshold: !0, states: { hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } }, select: { marker: {} } }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x" }, { isCartesian: !0, pointClass: a.Point, sorted: !0, requireSorting: !0, directTouch: !1, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], coll: "series", init: function init(a, b) {
        var c = this,
            d,
            k = a.series,
            f;c.chart = a;c.options = b = c.setOptions(b);c.linkedSeries = [];c.bindAxes();h(c, { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected });d = b.events;H(d, function (a, b) {
          D(c, b, a);
        });if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;c.getColor();
        c.getSymbol();v(c.parallelArrays, function (a) {
          c[a + "Data"] = [];
        });c.setData(b.data, !1);c.isCartesian && (a.hasCartesianSeries = !0);k.length && (f = k[k.length - 1]);c._i = J(f && f._i, -1) + 1;a.orderSeries(this.insert(k));
      }, insert: function insert(a) {
        var c = this.options.index,
            d;if (b(c)) {
          for (d = a.length; d--;) {
            if (c >= J(a[d].options.index, a[d]._i)) {
              a.splice(d + 1, 0, this);break;
            }
          }-1 === d && a.unshift(this);d += 1;
        } else a.push(this);return J(d, a.length - 1);
      }, bindAxes: function bindAxes() {
        var b = this,
            c = b.options,
            d = b.chart,
            f;v(b.axisTypes || [], function (k) {
          v(d[k], function (a) {
            f = a.options;if (c[k] === f.index || void 0 !== c[k] && c[k] === f.id || void 0 === c[k] && 0 === f.index) b.insert(a.series), b[k] = a, a.isDirty = !0;
          });b[k] || b.optionalAxis === k || a.error(18, !0);
        });
      }, updateParallelArrays: function updateParallelArrays(a, c) {
        var d = a.series,
            f = arguments,
            k = b(c) ? function (b) {
          var f = "y" === b && d.toYData ? d.toYData(a) : a[b];d[b + "Data"][c] = f;
        } : function (a) {
          Array.prototype[c].apply(d[a + "Data"], Array.prototype.slice.call(f, 2));
        };v(d.parallelArrays, k);
      }, autoIncrement: function autoIncrement() {
        var a = this.options,
            b = this.xIncrement,
            c,
            d = a.pointIntervalUnit,
            b = J(b, a.pointStart, 0);this.pointInterval = c = J(this.pointInterval, a.pointInterval, 1);d && (a = new l(b), "day" === d ? a = +a[l.hcSetDate](a[l.hcGetDate]() + c) : "month" === d ? a = +a[l.hcSetMonth](a[l.hcGetMonth]() + c) : "year" === d && (a = +a[l.hcSetFullYear](a[l.hcGetFullYear]() + c)), c = a - b);this.xIncrement = b + c;return b;
      }, setOptions: function setOptions(a) {
        var b = this.chart,
            c = b.options,
            d = c.plotOptions,
            f = (b.userOptions || {}).plotOptions || {},
            e = d[this.type];this.userOptions = a;b = y(e, d.series, a);this.tooltipOptions = y(r.tooltip, r.plotOptions.series && r.plotOptions.series.tooltip, r.plotOptions[this.type].tooltip, c.tooltip.userOptions, d.series && d.series.tooltip, d[this.type].tooltip, a.tooltip);this.stickyTracking = J(a.stickyTracking, f[this.type] && f[this.type].stickyTracking, f.series && f.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : b.stickyTracking);null === e.marker && delete b.marker;this.zoneAxis = b.zoneAxis;a = this.zones = (b.zones || []).slice();!b.negativeColor && !b.negativeFillColor || b.zones || a.push({ value: b[this.zoneAxis + "Threshold"] || b.threshold || 0, className: "highcharts-negative", color: b.negativeColor, fillColor: b.negativeFillColor });a.length && w(a[a.length - 1].value) && a.push({ color: this.color, fillColor: this.fillColor });return b;
      }, getCyclic: function getCyclic(a, b, c) {
        var d,
            f = this.chart,
            e = this.userOptions,
            h = a + "Index",
            q = a + "Counter",
            g = c ? c.length : J(f.options.chart[a + "Count"], f[a + "Count"]);b || (d = J(e[h], e["_" + h]), w(d) || (f.series.length || (f[q] = 0), e["_" + h] = d = f[q] % g, f[q] += 1), c && (b = c[d]));void 0 !== d && (this[h] = d);this[a] = b;
      }, getColor: function getColor() {
        this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || n[this.type].color, this.chart.options.colors);
      }, getSymbol: function getSymbol() {
        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
      }, drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker, setData: function setData(c, e, h, g) {
        var k = this,
            q = k.points,
            m = q && q.length || 0,
            l,
            t = k.options,
            A = k.chart,
            n = null,
            x = k.xAxis,
            E = t.turboThreshold,
            y = this.xData,
            p = this.yData,
            r = (l = k.pointArrayMap) && l.length;c = c || [];l = c.length;e = J(e, !0);if (!1 !== g && l && m === l && !k.cropped && !k.hasGroupedData && k.visible) v(c, function (a, b) {
          q[b].update && a !== t.data[b] && q[b].update(a, !1, null, !1);
        });else {
          k.xIncrement = null;k.colorCounter = 0;v(this.parallelArrays, function (a) {
            k[a + "Data"].length = 0;
          });if (E && l > E) {
            for (h = 0; null === n && h < l;) {
              n = c[h], h++;
            }if (b(n)) for (h = 0; h < l; h++) {
              y[h] = this.autoIncrement(), p[h] = c[h];
            } else if (f(n)) {
              if (r) for (h = 0; h < l; h++) {
                n = c[h], y[h] = n[0], p[h] = n.slice(1, r + 1);
              } else for (h = 0; h < l; h++) {
                n = c[h], y[h] = n[0], p[h] = n[1];
              }
            } else a.error(12);
          } else for (h = 0; h < l; h++) {
            void 0 !== c[h] && (n = { series: k }, k.pointClass.prototype.applyOptions.apply(n, [c[h]]), k.updateParallelArrays(n, h));
          }p && d(p[0]) && a.error(14, !0);k.data = [];k.options.data = k.userOptions.data = c;for (h = m; h--;) {
            q[h] && q[h].destroy && q[h].destroy();
          }x && (x.minRange = x.userMinRange);k.isDirty = A.isDirtyBox = !0;k.isDirtyData = !!q;h = !1;
        }"point" === t.legendType && (this.processData(), this.generatePoints());e && A.redraw(h);
      }, processData: function processData(b) {
        var c = this.xData,
            d = this.yData,
            f = c.length,
            k;k = 0;var e,
            h,
            q = this.xAxis,
            g,
            l = this.options;g = l.cropThreshold;var m = this.getExtremesFromAll || l.getExtremesFromAll,
            n = this.isCartesian,
            l = q && q.val2lin,
            t = q && q.isLog,
            x = this.requireSorting,
            y,
            p;if (n && !this.isDirty && !q.isDirty && !this.yAxis.isDirty && !b) return !1;q && (b = q.getExtremes(), y = b.min, p = b.max);if (n && this.sorted && !m && (!g || f > g || this.forceCrop)) if (c[f - 1] < y || c[0] > p) c = [], d = [];else if (c[0] < y || c[f - 1] > p) k = this.cropData(this.xData, this.yData, y, p), c = k.xData, d = k.yData, k = k.start, e = !0;for (g = c.length || 1; --g;) {
          f = t ? l(c[g]) - l(c[g - 1]) : c[g] - c[g - 1], 0 < f && (void 0 === h || f < h) ? h = f : 0 > f && x && (a.error(15), x = !1);
        }this.cropped = e;this.cropStart = k;
        this.processedXData = c;this.processedYData = d;this.closestPointRange = h;
      }, cropData: function cropData(a, b, c, d) {
        var f = a.length,
            e = 0,
            h = f,
            g = J(this.cropShoulder, 1),
            q;for (q = 0; q < f; q++) {
          if (a[q] >= c) {
            e = Math.max(0, q - g);break;
          }
        }for (c = q; c < f; c++) {
          if (a[c] > d) {
            h = c + g;break;
          }
        }return { xData: a.slice(e, h), yData: b.slice(e, h), start: e, end: h };
      }, generatePoints: function generatePoints() {
        var a = this.options,
            b = a.data,
            c = this.data,
            d,
            f = this.processedXData,
            e = this.processedYData,
            h = this.pointClass,
            g = f.length,
            l = this.cropStart || 0,
            m,
            n = this.hasGroupedData,
            a = a.keys,
            t,
            x = [],
            y;
        c || n || (c = [], c.length = b.length, c = this.data = c);a && n && (this.options.keys = !1);for (y = 0; y < g; y++) {
          m = l + y, n ? (t = new h().init(this, [f[y]].concat(K(e[y]))), t.dataGroup = this.groupMap[y]) : (t = c[m]) || void 0 === b[m] || (c[m] = t = new h().init(this, b[m], f[y])), t && (t.index = m, x[y] = t);
        }this.options.keys = a;if (c && (g !== (d = c.length) || n)) for (y = 0; y < d; y++) {
          y !== l || n || (y += g), c[y] && (c[y].destroyElements(), c[y].plotX = void 0);
        }this.data = c;this.points = x;
      }, getExtremes: function getExtremes(a) {
        var c = this.yAxis,
            d = this.processedXData,
            e,
            k = [],
            h = 0;e = this.xAxis.getExtremes();
        var g = e.min,
            q = e.max,
            l,
            m,
            n,
            t;a = a || this.stackedYData || this.processedYData || [];e = a.length;for (t = 0; t < e; t++) {
          if (m = d[t], n = a[t], l = (b(n, !0) || f(n)) && (!c.positiveValuesOnly || n.length || 0 < n), m = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (d[t + 1] || m) >= g && (d[t - 1] || m) <= q, l && m) if (l = n.length) for (; l--;) {
            null !== n[l] && (k[h++] = n[l]);
          } else k[h++] = n;
        }this.dataMin = p(k);this.dataMax = G(k);
      }, translate: function translate() {
        this.processedXData || this.processData();this.generatePoints();var a = this.options,
            c = a.stacking,
            d = this.xAxis,
            f = d.categories,
            k = this.yAxis,
            e = this.points,
            h = e.length,
            l = !!this.modifyValue,
            m = a.pointPlacement,
            n = "between" === m || b(m),
            t = a.threshold,
            x = a.startFromThreshold ? t : 0,
            y,
            p,
            r,
            C,
            v = Number.MAX_VALUE;"between" === m && (m = .5);b(m) && (m *= J(a.pointRange || d.pointRange));for (a = 0; a < h; a++) {
          var K = e[a],
              H = K.x,
              L = K.y;p = K.low;var B = c && k.stacks[(this.negStacks && L < (x ? 0 : t) ? "-" : "") + this.stackKey],
              D;k.positiveValuesOnly && null !== L && 0 >= L && (K.isNull = !0);K.plotX = y = g(Math.min(Math.max(-1E5, d.translate(H, 0, 0, 0, 1, m, "flags" === this.type)), 1E5));c && this.visible && !K.isNull && B && B[H] && (C = this.getStackIndicator(C, H, this.index), D = B[H], L = D.points[C.key], p = L[0], L = L[1], p === x && C.key === B[H].base && (p = J(t, k.min)), k.positiveValuesOnly && 0 >= p && (p = null), K.total = K.stackTotal = D.total, K.percentage = D.total && K.y / D.total * 100, K.stackY = L, D.setOffset(this.pointXOffset || 0, this.barW || 0));K.yBottom = w(p) ? k.translate(p, 0, 1, 0, 1) : null;l && (L = this.modifyValue(L, K));K.plotY = p = "number" === typeof L && Infinity !== L ? Math.min(Math.max(-1E5, k.translate(L, 0, 1, 0, 1)), 1E5) : void 0;
          K.isInside = void 0 !== p && 0 <= p && p <= k.len && 0 <= y && y <= d.len;K.clientX = n ? g(d.translate(H, 0, 0, 0, 1, m)) : y;K.negative = K.y < (t || 0);K.category = f && void 0 !== f[K.x] ? f[K.x] : K.x;K.isNull || (void 0 !== r && (v = Math.min(v, Math.abs(y - r))), r = y);K.zone = this.zones.length && K.getZone();
        }this.closestPointRangePx = v;
      }, getValidPoints: function getValidPoints(a, b) {
        var d = this.chart;return c(a || this.points || [], function (a) {
          return b && !d.isInsidePlot(a.plotX, a.plotY, d.inverted) ? !1 : !a.isNull;
        });
      }, setClip: function setClip(a) {
        var b = this.chart,
            c = this.options,
            d = b.renderer,
            f = b.inverted,
            e = this.clipBox,
            h = e || b.clipBox,
            g = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, h.height, c.xAxis, c.yAxis].join(),
            q = b[g],
            m = b[g + "m"];q || (a && (h.width = 0, f && (h.x = b.plotSizeX), b[g + "m"] = m = d.clipRect(f ? b.plotSizeX + 99 : -99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), b[g] = q = d.clipRect(h), q.count = { length: 0 });a && !q.count[this.index] && (q.count[this.index] = !0, q.count.length += 1);!1 !== c.clip && (this.group.clip(a || e ? q : b.clipRect), this.markerGroup.clip(m), this.sharedClipKey = g);
        a || (q.count[this.index] && (delete q.count[this.index], --q.count.length), 0 === q.count.length && g && b[g] && (e || (b[g] = b[g].destroy()), b[g + "m"] && (b[g + "m"] = b[g + "m"].destroy())));
      }, animate: function animate(a) {
        var b = this.chart,
            c = B(this.options.animation),
            d;a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({ width: b.plotSizeX, x: 0 }, c), b[d + "m"] && b[d + "m"].animate({ width: b.plotSizeX + 99, x: 0 }, c), this.animate = null);
      }, afterAnimate: function afterAnimate() {
        this.setClip();m(this, "afterAnimate");this.finishedAnimating = !0;
      }, drawPoints: function drawPoints() {
        var a = this.points,
            b = this.chart,
            c,
            d,
            f,
            e,
            h = this.options.marker,
            g,
            m,
            l,
            n = this[this.specialGroup] || this.markerGroup,
            t,
            x = J(h.enabled, this.xAxis.isRadial ? !0 : null, this.closestPointRangePx >= 2 * h.radius);if (!1 !== h.enabled || this._hasPointMarkers) for (c = 0; c < a.length; c++) {
          d = a[c], e = d.graphic, g = d.marker || {}, m = !!d.marker, f = x && void 0 === g.enabled || g.enabled, l = d.isInside, f && !d.isNull ? (f = J(g.symbol, this.symbol), d.hasImage = 0 === f.indexOf("url"), t = this.markerAttribs(d, d.selected && "select"), e ? e[l ? "show" : "hide"](!0).animate(t) : l && (0 < t.width || d.hasImage) && (d.graphic = e = b.renderer.symbol(f, t.x, t.y, t.width, t.height, m ? g : h).add(n)), e && e.attr(this.pointAttribs(d, d.selected && "select")), e && e.addClass(d.getClassName(), !0)) : e && (d.graphic = e.destroy());
        }
      }, markerAttribs: function markerAttribs(a, b) {
        var c = this.options.marker,
            d = a.marker || {},
            f = J(d.radius, c.radius);b && (c = c.states[b], b = d.states && d.states[b], f = J(b && b.radius, c && c.radius, f + (c && c.radiusPlus || 0)));a.hasImage && (f = 0);a = { x: Math.floor(a.plotX) - f, y: a.plotY - f };f && (a.width = a.height = 2 * f);return a;
      }, pointAttribs: function pointAttribs(a, b) {
        var c = this.options.marker,
            d = a && a.options,
            f = d && d.marker || {},
            e = this.color,
            h = d && d.color,
            g = a && a.color,
            d = J(f.lineWidth, c.lineWidth);a = a && a.zone && a.zone.color;e = h || a || g || e;a = f.fillColor || c.fillColor || e;e = f.lineColor || c.lineColor || e;b && (c = c.states[b], b = f.states && f.states[b] || {}, d = J(b.lineWidth, c.lineWidth, d + J(b.lineWidthPlus, c.lineWidthPlus, 0)), a = b.fillColor || c.fillColor || a, e = b.lineColor || c.lineColor || e);return { stroke: e, "stroke-width": d, fill: a };
      }, destroy: function destroy() {
        var a = this,
            b = a.chart,
            c = /AppleWebKit\/533/.test(L.navigator.userAgent),
            d,
            f,
            h = a.data || [],
            g,
            l;m(a, "destroy");t(a);v(a.axisTypes || [], function (b) {
          (l = a[b]) && l.series && (e(l.series, a), l.isDirty = l.forceRedraw = !0);
        });a.legendItem && a.chart.legend.destroyItem(a);for (f = h.length; f--;) {
          (g = h[f]) && g.destroy && g.destroy();
        }a.points = null;clearTimeout(a.animationTimeout);H(a, function (a, b) {
          a instanceof x && !a.survive && (d = c && "group" === b ? "hide" : "destroy", a[d]());
        });b.hoverSeries === a && (b.hoverSeries = null);e(b.series, a);b.orderSeries();H(a, function (b, c) {
          delete a[c];
        });
      }, getGraphPath: function getGraphPath(a, b, c) {
        var d = this,
            f = d.options,
            e = f.step,
            h,
            g = [],
            m = [],
            l;a = a || d.points;(h = a.reversed) && a.reverse();(e = { right: 1, center: 2 }[e] || e && 3) && h && (e = 4 - e);!f.connectNulls || b || c || (a = this.getValidPoints(a));v(a, function (k, h) {
          var q = k.plotX,
              t = k.plotY,
              n = a[h - 1];(k.leftCliff || n && n.rightCliff) && !c && (l = !0);k.isNull && !w(b) && 0 < h ? l = !f.connectNulls : k.isNull && !b ? l = !0 : (0 === h || l ? h = ["M", k.plotX, k.plotY] : d.getPointSpline ? h = d.getPointSpline(a, k, h) : e ? (h = 1 === e ? ["L", n.plotX, t] : 2 === e ? ["L", (n.plotX + q) / 2, n.plotY, "L", (n.plotX + q) / 2, t] : ["L", q, n.plotY], h.push("L", q, t)) : h = ["L", q, t], m.push(k.x), e && m.push(k.x), g.push.apply(g, h), l = !1);
        });g.xMap = m;return d.graphPath = g;
      }, drawGraph: function drawGraph() {
        var a = this,
            b = this.options,
            c = (this.gappedPath || this.getGraphPath).call(this),
            d = [["graph", "highcharts-graph", b.lineColor || this.color, b.dashStyle]];v(this.zones, function (c, f) {
          d.push(["zone-graph-" + f, "highcharts-graph highcharts-zone-graph-" + f + " " + (c.className || ""), c.color || a.color, c.dashStyle || b.dashStyle]);
        });v(d, function (d, f) {
          var e = d[0],
              k = a[e];k ? (k.endX = a.preventGraphAnimation ? null : c.xMap, k.animate({ d: c })) : c.length && (a[e] = a.chart.renderer.path(c).addClass(d[1]).attr({ zIndex: 1 }).add(a.group), k = { stroke: d[2], "stroke-width": b.lineWidth, fill: a.fillGraph && a.color || "none" }, d[3] ? k.dashstyle = d[3] : "square" !== b.linecap && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), k = a[e].attr(k).shadow(2 > f && b.shadow));k && (k.startX = c.xMap, k.isArea = c.isArea);
        });
      }, applyZones: function applyZones() {
        var a = this,
            b = this.chart,
            c = b.renderer,
            d = this.zones,
            f,
            e,
            h = this.clips || [],
            g,
            l = this.graph,
            m = this.area,
            t = Math.max(b.chartWidth, b.chartHeight),
            n = this[(this.zoneAxis || "y") + "Axis"],
            x,
            y,
            p = b.inverted,
            r,
            C,
            w,
            K,
            L = !1;d.length && (l || m) && n && void 0 !== n.min && (y = n.reversed, r = n.horiz, l && l.hide(), m && m.hide(), x = n.getExtremes(), v(d, function (d, k) {
          f = y ? r ? b.plotWidth : 0 : r ? 0 : n.toPixels(x.min);f = Math.min(Math.max(J(e, f), 0), t);e = Math.min(Math.max(Math.round(n.toPixels(J(d.value, x.max), !0)), 0), t);L && (f = e = n.toPixels(x.max));C = Math.abs(f - e);w = Math.min(f, e);K = Math.max(f, e);n.isXAxis ? (g = { x: p ? K : w, y: 0, width: C, height: t }, r || (g.x = b.plotHeight - g.x)) : (g = { x: 0,
            y: p ? K : w, width: t, height: C }, r && (g.y = b.plotWidth - g.y));p && c.isVML && (g = n.isXAxis ? { x: 0, y: y ? w : K, height: g.width, width: b.chartWidth } : { x: g.y - b.plotLeft - b.spacingBox.x, y: 0, width: g.height, height: b.chartHeight });h[k] ? h[k].animate(g) : (h[k] = c.clipRect(g), l && a["zone-graph-" + k].clip(h[k]), m && a["zone-area-" + k].clip(h[k]));L = d.value > x.max;
        }), this.clips = h);
      }, invertGroups: function invertGroups(a) {
        function b() {
          v(["group", "markerGroup"], function (b) {
            c[b] && (d.renderer.isVML && c[b].attr({ width: c.yAxis.len, height: c.xAxis.len }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(a));
          });
        }var c = this,
            d = c.chart,
            f;c.xAxis && (f = D(d, "resize", b), D(c, "destroy", f), b(a), c.invertGroups = b);
      }, plotGroup: function plotGroup(a, b, c, d, f) {
        var e = this[a],
            k = !e;k && (this[a] = e = this.chart.renderer.g().attr({ zIndex: d || .1 }).add(f));e.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (w(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (e.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);e.attr({ visibility: c })[k ? "attr" : "animate"](this.getPlotBox());return e;
      }, getPlotBox: function getPlotBox() {
        var a = this.chart,
            b = this.xAxis,
            c = this.yAxis;a.inverted && (b = c, c = this.xAxis);return { translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1 };
      }, render: function render() {
        var a = this,
            b = a.chart,
            c,
            d = a.options,
            f = !!a.animate && b.renderer.isSVG && B(d.animation).duration,
            e = a.visible ? "inherit" : "hidden",
            h = d.zIndex,
            g = a.hasRendered,
            l = b.seriesGroup,
            m = b.inverted;c = a.plotGroup("group", "series", e, h, l);a.markerGroup = a.plotGroup("markerGroup", "markers", e, h, l);f && a.animate(!0);c.inverted = a.isCartesian ? m : !1;a.drawGraph && (a.drawGraph(), a.applyZones());a.drawDataLabels && a.drawDataLabels();a.visible && a.drawPoints();a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();a.invertGroups(m);!1 === d.clip || a.sharedClipKey || g || c.clip(b.clipRect);f && a.animate();g || (a.animationTimeout = C(function () {
          a.afterAnimate();
        }, f));a.isDirty = !1;a.hasRendered = !0;
      }, redraw: function redraw() {
        var a = this.chart,
            b = this.isDirty || this.isDirtyData,
            c = this.group,
            d = this.xAxis,
            f = this.yAxis;c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({ translateX: J(d && d.left, a.plotLeft), translateY: J(f && f.top, a.plotTop) }));this.translate();this.render();b && delete this.kdTree;
      }, kdAxisArray: ["clientX", "plotY"], searchPoint: function searchPoint(a, b) {
        var c = this.xAxis,
            d = this.yAxis,
            f = this.chart.inverted;return this.searchKDTree({ clientX: f ? c.len - a.chartY + c.pos : a.chartX - c.pos, plotY: f ? d.len - a.chartX + d.pos : a.chartY - d.pos }, b);
      }, buildKDTree: function buildKDTree() {
        function a(c, d, f) {
          var e, k;if (k = c && c.length) return e = b.kdAxisArray[d % f], c.sort(function (a, b) {
            return a[e] - b[e];
          }), k = Math.floor(k / 2), { point: c[k], left: a(c.slice(0, k), d + 1, f), right: a(c.slice(k + 1), d + 1, f) };
        }this.buildingKdTree = !0;var b = this,
            c = -1 < b.options.findNearestPointBy.indexOf("y") ? 2 : 1;delete b.kdTree;C(function () {
          b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c);b.buildingKdTree = !1;
        }, b.options.kdNow ? 0 : 1);
      }, searchKDTree: function searchKDTree(a, b) {
        function c(a, b, k, g) {
          var l = b.point,
              m = d.kdAxisArray[k % g],
              q,
              n,
              t = l;n = w(a[f]) && w(l[f]) ? Math.pow(a[f] - l[f], 2) : null;q = w(a[e]) && w(l[e]) ? Math.pow(a[e] - l[e], 2) : null;q = (n || 0) + (q || 0);l.dist = w(q) ? Math.sqrt(q) : Number.MAX_VALUE;l.distX = w(n) ? Math.sqrt(n) : Number.MAX_VALUE;m = a[m] - l[m];q = 0 > m ? "left" : "right";n = 0 > m ? "right" : "left";b[q] && (q = c(a, b[q], k + 1, g), t = q[h] < t[h] ? q : l);b[n] && Math.sqrt(m * m) < t[h] && (a = c(a, b[n], k + 1, g), t = a[h] < t[h] ? a : t);return t;
        }var d = this,
            f = this.kdAxisArray[0],
            e = this.kdAxisArray[1],
            h = b ? "distX" : "dist";b = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;this.kdTree || this.buildingKdTree || this.buildKDTree();if (this.kdTree) return c(a, this.kdTree, b, b);
      } });
  })(N);(function (a) {
    var D = a.Axis,
        B = a.Chart,
        G = a.correctFloat,
        p = a.defined,
        g = a.destroyObjectProperties,
        l = a.each,
        r = a.format,
        n = a.objectEach,
        w = a.pick,
        v = a.Series;a.StackItem = function (a, h, g, c, f) {
      var b = a.chart.inverted;this.axis = a;this.isNegative = g;this.options = h;this.x = c;this.total = null;this.points = {};this.stack = f;this.rightCliff = this.leftCliff = 0;this.alignOptions = { align: h.align || (b ? g ? "left" : "right" : "center"), verticalAlign: h.verticalAlign || (b ? "middle" : g ? "bottom" : "top"), y: w(h.y, b ? 4 : g ? 14 : -6), x: w(h.x, b ? g ? -6 : 6 : 0) };this.textAlign = h.textAlign || (b ? g ? "right" : "left" : "center");
    };a.StackItem.prototype = { destroy: function destroy() {
        g(this, this.axis);
      }, render: function render(a) {
        var e = this.options,
            g = e.format,
            g = g ? r(g, this) : e.formatter.call(this);this.label ? this.label.attr({ text: g, visibility: "hidden" }) : this.label = this.axis.chart.renderer.text(g, null, null, e.useHTML).css(e.style).attr({ align: this.textAlign, rotation: e.rotation, visibility: "hidden" }).add(a);
      }, setOffset: function setOffset(a, h) {
        var e = this.axis,
            c = e.chart,
            f = e.translate(e.usePercentage ? 100 : this.total, 0, 0, 0, 1),
            e = e.translate(0),
            e = Math.abs(f - e);a = c.xAxis[0].translate(this.x) + a;f = this.getStackBox(c, this, a, f, h, e);if (h = this.label) h.align(this.alignOptions, null, f), f = h.alignAttr, h[!1 === this.options.crop || c.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0);
      }, getStackBox: function getStackBox(a, h, g, c, f, b) {
        var d = h.axis.reversed,
            e = a.inverted;a = a.plotHeight;h = h.isNegative && !d || !h.isNegative && d;return { x: e ? h ? c : c - b : g, y: e ? a - g - f : h ? a - c - b : a - c, width: e ? b : f, height: e ? f : b };
      } };B.prototype.getStacks = function () {
      var a = this;l(a.yAxis, function (a) {
        a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks);
      });l(a.series, function (e) {
        !e.options.stacking || !0 !== e.visible && !1 !== a.options.chart.ignoreHiddenSeries || (e.stackKey = e.type + w(e.options.stack, ""));
      });
    };D.prototype.buildStacks = function () {
      var a = this.series,
          h = w(this.options.reversedStacks, !0),
          g = a.length,
          c;if (!this.isXAxis) {
        this.usePercentage = !1;for (c = g; c--;) {
          a[h ? c : g - c - 1].setStackedPoints();
        }for (c = 0; c < g; c++) {
          a[c].modifyStacks();
        }
      }
    };D.prototype.renderStackTotals = function () {
      var a = this.chart,
          h = a.renderer,
          g = this.stacks,
          c = this.stackTotalGroup;c || (this.stackTotalGroup = c = h.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add());c.translate(a.plotLeft, a.plotTop);n(g, function (a) {
        n(a, function (a) {
          a.render(c);
        });
      });
    };D.prototype.resetStacks = function () {
      var a = this,
          h = a.stacks;a.isXAxis || n(h, function (e) {
        n(e, function (c, f) {
          c.touched < a.stacksTouched ? (c.destroy(), delete e[f]) : (c.total = null, c.cum = null);
        });
      });
    };D.prototype.cleanStacks = function () {
      var a;this.isXAxis || (this.oldStacks && (a = this.stacks = this.oldStacks), n(a, function (a) {
        n(a, function (a) {
          a.cum = a.total;
        });
      }));
    };v.prototype.setStackedPoints = function () {
      if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
        var e = this.processedXData,
            h = this.processedYData,
            g = [],
            c = h.length,
            f = this.options,
            b = f.threshold,
            d = f.startFromThreshold ? b : 0,
            l = f.stack,
            f = f.stacking,
            n = this.stackKey,
            r = "-" + n,
            t = this.negStacks,
            v = this.yAxis,
            x = v.stacks,
            C = v.oldStacks,
            L,
            q,
            A,
            E,
            F,
            k,
            u;v.stacksTouched += 1;for (F = 0; F < c; F++) {
          k = e[F], u = h[F], L = this.getStackIndicator(L, k, this.index), E = L.key, A = (q = t && u < (d ? 0 : b)) ? r : n, x[A] || (x[A] = {}), x[A][k] || (C[A] && C[A][k] ? (x[A][k] = C[A][k], x[A][k].total = null) : x[A][k] = new a.StackItem(v, v.options.stackLabels, q, k, l)), A = x[A][k], null !== u && (A.points[E] = A.points[this.index] = [w(A.cum, d)], p(A.cum) || (A.base = E), A.touched = v.stacksTouched, 0 < L.index && !1 === this.singleStacks && (A.points[E][0] = A.points[this.index + "," + k + ",0"][0])), "percent" === f ? (q = q ? n : r, t && x[q] && x[q][k] ? (q = x[q][k], A.total = q.total = Math.max(q.total, A.total) + Math.abs(u) || 0) : A.total = G(A.total + (Math.abs(u) || 0))) : A.total = G(A.total + (u || 0)), A.cum = w(A.cum, d) + (u || 0), null !== u && (A.points[E].push(A.cum), g[F] = A.cum);
        }"percent" === f && (v.usePercentage = !0);this.stackedYData = g;v.oldStacks = {};
      }
    };v.prototype.modifyStacks = function () {
      var a = this,
          h = a.stackKey,
          g = a.yAxis.stacks,
          c = a.processedXData,
          f,
          b = a.options.stacking;a[b + "Stacker"] && l([h, "-" + h], function (d) {
        for (var e = c.length, h, l; e--;) {
          if (h = c[e], f = a.getStackIndicator(f, h, a.index, d), l = (h = g[d] && g[d][h]) && h.points[f.key]) a[b + "Stacker"](l, h, e);
        }
      });
    };
    v.prototype.percentStacker = function (a, h, g) {
      h = h.total ? 100 / h.total : 0;a[0] = G(a[0] * h);a[1] = G(a[1] * h);this.stackedYData[g] = a[1];
    };v.prototype.getStackIndicator = function (a, h, g, c) {
      !p(a) || a.x !== h || c && a.key !== c ? a = { x: h, index: 0, key: c } : a.index++;a.key = [g, h, a.index].join();return a;
    };
  })(N);(function (a) {
    var D = a.addEvent,
        B = a.animate,
        G = a.Axis,
        p = a.createElement,
        g = a.css,
        l = a.defined,
        r = a.each,
        n = a.erase,
        w = a.extend,
        v = a.fireEvent,
        e = a.inArray,
        h = a.isNumber,
        m = a.isObject,
        c = a.isArray,
        f = a.merge,
        b = a.objectEach,
        d = a.pick,
        y = a.Point,
        H = a.Series,
        J = a.seriesTypes,
        t = a.setAnimation,
        K = a.splat;w(a.Chart.prototype, { addSeries: function addSeries(a, b, c) {
        var f,
            e = this;a && (b = d(b, !0), v(e, "addSeries", { options: a }, function () {
          f = e.initSeries(a);e.isDirtyLegend = !0;e.linkSeries();b && e.redraw(c);
        }));return f;
      }, addAxis: function addAxis(a, b, c, e) {
        var h = b ? "xAxis" : "yAxis",
            g = this.options;a = f(a, { index: this[h].length, isX: b });b = new G(this, a);g[h] = K(g[h] || {});g[h].push(a);d(c, !0) && this.redraw(e);return b;
      }, showLoading: function showLoading(a) {
        var b = this,
            c = b.options,
            d = b.loadingDiv,
            f = c.loading,
            e = function e() {
          d && g(d, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" });
        };d || (b.loadingDiv = d = p("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b.container), b.loadingSpan = p("span", { className: "highcharts-loading-inner" }, null, d), D(b, "redraw", e));d.className = "highcharts-loading";b.loadingSpan.innerHTML = a || c.lang.loading;g(d, w(f.style, { zIndex: 10 }));g(b.loadingSpan, f.labelStyle);b.loadingShown || (g(d, { opacity: 0, display: "" }), B(d, { opacity: f.style.opacity || .5 }, { duration: f.showDuration || 0 }));b.loadingShown = !0;e();
      }, hideLoading: function hideLoading() {
        var a = this.options,
            b = this.loadingDiv;b && (b.className = "highcharts-loading highcharts-loading-hidden", B(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function complete() {
            g(b, { display: "none" });
          } }));this.loadingShown = !1;
      }, propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
      propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "), update: function update(a, c, g) {
        var m = this,
            n = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle" },
            t = a.chart,
            x,
            k,
            y = [];if (t) {
          f(!0, m.options.chart, t);"className" in t && m.setClassName(t.className);if ("inverted" in t || "polar" in t) m.propFromSeries(), x = !0;"alignTicks" in t && (x = !0);b(t, function (a, b) {
            -1 !== e("chart." + b, m.propsRequireUpdateSeries) && (k = !0);-1 !== e(b, m.propsRequireDirtyBox) && (m.isDirtyBox = !0);
          });"style" in t && m.renderer.setStyle(t.style);
        }a.colors && (this.options.colors = a.colors);a.plotOptions && f(!0, this.options.plotOptions, a.plotOptions);b(a, function (a, b) {
          if (m[b] && "function" === typeof m[b].update) m[b].update(a, !1);else if ("function" === typeof m[n[b]]) m[n[b]](a);"chart" !== b && -1 !== e(b, m.propsRequireUpdateSeries) && (k = !0);
        });r("xAxis yAxis zAxis series colorAxis pane".split(" "), function (b) {
          a[b] && (r(K(a[b]), function (a, c) {
            (c = l(a.id) && m.get(a.id) || m[b][c]) && c.coll === b && (c.update(a, !1), g && (c.touched = !0));if (!c && g) if ("series" === b) m.addSeries(a, !1).touched = !0;else if ("xAxis" === b || "yAxis" === b) m.addAxis(a, "xAxis" === b, !1).touched = !0;
          }), g && r(m[b], function (a) {
            a.touched ? delete a.touched : y.push(a);
          }));
        });r(y, function (a) {
          a.remove(!1);
        });x && r(m.axes, function (a) {
          a.update({}, !1);
        });k && r(m.series, function (a) {
          a.update({}, !1);
        });a.loading && f(!0, m.options.loading, a.loading);x = t && t.width;t = t && t.height;h(x) && x !== m.chartWidth || h(t) && t !== m.chartHeight ? m.setSize(x, t) : d(c, !0) && m.redraw();
      }, setSubtitle: function setSubtitle(a) {
        this.setTitle(void 0, a);
      } });w(y.prototype, { update: function update(a, b, c, f) {
        function e() {
          h.applyOptions(a);null === h.y && k && (h.graphic = k.destroy());m(a, !0) && (k && k.element && a && a.marker && void 0 !== a.marker.symbol && (h.graphic = k.destroy()), a && a.dataLabels && h.dataLabel && (h.dataLabel = h.dataLabel.destroy()), h.connector && (h.connector = h.connector.destroy()));l = h.index;g.updateParallelArrays(h, l);n.data[l] = m(n.data[l], !0) || m(a, !0) ? h.options : a;g.isDirty = g.isDirtyData = !0;!g.fixedBox && g.hasCartesianSeries && (t.isDirtyBox = !0);"point" === n.legendType && (t.isDirtyLegend = !0);b && t.redraw(c);
        }var h = this,
            g = h.series,
            k = h.graphic,
            l,
            t = g.chart,
            n = g.options;b = d(b, !0);!1 === f ? e() : h.firePointEvent("update", { options: a }, e);
      }, remove: function remove(a, b) {
        this.series.removePoint(e(this, this.series.data), a, b);
      } });w(H.prototype, { addPoint: function addPoint(a, b, c, f) {
        var e = this.options,
            h = this.data,
            g = this.chart,
            k = this.xAxis,
            k = k && k.hasNames && k.names,
            l = e.data,
            m,
            t,
            n = this.xData,
            q,
            x;b = d(b, !0);m = { series: this };this.pointClass.prototype.applyOptions.apply(m, [a]);x = m.x;q = n.length;if (this.requireSorting && x < n[q - 1]) for (t = !0; q && n[q - 1] > x;) {
          q--;
        }this.updateParallelArrays(m, "splice", q, 0, 0);this.updateParallelArrays(m, q);k && m.name && (k[x] = m.name);l.splice(q, 0, a);t && (this.data.splice(q, 0, null), this.processData());"point" === e.legendType && this.generatePoints();c && (h[0] && h[0].remove ? h[0].remove(!1) : (h.shift(), this.updateParallelArrays(m, "shift"), l.shift()));this.isDirtyData = this.isDirty = !0;b && g.redraw(f);
      }, removePoint: function removePoint(a, b, c) {
        var f = this,
            e = f.data,
            h = e[a],
            g = f.points,
            k = f.chart,
            l = function l() {
          g && g.length === e.length && g.splice(a, 1);e.splice(a, 1);f.options.data.splice(a, 1);f.updateParallelArrays(h || { series: f }, "splice", a, 1);h && h.destroy();f.isDirty = !0;f.isDirtyData = !0;b && k.redraw();
        };t(c, k);b = d(b, !0);h ? h.firePointEvent("remove", null, l) : l();
      }, remove: function remove(a, b, c) {
        function f() {
          e.destroy();h.isDirtyLegend = h.isDirtyBox = !0;h.linkSeries();d(a, !0) && h.redraw(b);
        }var e = this,
            h = e.chart;!1 !== c ? v(e, "remove", null, f) : f();
      }, update: function update(a, b) {
        var c = this,
            e = c.chart,
            h = c.userOptions,
            g = c.oldType || c.type,
            l = a.type || h.type || e.options.chart.type,
            k = J[g].prototype,
            m,
            t = ["group", "markerGroup", "dataLabelsGroup"],
            n = ["navigatorSeries", "baseSeries"],
            y = c.finishedAnimating && { animation: !1 };if (Object.keys && "data" === Object.keys(a).toString()) return this.setData(a.data, b);if (l && l !== g || void 0 !== a.zIndex) t.length = 0;n = t.concat(n);r(n, function (a) {
          n[a] = c[a];delete c[a];
        });a = f(h, y, { index: c.index, pointStart: c.xData[0] }, { data: c.options.data }, a);c.remove(!1, null, !1);for (m in k) {
          c[m] = void 0;
        }w(c, J[l || g].prototype);r(n, function (a) {
          c[a] = n[a];
        });c.init(e, a);c.oldType = g;e.linkSeries();d(b, !0) && e.redraw(!1);
      } });w(G.prototype, { update: function update(a, b) {
        var c = this.chart;a = c.options[this.coll][this.options.index] = f(this.userOptions, a);this.destroy(!0);this.init(c, w(a, { events: void 0 }));c.isDirtyBox = !0;d(b, !0) && c.redraw();
      }, remove: function remove(a) {
        for (var b = this.chart, f = this.coll, e = this.series, h = e.length; h--;) {
          e[h] && e[h].remove(!1);
        }n(b.axes, this);n(b[f], this);c(b.options[f]) ? b.options[f].splice(this.options.index, 1) : delete b.options[f];r(b[f], function (a, b) {
          a.options.index = b;
        });this.destroy();
        b.isDirtyBox = !0;d(a, !0) && b.redraw();
      }, setTitle: function setTitle(a, b) {
        this.update({ title: a }, b);
      }, setCategories: function setCategories(a, b) {
        this.update({ categories: a }, b);
      } });
  })(N);(function (a) {
    var D = a.color,
        B = a.each,
        G = a.map,
        p = a.pick,
        g = a.Series,
        l = a.seriesType;l("area", "line", { softThreshold: !1, threshold: 0 }, { singleStacks: !1, getStackPoints: function getStackPoints(g) {
        var l = [],
            r = [],
            v = this.xAxis,
            e = this.yAxis,
            h = e.stacks[this.stackKey],
            m = {},
            c = this.index,
            f = e.series,
            b = f.length,
            d,
            y = p(e.options.reversedStacks, !0) ? 1 : -1,
            H;g = g || this.points;if (this.options.stacking) {
          for (H = 0; H < g.length; H++) {
            g[H].leftNull = g[H].rightNull = null, m[g[H].x] = g[H];
          }a.objectEach(h, function (a, b) {
            null !== a.total && r.push(b);
          });r.sort(function (a, b) {
            return a - b;
          });d = G(f, function () {
            return this.visible;
          });B(r, function (a, f) {
            var g = 0,
                n,
                t;if (m[a] && !m[a].isNull) l.push(m[a]), B([-1, 1], function (e) {
              var g = 1 === e ? "rightNull" : "leftNull",
                  l = 0,
                  p = h[r[f + e]];if (p) for (H = c; 0 <= H && H < b;) {
                n = p.points[H], n || (H === c ? m[a][g] = !0 : d[H] && (t = h[a].points[H]) && (l -= t[1] - t[0])), H += y;
              }m[a][1 === e ? "rightCliff" : "leftCliff"] = l;
            });else {
              for (H = c; 0 <= H && H < b;) {
                if (n = h[a].points[H]) {
                  g = n[1];break;
                }H += y;
              }g = e.translate(g, 0, 1, 0, 1);l.push({ isNull: !0, plotX: v.translate(a, 0, 0, 0, 1), x: a, plotY: g, yBottom: g });
            }
          });
        }return l;
      }, getGraphPath: function getGraphPath(a) {
        var l = g.prototype.getGraphPath,
            r = this.options,
            v = r.stacking,
            e = this.yAxis,
            h,
            m,
            c = [],
            f = [],
            b = this.index,
            d,
            y = e.stacks[this.stackKey],
            H = r.threshold,
            J = e.getThreshold(r.threshold),
            t,
            r = r.connectNulls || "percent" === v,
            K = function K(h, g, l) {
          var m = a[h];h = v && y[m.x].points[b];var t = m[l + "Null"] || 0;l = m[l + "Cliff"] || 0;var n,
              p,
              m = !0;l || t ? (n = (t ? h[0] : h[1]) + l, p = h[0] + l, m = !!t) : !v && a[g] && a[g].isNull && (n = p = H);void 0 !== n && (f.push({ plotX: d, plotY: null === n ? J : e.getThreshold(n), isNull: m, isCliff: !0 }), c.push({ plotX: d, plotY: null === p ? J : e.getThreshold(p), doCurve: !1 }));
        };a = a || this.points;v && (a = this.getStackPoints(a));for (h = 0; h < a.length; h++) {
          if (m = a[h].isNull, d = p(a[h].rectPlotX, a[h].plotX), t = p(a[h].yBottom, J), !m || r) r || K(h, h - 1, "left"), m && !v && r || (f.push(a[h]), c.push({ x: h, plotX: d, plotY: t })), r || K(h, h + 1, "right");
        }h = l.call(this, f, !0, !0);c.reversed = !0;m = l.call(this, c, !0, !0);m.length && (m[0] = "L");m = h.concat(m);l = l.call(this, f, !1, r);m.xMap = h.xMap;this.areaPath = m;return l;
      }, drawGraph: function drawGraph() {
        this.areaPath = [];g.prototype.drawGraph.apply(this);var a = this,
            l = this.areaPath,
            w = this.options,
            v = [["area", "highcharts-area", this.color, w.fillColor]];B(this.zones, function (e, h) {
          v.push(["zone-area-" + h, "highcharts-area highcharts-zone-area-" + h + " " + e.className, e.color || a.color, e.fillColor || w.fillColor]);
        });B(v, function (e) {
          var h = e[0],
              g = a[h];g ? (g.endX = a.preventGraphAnimation ? null : l.xMap, g.animate({ d: l })) : (g = a[h] = a.chart.renderer.path(l).addClass(e[1]).attr({ fill: p(e[3], D(e[2]).setOpacity(p(w.fillOpacity, .75)).get()), zIndex: 0 }).add(a.group), g.isArea = !0);g.startX = l.xMap;g.shiftUnit = w.step ? 2 : 1;
        });
      }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle });
  })(N);(function (a) {
    var D = a.pick;a = a.seriesType;a("spline", "line", {}, { getPointSpline: function getPointSpline(a, G, p) {
        var g = G.plotX,
            l = G.plotY,
            r = a[p - 1];p = a[p + 1];var n, w, v, e;if (r && !r.isNull && !1 !== r.doCurve && !G.isCliff && p && !p.isNull && !1 !== p.doCurve && !G.isCliff) {
          a = r.plotY;v = p.plotX;p = p.plotY;var h = 0;n = (1.5 * g + r.plotX) / 2.5;w = (1.5 * l + a) / 2.5;v = (1.5 * g + v) / 2.5;e = (1.5 * l + p) / 2.5;v !== n && (h = (e - w) * (v - g) / (v - n) + l - e);w += h;e += h;w > a && w > l ? (w = Math.max(a, l), e = 2 * l - w) : w < a && w < l && (w = Math.min(a, l), e = 2 * l - w);e > p && e > l ? (e = Math.max(p, l), w = 2 * l - e) : e < p && e < l && (e = Math.min(p, l), w = 2 * l - e);G.rightContX = v;G.rightContY = e;
        }G = ["C", D(r.rightContX, r.plotX), D(r.rightContY, r.plotY), D(n, g), D(w, l), g, l];r.rightContX = r.rightContY = null;return G;
      } });
  })(N);(function (a) {
    var D = a.seriesTypes.area.prototype,
        B = a.seriesType;
    B("areaspline", "spline", a.defaultPlotOptions.area, { getStackPoints: D.getStackPoints, getGraphPath: D.getGraphPath, drawGraph: D.drawGraph, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle });
  })(N);(function (a) {
    var D = a.animObject,
        B = a.color,
        G = a.each,
        p = a.extend,
        g = a.isNumber,
        l = a.merge,
        r = a.pick,
        n = a.Series,
        w = a.seriesType,
        v = a.svg;w("column", "line", { borderRadius: 0, crisp: !0, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1 }, select: { color: "#cccccc",
          borderColor: "#000000" } }, dataLabels: { align: null, verticalAlign: null, y: null }, softThreshold: !1, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" }, { cropShoulder: 0, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function init() {
        n.prototype.init.apply(this, arguments);var a = this,
            h = a.chart;h.hasRendered && G(h.series, function (e) {
          e.type === a.type && (e.isDirty = !0);
        });
      }, getColumnMetrics: function getColumnMetrics() {
        var a = this,
            h = a.options,
            g = a.xAxis,
            c = a.yAxis,
            f = g.reversed,
            b,
            d = {},
            l = 0;!1 === h.grouping ? l = 1 : G(a.chart.series, function (f) {
          var e = f.options,
              g = f.yAxis,
              h;f.type !== a.type || !f.visible && a.chart.options.chart.ignoreHiddenSeries || c.len !== g.len || c.pos !== g.pos || (e.stacking ? (b = f.stackKey, void 0 === d[b] && (d[b] = l++), h = d[b]) : !1 !== e.grouping && (h = l++), f.columnIndex = h);
        });var n = Math.min(Math.abs(g.transA) * (g.ordinalSlope || h.pointRange || g.closestPointRange || g.tickInterval || 1), g.len),
            p = n * h.groupPadding,
            t = (n - 2 * p) / (l || 1),
            h = Math.min(h.maxPointWidth || g.len, r(h.pointWidth, t * (1 - 2 * h.pointPadding)));
        a.columnMetrics = { width: h, offset: (t - h) / 2 + (p + ((a.columnIndex || 0) + (f ? 1 : 0)) * t - n / 2) * (f ? -1 : 1) };return a.columnMetrics;
      }, crispCol: function crispCol(a, g, l, c) {
        var f = this.chart,
            b = this.borderWidth,
            d = -(b % 2 ? .5 : 0),
            b = b % 2 ? .5 : 1;f.inverted && f.renderer.isVML && (b += 1);this.options.crisp && (l = Math.round(a + l) + d, a = Math.round(a) + d, l -= a);c = Math.round(g + c) + b;d = .5 >= Math.abs(g) && .5 < c;g = Math.round(g) + b;c -= g;d && c && (--g, c += 1);return { x: a, y: g, width: l, height: c };
      }, translate: function translate() {
        var a = this,
            g = a.chart,
            l = a.options,
            c = a.dense = 2 > a.closestPointRange * a.xAxis.transA,
            c = a.borderWidth = r(l.borderWidth, c ? 0 : 1),
            f = a.yAxis,
            b = l.threshold,
            d = a.translatedThreshold = f.getThreshold(b),
            p = r(l.minPointLength, 5),
            v = a.getColumnMetrics(),
            w = v.width,
            t = a.barW = Math.max(w, 1 + 2 * c),
            K = a.pointXOffset = v.offset;g.inverted && (d -= .5);l.pointPadding && (t = Math.ceil(t));n.prototype.translate.apply(a);G(a.points, function (c) {
          var e = r(c.yBottom, d),
              h = 999 + Math.abs(e),
              h = Math.min(Math.max(-h, c.plotY), f.len + h),
              l = c.plotX + K,
              m = t,
              n = Math.min(h, e),
              y,
              k = Math.max(h, e) - n;p && Math.abs(k) < p && (k = p, y = !f.reversed && !c.negative || f.reversed && c.negative, c.y === b && a.dataMax <= b && f.min < b && (y = !y), n = Math.abs(n - d) > p ? e - p : d - (y ? p : 0));c.barX = l;c.pointWidth = w;c.tooltipPos = g.inverted ? [f.len + f.pos - g.plotLeft - h, a.xAxis.len - l - m / 2, k] : [l + m / 2, h + f.pos - g.plotTop, k];c.shapeType = "rect";c.shapeArgs = a.crispCol.apply(a, c.isNull ? [l, d, m, 0] : [l, n, m, k]);
        });
      }, getSymbol: a.noop, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, drawGraph: function drawGraph() {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      }, pointAttribs: function pointAttribs(a, g) {
        var e = this.options,
            c,
            f = this.pointAttrToOptions || {};c = f.stroke || "borderColor";var b = f["stroke-width"] || "borderWidth",
            d = a && a.color || this.color,
            h = a && a[c] || e[c] || this.color || d,
            n = a && a[b] || e[b] || this[b] || 0,
            f = e.dashStyle;a && this.zones.length && (d = a.getZone(), d = a.options.color || d && d.color || this.color);g && (a = l(e.states[g], a.options.states && a.options.states[g] || {}), g = a.brightness, d = a.color || void 0 !== g && B(d).brighten(a.brightness).get() || d, h = a[c] || h, n = a[b] || n, f = a.dashStyle || f);c = { fill: d, stroke: h, "stroke-width": n };
        f && (c.dashstyle = f);return c;
      }, drawPoints: function drawPoints() {
        var a = this,
            h = this.chart,
            m = a.options,
            c = h.renderer,
            f = m.animationLimit || 250,
            b;G(a.points, function (d) {
          var e = d.graphic;if (g(d.plotY) && null !== d.y) {
            b = d.shapeArgs;if (e) e[h.pointCount < f ? "animate" : "attr"](l(b));else d.graphic = e = c[d.shapeType](b).add(d.group || a.group);m.borderRadius && e.attr({ r: m.borderRadius });e.attr(a.pointAttribs(d, d.selected && "select")).shadow(m.shadow, null, m.stacking && !m.borderRadius);e.addClass(d.getClassName(), !0);
          } else e && (d.graphic = e.destroy());
        });
      },
      animate: function animate(a) {
        var e = this,
            g = this.yAxis,
            c = e.options,
            f = this.chart.inverted,
            b = {},
            d = f ? "translateX" : "translateY",
            l;v && (a ? (b.scaleY = .001, a = Math.min(g.pos + g.len, Math.max(g.pos, g.toPixels(c.threshold))), f ? b.translateX = a - g.len : b.translateY = a, e.group.attr(b)) : (l = e.group.attr(d), e.group.animate({ scaleY: 1 }, p(D(e.options.animation), { step: function step(a, c) {
            b[d] = l + c.pos * (g.pos - l);e.group.attr(b);
          } })), e.animate = null));
      }, remove: function remove() {
        var a = this,
            g = a.chart;g.hasRendered && G(g.series, function (e) {
          e.type === a.type && (e.isDirty = !0);
        });n.prototype.remove.apply(a, arguments);
      } });
  })(N);(function (a) {
    a = a.seriesType;a("bar", "column", null, { inverted: !0 });
  })(N);(function (a) {
    var D = a.Series;a = a.seriesType;a("scatter", "line", { lineWidth: 0, findNearestPointBy: "xy", marker: { enabled: !0 }, tooltip: { headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 0.85em\"> {series.name}</span><br/>", pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e" } }, { sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, drawGraph: function drawGraph() {
        this.options.lineWidth && D.prototype.drawGraph.call(this);
      } });
  })(N);(function (a) {
    var D = a.deg2rad,
        B = a.isNumber,
        G = a.pick,
        p = a.relativeLength;a.CenteredSeriesMixin = { getCenter: function getCenter() {
        var a = this.options,
            l = this.chart,
            r = 2 * (a.slicedOffset || 0),
            n = l.plotWidth - 2 * r,
            l = l.plotHeight - 2 * r,
            w = a.center,
            w = [G(w[0], "50%"), G(w[1], "50%"), a.size || "100%", a.innerSize || 0],
            v = Math.min(n, l),
            e,
            h;for (e = 0; 4 > e; ++e) {
          h = w[e], a = 2 > e || 2 === e && /%$/.test(h), w[e] = p(h, [n, l, v, w[2]][e]) + (a ? r : 0);
        }w[3] > w[2] && (w[3] = w[2]);return w;
      }, getStartAndEndRadians: function getStartAndEndRadians(a, l) {
        a = B(a) ? a : 0;l = B(l) && l > a && 360 > l - a ? l : a + 360;return { start: D * (a + -90), end: D * (l + -90) };
      } };
  })(N);(function (a) {
    var D = a.addEvent,
        B = a.CenteredSeriesMixin,
        G = a.defined,
        p = a.each,
        g = a.extend,
        l = B.getStartAndEndRadians,
        r = a.inArray,
        n = a.noop,
        w = a.pick,
        v = a.Point,
        e = a.Series,
        h = a.seriesType,
        m = a.setAnimation;h("pie", "line", { center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { distance: 30,
        enabled: !0, formatter: function formatter() {
          return this.point.isNull ? void 0 : this.point.name;
        }, x: 0 }, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, states: { hover: { brightness: .1, shadow: !1 } } }, { isCartesian: !1, requireSorting: !1, directTouch: !0, noSharedTooltip: !0, trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttribs: a.seriesTypes.column.prototype.pointAttribs, animate: function animate(a) {
        var c = this,
            b = c.points,
            d = c.startAngleRad;a || (p(b, function (a) {
          var b = a.graphic,
              f = a.shapeArgs;b && (b.attr({ r: a.startR || c.center[3] / 2, start: d, end: d }), b.animate({ r: f.r, start: f.start, end: f.end }, c.options.animation));
        }), c.animate = null);
      }, updateTotals: function updateTotals() {
        var a,
            f = 0,
            b = this.points,
            d = b.length,
            e,
            g = this.options.ignoreHiddenPoint;for (a = 0; a < d; a++) {
          e = b[a], f += g && !e.visible ? 0 : e.isNull ? 0 : e.y;
        }this.total = f;for (a = 0; a < d; a++) {
          e = b[a], e.percentage = 0 < f && (e.visible || !g) ? e.y / f * 100 : 0, e.total = f;
        }
      }, generatePoints: function generatePoints() {
        e.prototype.generatePoints.call(this);
        this.updateTotals();
      }, translate: function translate(a) {
        this.generatePoints();var c = 0,
            b = this.options,
            d = b.slicedOffset,
            e = d + (b.borderWidth || 0),
            g,
            h,
            m,
            n = l(b.startAngle, b.endAngle),
            p = this.startAngleRad = n.start,
            n = (this.endAngleRad = n.end) - p,
            r = this.points,
            v,
            q = b.dataLabels.distance,
            b = b.ignoreHiddenPoint,
            A,
            E = r.length,
            F;a || (this.center = a = this.getCenter());this.getX = function (b, c, d) {
          m = Math.asin(Math.min((b - a[1]) / (a[2] / 2 + d.labelDistance), 1));return a[0] + (c ? -1 : 1) * Math.cos(m) * (a[2] / 2 + d.labelDistance);
        };for (A = 0; A < E; A++) {
          F = r[A];
          F.labelDistance = w(F.options.dataLabels && F.options.dataLabels.distance, q);this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, F.labelDistance);g = p + c * n;if (!b || F.visible) c += F.percentage / 100;h = p + c * n;F.shapeType = "arc";F.shapeArgs = { x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: Math.round(1E3 * g) / 1E3, end: Math.round(1E3 * h) / 1E3 };m = (h + g) / 2;m > 1.5 * Math.PI ? m -= 2 * Math.PI : m < -Math.PI / 2 && (m += 2 * Math.PI);F.slicedTranslation = { translateX: Math.round(Math.cos(m) * d), translateY: Math.round(Math.sin(m) * d) };h = Math.cos(m) * a[2] / 2;v = Math.sin(m) * a[2] / 2;F.tooltipPos = [a[0] + .7 * h, a[1] + .7 * v];F.half = m < -Math.PI / 2 || m > Math.PI / 2 ? 1 : 0;F.angle = m;g = Math.min(e, F.labelDistance / 5);F.labelPos = [a[0] + h + Math.cos(m) * F.labelDistance, a[1] + v + Math.sin(m) * F.labelDistance, a[0] + h + Math.cos(m) * g, a[1] + v + Math.sin(m) * g, a[0] + h, a[1] + v, 0 > F.labelDistance ? "center" : F.half ? "right" : "left", m];
        }
      }, drawGraph: null, drawPoints: function drawPoints() {
        var a = this,
            f = a.chart.renderer,
            b,
            d,
            e,
            h,
            l = a.options.shadow;l && !a.shadowGroup && (a.shadowGroup = f.g("shadow").add(a.group));p(a.points, function (c) {
          d = c.graphic;if (c.isNull) d && (c.graphic = d.destroy());else {
            h = c.shapeArgs;b = c.getTranslate();var m = c.shadowGroup;l && !m && (m = c.shadowGroup = f.g("shadow").add(a.shadowGroup));m && m.attr(b);e = a.pointAttribs(c, c.selected && "select");d ? d.setRadialReference(a.center).attr(e).animate(g(h, b)) : (c.graphic = d = f[c.shapeType](h).setRadialReference(a.center).attr(b).add(a.group), c.visible || d.attr({ visibility: "hidden" }), d.attr(e).attr({ "stroke-linejoin": "round" }).shadow(l, m));d.addClass(c.getClassName());
          }
        });
      }, searchPoint: n,
      sortByAngle: function sortByAngle(a, f) {
        a.sort(function (a, c) {
          return void 0 !== a.angle && (c.angle - a.angle) * f;
        });
      }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, getCenter: B.getCenter, getSymbol: n }, { init: function init() {
        v.prototype.init.apply(this, arguments);var a = this,
            f;a.name = w(a.name, "Slice");f = function f(b) {
          a.slice("select" === b.type);
        };D(a, "select", f);D(a, "unselect", f);return a;
      }, isValid: function isValid() {
        return a.isNumber(this.y, !0) && 0 <= this.y;
      }, setVisible: function setVisible(a, f) {
        var b = this,
            c = b.series,
            e = c.chart,
            g = c.options.ignoreHiddenPoint;
        f = w(f, g);a !== b.visible && (b.visible = b.options.visible = a = void 0 === a ? !b.visible : a, c.options.data[r(b, c.data)] = b.options, p(["graphic", "dataLabel", "connector", "shadowGroup"], function (c) {
          if (b[c]) b[c][a ? "show" : "hide"](!0);
        }), b.legendItem && e.legend.colorizeItem(b, a), a || "hover" !== b.state || b.setState(""), g && (c.isDirty = !0), f && e.redraw());
      }, slice: function slice(a, f, b) {
        var c = this.series;m(b, c.chart);w(f, !0);this.sliced = this.options.sliced = G(a) ? a : !this.sliced;c.options.data[r(this, c.data)] = this.options;this.graphic.animate(this.getTranslate());
        this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
      }, getTranslate: function getTranslate() {
        return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
      }, haloPath: function haloPath(a) {
        var c = this.shapeArgs;return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.x, c.y, c.r + a, c.r + a, { innerR: this.shapeArgs.r, start: c.start, end: c.end });
      } });
  })(N);(function (a) {
    var D = a.addEvent,
        B = a.arrayMax,
        G = a.defined,
        p = a.each,
        g = a.extend,
        l = a.format,
        r = a.map,
        n = a.merge,
        w = a.noop,
        v = a.pick,
        e = a.relativeLength,
        h = a.Series,
        m = a.seriesTypes,
        c = a.stableSort;a.distribute = function (a, b) {
      function d(a, b) {
        return a.target - b.target;
      }var f,
          e = !0,
          g = a,
          h = [],
          l;l = 0;for (f = a.length; f--;) {
        l += a[f].size;
      }if (l > b) {
        c(a, function (a, b) {
          return (b.rank || 0) - (a.rank || 0);
        });for (l = f = 0; l <= b;) {
          l += a[f].size, f++;
        }h = a.splice(f - 1, a.length);
      }c(a, d);for (a = r(a, function (a) {
        return { size: a.size, targets: [a.target], align: v(a.align, .5) };
      }); e;) {
        for (f = a.length; f--;) {
          e = a[f], l = (Math.min.apply(0, e.targets) + Math.max.apply(0, e.targets)) / 2, e.pos = Math.min(Math.max(0, l - e.size * e.align), b - e.size);
        }f = a.length;for (e = !1; f--;) {
          0 < f && a[f - 1].pos + a[f - 1].size > a[f].pos && (a[f - 1].size += a[f].size, a[f - 1].targets = a[f - 1].targets.concat(a[f].targets), a[f - 1].align = .5, a[f - 1].pos + a[f - 1].size > b && (a[f - 1].pos = b - a[f - 1].size), a.splice(f, 1), e = !0);
        }
      }f = 0;p(a, function (a) {
        var b = 0;p(a.targets, function () {
          g[f].pos = a.pos + b;b += g[f].size;f++;
        });
      });g.push.apply(g, h);c(g, d);
    };h.prototype.drawDataLabels = function () {
      function c(a, b) {
        var c = b.filter;return c ? (b = c.operator, a = a[c.property], c = c.value, "\x3e" === b && a > c || "\x3c" === b && a < c || "\x3e\x3d" === b && a >= c || "\x3c\x3d" === b && a <= c || "\x3d\x3d" === b && a == c || "\x3d\x3d\x3d" === b && a === c ? !0 : !1) : !0;
      }var b = this,
          d = b.options,
          e = d.dataLabels,
          g = b.points,
          h,
          m,
          r = b.hasRendered || 0,
          x,
          w,
          B = v(e.defer, !!d.animation),
          q = b.chart.renderer;if (e.enabled || b._hasPointLabels) b.dlProcessOptions && b.dlProcessOptions(e), w = b.plotGroup("dataLabelsGroup", "data-labels", B && !r ? "hidden" : "visible", e.zIndex || 6), B && (w.attr({ opacity: +r }), r || D(b, "afterAnimate", function () {
        b.visible && w.show(!0);w[d.animation ? "animate" : "attr"]({ opacity: 1 }, { duration: 200 });
      })), m = e, p(g, function (f) {
        var g,
            t = f.dataLabel,
            k,
            p,
            r = f.connector,
            y = !t,
            C;h = f.dlOptions || f.options && f.options.dataLabels;(g = v(h && h.enabled, m.enabled) && !f.isNull) && (g = !0 === c(f, h || e));g && (e = n(m, h), k = f.getLabelConfig(), C = e[f.formatPrefix + "Format"] || e.format, x = G(C) ? l(C, k) : (e[f.formatPrefix + "Formatter"] || e.formatter).call(k, e), C = e.style, k = e.rotation, C.color = v(e.color, C.color, b.color, "#000000"), "contrast" === C.color && (f.contrastColor = q.getContrast(f.color || b.color), C.color = e.inside || 0 > v(f.labelDistance, e.distance) || d.stacking ? f.contrastColor : "#000000"), d.cursor && (C.cursor = d.cursor), p = { fill: e.backgroundColor, stroke: e.borderColor, "stroke-width": e.borderWidth, r: e.borderRadius || 0, rotation: k, padding: e.padding, zIndex: 1 }, a.objectEach(p, function (a, b) {
          void 0 === a && delete p[b];
        }));!t || g && G(x) ? g && G(x) && (t ? p.text = x : (t = f.dataLabel = q[k ? "text" : "label"](x, 0, -9999, e.shape, null, null, e.useHTML, null, "data-label"), t.addClass("highcharts-data-label-color-" + f.colorIndex + " " + (e.className || "") + (e.useHTML ? "highcharts-tracker" : ""))), t.attr(p), t.css(C).shadow(e.shadow), t.added || t.add(w), b.alignDataLabel(f, t, e, null, y)) : (f.dataLabel = t = t.destroy(), r && (f.connector = r.destroy()));
      });
    };h.prototype.alignDataLabel = function (a, b, c, e, h) {
      var d = this.chart,
          f = d.inverted,
          l = v(a.dlBox && a.dlBox.centerX, a.plotX, -9999),
          m = v(a.plotY, -9999),
          n = b.getBBox(),
          p,
          q = c.rotation,
          r = c.align,
          w = this.visible && (a.series.forceDL || d.isInsidePlot(l, Math.round(m), f) || e && d.isInsidePlot(l, f ? e.x + 1 : e.y + e.height - 1, f)),
          y = "justify" === v(c.overflow, "justify");if (w && (p = c.style.fontSize, p = d.renderer.fontMetrics(p, b).b, e = g({ x: f ? this.yAxis.len - m : l, y: Math.round(f ? this.xAxis.len - l : m), width: 0, height: 0 }, e), g(c, { width: n.width, height: n.height }), q ? (y = !1, l = d.renderer.rotCorr(p, q), l = { x: e.x + c.x + e.width / 2 + l.x, y: e.y + c.y + { top: 0, middle: .5, bottom: 1 }[c.verticalAlign] * e.height }, b[h ? "attr" : "animate"](l).attr({ align: r }), m = (q + 720) % 360, m = 180 < m && 360 > m, "left" === r ? l.y -= m ? n.height : 0 : "center" === r ? (l.x -= n.width / 2, l.y -= n.height / 2) : "right" === r && (l.x -= n.width, l.y -= m ? 0 : n.height)) : (b.align(c, null, e), l = b.alignAttr), y ? a.isLabelJustified = this.justifyDataLabel(b, c, l, n, e, h) : v(c.crop, !0) && (w = d.isInsidePlot(l.x, l.y) && d.isInsidePlot(l.x + n.width, l.y + n.height)), c.shape && !q)) b[h ? "attr" : "animate"]({ anchorX: f ? d.plotWidth - a.plotY : a.plotX, anchorY: f ? d.plotHeight - a.plotX : a.plotY });w || (b.attr({ y: -9999 }), b.placed = !1);
    };h.prototype.justifyDataLabel = function (a, b, c, e, g, h) {
      var d = this.chart,
          f = b.align,
          l = b.verticalAlign,
          m,
          n,
          q = a.box ? 0 : a.padding || 0;m = c.x + q;0 > m && ("right" === f ? b.align = "left" : b.x = -m, n = !0);m = c.x + e.width - q;m > d.plotWidth && ("left" === f ? b.align = "right" : b.x = d.plotWidth - m, n = !0);m = c.y + q;0 > m && ("bottom" === l ? b.verticalAlign = "top" : b.y = -m, n = !0);m = c.y + e.height - q;m > d.plotHeight && ("top" === l ? b.verticalAlign = "bottom" : b.y = d.plotHeight - m, n = !0);n && (a.placed = !h, a.align(b, null, g));return n;
    };m.pie && (m.pie.prototype.drawDataLabels = function () {
      var c = this,
          b = c.data,
          d,
          e = c.chart,
          g = c.options.dataLabels,
          l = v(g.connectorPadding, 10),
          m = v(g.connectorWidth, 1),
          n = e.plotWidth,
          r = e.plotHeight,
          w,
          D = c.center,
          q = D[2] / 2,
          A = D[1],
          E,
          F,
          k,
          u,
          N = [[], []],
          M,
          P,
          I,
          Q,
          z = [0, 0, 0, 0];c.visible && (g.enabled || c._hasPointLabels) && (p(b, function (a) {
        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1);
      }), h.prototype.drawDataLabels.apply(c), p(b, function (a) {
        a.dataLabel && a.visible && (N[a.half].push(a), a.dataLabel._pos = null);
      }), p(N, function (b, f) {
        var h,
            m,
            t = b.length,
            x = [],
            w;if (t) for (c.sortByAngle(b, f - .5), 0 < c.maxLabelDistance && (h = Math.max(0, A - q - c.maxLabelDistance), m = Math.min(A + q + c.maxLabelDistance, e.plotHeight), p(b, function (a) {
          0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, A - q - a.labelDistance), a.bottom = Math.min(A + q + a.labelDistance, e.plotHeight), w = a.dataLabel.getBBox().height || 21, a.positionsIndex = x.push({ target: a.labelPos[1] - a.top + w / 2, size: w, rank: a.y }) - 1);
        }), a.distribute(x, m + w - h)), Q = 0; Q < t; Q++) {
          d = b[Q], m = d.positionsIndex, k = d.labelPos, E = d.dataLabel, I = !1 === d.visible ? "hidden" : "inherit", P = h = k[1], x && G(x[m]) && (void 0 === x[m].pos ? I = "hidden" : (u = x[m].size, P = d.top + x[m].pos)), delete d.positionIndex, M = g.justify ? D[0] + (f ? -1 : 1) * (q + d.labelDistance) : c.getX(P < d.top + 2 || P > d.bottom - 2 ? h : P, f, d), E._attr = { visibility: I, align: k[6] }, E._pos = { x: M + g.x + ({ left: l, right: -l }[k[6]] || 0), y: P + g.y - 10 }, k.x = M, k.y = P, v(g.crop, !0) && (F = E.getBBox().width, h = null, M - F < l ? (h = Math.round(F - M + l), z[3] = Math.max(h, z[3])) : M + F > n - l && (h = Math.round(M + F - n + l), z[1] = Math.max(h, z[1])), 0 > P - u / 2 ? z[0] = Math.max(Math.round(-P + u / 2), z[0]) : P + u / 2 > r && (z[2] = Math.max(Math.round(P + u / 2 - r), z[2])), E.sideOverflow = h);
        }
      }), 0 === B(z) || this.verifyDataLabelOverflow(z)) && (this.placeDataLabels(), m && p(this.points, function (a) {
        var b;w = a.connector;if ((E = a.dataLabel) && E._pos && a.visible && 0 < a.labelDistance) {
          I = E._attr.visibility;if (b = !w) a.connector = w = e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + a.colorIndex).add(c.dataLabelsGroup), w.attr({ "stroke-width": m, stroke: g.connectorColor || a.color || "#666666" });w[b ? "attr" : "animate"]({ d: c.connectorPath(a.labelPos) });w.attr("visibility", I);
        } else w && (a.connector = w.destroy());
      }));
    }, m.pie.prototype.connectorPath = function (a) {
      var b = a.x,
          c = a.y;return v(this.options.dataLabels.softConnector, !0) ? ["M", b + ("left" === a[6] ? 5 : -5), c, "C", b, c, 2 * a[2] - a[4], 2 * a[3] - a[5], a[2], a[3], "L", a[4], a[5]] : ["M", b + ("left" === a[6] ? 5 : -5), c, "L", a[2], a[3], "L", a[4], a[5]];
    }, m.pie.prototype.placeDataLabels = function () {
      p(this.points, function (a) {
        var b = a.dataLabel;b && a.visible && ((a = b._pos) ? (b.sideOverflow && (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({ width: b._attr.width + "px", textOverflow: "ellipsis" }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({ y: -9999 }));
      }, this);
    }, m.pie.prototype.alignDataLabel = w, m.pie.prototype.verifyDataLabelOverflow = function (a) {
      var b = this.center,
          c = this.options,
          f = c.center,
          g = c.minSize || 80,
          h,
          l = null !== c.size;l || (null !== f[0] ? h = Math.max(b[2] - Math.max(a[1], a[3]), g) : (h = Math.max(b[2] - a[1] - a[3], g), b[0] += (a[3] - a[1]) / 2), null !== f[1] ? h = Math.max(Math.min(h, b[2] - Math.max(a[0], a[2])), g) : (h = Math.max(Math.min(h, b[2] - a[0] - a[2]), g), b[1] += (a[0] - a[2]) / 2), h < b[2] ? (b[2] = h, b[3] = Math.min(e(c.innerSize || 0, h), h), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : l = !0);return l;
    });m.column && (m.column.prototype.alignDataLabel = function (a, b, c, e, g) {
      var d = this.chart.inverted,
          f = a.series,
          l = a.dlBox || a.shapeArgs,
          m = v(a.below, a.plotY > v(this.translatedThreshold, f.yAxis.len)),
          p = v(c.inside, !!this.options.stacking);l && (e = n(l), 0 > e.y && (e.height += e.y, e.y = 0), l = e.y + e.height - f.yAxis.len, 0 < l && (e.height -= l), d && (e = { x: f.yAxis.len - e.y - e.height, y: f.xAxis.len - e.x - e.width, width: e.height, height: e.width }), p || (d ? (e.x += m ? 0 : e.width, e.width = 0) : (e.y += m ? e.height : 0, e.height = 0)));c.align = v(c.align, !d || p ? "center" : m ? "right" : "left");c.verticalAlign = v(c.verticalAlign, d || p ? "middle" : m ? "top" : "bottom");h.prototype.alignDataLabel.call(this, a, b, c, e, g);a.isLabelJustified && a.contrastColor && a.dataLabel.css({ color: a.contrastColor });
    });
  })(N);(function (a) {
    var D = a.Chart,
        B = a.each,
        G = a.objectEach,
        p = a.pick;a = a.addEvent;a(D.prototype, "render", function () {
      var a = [];B(this.labelCollectors || [], function (g) {
        a = a.concat(g());
      });B(this.yAxis || [], function (g) {
        g.options.stackLabels && !g.options.stackLabels.allowOverlap && G(g.stacks, function (g) {
          G(g, function (g) {
            a.push(g.label);
          });
        });
      });B(this.series || [], function (g) {
        var l = g.options.dataLabels,
            n = g.dataLabelCollections || ["dataLabel"];(l.enabled || g._hasPointLabels) && !l.allowOverlap && g.visible && B(n, function (l) {
          B(g.points, function (g) {
            g[l] && (g[l].labelrank = p(g.labelrank, g.shapeArgs && g.shapeArgs.height), a.push(g[l]));
          });
        });
      });this.hideOverlappingLabels(a);
    });D.prototype.hideOverlappingLabels = function (a) {
      var g = a.length,
          p,
          n,
          w,
          v,
          e,
          h,
          m,
          c,
          f,
          b = function b(a, _b, c, f, e, g, h, l) {
        return !(e > a + c || e + h < a || g > _b + f || g + l < _b);
      };for (n = 0; n < g; n++) {
        if (p = a[n]) p.oldOpacity = p.opacity, p.newOpacity = 1, p.width || (w = p.getBBox(), p.width = w.width, p.height = w.height);
      }a.sort(function (a, b) {
        return (b.labelrank || 0) - (a.labelrank || 0);
      });for (n = 0; n < g; n++) {
        for (w = a[n], p = n + 1; p < g; ++p) {
          if (v = a[p], w && v && w !== v && w.placed && v.placed && 0 !== w.newOpacity && 0 !== v.newOpacity && (e = w.alignAttr, h = v.alignAttr, m = w.parentGroup, c = v.parentGroup, f = 2 * (w.box ? 0 : w.padding || 0), e = b(e.x + m.translateX, e.y + m.translateY, w.width - f, w.height - f, h.x + c.translateX, h.y + c.translateY, v.width - f, v.height - f))) (w.labelrank < v.labelrank ? w : v).newOpacity = 0;
        }
      }B(a, function (a) {
        var b, c;a && (c = a.newOpacity, a.oldOpacity !== c && a.placed && (c ? a.show(!0) : b = function b() {
          a.hide();
        }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b)), a.isOld = !0);
      });
    };
  })(N);(function (a) {
    var D = a.addEvent,
        B = a.Chart,
        G = a.createElement,
        p = a.css,
        g = a.defaultOptions,
        l = a.defaultPlotOptions,
        r = a.each,
        n = a.extend,
        w = a.fireEvent,
        v = a.hasTouch,
        e = a.inArray,
        h = a.isObject,
        m = a.Legend,
        c = a.merge,
        f = a.pick,
        b = a.Point,
        d = a.Series,
        y = a.seriesTypes,
        H = a.svg,
        J;J = a.TrackerMixin = { drawTrackerPoint: function drawTrackerPoint() {
        var a = this,
            b = a.chart.pointer,
            c = function c(a) {
          var c = b.getPointFromEvent(a);void 0 !== c && (b.isDirectTouch = !0, c.onMouseOver(a));
        };r(a.points, function (a) {
          a.graphic && (a.graphic.element.point = a);a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a);
        });a._hasTracking || (r(a.trackerGroups, function (d) {
          if (a[d]) {
            a[d].addClass("highcharts-tracker").on("mouseover", c).on("mouseout", function (a) {
              b.onTrackerMouseOut(a);
            });
            if (v) a[d].on("touchstart", c);a.options.cursor && a[d].css(p).css({ cursor: a.options.cursor });
          }
        }), a._hasTracking = !0);
      }, drawTrackerGraph: function drawTrackerGraph() {
        var a = this,
            b = a.options,
            c = b.trackByArea,
            d = [].concat(c ? a.areaPath : a.graphPath),
            f = d.length,
            e = a.chart,
            g = e.pointer,
            h = e.renderer,
            l = e.options.tooltip.snap,
            k = a.tracker,
            m,
            n = function n() {
          if (e.hoverSeries !== a) a.onMouseOver();
        },
            p = "rgba(192,192,192," + (H ? .0001 : .002) + ")";if (f && !c) for (m = f + 1; m--;) {
          "M" === d[m] && d.splice(m + 1, 0, d[m + 1] - l, d[m + 2], "L"), (m && "M" === d[m] || m === f) && d.splice(m, 0, "L", d[m - 2] + l, d[m - 1]);
        }k ? k.attr({ d: d }) : a.graph && (a.tracker = h.path(d).attr({ "stroke-linejoin": "round", visibility: a.visible ? "visible" : "hidden", stroke: p, fill: c ? p : "none", "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * l), zIndex: 2 }).add(a.group), r([a.tracker, a.markerGroup], function (a) {
          a.addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function (a) {
            g.onTrackerMouseOut(a);
          });b.cursor && a.css({ cursor: b.cursor });if (v) a.on("touchstart", n);
        }));
      } };y.column && (y.column.prototype.drawTracker = J.drawTrackerPoint);
    y.pie && (y.pie.prototype.drawTracker = J.drawTrackerPoint);y.scatter && (y.scatter.prototype.drawTracker = J.drawTrackerPoint);n(m.prototype, { setItemEvents: function setItemEvents(a, b, d) {
        var f = this,
            e = f.chart.renderer.boxWrapper,
            g = "highcharts-legend-" + (a.series ? "point" : "series") + "-active";(d ? b : a.legendGroup).on("mouseover", function () {
          a.setState("hover");e.addClass(g);b.css(f.options.itemHoverStyle);
        }).on("mouseout", function () {
          b.css(c(a.visible ? f.itemStyle : f.itemHiddenStyle));e.removeClass(g);a.setState();
        }).on("click", function (b) {
          var c = function c() {
            a.setVisible && a.setVisible();
          };b = { browserEvent: b };a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : w(a, "legendItemClick", b, c);
        });
      }, createCheckboxForItem: function createCheckboxForItem(a) {
        a.checkbox = G("input", { type: "checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container);D(a.checkbox, "click", function (b) {
          w(a.series || a, "checkboxClick", { checked: b.target.checked, item: a }, function () {
            a.select();
          });
        });
      } });g.legend.itemStyle.cursor = "pointer";n(B.prototype, { showResetZoom: function showResetZoom() {
        var a = this,
            b = g.lang,
            c = a.options.chart.resetZoomButton,
            d = c.theme,
            f = d.states,
            e = "chart" === c.relativeTo ? null : "plotBox";this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () {
          a.zoomOut();
        }, d, f && f.hover).attr({ align: c.position.align, title: b.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(c.position, !1, e);
      }, zoomOut: function zoomOut() {
        var a = this;w(a, "selection", { resetSelection: !0 }, function () {
          a.zoom();
        });
      }, zoom: function zoom(a) {
        var b,
            c = this.pointer,
            d = !1,
            e;!a || a.resetSelection ? (r(this.axes, function (a) {
          b = a.zoom();
        }), c.initiated = !1) : r(a.xAxis.concat(a.yAxis), function (a) {
          var f = a.axis;c[f.isXAxis ? "zoomX" : "zoomY"] && (b = f.zoom(a.min, a.max), f.displayBtn && (d = !0));
        });e = this.resetZoomButton;d && !e ? this.showResetZoom() : !d && h(e) && (this.resetZoomButton = e.destroy());b && this.redraw(f(this.options.chart.animation, a && a.animation, 100 > this.pointCount));
      }, pan: function pan(a, b) {
        var c = this,
            d = c.hoverPoints,
            f;d && r(d, function (a) {
          a.setState();
        });r("xy" === b ? [1, 0] : [1], function (b) {
          b = c[b ? "xAxis" : "yAxis"][0];var d = b.horiz,
              e = a[d ? "chartX" : "chartY"],
              d = d ? "mouseDownX" : "mouseDownY",
              g = c[d],
              k = (b.pointRange || 0) / 2,
              h = b.getExtremes(),
              l = b.toValue(g - e, !0) + k,
              k = b.toValue(g + b.len - e, !0) - k,
              m = k < l,
              g = m ? k : l,
              l = m ? l : k,
              k = Math.min(h.dataMin, b.toValue(b.toPixels(h.min) - b.minPixelPadding)),
              m = Math.max(h.dataMax, b.toValue(b.toPixels(h.max) + b.minPixelPadding)),
              n;n = k - g;0 < n && (l += n, g = k);n = l - m;0 < n && (l = m, g -= n);b.series.length && g !== h.min && l !== h.max && (b.setExtremes(g, l, !1, !1, { trigger: "pan" }), f = !0);c[d] = e;
        });f && c.redraw(!1);p(c.container, { cursor: "move" });
      } });n(b.prototype, { select: function select(a, b) {
        var c = this,
            d = c.series,
            g = d.chart;a = f(a, !c.selected);c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
          c.selected = c.options.selected = a;d.options.data[e(c, d.data)] = c.options;c.setState(a && "select");b || r(g.getSelectedPoints(), function (a) {
            a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[e(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect"));
          });
        });
      }, onMouseOver: function onMouseOver(a) {
        var b = this.series.chart,
            c = b.pointer;a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted);c.runPointActions(a, this);
      }, onMouseOut: function onMouseOut() {
        var a = this.series.chart;this.firePointEvent("mouseOut");r(a.hoverPoints || [], function (a) {
          a.setState();
        });a.hoverPoints = a.hoverPoint = null;
      }, importEvents: function importEvents() {
        if (!this.hasImportedEvents) {
          var b = this,
              d = c(b.series.options.point, b.options).events;b.events = d;a.objectEach(d, function (a, c) {
            D(b, c, a);
          });this.hasImportedEvents = !0;
        }
      }, setState: function setState(a, b) {
        var c = Math.floor(this.plotX),
            d = this.plotY,
            e = this.series,
            g = e.options.states[a] || {},
            h = l[e.type].marker && e.options.marker,
            m = h && !1 === h.enabled,
            p = h && h.states && h.states[a] || {},
            k = !1 === p.enabled,
            t = e.stateMarkerGraphic,
            r = this.marker || {},
            v = e.chart,
            w = e.halo,
            y,
            B = h && e.markerAttribs;a = a || "";if (!(a === this.state && !b || this.selected && "select" !== a || !1 === g.enabled || a && (k || m && !1 === p.enabled) || a && r.states && r.states[a] && !1 === r.states[a].enabled)) {
          B && (y = e.markerAttribs(this, a));if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), this.graphic.animate(e.pointAttribs(this, a), f(v.options.chart.animation, g.animation)), y && this.graphic.animate(y, f(v.options.chart.animation, p.animation, h.animation)), t && t.hide();else {
            if (a && p) {
              h = r.symbol || e.symbol;t && t.currentSymbol !== h && (t = t.destroy());if (t) t[b ? "animate" : "attr"]({ x: y.x, y: y.y });else h && (e.stateMarkerGraphic = t = v.renderer.symbol(h, y.x, y.y, y.width, y.height).add(e.markerGroup), t.currentSymbol = h);t && t.attr(e.pointAttribs(this, a));
            }t && (t[a && v.isInsidePlot(c, d, v.inverted) ? "show" : "hide"](), t.element.point = this);
          }(c = g.halo) && c.size ? (w || (e.halo = w = v.renderer.path().add((this.graphic || t).parentGroup)), w[b ? "animate" : "attr"]({ d: this.haloPath(c.size) }), w.attr({ "class": "highcharts-halo highcharts-color-" + f(this.colorIndex, e.colorIndex) }), w.point = this, w.attr(n({ fill: this.color || e.color, "fill-opacity": c.opacity, zIndex: -1 }, c.attributes))) : w && w.point && w.point.haloPath && w.animate({ d: w.point.haloPath(0) });this.state = a;
        }
      }, haloPath: function haloPath(a) {
        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
      } });
    n(d.prototype, { onMouseOver: function onMouseOver() {
        var a = this.chart,
            b = a.hoverSeries;if (b && b !== this) b.onMouseOut();this.options.events.mouseOver && w(this, "mouseOver");this.setState("hover");a.hoverSeries = this;
      }, onMouseOut: function onMouseOut() {
        var a = this.options,
            b = this.chart,
            c = b.tooltip,
            d = b.hoverPoint;b.hoverSeries = null;if (d) d.onMouseOut();this && a.events.mouseOut && w(this, "mouseOut");!c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();this.setState();
      }, setState: function setState(a) {
        var b = this,
            c = b.options,
            d = b.graph,
            e = c.states,
            g = c.lineWidth,
            c = 0;a = a || "";if (b.state !== a && (r([b.group, b.markerGroup, b.dataLabelsGroup], function (c) {
          c && (b.state && c.removeClass("highcharts-series-" + b.state), a && c.addClass("highcharts-series-" + a));
        }), b.state = a, !e[a] || !1 !== e[a].enabled) && (a && (g = e[a].lineWidth || g + (e[a].lineWidthPlus || 0)), d && !d.dashstyle)) for (g = { "stroke-width": g }, d.animate(g, f(b.chart.options.chart.animation, e[a] && e[a].animation)); b["zone-graph-" + c];) {
          b["zone-graph-" + c].attr(g), c += 1;
        }
      }, setVisible: function setVisible(a, b) {
        var c = this,
            d = c.chart,
            e = c.legendItem,
            f,
            g = d.options.chart.ignoreHiddenSeries,
            h = c.visible;f = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !h : a) ? "show" : "hide";r(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function (a) {
          if (c[a]) c[a][f]();
        });if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();e && d.legend.colorizeItem(c, a);c.isDirty = !0;c.options.stacking && r(d.series, function (a) {
          a.options.stacking && a.visible && (a.isDirty = !0);
        });r(c.linkedSeries, function (b) {
          b.setVisible(a, !1);
        });g && (d.isDirtyBox = !0);!1 !== b && d.redraw();w(c, f);
      }, show: function show() {
        this.setVisible(!0);
      }, hide: function hide() {
        this.setVisible(!1);
      }, select: function select(a) {
        this.selected = a = void 0 === a ? !this.selected : a;this.checkbox && (this.checkbox.checked = a);w(this, a ? "select" : "unselect");
      }, drawTracker: J.drawTrackerGraph });
  })(N);(function (a) {
    var D = a.Chart,
        B = a.each,
        G = a.inArray,
        p = a.isArray,
        g = a.isObject,
        l = a.pick,
        r = a.splat;D.prototype.setResponsive = function (g) {
      var l = this.options.responsive,
          n = [],
          e = this.currentResponsive;l && l.rules && B(l.rules, function (e) {
        void 0 === e._id && (e._id = a.uniqueKey());this.matchResponsiveRule(e, n, g);
      }, this);var h = a.merge.apply(0, a.map(n, function (e) {
        return a.find(l.rules, function (a) {
          return a._id === e;
        }).chartOptions;
      })),
          n = n.toString() || void 0;n !== (e && e.ruleIds) && (e && this.update(e.undoOptions, g), n ? (this.currentResponsive = { ruleIds: n, mergedOptions: h, undoOptions: this.currentOptions(h) }, this.update(h, g)) : this.currentResponsive = void 0);
    };D.prototype.matchResponsiveRule = function (a, g) {
      var n = a.condition;(n.callback || function () {
        return this.chartWidth <= l(n.maxWidth, Number.MAX_VALUE) && this.chartHeight <= l(n.maxHeight, Number.MAX_VALUE) && this.chartWidth >= l(n.minWidth, 0) && this.chartHeight >= l(n.minHeight, 0);
      }).call(this) && g.push(a._id);
    };D.prototype.currentOptions = function (l) {
      function n(e, h, l, c) {
        var f;a.objectEach(e, function (a, d) {
          if (!c && -1 < G(d, ["series", "xAxis", "yAxis"])) for (a = r(a), l[d] = [], f = 0; f < a.length; f++) {
            h[d][f] && (l[d][f] = {}, n(a[f], h[d][f], l[d][f], c + 1));
          } else g(a) ? (l[d] = p(a) ? [] : {}, n(a, h[d] || {}, l[d], c + 1)) : l[d] = h[d] || null;
        });
      }var v = {};n(l, this.options, v, 0);return v;
    };
  })(N);return N;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 Highcharts JS v6.0.3 (2017-11-14)
 Exporting module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (k) {
  "object" === ( false ? "undefined" : _typeof(module)) && module.exports ? module.exports = k : k(Highcharts);
})(function (k) {
  (function (f) {
    var k = f.defaultOptions,
        z = f.doc,
        B = f.Chart,
        w = f.addEvent,
        I = f.removeEvent,
        F = f.fireEvent,
        p = f.createElement,
        C = f.discardElement,
        u = f.css,
        n = f.merge,
        D = f.pick,
        h = f.each,
        G = f.objectEach,
        r = f.extend,
        J = f.isTouchDevice,
        E = f.win,
        H = E.navigator.userAgent,
        K = f.Renderer.prototype.symbols;/Edge\/|Trident\/|MSIE /.test(H);/firefox/i.test(H);r(k.lang, { printChart: "Print chart", downloadPNG: "Download PNG image", downloadJPEG: "Download JPEG image",
      downloadPDF: "Download PDF document", downloadSVG: "Download SVG vector image", contextButtonTitle: "Chart context menu" });k.navigation = { buttonOptions: { theme: {}, symbolSize: 14, symbolX: 12.5, symbolY: 10.5, align: "right", buttonSpacing: 3, height: 22, verticalAlign: "top", width: 24 } };n(!0, k.navigation, { menuStyle: { border: "1px solid #999999", background: "#ffffff", padding: "5px 0" }, menuItemStyle: { padding: "0.5em 1em", background: "none", color: "#333333", fontSize: J ? "14px" : "11px", transition: "background 250ms, color 250ms" }, menuItemHoverStyle: { background: "#335cad",
        color: "#ffffff" }, buttonOptions: { symbolFill: "#666666", symbolStroke: "#666666", symbolStrokeWidth: 3, theme: { fill: "#ffffff", stroke: "none", padding: 5 } } });k.exporting = { type: "image/png", url: "https://export.highcharts.com/", printMaxWidth: 780, scale: 2, buttons: { contextButton: { className: "highcharts-contextbutton", menuClassName: "highcharts-contextmenu", symbol: "menu", _titleKey: "contextButtonTitle", menuItems: "printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ") } }, menuItemDefinitions: { printChart: { textKey: "printChart",
          onclick: function onclick() {
            this.print();
          } }, separator: { separator: !0 }, downloadPNG: { textKey: "downloadPNG", onclick: function onclick() {
            this.exportChart();
          } }, downloadJPEG: { textKey: "downloadJPEG", onclick: function onclick() {
            this.exportChart({ type: "image/jpeg" });
          } }, downloadPDF: { textKey: "downloadPDF", onclick: function onclick() {
            this.exportChart({ type: "application/pdf" });
          } }, downloadSVG: { textKey: "downloadSVG", onclick: function onclick() {
            this.exportChart({ type: "image/svg+xml" });
          } } } };f.post = function (a, b, e) {
      var c = p("form", n({ method: "post", action: a, enctype: "multipart/form-data" }, e), { display: "none" }, z.body);G(b, function (a, b) {
        p("input", { type: "hidden", name: b, value: a }, null, c);
      });c.submit();C(c);
    };r(B.prototype, { sanitizeSVG: function sanitizeSVG(a, b) {
        if (b && b.exporting && b.exporting.allowHTML) {
          var e = a.match(/<\/svg>(.*?$)/);e && e[1] && (e = '\x3cforeignObject x\x3d"0" y\x3d"0" width\x3d"' + b.chart.width + '" height\x3d"' + b.chart.height + '"\x3e\x3cbody xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e' + e[1] + "\x3c/body\x3e\x3c/foreignObject\x3e", a = a.replace("\x3c/svg\x3e", e + "\x3c/svg\x3e"));
        }a = a.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '\x3csvg xmlns:xlink\x3d"http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g, " xlink:href\x3d").replace(/\n/, " ").replace(/<\/svg>.*?$/, "\x3c/svg\x3e").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1\x3d"rgb($2)" $1-opacity\x3d"$3"').replace(/&nbsp;/g, "\xA0").replace(/&shy;/g, "\xAD");this.ieSanitizeSVG && (a = this.ieSanitizeSVG(a));return a;
      }, getChartHTML: function getChartHTML() {
        return this.container.innerHTML;
      }, getSVG: function getSVG(a) {
        var b,
            e,
            c,
            v,
            m,
            g = n(this.options, a);e = p("div", null, { position: "absolute", top: "-9999em", width: this.chartWidth + "px", height: this.chartHeight + "px" }, z.body);c = this.renderTo.style.width;m = this.renderTo.style.height;c = g.exporting.sourceWidth || g.chart.width || /px$/.test(c) && parseInt(c, 10) || 600;m = g.exporting.sourceHeight || g.chart.height || /px$/.test(m) && parseInt(m, 10) || 400;r(g.chart, { animation: !1, renderTo: e, forExport: !0, renderer: "SVGRenderer", width: c, height: m });g.exporting.enabled = !1;delete g.data;g.series = [];h(this.series, function (a) {
          v = n(a.userOptions, { animation: !1, enableMouseTracking: !1, showCheckbox: !1, visible: a.visible });v.isInternal || g.series.push(v);
        });h(this.axes, function (a) {
          a.userOptions.internalKey || (a.userOptions.internalKey = f.uniqueKey());
        });b = new f.Chart(g, this.callback);a && h(["xAxis", "yAxis", "series"], function (c) {
          var d = {};a[c] && (d[c] = a[c], b.update(d));
        });h(this.axes, function (a) {
          var c = f.find(b.axes, function (b) {
            return b.options.internalKey === a.userOptions.internalKey;
          }),
              d = a.getExtremes(),
              e = d.userMin,
              d = d.userMax;!c || void 0 === e && void 0 === d || c.setExtremes(e, d, !0, !1);
        });c = b.getChartHTML();c = this.sanitizeSVG(c, g);g = null;b.destroy();C(e);return c;
      }, getSVGForExport: function getSVGForExport(a, b) {
        var e = this.options.exporting;return this.getSVG(n({ chart: { borderRadius: 0 } }, e.chartOptions, b, { exporting: { sourceWidth: a && a.sourceWidth || e.sourceWidth, sourceHeight: a && a.sourceHeight || e.sourceHeight } }));
      }, exportChart: function exportChart(a, b) {
        b = this.getSVGForExport(a, b);a = n(this.options.exporting, a);f.post(a.url, { filename: a.filename || "chart", type: a.type, width: a.width || 0, scale: a.scale, svg: b }, a.formAttributes);
      }, print: function print() {
        var a = this,
            b = a.container,
            e = [],
            c = b.parentNode,
            f = z.body,
            m = f.childNodes,
            g = a.options.exporting.printMaxWidth,
            d,
            t;if (!a.isPrinting) {
          a.isPrinting = !0;a.pointer.reset(null, 0);F(a, "beforePrint");if (t = g && a.chartWidth > g) d = [a.options.chart.width, void 0, !1], a.setSize(g, void 0, !1);
          h(m, function (a, b) {
            1 === a.nodeType && (e[b] = a.style.display, a.style.display = "none");
          });f.appendChild(b);E.focus();E.print();setTimeout(function () {
            c.appendChild(b);h(m, function (a, b) {
              1 === a.nodeType && (a.style.display = e[b]);
            });a.isPrinting = !1;t && a.setSize.apply(a, d);F(a, "afterPrint");
          }, 1E3);
        }
      }, contextMenu: function contextMenu(a, b, e, c, v, m, g) {
        var d = this,
            t = d.options.navigation,
            k = d.chartWidth,
            q = d.chartHeight,
            n = "cache-" + a,
            l = d[n],
            x = Math.max(v, m),
            y,
            A;l || (d[n] = l = p("div", { className: a }, { position: "absolute", zIndex: 1E3, padding: x + "px" }, d.container), y = p("div", { className: "highcharts-menu" }, null, l), u(y, r({ MozBoxShadow: "3px 3px 10px #888", WebkitBoxShadow: "3px 3px 10px #888", boxShadow: "3px 3px 10px #888" }, t.menuStyle)), A = function A() {
          u(l, { display: "none" });g && g.setState(0);d.openMenu = !1;
        }, d.exportEvents.push(w(l, "mouseleave", function () {
          l.hideTimer = setTimeout(A, 500);
        }), w(l, "mouseenter", function () {
          clearTimeout(l.hideTimer);
        }), w(z, "mouseup", function (b) {
          d.pointer.inClass(b.target, a) || A();
        })), h(b, function (a) {
          "string" === typeof a && (a = d.options.exporting.menuItemDefinitions[a]);
          if (f.isObject(a, !0)) {
            var b;a.separator ? b = p("hr", null, null, y) : (b = p("div", { className: "highcharts-menu-item", onclick: function onclick(b) {
                b && b.stopPropagation();A();a.onclick && a.onclick.apply(d, arguments);
              }, innerHTML: a.text || d.options.lang[a.textKey] }, null, y), b.onmouseover = function () {
              u(this, t.menuItemHoverStyle);
            }, b.onmouseout = function () {
              u(this, t.menuItemStyle);
            }, u(b, r({ cursor: "pointer" }, t.menuItemStyle)));d.exportDivElements.push(b);
          }
        }), d.exportDivElements.push(y, l), d.exportMenuWidth = l.offsetWidth, d.exportMenuHeight = l.offsetHeight);b = { display: "block" };e + d.exportMenuWidth > k ? b.right = k - e - v - x + "px" : b.left = e - x + "px";c + m + d.exportMenuHeight > q && "top" !== g.alignOptions.verticalAlign ? b.bottom = q - c - x + "px" : b.top = c + m - x + "px";u(l, b);d.openMenu = !0;
      }, addButton: function addButton(a) {
        var b = this,
            e = b.renderer,
            c = n(b.options.navigation.buttonOptions, a),
            f = c.onclick,
            m = c.menuItems,
            g,
            d,
            k = c.symbolSize || 12;b.btnCount || (b.btnCount = 0);b.exportDivElements || (b.exportDivElements = [], b.exportSVGElements = []);if (!1 !== c.enabled) {
          var h = c.theme,
              q = h.states,
              p = q && q.hover,
              q = q && q.select,
              l;delete h.states;f ? l = function l(a) {
            a.stopPropagation();f.call(b, a);
          } : m && (l = function l() {
            b.contextMenu(d.menuClassName, m, d.translateX, d.translateY, d.width, d.height, d);d.setState(2);
          });c.text && c.symbol ? h.paddingLeft = D(h.paddingLeft, 25) : c.text || r(h, { width: c.width, height: c.height, padding: 0 });d = e.button(c.text, 0, 0, l, h, p, q).addClass(a.className).attr({ "stroke-linecap": "round", title: b.options.lang[c._titleKey], zIndex: 3 });d.menuClassName = a.menuClassName || "highcharts-menu-" + b.btnCount++;c.symbol && (g = e.symbol(c.symbol, c.symbolX - k / 2, c.symbolY - k / 2, k, k).addClass("highcharts-button-symbol").attr({ zIndex: 1 }).add(d), g.attr({ stroke: c.symbolStroke, fill: c.symbolFill, "stroke-width": c.symbolStrokeWidth || 1 }));d.add().align(r(c, { width: d.width, x: D(c.x, b.buttonOffset) }), !0, "spacingBox");b.buttonOffset += (d.width + c.buttonSpacing) * ("right" === c.align ? -1 : 1);b.exportSVGElements.push(d, g);
        }
      }, destroyExport: function destroyExport(a) {
        var b = a ? a.target : this;a = b.exportSVGElements;var e = b.exportDivElements,
            c = b.exportEvents,
            f;a && (h(a, function (a, c) {
          a && (a.onclick = a.ontouchstart = null, f = "cache-" + a.menuClassName, b[f] && delete b[f], b.exportSVGElements[c] = a.destroy());
        }), a.length = 0);e && (h(e, function (a, c) {
          clearTimeout(a.hideTimer);I(a, "mouseleave");b.exportDivElements[c] = a.onmouseout = a.onmouseover = a.ontouchstart = a.onclick = null;C(a);
        }), e.length = 0);c && (h(c, function (a) {
          a();
        }), c.length = 0);
      } });K.menu = function (a, b, e, c) {
      return ["M", a, b + 2.5, "L", a + e, b + 2.5, "M", a, b + c / 2 + .5, "L", a + e, b + c / 2 + .5, "M", a, b + c - 1.5, "L", a + e, b + c - 1.5];
    };B.prototype.renderExporting = function () {
      var a = this,
          b = a.options.exporting,
          e = b.buttons,
          c = a.isDirtyExporting || !a.exportSVGElements;a.buttonOffset = 0;a.isDirtyExporting && a.destroyExport();c && !1 !== b.enabled && (a.exportEvents = [], G(e, function (b) {
        a.addButton(b);
      }), a.isDirtyExporting = !1);w(a, "destroy", a.destroyExport);
    };B.prototype.callbacks.push(function (a) {
      a.renderExporting();w(a, "redraw", a.renderExporting);h(["exporting", "navigation"], function (b) {
        a[b] = { update: function update(e, c) {
            a.isDirtyExporting = !0;n(!0, a.options[b], e);D(c, !0) && a.redraw();
          } };
      });
    });
  })(k);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ })
/******/ ]);