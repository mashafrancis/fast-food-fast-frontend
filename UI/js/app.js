// "use strict";
// let signupform = document.getElementById("signup_form");
// if (signupform) {
//     signupform.addEventListener("submit", signup);
// }
//
// const alert = document.querySelector(".alert");
// const alertmodal = document.querySelector(".alertmodal");
//
// function signup(event) {
//     event.preventDefault();
//     let form = event.target;
//     let data = {};
//     data.username = form.username.value;
//     data.email = form.email.value;
//     data.password = form.password.value;
//     data.confirm_password = form.confirm_password.value;
//
//     fetch("http://127.0.0.1:5000/api/v2/auth/signup", {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then((response) => {
//             if (response.status === 201) {
//                 response.json().then((data) => {
//                     window.location = "index.html";
//                 });
//             }
//             else {
//                 response.json().then((data) => {
//                     alert.classList.toggle("show");
//                     document.getElementById("message").textContent = data.message;
//                     document.getElementById('message').style.color = 'red';
//                     document.getElementById('message').style.display = 'block';
//                 });
//             }
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// }
