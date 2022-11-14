// ASYNC AWAIT

movePlayer(100, 'Left')
.then(() => movePlayer(400, 'Left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(330, 'Left'))

async function playerStart() {
    const first = await movePlayer(100, 'Left'); //pause
    const second = await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlyaer(330, 'Left'); //pause
}

//Examples


fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

//how can we turn this into an async function aka syntantic sugar

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//Previous way 

Promise.all(urls.map(url => //mapped through the url's
        fetch(url).then(resp => resp.json()) //fetched the url's, and responded with the json
        )).then(array => { //then we returned the array 
            console.log('users', array[0])
            console.log('posts', array[1])
            console.log('albums', array[2])
        }).catch('oops');

//Lets convert this into an Async function

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
            ))
            console.log('users', users)
            console.log('posts', posts)
            console.log('albums', albums)
    } catch (err) {
        console.log('ooops', err)
    }
}