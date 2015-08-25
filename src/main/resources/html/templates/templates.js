angular.module('Calculator').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('html/partials/DigitsPanel.html',
    "<!--Placeholder for the first row digits --><div class=\"smaller-digits\"><div class=\"button-holder-digits\"><button class=\"digits-button\" ng-click=\"readDigitValue('I')\">{{i18n.NUMBER_I}}</button></div><div class=\"button-holder-digits\"><button class=\"digits-button\" ng-click=\"readDigitValue('V')\">{{i18n.NUMBER_V}}</button></div><div class=\"button-holder-digits\"><button class=\"digits-button\" ng-click=\"readDigitValue('X')\">{{i18n.NUMBER_X}}</button></div></div><!--Placeholder for the second row digits --><div class=\"higher-digits\"><div class=\"button-holder-digits\"><button class=\"digits-button\" ng-click=\"readDigitValue('L')\">{{i18n.NUMBER_L}}</button></div><div class=\"button-holder-digits\"><button class=\"digits-button\" ng-click=\"readDigitValue('C')\">{{i18n.NUMBER_C}}</button></div><div class=\"button-holder-digits\"><button class=\"digits-button\" ng-click=\"readDigitValue('D')\">{{i18n.NUMBER_D}}</button></div></div>"
  );


  $templateCache.put('html/partials/FunctionsPanel.html',
    "<!--Placeholder for the the clear and Equals(Result) buttons --><div class=\"clear-digits-panel\"><div class=\"button-holder-clear\"><button class=\"digits-button\" ng-click=\"clearResult()\">{{i18n.CLEAR}}</button></div><div class=\"button-holder-clear\"><button class=\"digits-button\" ng-click=\"showResult()\">{{i18n.EQUALS}}</button></div></div><div class=\"main-functions-panel\"><!--Placeholder for the Add/Subtract buttons --><div class=\"top-functions-panel\"><div class=\"button-holder-functions\"><button class=\"digits-button\" ng-click=\"readOperator('+')\">{{i18n.ADD}}</button></div><div class=\"button-holder-functions\"><button class=\"digits-button\" ng-click=\"readOperator('square')\"><span class=\"label-class\">{{i18n.SQUARE}}</span></button></div></div><!--Placeholder for the Multiply and Power of N buttons --><div class=\"lower-functions-panel\"><div class=\"button-holder-functions\"><button class=\"digits-button\" ng-click=\"readOperator('*')\">{{i18n.MULTIPLY}}</button></div><div class=\"button-holder-functions\"><button class=\"digits-button\" ng-click=\"readOperator('^')\">{{i18n.POWER_OF_N}}</button></div></div></div>"
  );


  $templateCache.put('html/partials/Navigator.html',
    "<div ng-controller=\"MainController\"><div class=\"calculator-main-panel\"><!--Result Display Section --><input type=\"text\" disabled=\"true\" ng-model=\"result_display_value\" class=\"result-width\"><!--This HTML has 2 panels. 1 for Digits interaction. 2 for Functions. If required, Custom Directives can also be used instead of ng-templates for further interaction if any. --><div class=\"calculator-interactive-panel\"><div class=\"calculator-digits-panel\" ng-include src=\"'html/partials/DigitsPanel.html'\"></div><div class=\"calculator-functions-panel\" ng-include src=\"'html/partials/FunctionsPanel.html'\"></div></div></div></div>"
  );

}]);
