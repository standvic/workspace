// main module (classes)

function App() {
    this.hub = new Hub();
    this.init = function () {
        this.hub.create();
        //engine.start();
    };
};

function Hub(params) {
    this.border = true;
    this.width = params.width || '500px';
    console.log(this.width);
    this.height = params.height || '500px';
    this.backgroundColor = params.backgroundColor || 'white';
    this.color = params.color || 'black';

    this.create = function()  {
        var bodyElem = window.body;
        console.log(bodyElem);
    };

};

function Procreator() {

};

function Block(params) {

}