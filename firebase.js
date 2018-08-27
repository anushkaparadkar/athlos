var i = 0;
var backgroundImages = ['https://images.unsplash.com/photo-1502481686408-d428268c24ff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbd7cc7ed7090d2cefe1d922b7d19377&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89f7259907bafccabeab5ed40f4c9e84&auto=format&fit=crop&w=500&q=60']
setInterval(function() { 
    
    $(document.body).css('background-image', 'url(' + backgroundImages[i] + ')');
    i++;
    if (i >= backgroundImages.length) {
        i = 0;
    }
}, 2000);

var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
     
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },
  
    fadeOut: function() {
        return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 400, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};