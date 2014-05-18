/**
 * Created by AlexCD on 24.04.2014.
 */
/*global angular, CustomJsSlider, Integers, CheckRange*/
angular.module('modules.directives', [])
    .directive('customJsSlider', CustomJsSlider)
    .directive('integers', Integers)
    .directive('checkRange', CheckRange);