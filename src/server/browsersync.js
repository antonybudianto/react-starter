// require the module as normal
var bs = require("browser-sync").create();

// .init starts the server
bs.init({
    server: {
        baseDir: './src/client/public'
    },
    files: [
        "src/client/public/index.html",
        "src/client/public/bundle.js",
        "src/client/public/css/*.css"
    ]
});

// Now call methods on bs instead of the
// main browserSync module export
bs.reload();