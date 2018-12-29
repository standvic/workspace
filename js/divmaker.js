// main module (classes)

function App() {
    this.hub = new Hub();
    this.init = function () {
        this.hub.create();
        //engine.start();
    };
};

function Hub(params) {
    this.width = params.width || '500px';
    this.height = params.height || '500px';
    this.backgroundColor = params.backgroundColor || 'white';
    this.borderColor = params.borderColor || 'black';
    this.borderWidth = params.borderWidth || '1px 1px 1px 1px';
    this.color = params.color || 'black';

    this.create = function()  {
        var bodyElem = document.body,
            mainDiv = bodyElem.querySelector('.main'),
            hubDiv = document.createElement('div');

        mainDiv.appendChild(hubDiv);
        hubDiv.classList.add('hub');

        hubDiv.style.backgroundColor = this.backgroundColor;
        hubDiv.style.width = this.width;
        hubDiv.style.height = this.height;
        hubDiv.style.borderColor = this.borderColor;
        hubDiv.style.color = this.color;
        hubDiv.style.borderWidth = this.borderWidth;

        console.log(hubDiv.style.borderWidth );
    };

};

function Divmaker() {

};

function Div(params) {

}