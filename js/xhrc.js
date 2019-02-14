/**Module for representing XHR Client
 *@module XHR Client
 */

var XHRC = XHRC || {};


/**
 * Constructor of RESTClient class.
 * @constructor
 * @param {object} params - The parameters for the constructor.
 */
XHRC.RESTClient = function(params) {

    /**
     * XHR instance
     * @type {XMLHttpRequest}
     * @private
     */
    this._xhrObject = this._getXHR();

    console.log('XHR instance is created');

    return this;
}


XHRC.RESTClient.prototype = {

/**
 * Returns XMLHttpRequest object
 * @return {XMLHttpRequest}
 * @private
 */
    _getXHR: function() {
        var xhr;
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                xhr = false;
            }
        }
        if (!xhr && typeof XMLHttpRequest!='undefined') {
            xhr = new XMLHttpRequest();
        }
        return xhr;
    },


}