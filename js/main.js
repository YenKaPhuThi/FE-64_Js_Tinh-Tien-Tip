// Get element by Id
function getEleById(ele) {
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
function checkEmpty(fieldEle, errorEle, indexMsg) {
  var fieldEle = getEleById(fieldEle);
  var errorEle = getEleById(errorEle);

  errorEle.style.display = "none";

  if (fieldEle.value === "" || fieldEle.selectedIndex == 0) {
    errorEle.style.display = "block";
    errorEle.textContent = errorEmptyMsg[indexMsg];
  }
}

// Handle check input's value is number
function checkNumber(fieldEle, errorEle, indexMsg) {
  var fieldEle = getEleById(fieldEle);
  var errorEle = getEleById(errorEle);

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
  var paymentAmount = getEleById("paymentAmount").value;
  var numberSharing = getEleById("numberSharing").value;
  var resultInfo = getEleById("resultInfo");
  var tipOptions = getEleById("tipOptions");
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
getEleById("btnPayment").addEventListener("click", function () {
  // Check input's value is empty => show error message
  checkEmpty("paymentAmount", "errorAmount", 0);
  checkEmpty("tipOptions", "errorTip", 1);
  checkEmpty("numberSharing", "errorSharing", 2);

  // Check input's value is not number => show error message
  checkNumber("paymentAmount", "errorAmount", 0);
  checkNumber("numberSharing", "errorSharing", 1);

  //Init handle payment
  handlePayment();
});
