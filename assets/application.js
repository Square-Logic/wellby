$(document).ready(function() {

  $(document).on('click', '.js-quantity-button', function(event) {
     let
      button = $(this),
      form = button.closest('form'),
      quantity = form.find('.js-quantity-field'),
      quantityValue = parseInt(quantity.val()),
      max = quantity.attr('max') ? parseInt(quantity.attr('max')) : null;

      if (button.hasClass('plus')) {
        quantity.val(quantityValue + 1);
      } else if (button.hasClass('minus')) {
        quantity.val(quantityValue - 1);
      }
  });
});