document.getElementById('menu_category').addEventListener('submit', menu);

function menu(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;

    fetch('http://127.0.0.1:5000/api/v2/menu', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            "access-token": window.localStorage.getItem("access-token")
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
                    document.getElementById('message').style.color = 'white';
                    document.getElementById('message').style.display = 'block';
                    document.getElementById('message').style.backgroundColor = '#FF9800'
                }
            }
        )
}