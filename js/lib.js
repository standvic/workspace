/** Module for representing classes.
 * @module lib
 */
/*var lib = (function () {*/

    /**
     * Represents a container for the elements.
     * @constructor
     * @param {object} params - The parameters of the container.
     */
    function Container(params) {

        /**
         * Container 'div' element
         * @type {string}
         * @private
         */
        this._containerDiv = document.createElement('div');

        /**
         * Width of container 'div' element
         * @type {string}
         */
        this.WIDTH = '100%';
        /**
         * Height of container 'div' element
         * @type {string}
         */
        this.HEIGHT = '100%';

        if (params) {
            this.width = params.width;
            this.height = params.height;
            this.backgroundColor = params.backgroundColor;
        };
    };

        /**
         * Applies parameters to container element and renders it in page.
         */
        Container.prototype.render = function()  {
            var bodyElem = document.body,
                parentDiv = bodyElem.querySelector('.main') || bodyElem.querySelector('div');


            parentDiv.appendChild(this._containerDiv);
            this._containerDiv.classList.add('container');

            this._containerDiv.style.width = this._containerDiv.style.width || this.width || this.WIDTH;
            this._containerDiv.style.height = this._containerDiv.style.height || this.height || this.HEIGHT;
            this._containerDiv.style.backgroundColor = this._containerDiv.style.backgroundColor || this.backgroundColor || '#ebfff0';
            this._containerDiv.style.float =  this._containerDiv.style.float || 'left';
            this._containerDiv.style.border = this._containerDiv.style.border || 'black solid 1px';

        };

        /**
         * Changes container background color
         * @param {string} bgColor
         */
        Container.prototype.changeBackGroundColor = function(bgColor) {
            this._containerDiv.style.backgroundColor = bgColor;
        };

        /**
         * Appends element into container
         * @param {Element} element
         */
        Container.prototype.appendElements = function(elements) {
            var self = this;
            elements.forEach(function(item) {
                if (item instanceof Element) {
                    self._containerDiv.appendChild(item);
                } else {
                    console.log('Object is not the Element instance!');
                };
            });

        };

        /**
         * Returns post Element instance
         * @return {Element}
         */
        Container.prototype.getElement = function() {
            return this._containerDiv;
        }


        /**
         * Represents a container that reacts on click event.
         * @constructor
         * @augments Container
         * @param {object} params - The parameters of the container.
         */
        function ClickableContainer(params) {
            Container.apply(this,arguments);
            this._containerDiv.onclick = params.clickListener || this.clickListener.bind(this);
        }


        ClickableContainer.prototype = Object.create(Container.prototype);
        ClickableContainer.prototype.constructor = ClickableContainer;

        /**
         * Randomly changes container bacground color by clicking (default method)
         * @param {Event} event
         */
        ClickableContainer.prototype.clickListener = function (event) {
            var colour = '#' + Math.round(Math.random()*1000000).toString();
            //this._containerDiv.style.backgroundColor = colour;
            this.changeBackGroundColor(colour);
        }

    /**
     * Represents a message
     * @constructor
     * @param {object} options - The parameters of the new post.
     */
    function Message(options) {

        /**
         * Source path for an avatar
         * @type {string}
         */
        this.avatarSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAABGdBTUEAALGPC/xhBQ' +
                        'AAAAFzUkdCAK7OHOkAAAASUExUReLn6pOep6Grs9Ta3rS9w8TL0byCdPYAAAFZSURBVGje7ZjbDsMgDEObxPz/L4+206bdCoZ4' +
                        '0qb6qU9HVnBJwrKcOpWoAndb5Y6SS965d3mRofPw8Q694WOaDfssiGwnmG+wp+hN9gS9gz1O72FXenpOZjNTrFdFVZSxwsD6RR' +
                        'fGGAmN09adgrsoKgOBAQmH7DjJIw0aHrqSU0UHDYcqiGQYpXAzYVxO+PfhvxtF6R8qvVukt6L0Ptd2ImkPlXZ/0jo7LSonLso6' +
                        'P+Yqp1ziRxpZXJSbhXYn6qOPsqV7qHaDbp6qL3NC7o74xfcW7UvR5h5PfMSSqbg+z62Pc7nkU3+lqEmpUbmlsX4CZT4zawAPrp' +
                        'bxVFZwV7Pgf6gAMRZx/EJP/7384Ef/3qss3IbVwM+gG/hZ9BEelqJ3HSrD9qfeCkvUo/lE26/0ZPZjaSxfUMLvdFPSTUnXwK+n' +
                        'KoLv65IK7kr4VnYZfC27Du5KeLUuhPsFpcoSLmEPiHAAAAAASUVORK5CYII=';

        /**
         * Message text
         * @type {string}
         */
        this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim aliquam porta. '+
               'Phasellus interdum sapien quis gravida gravida. ' +
               'Vivamus ultricies, erat nec posuere convallis, tortor diam feugiat diam, in sodales arcu metus nec orci. ' +
               'In vitae ultrices odio, commodo blandit magna. ' +
               'Vestibulum vel felis volutpat, consequat lorem id, tristique purus. ' +
               'Sed vel est accumsan, bibendum dolor et, convallis arcu. ';

        /**
         * Nickname for message author
         * @type {string}
         */
        this.nickName = 'Guest';

        /**
         * Publication date
         * @type {Date}
         */
        this.pubDate = new Date();

        this._container = new Container();
        this._avatarElement = document.createElement('img');
        this._headElement = new Container();
        this._nicknameElement = document.createElement('span');
        this._pubDateElement = document.createElement('span');
        this._textElement = document.createElement('div');

        if (options) {
             this.nickName = options.nicknName || this.nickName;
             this.text = options.text || this.text;
             this.avatarSrc = options.avatarSrc || this.avatarSrc;
             this.pubDate = options.pubDate || this.pubDate;
        };
    };

        /**
         * Builds part of DOM tree for the new post
         * @return {Message}
         */
        Message.prototype.build = function() {

            this._avatarElement.setAttribute('src', this.avatarSrc);
            this._nicknameElement.innerHTML = this.nickName;
            this._nicknameElement.innerHTML = this._nicknameElement.innerHTML;
            this._textElement.innerHTML = this.text;
            this._pubDateElement.innerHTML = '&nbsp;&#8226&nbsp;' + ' Submitted on ' + this.pubDate.toLocaleDateString('ru') +
                                       ' at '+ this.pubDate.toLocaleTimeString('ru');

            this._headElement.appendElements([this._nicknameElement, this._pubDateElement]);
            this._container.appendElements([this._avatarElement, this._headElement.getElement(), this._textElement]);

            return this;
        };

        /**
         * Set styles for inner post elements
         * @return {Message}
         */
        Message.prototype.stylize = function() {

            this._avatarElement.style.float = 'left';
            this._avatarElement.style.margin = '5px 5px 5px 5px';
            this._avatarElement.style.width = '64px';
            this._avatarElement.style.height = '64px';
            this._textElement.style.margin = '5px 5px 5px 5px';

            return this;
        };

        /**
         * Sets classes to inner post elements
         * @return {Message}
         */
        Message.prototype.classify = function () {

            this._avatarElement.classList.add('post-avatar');
            this._nicknameElement.classList.add('badge', 'badge-pill', 'badge-light');
            this._pubDateElement.classList.add('post-pubdate');
            this._textElement.classList.add('post-_text');

            return this;
        };

        /**
         * Returns post Element instance
         * @return {Element}
         */
        Message.prototype.getPostElement = function() {
            return this._container.getElement();
        };



    /**
     * Represents a message which text might be edited.
     * @constructor
     * @augments Message
     * @param {object} params - The parameters of the container.
     */
    function EditableMessage(options) {
        Message.apply(this, arguments);
        this._container = new ClickableContainer({clickListener: function(){ this._textElement.innerHTML = prompt()}.bind(this)});
    }

    EditableMessage.prototype = Object.create(Message.prototype);
    EditableMessage.prototype.constructor = EditableMessage;

/*
    return {
        Container: Container,
        Message: Message
    }

})();*/
