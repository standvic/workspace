
/**
 * Represents a container for the elements.
 * @constructor
 * @param {object} params - The parameters of the hub.
 */
function Container(params) {

    var containerDiv = document.createElement('div');

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

    /**
     * Applies parameters to container element and renders it in page.
     */
    this.render = function()  {
        var bodyElem = document.body,
            parentDiv = bodyElem.querySelector('.main') || bodyElem.querySelector('div');


        parentDiv.appendChild(containerDiv);
        containerDiv.classList.add('container');

        containerDiv.style.width = containerDiv.style.width || this.width || this.WIDTH;
        containerDiv.style.height = containerDiv.style.height || this.height || this.HEIGHT;
        containerDiv.style.backgroundColor = containerDiv.style.backgroundColor || this.backgroundColor || '#ebfff0';
        containerDiv.style.float =  containerDiv.style.float || 'left';
        containerDiv.style.border = containerDiv.style.border || 'black solid 1px';

    };

    /**
     * Changes container background color
     * @param {string} bgColor
     */
    this.changeBackGroundColor = function(bgColor) {
        containerDiv.style.backgroundColor = bgColor;
    };

    /**
     * Appends element into container
     * @param {Element} element
     */
    this.appendElements = function(elements) {
        elements.forEach(function(item) {
            if (item instanceof Element) {
                containerDiv.appendChild(item);
            } else {
                console.log('Object is not the Element instance!');
            };
        });

    };

    /**
     * Returns post Element instance
     * @return {Element}
     */
    this.getElement = function() {
        return containerDiv;
    }
};


/**
 * Represents a post
 * @constructor
 * @param {object} options - The parameters of the new post.
 */
function Post(options) {

    var avatarSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAABGdBTUEAALGPC/xhBQ' +
                    'AAAAFzUkdCAK7OHOkAAAASUExUReLn6pOep6Grs9Ta3rS9w8TL0byCdPYAAAFZSURBVGje7ZjbDsMgDEObxPz/L4+206bdCoZ4' +
                    '0qb6qU9HVnBJwrKcOpWoAndb5Y6SS965d3mRofPw8Q694WOaDfssiGwnmG+wp+hN9gS9gz1O72FXenpOZjNTrFdFVZSxwsD6RR' +
                    'fGGAmN09adgrsoKgOBAQmH7DjJIw0aHrqSU0UHDYcqiGQYpXAzYVxO+PfhvxtF6R8qvVukt6L0Ptd2ImkPlXZ/0jo7LSonLso6' +
                    'P+Yqp1ziRxpZXJSbhXYn6qOPsqV7qHaDbp6qL3NC7o74xfcW7UvR5h5PfMSSqbg+z62Pc7nkU3+lqEmpUbmlsX4CZT4zawAPrp' +
                    'bxVFZwV7Pgf6gAMRZx/EJP/7384Ef/3qss3IbVwM+gG/hZ9BEelqJ3HSrD9qfeCkvUo/lE26/0ZPZjaSxfUMLvdFPSTUnXwK+n' +
                    'KoLv65IK7kr4VnYZfC27Du5KeLUuhPsFpcoSLmEPiHAAAAAASUVORK5CYII=',
        text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim aliquam porta. '+
               'Phasellus interdum sapien quis gravida gravida. ' +
               'Vivamus ultricies, erat nec posuere convallis, tortor diam feugiat diam, in sodales arcu metus nec orci. ' +
               'In vitae ultrices odio, commodo blandit magna. ' +
               'Vestibulum vel felis volutpat, consequat lorem id, tristique purus. ' +
               'Sed vel est accumsan, bibendum dolor et, convallis arcu. ',
        nickName = 'Guest',
        pubDate = new Date(),
        container = new Container(),
        avatarElement = document.createElement('img'),
        headElement = new Container(),
        nicknameElement = document.createElement('span'),
        pubDateElement = document.createElement('span'),
        textElement = document.createElement('div');

    if (options) {
         nickName = options.nicknName || nickName;
         text = options.text || text;
         avatarSrc = options.avatarSrc || avatarSrc;
         pubDate = options.pubDate || pubDate;
    };

    /**
     * Builds part of DOM tree for the new post
     * @return {Post}
     */
    this.build = function() {

        avatarElement.setAttribute('src', avatarSrc);
        nicknameElement.innerHTML = nickName;
        nicknameElement.innerHTML = nicknameElement.innerHTML;
        textElement.innerHTML = text;
        pubDateElement.innerHTML = '&nbsp;&#8226&nbsp;' + ' Submitted on ' + pubDate.toLocaleDateString('ru') +
                                   ' at '+ pubDate.toLocaleTimeString('ru');

        headElement.appendElements([nicknameElement, pubDateElement]);
        container.appendElements([avatarElement, headElement.getElement(), textElement]);

        return this;
    };

    /**
     * Set styles for inner post elements
     * @return {Post}
     */
    this.stylize = function() {

        avatarElement.style.float = 'left';
        avatarElement.style.margin = '5px 5px 5px 5px';
        avatarElement.style.width = '64px';
        avatarElement.style.height = '64px';
        textElement.style.margin = '5px 5px 5px 5px';

        return this;
    };

    /**
     * Sets classes to inner post elements
     * @return {Post}
     */
    this.classify = function () {

        avatarElement.classList.add('post-avatar');
        nicknameElement.classList.add('badge', 'badge-pill', 'badge-light');
        pubDateElement.classList.add('post-pubdate');
        textElement.classList.add('post-text');

        return this;
    };

    /**
     * Returns post Element instance
     * @return {Element}
     */
    this.getPostElement = function() {
        return container.getElement();
    };
};


/**
 * Make post and send it
 * @constructor
 *
 */
function PostMaker() {
    var container = document.createElement('form'),
        posts = document.createElement('div'),
        textField = document.createElement('textarea'),
        textFieldLabel = document.createElement('p'),
        nameField = document.createElement('input'),
        nameFieldLabel = document.createElement('p'),
        submitButton = document.createElement('submit'),
        postsArray = [];

}