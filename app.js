fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => showUser(data))

const showUser = (userData) =>{
    const container = document.getElementById('container');

    userData.forEach(user => {
        const userName = document.createElement('h2');
        const userEmail = document.createElement('h4')
        container.appendChild(userEmail)
        container.appendChild(userName);
        userName.innerText = "Name: " + user.name;
        userEmail.innerText ="Email: " + user.email;
        
    });
}