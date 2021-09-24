async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let users = await response.json()
    return users
}


function getUserDiv(user) {
    return `
    <div class="my-online-user">
    <div class="user-username">${user.username}</div>
    <div class="user-online"></div>
    </div>
    `
}
getUsers().then(users => {
    let sampleUser = users[0]
    let userDiv = getUserDiv(sampleUser)
    
    document.body.innerHTML = `<div class="my-online-users">
        ${users.map(user => {
            return getUserDiv(user)
        }).join('')}
    </div>`
})