/**
 * Constants Construction
 * @description 可以直接用全大寫的naming convention來模擬，此處實際建立一個指定常數的實作
 * @return {[type]} [description]
 */

// Using naming convention directly
var Widget = function() {
    // implement......
};

Widget.MAX_HEIGHT = 320;
Widget.MAX_WIDTH = 480;

// Implement constant() method
var constant = (function() {
    var constants = {},
        ownProp = Object.prototype.hasOwnProperty,
        allowed = {
            string: 1,
            number: 1,
            boolean: 1
        },
        prefix = (Math.random() + "_").slice(2);

    return {
        set: function(name, value) {
            if (this.isDefined(name)) {
                return false;
            }
            if (! ownProp.call(allowed, typeof value)) {
                return false;
            }
            constants[prefix + name] = values;
            return true;
        },
        isDefined: function(name) {
            return ownProp.call(constants, prefix + name);
        },
        get: function(name) {
            if (this.isDefined(name)) {
                return constants[prefix + name];
            }
            return null;
        }
    };

}());
