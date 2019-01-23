// main module (classes)

function App() {
    this.hub = new Hub();
    this.init = function () {
        this.hub.create();
        //engine.start();
    };
};

function Hub(params) {

    this.WIDTH = '800px';
    this.HEIGHT = '600px';
    if (params) {
        this.width = params.width;
        this.height = params.height;
        this.backgroundColor = params.backgroundColor;
    };

    this.create = function()  {
        var bodyElem = document.body,
            mainDiv = bodyElem.querySelector('.main') || bodyElem.querySelector('div'),
            hubDiv = document.createElement('div');

        mainDiv.appendChild(hubDiv);
        hubDiv.classList.add('hub');

        hubDiv.style.width = hubDiv.style.width || this.width || this.WIDTH;
        hubDiv.style.height = hubDiv.style.height || this.height || this.HEIGHT;
        hubDiv.style.backgroundColor = hubDiv.style.backgroundColor || this.backgroundColor || '#d9fff8';
        hubDiv.style.float =  hubDiv.style.float || 'left';
        hubDiv.style.border = hubDiv.style.border || 'black solid 1px';

    };

    this.changeBackGroundColor = function(bgColor) {
        hubDiv.style.backgroundColor = bgColor;
    }
};

function Divmaker() {

    this.WIDTH = '200px';
    this.HEIGHT = '600px';

    this.create = function()  {
        var bodyElem = document.body,
            mainDiv = bodyElem.querySelector('.main') || bodyElem.querySelector('div'),
            divmaker = document.createElement('div');

        mainDiv.appendChild(divmaker);
        divmaker.classList.add('divmaker');

        divmaker.style.width = divmaker.style.width || this.WIDTH;
        divmaker.style.height = divmaker.style.height || this.HEIGHT;
        divmaker.style.backgroundColor = divmaker.style.backgroundColor || '#ebfff0';
        divmaker.style.float =  divmaker.style.float || 'left';
        divmaker.style.marginLeft =  divmaker.style.marginLeft || '20px';
    };

};

function Div(params) {

}