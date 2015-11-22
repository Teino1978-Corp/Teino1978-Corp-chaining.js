/**
 * Implementation of Java way method() function
 * @description 每次都在實體上用this重新新增方法是沒效率的，可重用的方法應新增在建構式的prototype中
 */


// Use Constructor to define a "class"
var Person = function(name) {
    this.name = name;
}.method('getName', function() {
    return this.name;
}).method('setName', function(name) {
    this.name = name;
    return this;
});


/**
 * Implement method()
 * @param { name } The name of the adding method
 * @param { implementation } The implementation of the adding method
 */
if (typeof Function.prototype.method !== 'function') {
    Function.prototype.method = function(name, implementation) {
        this.prototype[name] = implementation;
        return this;
    };
}