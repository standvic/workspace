// main module (classes)

function App(hub, engine) {
    this.init = function () {
        hub.create();
        engine.start();
    };
};

function Hub(params) {
    this.border = true;
    this.width = params.width || '500px';
    this.height = params.height || '500px';
    this.backgroundColor = params.backgroundColor || 'white';
    this.color = params.color || 'black';

    this.create = function()  {
        var bodyElem = window.body;
    };

};

function Procreator() {

};

function Block(params) {

}