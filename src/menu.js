import {http} from "./http";
import {ui} from './ui';

// Get menu on DOM load
document.addEventListener('DOMContentLoaded', getMenu);

// Listen for add new menu
document.querySelector('.menu-submit').addEventListener('click', submitMenu);

// Listen for edit state
document.querySelector('#menu-items').addEventListener('click', enableEdit);

// Listen for delete
document.querySelector('#menu-items').addEventListener('click', deleteMenu);

// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

// Get Menu
function getMenu() {
    http.get('http://localhost:3000/menu')
        .then(message => ui.showMenu(message))
        .catch(err => console.log(err));
}

function submitMenu() {
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const id = document.querySelector('#id').value;
    const access_token = window.localStorage.getItem("access-token");

    const data = {
        name,
        description
    };

    // Validate input
    if (name === '' || description === '') {
        ui.showAlert('Please fill all the fields', 'alert alert-danger');
    } else {
        // Check for ID
        if (id === '') {
            // Create Menu
            http.post('http://127.0.0.1:5000/api/v2/menu', data, access_token)
                .then(response => response.json())
                .then(data => {
                    if(data['status'] === 'Created') {
                        ui.showAlert(data['message'], 'alert alert-success');
                        ui.clearFields();
                        getMenu();
                    } else {
                        ui.showAlert(data['message'], 'alert alert-warning')
                    }
                })
            .catch(err => console.log(err));
        } else {
            // Update Menu
            http.put(`http://127.0.0.1:5000/api/v2/menu/${id}`, data)
                .then(data => {
                    ui.showAlert('Menu has been updated', 'alert alert-success');
                    ui.changeFormState('add');
                    getMenu();
                })
                .catch(err => console.log(err));
        }
    }
}

// Delete Menu
function deleteMenu(e){
    if(e.target.parentElement.classList.contains('delete')){
        const id = e.target.parentElement.dataset.id;
        if(confirm('Are you sure you want to delete menu?')){
            http.delete(`http://localhost:3000/menu/${id}`)
                .then(data => {
                    ui.showAlert('Menu has been removed', 'alert alert-success');
                    getMenu();
                })
                .catch(err => console.log(err));
        }
    }
    e.preventDefault();
}

// Enable Edit Menu State
function enableEdit(e) {
    if(e.target.parentElement.classList.contains('edit')){
        const id = e.target.parentElement.dataset.id;
        const name = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const description = e.target.parentElement.previousElementSibling.textContent;

        const data = {
            id,
            name,
            description
        };

        // Fill form with current post
        ui.fillForm(data);
    }
    e.preventDefault();
}

// Cancel Edit State
function cancelEdit(e) {
    if(e.target.classList.contains('menu-cancel')){
        ui.changeFormState('add');
    }
    e.preventDefault();
}
