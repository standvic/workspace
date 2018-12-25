// main module (classes)

function App (hub, engine) {
    this.init = function () {
        hub.create();
        engine.start();
    };
};

function Hub(params) {

};
