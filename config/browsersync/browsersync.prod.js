var bs = require("browser-sync").create();
var paths = require('../core/paths');

bs.init({
    server: {
        baseDir: './' + paths.build.root
    }
});

bs.reload();
