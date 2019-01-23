// main module (classes)

function App() {
    this.hub = new Hub();
    this.init = function () {
        this.hub.create();
        //engine.start();
    };
};

function Hub(params) {
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

        hubDiv.style.width = hubDiv.style.width || this.width || '800px';
        hubDiv.style.height = hubDiv.style.height || this.height || '600px';
        hubDiv.style.backgroundColor = hubDiv.style.backgroundColor || this.backgroundColor || '#d9fff8';
    };

    this.changeBackGroundColor = function(bgColor) {
        hubDiv.style.backgroundColor = bgColor;
    }
};

function Divmaker() {
    this.create = function()  {
        var bodyElem = document.body,
            mainDiv = bodyElem.querySelector('.main') || bodyElem.querySelector('div'),
            divmaker = document.createElement('div');

        mainDiv.appendChild(divmaker);
        divmaker.classList.add('divmaker');
    };

};

function Div(params) {

}