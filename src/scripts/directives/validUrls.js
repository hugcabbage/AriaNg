(function () {
    'use strict';

    angular.module('ariaNg').directive('ngValidUrls', ['ariaNgCommonService', function (ariaNgCommonService) {
        var DIRECTIVE_ID = 'invalidUrls';

        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs, ngModel) {
                var handleChange = function (value) {
                    if (angular.isUndefined(value) || value === '') {
                        return;
                    }

                    var blocks = ariaNgCommonService.parseDownloadLinksFromOriginInput(value);
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
