# iot-niceicon-widget

This is an example widget for the [iot-dashboard](http://iot-dashboard.org) build with webpack and babel.

"Pure plugins" that are build using the dashboard dev setup are only compiled with babel. Webpack has **the advantage** that it enables the loading of CommonJs and AMD dependencies where the "pure plugins" only allow to load dependencies that do not use any module system (i.e. that register them self in global scope).

## ToDo

* Load dependent CSS with webpack
* Load all images and font and inline them with webpack to solve same origin issues
