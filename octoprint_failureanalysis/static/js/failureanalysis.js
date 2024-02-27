/*
 * View model for OctoPrint-Failureanalysis
 *
 * Author: Aliaksei Petsiuk
 * License: AGPLv3
 */
$(function() {
    function FailureanalysisViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: FailureanalysisViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ "settingsViewModel"/* "loginStateViewModel",  */ ],
        // Elements to bind to, e.g. #settings_plugin_failureanalysis, #tab_plugin_failureanalysis, ...
        elements: [ "#settings_plugin_Failureanalysis", "#tab_plugin_Failureanalysis"/* ... */ ]
    });
});
