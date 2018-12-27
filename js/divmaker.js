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
    this.height = params.height || '500px';
    this.backgroundColor = params.backgroundColor || 'white';
    this.color = params.color || 'black';

    this.create = function()  {
        var bodyElem = document.body;

    };

};

function Divmaker() {

};

function Div(params) {

}