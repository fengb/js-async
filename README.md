# Promises

## Tutorials

* http://www.html5rocks.com/en/tutorials/es6/promises/
* https://www.promisejs.org/

## References

* https://promisesaplus.com
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
* http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects

## Implementations

node.js and some browsers have Promise built-in. Since all of these are Promise/A+,
they are all used the same way.

* http://bluebirdjs.com/ - optimized for speed
* https://github.com/tildeio/rsvp.js - optimized for byte size, used by Ember

***Don't use these; there's really no point. But these were relevant in the past:***

* https://github.com/kriskowal/q
* https://github.com/dfilatov/vow
* https://api.jquery.com/deferred.promise/ - avoid like the plague, not Promise/A+ compatible

# async functions

I briefly mentioned them but they are AWESOME.

* https://babeljs.io/docs/plugins/transform-async-to-generator/ - ES7 syntax, transpiled into ES6
* http://bluebirdjs.com/docs/api/promise.coroutine.html
* https://github.com/tj/co
