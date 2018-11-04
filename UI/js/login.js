document.getElementById('login_form').addEventListener('submit', login);

function login(e) {
    e.preventDefault();

    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    fetch('http://127.0.0.1:5000/api/v2/auth/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
        .then((response) => response.json())
        .catch(error => console.error(error))
        .then(data => {
                if (data['message']) {
                    document.getElementById('message').innerHTML = data['message'];
                    // document.getElementById('message').style.color = 'white';
                    // document.getElementById('message').style.display = 'block';
                    // document.getElementById('message').style.backgroundColor = '#4CAF50'
                }
                if (data['You have logged in successfully!']) {
                    window.location = 'menu.html';
                    localStorage.setItem('access_token', data['You have logged in successfully!']['access_token']);
                }
                // let access_token = window.localStorage.getItem('access_token');
                // let payload = JSON.parse(atob(access_token.split('.')[1]));
                //
                // if (payload.admin) {
                else {
                    const element = 'login-message';
                    setTimeout(showError(element, data['message']), 3000);

                }
            }
        )
}

// Show alert
function showError(element, message) {
    document.getElementById(element).innerHTML = message;
    document.getElementById(element).style.color = '#d9d9d9';
    document.getElementById(element).style.display = 'block';
    document.getElementById(element).style.padding = '10px';
    document.getElementById(element).style.backgroundColor = '#435cb1'
}


//
// let close = document.getElementsByClassName("closebtn");
// let i;
//
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function(){
//         let div = this.parentElement;
//         div.style.opacity = "0";
//         setTimeout(function(){ div.style.display = "none"; }, 600);
//     }
// }