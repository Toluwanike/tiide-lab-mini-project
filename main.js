// api url 
const url = "https://jsonplaceholder.typicode.com/users";

// fetch users from the API url 
function fetchUsers() {
    // make use of browser fetch API 
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // passing the data to the renderuser function 
        renderUsers(data);
    });
}



// render the user in the DOM 
function renderUsers(usersData) {
    const ul = document.getElementById('user-list-container');


// render li tags for each of the users 
usersData.forEach((user, index) => {


        const li = document.createElement('li');
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;
        ul.appendChild(li);

    });
    

    searchUsersByUsername();
}
// add the search function to the DOM 
function searchUsersByUsername(){
    const input = document.getElementById('search');
    const ul = document.getElementById('user-list-container');
    const inputValue = input.value.toUpperCase();

    const usersList = ul.querySelectorAll('li');

    // loop through all the users and render the one that match 
    for (let index =0; index < usersList.length; index++) {
        const usernameSpanTag = usersList[index].querySelector('.username');
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

        if(isMatch) {
            usersList[index].style.display = 'block';

        }else {
            usersList[index].style.display = 'none';
        }
    }
}

// calling the fetch function
fetchUsers();