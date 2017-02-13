(function() {
    angular.module('app-module', []);

    angular
        .module('app-module')
        .controller('MMSController', [
            function() {
                var self = this;

                self.firstName = '';
                self.lastName = '';

                self.getFullName = function() {
                    return self.firstName + ' ' + self.lastName;
                };

                return self;
            }
        ]);
})();
