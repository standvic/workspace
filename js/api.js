
function App() {
    this.hub = new Hub();
    this.init = function () {
        this.hub.create();
        //engine.start();
    };
};


function Hub(params) {

    var hubDiv = document.createElement('div');

    this.WIDTH = '100%';
    this.HEIGHT = '100%';

    if (params) {
        this.width = params.width;
        this.height = params.height;
        this.backgroundColor = params.backgroundColor;
    };

    this.create = function()  {
        var bodyElem = document.body,
            mainDiv = bodyElem.querySelector('.main') || bodyElem.querySelector('div');


        mainDiv.appendChild(hubDiv);
        hubDiv.classList.add('hub');

        hubDiv.style.width = hubDiv.style.width || this.width || this.WIDTH;
        hubDiv.style.height = hubDiv.style.height || this.height || this.HEIGHT;
        hubDiv.style.backgroundColor = hubDiv.style.backgroundColor || this.backgroundColor || '#ebfff0';
        hubDiv.style.float =  hubDiv.style.float || 'left';
        hubDiv.style.border = hubDiv.style.border || 'black solid 1px';

    };

    this.changeBackGroundColor = function(bgColor) {
        this.hubDiv.style.backgroundColor = bgColor;
    };

    this.putElement = function(element) {
        if (element instanceof Element) {
            hubDiv.appendChild(element);
        } else {
            console.log('Object is not the Element instance!');
        };
    };
};


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
        pubDate = new Date().toLocaleString('ru'),
        container = document.createElement('div'),
        avatarElement = document.createElement('img'),
        headElement = document.createElement('div'),
        nicknameElement = document.createElement('span'),
        pubDateElement = document.createElement('span'),
        textElement = document.createElement('div');

    if (options) {
         nickName = options.nicknName || nickName;
         text = options.text || text;
         avatarSrc = options.avatarSrc || avatarSrc;
         pubDate = options.pubDate || pubDate;
    };

    this.build = function() {

        avatarElement.setAttribute('src', avatarSrc);

        nicknameElement.innerHTML = nickName;
        nicknameElement.innerHTML = nicknameElement.innerHTML;

        textElement.innerHTML = text;

        pubDateElement.innerHTML = '&nbsp;&#8226&nbsp;' + pubDate;

        headElement.appendChild(nicknameElement);
        headElement.appendChild(pubDateElement);

        container.appendChild(avatarElement);
        container.appendChild(headElement);
        container.appendChild(textElement);

        return this;

    };

    this.stylize = function() {

        avatarElement.style.float = 'left';
        avatarElement.style.margin = '5px 5px 5px 5px';
        textElement.style.margin = '5px 5px 5px 5px';
        container.style.padding = '10px 10px 10px 10px ';

        return this;
    };

    this.classify = function () {

        container.classList.add('post-container');
        headElement.classList.add('post-header');
        nicknameElement.classList.add('badge', 'badge-pill', 'badge-light');
        avatarElement.classList.add('post-avatar');
        textElement.classList.add('post-text');

        return this;
    };

    this.getElement = function() {
        return container;
    }

};

