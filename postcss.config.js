/* eslint-disable no-undef */
module.exports = {
    plugins: [
        require('stylelint'),
        require('postcss-import')({
            // plugins: [
            //     require('stylelint'),
            // ]
        }),
        require('postcss-font-magician'),
        require('postcss-cssnext')({
            feature: {
                autoprefixer: {
                    grid: true
                }
            }
        }),
    ]
}