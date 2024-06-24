const form = document.getElementById('payment-form');
form.addEventListener('submit', (e) => {

    e.preventDefault()


    const nameOnCard = document.getElementById('name-on-card').value;
    const Gender = document.getElementById('gender').value;
    const cardNumber = document.getElementById('card-number').value;
    const Cardtype = document.getElementById('card_type').value
    const expirationDate = document.getElementById('expiration-date').value;
    const cardpin = document.getElementById('pin-code').value;
    const cvv = document.getElementById('cvv').value;
    const email = document.getElementById('e-mail').value


    // Show confirmation box
    if (confirm(`Are You Sure To Pay With The Following Details?\nName on Card : ${nameOnCard}\nGender : ${Gender}\nCardType :${Cardtype}\nCard Number : ${cardNumber}\nCardPin : ${cardpin}\nExpiration Date : ${expirationDate}\nCVV : ${cvv}\nEmail : ${email}`)) {
        // If confirmed, show popup message and reload the page
        alert('Payment successful!');
        location.reload();
    } else {
        // If cancelled, do nothing
        return;
    }
});