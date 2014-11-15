;(function init () {

  var prettyLazy = {
    registeredElements: {},
    unresolvedElements: {}
  };

  var supportsCustomElements = function () {
    return 'registerElement' in document;
  };

  // document.registerElement in required in order to register unresolved
  // elements
  if (!supportsCustomElements) {
    return;
  }

  var registerUnresolvedElements = function (tagNames) {
    var elements = document.querySelectorAll(':unresolved');

    for (var i = 0; i < elements.length; i++) {
      prettyLazy.unresolvedElements[elements[i].tagName] = true;
    }

    for (var tagName in prettyLazy.unresolvedElements) {
      prettyLazy.registeredElements[tagName] = document.registerElement(tagName);
      delete prettyLazy.unresolvedElements[tagName];
    }
  };

  var onDOMContentLoaded = function () {
    registerUnresolvedElements();
  };

  // Start as soon as the DOM has been loaded.
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

  window.prettyLazy = prettyLazy;

}.call(this));
