define(function(require,exports,module){
    var mod = require('mod');
    exports.show = function(){
        alert(mod.a+mod.b);
    }
})