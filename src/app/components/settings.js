define(['underscore'],
function (_) {
  "use strict";

  return function Settings (options) {
    /**
     * To add a setting, you MUST define a default. Also,
     * THESE ARE ONLY DEFAULTS.
     * They are overridden by config.js in the root directory
     * @type {Object}
     */
    var defaults = {
      elasticsearch     : "http://"+window.location.hostname+":9200",
      graphiteUrl       : "http://"+window.location.hostname+":8080",
      panel_names       : [],
      default_route     : '/dashboard/file/default.json',
      grafana_index     : 'grafana-dash'
    };

    // This initializes a new hash on purpose, to avoid adding parameters to
    // config.js without providing sane defaults
    var settings = {};
    _.each(defaults, function(value, key) {
      settings[key] = typeof options[key] !== 'undefined' ? options[key]  : defaults[key];
    });

    return settings;
  };
});
