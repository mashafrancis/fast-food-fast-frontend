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
                document.getElementById('message').innerHTML = data['message'];
                document.getElementById('message').style.color = '#272727';
                document.getElementById('message').style.display = 'block';
                document.getElementById('message').style.padding = '5px';
                document.getElementById('message').style.backgroundColor = '#ecee5a'
            }
        })
}

