window.addEventListener('load', getMenu);
// document.getElementById('menu_category').addEventListener('submit', menu);
// document.getElementById('menu').addEventListener('click', getMenu);

function menu(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let token = localStorage.getItem("access_token");

    fetch('http://127.0.0.1:5000/api/v2/menu', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            "access-token": {"Authorization": "Bearer " + token}
        },
        body: JSON.stringify({
            "name": name,
            "description": description
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
                if (data['status'] === 201) {
                    document.getElementById('message').innerHTML = data['message']
                }
                // let access_token = window.localStorage.getItem('access_token');
                // let payload = JSON.parse(atob(access_token.split('.')[1]));
                //
                // if (payload.admin) {
                else {
                    document.getElementById('message').innerHTML = data['message'];
                    document.getElementById('message').style.color = '#272727';
                    document.getElementById('message').style.display = 'block';
                    document.getElementById('message').style.padding = '5px';
                    document.getElementById('message').style.backgroundColor = '#ecee5a'
                }
            }
        )
}

function getMenu(e) {
    e.preventDefault();

    fetch('http://127.0.0.1:5000/api/v2/menu', {
        method: 'GET',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => response.json())
        .then(data => {
            if (data['message']) {
                document.getElementById('menuOffered').innerHTML = data['message'];
            }
            let tableHeaders =
                `
                    <th>name</th>
                    <th>description</th>
                    <th>enable/disable</th>
                    <th>action</th>`;

            let output = '';
            data.forEach((menu) => {
                // const {id, name, description} = menu;
                output +=
                    `<a href="../menu-category.html"><tr>
                        <td>${menu["name"]}</td>
                        <td>${menu["description"]}</td>
                    </tr></a>`
            });
            document.getElementById('menu_headers').innerHTML = tableHeaders;
            document.getElementById('menu_available').innerHTML = output;

        });
}