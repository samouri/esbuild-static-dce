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
