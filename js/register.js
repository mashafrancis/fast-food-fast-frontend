document.getElementById('signup_form').addEventListener('submit', signup);

function signup(e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;

    fetch('http://127.0.0.1:5000/api/v2/auth/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password,
            "confirm_password": confirm_password
        })
    })
        .then(response => response.json())
        .catch(error => console.error(error))
        .then(data => {
            if (data['status'] === 201) {
                document.getElementById('message').innerHTML = data['message']
            }
            else {
                // alert = document.getElementById('message').innerHTML = data['message'];
                // document.getElementById('message').style.color = '#272727';
                // document.getElementById('message').style.display = 'block';
                // document.getElementById('message').style.padding = '5px';
                // document.getElementById('message').style.backgroundColor = '#ecee5a'
                showError(data['message'])
            }
        })
}

// Show error
function showError(error) {
    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.signup-form');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-info';

    // Create test node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error before heading
    card.insertBefore(errorDiv, heading);
}

