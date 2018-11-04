import {http} from "./http";
import {ui} from './ui';

// Listen for signup
document.getElementById('signup_form').addEventListener('submit', signUp);

// Listen for login
document.getElementById('login_form').addEventListener('submit', login);

// User Signup Function
function signUp(e) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;

    const data = {
        username,
        email,
        password,
        confirm_password
    };

    if (username === '' || email === '' || password === '' || confirm_password === '') {
        ui.showAlert('Please fill all the fields', 'alert alert-danger');
    } else {
        http.post('http://127.0.0.1:5000/api/v2/auth/signup', data)
            .then(response => response.json())
            .catch(error => console.error(error))
            .then(data => {
                if (data['status'] === 201) {
                    document.getElementById('message').innerHTML = data['message']
                } else {
                    showError(data['message'])
                }
            })
    }

    e.preventDefault();
}

// User Login Function
function login(e) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        email,
        password
    };

    if (email === '' || password === '') {
        ui.showAlert('Please fill all the fields', 'alert alert-danger');
    } else {
        http.post('http://127.0.0.1:5000/api/v2/auth/login', data)
            .then(response => response.json())
            .catch(error => console.error(error))
            .then(data => {
                if (data['status'] === 200) {
                    document.getElementById('message').innerHTML = data['message']
                } else {
                    // showError(data['message'])
                    document.getElementById('message').innerHTML = data['message'];
                    document.getElementById('message').style.color = '#272727';
                    document.getElementById('message').style.display = 'block';
                    document.getElementById('message').style.padding = '5px';
                    document.getElementById('message').style.backgroundColor = '#ecee5a';
                }
            })
    }

    e.preventDefault();
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
