// Customize which fields are collected by the Payment Element
var paymentElement = elements.create('payment', {
  fields: {
    billingDetails: {
      name: 'never',
      email: 'never',
    }
  }
});

// If you disable collecting fields in the Payment Element, you
// must pass equivalent data when calling `stripe.confirmPayment`.
form.addEventListener('submit', async (event) => {
  stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: 'https://example.com',
      payment_method_data: {
        billing_details: {
          name: 'Jenny Rosen',
         email: 'jenny@example.com',
          address_line1: '123 Main Street',
          postal_code: '12345',
          state: "Arizona",
          phone: '123-456-7890',
          type: 'card',
          type: 'cashapp',
          type: 'link',
        }
      },
    },
  })
  .then(function(result) {
    if (result.error) {
      // Inform the customer that there was an error.
    }
  });
});