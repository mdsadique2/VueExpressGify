/**
 * @author: Ashwin
 */
module.exports = function (router) {

    var path = require('path');
    var history = require('connect-history-api-fallback');
    
    router.get('/', function (req, res, next) {
        // For some reason, you don't want to use jade, this is how you can use your own HTML.
        res.sendFile(_getViewPath('dist','index.html'));
        return;

        // res.render('index', {title: 'Front-End Challenge'});
    });

    /**
     * Since we've not registered an HTML view renderer, this should be used to get the absolute file path.
     * PS: extension is part of the filename
     *
     * @param fileName
     * @private
     */
    var _getViewPath = function (topDirectory, fileName) {
      console.log(__dirname + '/../../views/'+topDirectory+'/' + fileName);
        return path.resolve(__dirname + '/../../views/'+topDirectory+'/' + fileName);
    };
};
