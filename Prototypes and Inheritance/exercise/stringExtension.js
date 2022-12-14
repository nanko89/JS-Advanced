(function solve() {
  String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.toString() : str + this;
  };

  String.prototype.ensureEnd = function (str) {
    return this.endsWith(str) ? this.toString() : this + str;
  };

  String.prototype.isEmpty = function () {
    return this.lenght === 0;
  };

  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    } else if (n < 4) {
      return ".".repeat(n);
    } else {
      let lastIndexOfSpace = this.lastIndexOf(" ");

      if (lastIndexOfSpace === -1) {
        return this.slice(0, n - 3) + "...";
      }
      return this.slice(0, lastIndexOfSpace) + "...";
    }
  };

  String.format = function (str, ...params) {
    params.forEach((key, index) => {
      str = str.replace(`{${index}}`, key);
    });
    return str;
  };
})();

let str = "my string";
str = str.ensureStart("my");
console.log(str);
str = str.ensureStart("hello ");
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format("The {0} {1} fox", "quick", "brown");
console.log(str);
str = String.format("jumps {0} {1}", "dog");
console.log(str);
