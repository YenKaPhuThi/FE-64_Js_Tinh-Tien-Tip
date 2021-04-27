// Handle Payment Caculation
function handlePaymentCaculation() {
  document.getElementById("btnPayment").addEventListener("click", function() {
    var infoNotice     = document.getElementById("infoNotice");
    var paymentAmount  = document.getElementById("paymentAmount");
    var numberSharing  = document.getElementById("numberSharing");
    var tippingOptions = document.getElementById("tippingOptions");

    var paymentAmountVal  = paymentAmount.value;
    var numberSharingVal  = numberSharing.value;
    var tippingOptionsVal = tippingOptions.options[tippingOptions?.selectedIndex].value;
    var paymentCaculation = 0;

    // Check Payment Amount is empty => don't do anything
    // - This field is required
    if (paymentAmountVal.length == 0) {
      return null;
    }

    // Check input's value is number
    if (isNaN(paymentAmountVal) || isNaN(numberSharingVal)) {
      infoNotice.innerHTML = '<p class="text-notice">' + "Vui lòng nhập số!" + "</p>";
    } else {
      paymentAmount  = parseInt(paymentAmountVal);
      tippingOptions = parseInt(tippingOptionsVal);
      numberSharing  = numberSharingVal.length ? parseInt(numberSharingVal) : 1;

      paymentCaculation = ((paymentAmount * tippingOptions) / 100) / numberSharing;
      infoNotice.innerHTML = "<p><sup>$</sup>" + '<span class="fs-20">' + paymentCaculation + "</span>" + "<br/>mỗi người</p>";
    }
  });
}

handlePaymentCaculation();
