// Define Global Variables
var paymentAmount = document.getElementById("paymentAmount");
var numberSharing = document.getElementById("numberSharing");
var tippingOptions = document.getElementById("tippingOptions");
var tippingNoticed = document.getElementById("tippingNoticed");
var btnPaymentaculate = document.getElementById("btnPaymentCaculate");

// Handle Payment Caculation
function handlePaymentCaculation() {
  btnPaymentCaculate.addEventListener("click", function(e) {
    e.preventDefault();

    var paymentAmountVal = paymentAmount.value;
    var numberSharingVal = numberSharing.value;
    var optionSelected = tippingOptions.options[tippingOptions.selectedIndex].value;
    var paymentCaculation = 0;

    paymentCaculation = (paymentAmountVal * optionSelected) / 100 / numberSharingVal;
    
    tippingNoticed.style.display = 'block';
    tippingNoticed.innerHTML = "<p>" + paymentCaculation + " Mỗi người</p>";
  });
}

handlePaymentCaculation();