(function ($) {

  // Add old event methods.

  $.fn.bind = $.fn.delegate = $.fn.on;
  $.fn.unbind = $.fn.undelegate = $.fn.off;

  /**
   * Add :has support to `is` method.
   * This is mostly for pass the Backbone Test Suite.
   *
   * @param {String} str
   * @return {Bool}
   */

  var oldIs = $.fn.is;
  $.fn.is = function (str) {
    return (s = /\:\w+\((.*)\)/.exec(str) ?
      !!tire(this, s[1]).length :
      oldIs.call(this, str));
  };

  // Tell Backbone to use Tire as dom library.

  if (this.Backbone) {
    if (this.Backbone.setDomLibrary) {
      this.Backbone.setDomLibrary($);
    } else {
      this.Backbone.$ = $;
    }
  }

}(window.tire));
