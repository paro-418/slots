function openRazorPay(amount, product) {
  const options = {
    key: 'rzp_test_ReWYbekhLS8fvp',
    amount: Number(amount) * 100, // amount in the smallest currency unit (e.g., paisa)
    currency: 'INR', // change it to the currency you want to accept
    name: 'Slots',
    description: product,
    image: 'path_to_your_logo.png', // optional
    theme: {
      color: '#6a0ea0',
    },
    handler: function (response) {
      // Handle the success response
      alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
    },
    prefill: {
      name: 'Slots',
      email: 'slots.services@gmail.com',
      contact: '8437749909',
    },
  };
  const rzp = new Razorpay(options);
  rzp.open();
}

const massageBtn = document.querySelector('#massageBtn');
const tattooBtn = document.querySelector('#tattooBtn');
const salonBtn = document.querySelector('#salonBtn');
const petBtn = document.querySelector('#petBtn');

massageBtn.addEventListener('click', function () {
  openRazorPay(2000, 'massage');
});
tattooBtn.addEventListener('click', function () {
  openRazorPay(2500, 'tattoo');
});
salonBtn.addEventListener('click', function () {
  openRazorPay(600, 'salon');
});
petBtn.addEventListener('click', function () {
  openRazorPay(1500, 'pet service');
});
