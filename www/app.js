requirejs.config({
    baseUrl: "./",
    paths: {
        "jquery": "app/js/lib/jquery",
        "underscore": "app/js/lib/underscore",
        "backbone": "app/js/lib/backbone",
        "bootstrap.bundle": "app/js/lib/bootstrap/bootstrap.bundle.min",
        "popper": "app/js/lib/popper.min",
        "tpl": "app/js/lib/tpl",
        "backbone-pageable": "app/js/lib/backbone-pageable.min",
        "react": "app/js/lib/react.development",
        "react-dom": "app/js/lib/react-dom.development",
    },
    shim: {
        "jquery": {
            exports: ["$", "jquery"]
        },
        "lodash": {
            exports: "_",
        },
        "backbone": {
            exports: "Backbone",
            deps: ["jquery", "underscore"]
        },
        "backbone-pageable": {
            deps: ["backbone"]
        }
        

    }
});

requirejs(["app/js/main"]);