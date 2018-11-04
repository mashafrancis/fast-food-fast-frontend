class MenuUI {
    constructor() {
        this.menu = document.querySelector('#menu-items');
        this.menuName = document.querySelector('#name');
        this.menuDescription = document.querySelector('#description');
        this.menuSubmit = document.querySelector('.menu-submit');
        this.idInput = document.querySelector('#id');
        this.forState = 'add';
    }

    // Show all menu categories
    showMenu(menus) {
        let output = '';

        menus.forEach((menu) => {
            output += `
            <div class="card mb-3">
                <div class="card-body">
                <!--<img src="../img/11.jpg" style="width:100%">-->
                <h3 class="card-title">${menu.name}</h3>
                <p class="card-text">${menu.description}</p>
                <a href="#" class="edit card-link" data-id="${menu.id}">
                    <i class="fa fa-pencil"></i>
                </a>
                <a href="#" class="delete card-link" data-id="${menu.id}">
                    <i class="fa fa-remove"></i>
                </a>
              </div>
            </div>
            `;
        });

        this.menu.innerHTML = output;
    }

    // Show alert message
    showAlert(message, className) {
        MenuUI.clearAlert();

        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.menuContainer');
        // Get menu
        const menu = document.querySelector('#menu-items');
        // Insert alert div
        container.insertBefore(div, menu);
        // Timeout
        setTimeout(() => {
            MenuUI.clearAlert();
        }, 3000);
    }

    // Clear alert message
    static clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear all fields
    clearFields() {
        this.menuName.value = '';
        this.menuDescription.value = '';
    }

    // Fill form to edit
    fillForm(data) {
        this.menuName.value = data.name;
        this.menuDescription.value = data.description;
        this.idInput.value = data.id;

        this.changeFormState('edit');
    }

    // clear Id hidden value
    clearIdInput(){
        this.idInput.value = '';
    }

    // Change the form state
    changeFormState(type) {
        if (type === 'edit') {
            this.menuSubmit.textContent = 'Update Menu';
            this.menuSubmit.className = 'menu-submit signupBtn signupBtn-warning signupBtn-block'

            // Create cancel button
            const button = document.createElement('button');
            button.className = 'menu-cancel signupBtn signupBtn-light signupBtn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));

            // Get parent
            const cardForm = document.querySelector('.card-form');
            // Get element to insert before
            const formEnd = document.querySelector('.form-end');
            // Insert cancel button
            cardForm.insertBefore(button, formEnd);
        } else {
            this.menuSubmit.textContent = 'Add Menu';
            this.menuSubmit.className = 'menu-submit signupBtn signupBtn-primary signupBtn-block';
            // Remove cancel button if not there
            if(document.querySelector('.menu-cancel')){
                document.querySelector('.menu-cancel').remove();
            }
            // Clear ID from hidden field
            this.clearIdInput();
            // Clear fields
            this.clearFields();
        }
    }
}

export const ui = new MenuUI();
