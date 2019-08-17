/**
 * @author: Ashwin
 * Bootstrap module which is in charge of handling the routing for different API versions
 */
(function (module) {
    'use strict';

    var enrouten   = require('express-enrouten');
    var express    = require('express');
    var history = require('connect-history-api-fallback');

    var API_PREFIX = '/api';

    var Router = function () {
    };

    Router.loadRoutingTable = function (express_app) {
        var self  = this;
        self._app = express_app;

        // Web endpoints
        // self._app.use('/', enrouten({
        //   // directory: './web/'
        //     directory: './web/'
        // }));

        // API endpoints
        self._app.use(API_PREFIX, enrouten({
            directory: './api/'
        }));

        // elb health check endpoint
        // self._app.use('/elb/health', function (req, res, next) {
        //     res.sendStatus(200);
        // });

        // 404 handler
        // self._app.use('*', function (req, res, next) {
        //     res.status(404).send('Whatever you were looking for is not here!');
        // });
        self._app.use(express.static('views/dist'));
        // self._app.use('*', (req, res) => res.sendFile(path.resolve('views', 'dist', 'index.html')));
        // self._app.use(staticFileMiddleware);
        // self._app.use(history({
        //   verbose: true,
        //   logger: console.log.bind(console),
        //   htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
        //   disableDotRule: true
        // }));
        // self._app.use(staticFileMiddleware);

    };

    module.exports = Router;

}(module));
