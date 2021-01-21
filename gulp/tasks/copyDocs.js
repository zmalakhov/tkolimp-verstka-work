const gulp = require('gulp');

// копирование pdf-документов

module.exports = function copyPdf() {
    return gulp.src([
        'dev/static/images/docs/**/*.{pdf,jpg,jpeg,docx}'
        ]
    )
        .pipe(gulp.dest('dist/static/images/docs'))
};


