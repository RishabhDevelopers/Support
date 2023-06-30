
$(".denomination").click(function(event) {
  $(".denomination").removeClass("selected").prop('checked', false);
  $(".denomination-other input").removeClass("selected").val('');
  $(this).addClass("selected");
  $(this).children(":first").prop('checked', true);
  $("button").text('Donate ₹' + $(this).children(":first").val())
});

$(".denomination-other input").on('keypress', function (event) {
  // allow only int values
  // TODO: remove leading 0
  var regex = new RegExp("^[0-9]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
  
  $(".denomination").removeClass("selected").prop('checked', false);
  $(this).addClass("selected");
  $("button").text('Donate ₹' + $(this).val() + key );
});

var modal = document.getElementById("myModal");
var btnOK = document.getElementById("btnOK");
var inputValue = document.getElementById("inputValue");

btnOK.addEventListener("click", function() {
  value132 = inputValue.value; // Assign the value to the variable in the wider scope
  console.log(value132)
  modal.style.display = "none";
});

// Display the modal dialog
modal.style.display = "block";

function submitPay() {
   
  
  //paytm
  let paytm = document.getElementById("paytm");
   let phonepe= document.getElementById("phonepe");
   let gpay = document.getElementById("gpay");
    
  if(paytm.checked){
  let selectedAmount = document.querySelector('input[name="amount"]:checked').value;
  let otherAmountInput = document.querySelector('.denomination-other input[name="amount"]');
  let enteredAmount = otherAmountInput.value;
  
  let finalAmount = selectedAmount;
  if (enteredAmount !== "") {
    finalAmount = enteredAmount;
  }
  
  let newLink = "paytmmp://pay?pa=rishabh6580ff@paytm&pn=Rishabh&am=" + finalAmount + "&cu=INR&tn="+ value132 +"&mode=00";
  
  window.location.href = newLink;
}

//for phonepe
if (phonepe.checked) {
  let selectedAmount = document.querySelector('input[name="amount"]:checked').value;
  let otherAmountInput = document.querySelector('.denomination-other input[name="amount"]');
  let enteredAmount = otherAmountInput.value;

  let finalAmount = selectedAmount;
  if (enteredAmount !== "") {
    finalAmount = enteredAmount;
  }

  let newLink = "phonepe://pay?pa=rishabh6580ff@paytm&pn=Rishabh&am=" + finalAmount + "&cu=INR&tn="+ value132 +"&mode=00";

  window.location.href = newLink;
}

//for gpay
if (gpay.checked) {
  let selectedAmount = document.querySelector('input[name="amount"]:checked').value;
  let otherAmountInput = document.querySelector('.denomination-other input[name="amount"]');
  let enteredAmount = otherAmountInput.value;

  let finalAmount = selectedAmount;
  if (enteredAmount !== "") {
    finalAmount = enteredAmount;
  }

  let newLink = "tez://upi/pay?pa=rishabh6580ff@paytm&pn=Rishabh&am=" + finalAmount + "&cu=INR&tn="+ value132 +"&mode=00";

  window.location.href = newLink;
}

};

submitPay();