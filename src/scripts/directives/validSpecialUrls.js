(function () {
    'use strict';

    angular.module('ariaNg').directive('ngValidSpecialUrls', ['ariaNgCommonService', function (ariaNgCommonService) {
        var DIRECTIVE_ID = 'invalidSpecialUrls';

        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs, ngModel) {
                var handleChange = function (value) {
                    if (angular.isUndefined(value) || value === '') {
                        return;
                    }

                    var blocks = ariaNgCommonService.parseSpecialLinksFromOriginInput(value);
                    var valid = blocks && blocks.length > 0;

                    ngModel.$setValidity(DIRECTIVE_ID, valid);
                };

                scope.$watch(function () {
                    return ngModel.$viewValue;
                }, handleChange);
            }
        };
    }]);
}());