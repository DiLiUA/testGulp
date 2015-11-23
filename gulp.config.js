module.exports = {
    paths: {
        src: {
            scripts:   {
                libs: [
                    './node_modules/jquery/dist/jquery.min.js',
                    './src/plugins/**/*.js'
                ],
                app: './src/js/**/*.js'
            },
            styles:    {
                libs: [
                    './src/plugins/**/*.css'
                ],
                //app: './src/styles/**/*.css',
                app: './src/scss/styleAll.scss',
                appAll: './src/scss/**/*.scss'
            },
            templates: [
                './src/index.html'
            ],
            img: [
                './src/images/*.jpg',
                './src/images/**/*.png',
                './src/images/**/*.gif',
            ],
            fonts: [
                './src/fonts/**/*.eot',
                './src/fonts/**/*.ttf',
                './src/fonts/**/*.woff',
                './src/fonts/**/*.woff',
                './src/fonts/**/*.woff2',
                './src/fonts/**/*.svg',
            ]
        },
        dist: {
            serverRoot: 'dist',
            scripts: {
                libs: {
                    file: 'libs.js',
                    dir: './dist/js'
                },
                app: {
                    file: 'app.js',
                    dir: './dist/js'
                },
            },
            styles: {
                libs: {
                    file: 'libs.css',
                    dir: './dist/css'
                },
                app: {
                    file: 'style.css',
                    dir: './dist/css'
                }
            },
            templates: {
                file: 'index.html',
                dir: './dist'
            },
            img: './dist/images',
            fonts: './dist/fonts'
        },
    },
};