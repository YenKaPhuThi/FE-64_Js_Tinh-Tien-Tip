// Define Global Variables
var paymentAmount = document.getElementById("paymentAmount");
var tippingOptions = document.getElementById("tippingOptions");
var btnPaymentCaculate = document.getElementById("btnPaymentCaculate");

var paymentAmountVal = paymentAmount.value;
var optionSelected = tippingOptions.options[tippingOptions.selectedIndex].value;

// Handle Payment Caculation
function handlePaymentCaculation(amount, number) {
  btnPaymentCaculate.addEventListener("click", function() {
    var paymentCaculation = 0;
  });
}

handlePaymentCaculation(200, 3);