(function arrayExtention() {
  let arr = [1, 2, 3, 4, 5, 6];

  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
    return this.slice(n);
  };

  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };

  Array.prototype.sum = function () {
    return this.reduce((prValue, currentValue) => prValue + currentValue, 0);
  };

  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();
