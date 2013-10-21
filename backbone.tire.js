(function ($) {

  // Add old event methods.

  $.fn.bind = $.fn.delegate = $.fn.on;
  $.fn.unbind = $.fn.undelegate = $.fn.off;

  /**
   * Add :has support to `is` method.
   * This is mostly for passing the Backbone Test Suite.
   *
   * @param {String} str
   * @return {Boolean}
   */

  var oldIs = $.fn.is;
  $.fn.is = function (str) {
    return (s = /\:\w+\((.*)\)/.exec(str) ?
      !!tire(this, s[1]).length :
      oldIs.call(this, str));
  };
  
  /**
   * Check if the current element contains the given selector.
   * This is mostly for passing the Backbone Test Suite.
   * 
   * @param {String} selector
   * @return {Boolean}
   */
   
  $.fn.has = function (selector) {
    return !!$(this).find(selector).length;
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
