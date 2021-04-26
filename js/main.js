// Define Global Variables
var infoNotice     = document.getElementById("infoNotice");
var btnPayment     = document.getElementById("btnPayment");
var paymentAmount  = document.getElementById("paymentAmount");
var numberSharing  = document.getElementById("numberSharing");
var tippingOptions = document.getElementById("tippingOptions");

// Handle Payment Caculation
function handlePaymentCaculation() {
  btnPayment.addEventListener("click", function() {
    var paymentAmountVal  = paymentAmount.value;
    var numberSharingVal  = numberSharing.value;
    var tippingOptionsVal = tippingOptions.options[tippingOptions.selectedIndex].value;
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
      numberSharing  = 0;
      paymentAmount  = parseFloat(paymentAmountVal);
      tippingOptions = parseFloat(tippingOptionsVal);
      numberSharing  = !numberSharingVal.length ? 0 : parseFloat(numberSharingVal);

      paymentCaculation = ((paymentAmount * tippingOptions) / 100) / numberSharing;
      infoNotice.innerHTML = "<p><sup>$</sup>" + '<span class="fs-20">' + paymentCaculation + "</span>" + "<br/>mỗi người</p>";
    }
  });
}

handlePaymentCaculation();
