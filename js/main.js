// Define Global Variables
var btnPayment     = document.getElementById("btnPayment");
var paymentAmount  = document.getElementById("paymentAmount");
var numberSharing  = document.getElementById("numberSharing");
var tippingOptions = document.getElementById("tippingOptions");
var tippingNoticed = document.getElementById("tippingNoticed");

// Handle Payment Caculation
function handlePaymentCaculation() {
  btnPayment.addEventListener("click", function (e) {
    e.preventDefault();

    var paymentAmountVal  = paymentAmount.value;
    var numberSharingVal  = numberSharing.value;
    var optionSelected    = tippingOptions.options[tippingOptions.selectedIndex].value;
    var paymentCaculation = 0;

    // Check input's value is number
    if (isNaN(paymentAmountVal) || isNaN(numberSharingVal)) {
      tippingNoticed.innerHTML =
        '<p class="alert-warning">' + "Vui lòng nhập số!" + "</p>";
    } else {
      paymentAmount = parseInt(paymentAmountVal) || 0;
      numberSharing = parseInt(numberSharingVal) || 0;

      paymentCaculation = ((paymentAmount * optionSelected) / 100) / numberSharing;

      tippingNoticed.style.display = "block";
      tippingNoticed.innerHTML = "<p><sup>$</sup>" + paymentCaculation + "<br />mỗi người</p>";
    }
  });
}

handlePaymentCaculation();
