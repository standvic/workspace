// main module (classes)

function App() {
    this.hub = new Hub();
    this.init = function () {
        this.hub.create();
        //engine.start();
    };
};

function Hub(width, height, backgroundColor) {
    this.width = width || '800px';
    this.height = height || '500px';
    this.backgroundColor = backgroundColor || 'white';

    this.create = function()  {
        var bodyElem = document.body,
            mainDiv = bodyElem.querySelector('.main'),
            hubDiv = document.createElement('div');

        mainDiv.appendChild(hubDiv);
        hubDiv.classList.add('hub');

        hubDiv.style.width = this.width;
        hubDiv.style.height = this.height;
        hubDiv.style.backgroundColor = this.backgroundColor;

        //console.log(hubDiv);
    };

};

function Blockmaker() {

};

function Block(params) {

}