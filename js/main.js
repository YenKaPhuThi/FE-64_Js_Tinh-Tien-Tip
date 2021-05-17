// Get element by Id
function getMyEleId(ele) {
  return document.getElementById(ele);
}

// Handle Payment Caculation
function handlePayment() {
  getMyEleId("btnPayment").addEventListener("click", function () {
    var infoNotice = getMyEleId("infoNotice");
    var paymentAmount = getMyEleId("paymentAmount");
    var numberSharing = getMyEleId("numberSharing");
    var tippingOptions = getMyEleId("tippingOptions");

    var paymentAmountVal = paymentAmount.value;
    var numberSharingVal = numberSharing.value;
    var tippingOptionsVal =
      tippingOptions.options[tippingOptions?.selectedIndex].value;
    var paymentCaculation = 0;

    // Check Payment Amount is empty => don't do anything
    // - This field is required
    if (paymentAmountVal.length == 0) {
      return null;
    }

    // Check input's value is number
    if (isNaN(paymentAmountVal) || isNaN(numberSharingVal)) {
      infoNotice.innerHTML =
        '<p class="text-notice">' + "Vui lòng nhập số!" + "</p>";
    } else {
      paymentAmount = parseInt(paymentAmountVal);
      tippingOptions = parseInt(tippingOptionsVal);
      numberSharing = numberSharingVal.length ? parseInt(numberSharingVal) : 1;

      paymentCaculation =
        (paymentAmount * tippingOptions) / 100 / numberSharing;
      infoNotice.innerHTML =
        "<p><sup>$</sup>" +
        '<span class="fs-20">' +
        paymentCaculation +
        "</span>" +
        "<br/>mỗi người</p>";
    }
  });
}

handlePayment();
