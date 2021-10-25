# esbuild-static-dce

Input file

```js
class Foo {
  static bar() {
    console.log('bar');
  }
  static qux() {
    console.log('qux');
  }
}

Foo.qux();
```

**esbuild output**

```js
(() => {
  var o = class {
    static bar() {
      console.log('bar');
    }
    static qux() {
      console.log('qux');
    }
  };
  o.qux();
})();
```

**advanced closure compiler output**

```js
console.log('qux');
```

**parcel (production) output**

```js
(class {
  static bar() {
    console.log('bar');
  }
  static qux() {
    console.log('qux');
  }
}.qux());
```
