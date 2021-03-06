(function(ext) {
    var gravity_reporter = -9.81;
    var y_vel = 0;
    
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.set_gravity = function(_gravity) {
        gravity_reporter = _gravity;
    };
    
    ext.gravity_reporter = function() { return gravity_reporter; };
    
    ext.set_y_vel = function(_y_vel_set) {
        y_vel = _y_vel_set;
    };
    
    ext.change_y_vel = function(_y_vel_change) {
        y_vel += _y_vel_change;
    };
    
    ext.y_vel = function() { return y_vel; };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ['', 'set gravity to %n', 'set_gravity', '-9.81'],
          ['r', 'gravity', 'gravity_reporter'],
          ['', 'set y velocity to %n', 'set_y_vel', '0'],
          ['', 'change y velocity by %n', 'change_y_vel', '0'],
          ['r', 'y velocity', 'y_vel']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Physics Extension', descriptor, ext);
})({});
