async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let users = await response.json()
    return users
}

getUsers().then(users => {
    let sampleUser = users[0]
    let userDiv = `
    <div class="my-online-user">
    <div class="user-username">${sampleUser.username}</div>
    <div class="user-online"></div>
    </div>
    `

    document.body.innerHTML = userDiv
})