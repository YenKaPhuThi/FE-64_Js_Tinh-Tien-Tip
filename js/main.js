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

// Define error number messages
var errorNumberMsg = ["Tổng tiền phải là số!", "Nhập số người phải là số!"];

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

// Handle check input's value is number
function checkNumberValue(fieldEle, errorEle, indexMsg) {
  var fieldEle = getMyEleId(fieldEle);
  var errorEle = getMyEleId(errorEle);

  errorEle.style.display = "none";

  if (fieldEle.value === "") {
    errorEle.style.display = "block";

    return;
  } else if (isNaN(fieldEle.value)) {
    errorEle.style.display = "block";
    errorEle.textContent = errorNumberMsg[indexMsg];
  }
}

function handlePayment() {
  var paymentAmount = getMyEleId("paymentAmount").value;
  var numberSharing = getMyEleId("numberSharing").value;
  var resultInfo = getMyEleId("resultInfo");
  var tipOptions = getMyEleId("tipOptions");
  var optionSelected = tipOptions.options[tipOptions?.selectedIndex].value;

  if (paymentAmount === "" && numberSharing == "" && optionSelected == 0) {
    return;
  } else if (!isNaN(paymentAmount) && !isNaN(numberSharing)) {
    paymentAmount = parseInt(paymentAmount);
    tipOptions = parseInt(optionSelected);
    numberSharing = numberSharing == 0 ? 1 : parseInt(numberSharing);

    var cost = 0;
    cost = (paymentAmount * tipOptions) / 100 / numberSharing;

    resultInfo.innerHTML = `<p><sup>$</sup><span class="fs-20">${cost}</span><br/>mỗi người</p>`;
  }
}

// Click button to calculate payment
getMyEleId("btnPayment").addEventListener("click", function () {
  // Check input's value is empty => show error message
  checkEmptyValue("paymentAmount", "errorAmount", 0);
  checkEmptyValue("tipOptions", "errorTip", 1);
  checkEmptyValue("numberSharing", "errorSharing", 2);

  // Check input's value is not number => show error message
  checkNumberValue("paymentAmount", "errorAmount", 0);
  checkNumberValue("numberSharing", "errorSharing", 1);

  //Init handle payment
  handlePayment();
});
