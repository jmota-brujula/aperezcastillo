/*---------------------------------------------
 * html CONFIGURATION TASK *
 *----------------------------------------------*/

/* Compile files *.html of our dev */


(function () {
    'use strict';

    module.exports = function (GULP, GLP, CONFIG, UTILS) {

        GULP.task(
            'template',
            'Compila nuestros archivos html. Compila en: ' + CONFIG.folderPaths.build.root,
            template
        );

        function template() {
            switch(CONFIG.template) {
                case 'html':
                default:
                    repository();
                    html();
                    break;
            }
        }
        function repository() {
            return GULP.src([
                CONFIG.folderPaths.template.repository + '**/*.html',
            ])
                .pipe(GULP.dest(CONFIG.folderPaths.build.repository));
        }
        function html() {
            return GULP.src([
                CONFIG.folderPaths.template.html + '/*.html',
                CONFIG.folderPaths.template.html + '/**'
            ])
                .pipe(GULP.dest(CONFIG.folderPaths.build.views));
        }
    };
})();