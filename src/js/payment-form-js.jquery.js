(function($) {

  var methods = {
    init: function() {
      this.data("paymentezform", new PaymentezForm(this));
      return this;
    },
    card: function() {
      return this.data("paymentezform").getCard();
    },
    cardNumber: function() {
      return this.data("paymentezform").getCardNumber();
    },
    cardType: function() {
      return this.data("paymentezform").getCardType();
    },
    name: function() {
      return this.data("paymentezform").getName();
    },
    expiryMonth: function() {
      return this.data("paymentezform").getExpiryMonth();
    },
    expiryYear: function() {
      return this.data("paymentezform").getExpiryYear();
    },
    fiscalNumber: function() {
      return this.data("paymentezform").getFiscalNumber();
    },
    validationOption: function() {
      return this.data("paymentezform").getValidationOption();
    }
  };


  /**
   * jQuery function.
   *
   * @param methodOrOptions
   * @returns {*}
   */
  $.fn.PaymentezForm = function(methodOrOptions) {
    if(methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if(typeof methodOrOptions === "object" || !methodOrOptions) {
      return methods.init.apply( this, arguments );
    } else {
      $.error("Method " +  methodOrOptions + " does not exist on jQuery.Paymentez");
    }
  };


}(jQuery));

//
// Initialise for all elements with paymentez-js class.
//
$(function() {
  $(".paymentez-form").not('.checkout').each(function(i, obj) {
    $(obj).PaymentezForm();
  });
});
