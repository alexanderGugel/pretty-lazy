Pretty Lazy
===========

Use custom tags without feeling guilty! *~0.462 kb*

Why do I need this?
-------------------

I'm going to tell you something you probably already know: Most web applications
have pretty horrifying DOM trees, three letter class names and lots of `<div>`s.

Want an example?

This is Facebook:

![Facebook](https://cdn.rawgit.com/alexanderGugel/pretty-lazy/master/screenshots/facebook.png)

Twitter:

![Twitter](https://cdn.rawgit.com/alexanderGugel/pretty-lazy/master/screenshots/twitter.png)

Gmail:

![Gmail](https://cdn.rawgit.com/alexanderGugel/pretty-lazy/master/screenshots/gmail.png)

What does this do?
------------------

Once the DOM is loaded, pretty-lazy does something pretty awesome: It registers
all unregistered HTML elements. Nothing to special, but this means that you can
use every custom element you like. Nevertheless, the element name must contain
a dash (-).

This means you can turn your existing `div`-hell into something more readable.

```html
<x-inbox>
    <x-mail>
        <x-from>Santa</x-from>
        <x-title>Happy Christmas!</x-title>
    </x-mail>
</x-inbox>
```

Your custom tags can - of course - also be styled via plain old CSS.

```css
x-mail {
    cursor: pointer;
}
```

What does this not do?
----------------------

It does not create a shadow DOM or other fancy stuff. If you need to do that,
make sure to include pretty-lazy **after** registering the elements on your own.

Usage
-----

```html
<script src="pretty-lazy.min.js"></script>
```

Can it be that easy? - There is only one way to find out!


See also
--------

* http://www.html5rocks.com/en/tutorials/webcomponents/customelements/

    Pretty good article on what WebComponents actually are.
