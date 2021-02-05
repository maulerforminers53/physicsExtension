(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.set_gravity = function(_gravity) {
        var gravity = _gravity;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ['', 'set gravity to %n', 'set_gravity', '-9.81'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Physics Extension', descriptor, ext);
})({});
