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


/**
 * Sends GET request
 * @return {Promise}
 *
 */
    sendGET: function(url, requestParams, userName, password) {
        var _url,
            params,
            paramsSize = Object.keys(requestParams).length,
            _xhro = this._xhrObject;

        if (paramsSize) {
            var counter = 0,
                paramList = [];
            for (var i in requestParams) {
                paramList.push(i + '=' + requestParams[i]);
            };
            params = '?' + paramList.join('&');
        };

        _url = url + params;

        return new Promise(function (resolve, reject) {
            _xhro.open('GET', _url, true);
            _xhro.onreadystatechange = function() {
                if (_xhro.readyState == 4) {
                    if(_xhro.status == 200) {
                        console.log(_xhro.responseText);
                    }
                }
            };
            _xhro.send(null);
        });
    }
}