let register = document.getElementById('signup_form');

register.onclick = function () {
    document.getElementById('message').style.display = 'none';
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
        .then(res => res.json())
        .then(data => {
            if (data['message'] === 'User %s successfully registered.' % (username)) {
                alert('Welcome ' + data['username'] + ', you may now login into your account');
                document.getElementById('flash').innerHTML = ('Login Here!');
            }
            else {
                document.getElementById('message').innerHTML = 'User has not been created. Try again!';
                document.getElementById('message').style.color = 'red';
                document.getElementById('message').style.display = 'block';
            }
        })
};
