
/**
 * Module dependencies.
 */

var integration = require('analytics.js-integration');
var mapper = require('./mapper');

/**
 * Expose `opentable`
 *
 */

var Opentable = module.exports = integration('opentable')
  .endpoint('http://analytics-collector.pp-uswest2.otenv.com/')
  .retries(2);

/**
 * Identify.
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Opentable.prototype.identify = function(payload, fn){
  return this
    .post()
    .type('json')
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Track.
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Opentable.prototype.track = function(payload, fn){
  return this
    .post()
    .type('json')
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Page.
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Opentable.prototype.page = function(payload, fn){
  return this
    .post()
    .type('json')
    .send(payload)
    .end(this.handle(fn));
};
