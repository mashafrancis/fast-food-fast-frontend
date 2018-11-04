// Get the modal
const signupModal = document.getElementById('signup-modal');

// Get the button that opens the modal
const signupBtn = document.getElementById("signupBtn");

// Get the modal
const loginModal = document.getElementById('login-modal');

// Get the button that opens the modal
const loginBtn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
signupBtn.onclick = function () {
    signupModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    signupModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target === signupModal) {
//         signupModal.style.display = "none";
//     }
// };

// When the user clicks the button, open the modal
loginBtn.onclick = function () {
    loginModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    loginModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target === loginModal) {
//         loginModal.style.display = "none";
//     }
// };

function showNotifications() {
    // Get the notifications div element
    const notifications = document.getElementById("quick-notifications");

    // Add the "show" class to div
    notifications.className = "show";

    // After 3 seconds, remove the show class from div
    setTimeout(function(){ notifications.className = notifications.className.replace("show", ""); }, 3000);
}