/**
 * Created by vmak on 11/1/15.
 */
(function() {

    var AppComponent = ng
        .Component({
            selector: 'my-app',
            template: '<h1>My First Angular 2 App</h1><p>Vika\'s app. Mama</p>'
        })
        .Class({
            constructor: function () {
            }
        });

    document.addEventListener('DOMContentLoaded', function () {
        ng.bootstrap(AppComponent);
    });

})();