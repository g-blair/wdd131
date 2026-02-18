const theForm = document.querySelector('#checkoutForm');
const paymentSelect = document.querySelector('#paymentMethod');
const creditCardContainer = document.querySelector('#creditCardNumberContainer');
const paypalContainer = document.querySelector('#paypalUsernameContainer');
const creditInput = document.querySelector('#creditCardNumberContainer input');
const paypalInput = document.querySelector('#paypalUsernameContainer input');

const form = document.getElementById("checkoutForm");
const errorBox = document.querySelector(".errors");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = [];

  const paymentMethod = document.getElementById("paymentMethod").value;
  const cardNumber = document.getElementById("creditCardNumber");
  const cvc = document.querySelector(".cvc");
  const paypal = document.getElementById("paypalUsername");

  // Clear old error styles
  document.querySelectorAll("input").forEach(input =>
    input.classList.remove("input-error")
  );

  // Validate payment method
  if (!paymentMethod) {
    errors.push("Please select a payment method.");
  }

  if (paymentMethod === "creditCard") {
    if (!/^\d{16}$/.test(cardNumber.value.replace(/\s/g, ""))) {
      errors.push("Credit card number must be 16 digits.");
      cardNumber.classList.add("input-error");
    }

    if (!cvc.value || cvc.value.length < 3) {
      errors.push("CVC must be 3 digits.");
      cvc.classList.add("input-error");
    }
  }

  if (paymentMethod === "paypal") {
    if (!paypal.value.trim()) {
      errors.push("Please enter your PayPal username.");
      paypal.classList.add("input-error");
    }
  }

  // Display errors
  if (errors.length > 0) {
    errorBox.innerHTML = errors.map(err => `<p>${err}</p>`).join("");
    errorBox.classList.add("show");
  } else {
    errorBox.classList.remove("show");
    form.submit(); // allow submission
  }
});


function togglePaymentDetails(e) {
    
        let value = e.target.value; 
        paypalContainer.classList.add('hide');
        creditCardContainer.classList.add('hide');
        paypalInput.required=false; 
        creditInput.required=false;
      
        if (value == 'creditCard') {
          creditCardContainer.classList.remove('hide');
          creditInput.required=true;
        } else if (value == 'paypal') {
          paypalContainer.classList.remove('hide');
          paypalInput.required=true;
        }

        if (value === 'creditCard' || value === 'paypal') {
          paymentSelect.setAttribute("aria-expanded", "true");
        } else {
          paymentSelect.setAttribute("aria-expanded", "false");
        }
  }

paymentSelect.addEventListener('change', togglePaymentDetails);

function displayError(msg) {
	document.querySelector('.errors').textContent = msg
}

function isCardNumberValid(number) {
	return number === '1234123412341234'
}

function submitHandler(event) {
	event.preventDefault();
  let errorMsg = '';
	displayError('');

  let cardNumber = document.querySelector('#creditCardNumber');
  const cardNum = cardNumber.value.trim();
  if (paymentSelect.value === 'creditCard') {
    
      if (!/^\d{16}$/.test(cardNum)) {
      errorMsg += 'Card number must be 16 digits\n';
      } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
      }
    
    //check date
    const expYear = Number(document.querySelector('#year').value);   
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date()

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
        errorMsg += 'Card is expired\n';
    }
  }

    if (errorMsg !== '') {
		displayError(errorMsg)
		return;
    }
    const formContainer = document.getElementById('checkoutForm');
    formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
}
  
document.querySelector('#checkoutForm').addEventListener('submit', submitHandler)   