// Get element by Id
function getMyEleId(ele) {
  return document.getElementById(ele);
}

// Define error empty messages
var errorEmptyMsg = [
  "Tổng tiền không được bỏ trống!",
  "Chọn để tip không được bỏ trống!",
  "Nhập số người không được bỏ trống!",
];

// Handle check input's value is empty and select index is 0
function checkEmptyValue(fieldEle, errorEle, indexMsg) {
  var fieldEle = getMyEleId(fieldEle);
  var errorEle = getMyEleId(errorEle);

  errorEle.style.display = "none";
  if (fieldEle.value === "" || fieldEle.selectedIndex == 0) {
    errorEle.style.display = "block";
    errorEle.textContent = errorEmptyMsg[indexMsg];
  }
}

// Handle Payment Caculation
function handlePayment() {
  getMyEleId("btnPayment").addEventListener("click", function () {
    var infoNotice = getMyEleId("infoNotice");
    var paymentAmount = getMyEleId("paymentAmount");
    var numberSharing = getMyEleId("numberSharing");
    var tipOptions = getMyEleId("tipOptions");

    var paymentAmountVal = paymentAmount.value;
    var numberSharingVal = numberSharing.value;
    var tipOptionsVal = tipOptions.options[tipOptions?.selectedIndex].value;
    var paymentCaculation = 0;

    // Check input's value is empty => show error message
    checkEmptyValue("paymentAmount", "errorAmount", 0);
    checkEmptyValue("tipOptions", "errorTip", 1);
    checkEmptyValue("numberSharing", "errorSharing", 2);

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
      tipOptions = parseInt(tipOptionsVal);
      numberSharing = numberSharingVal.length ? parseInt(numberSharingVal) : 1;

      paymentCaculation = (paymentAmount * tipOptions) / 100 / numberSharing;
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
