console.log("JS hooked up")

const songs = document.getElementById("songs-list")

const form = document.querySelector('#search-form')

const submitButton = document.getElementById('submit-search')

let searchText = document.getElementById('search-text')

const url = 'https://proxy-itunes-api.glitch.me/search?media=music&entity=song&term='

document.getElementById('submit-search').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(searchText.value)
    listSongs(searchText)
})


// listSongs function works, will console log data
    function listSongs(data) {
    fetch(url + searchText.value)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }

listSongs()






// // what goes in the {} on line 45????
// function renderSongAttributes(li, songObj) {
//     li.innerHTML = `<span>${results.id.artistName}</span>`
// }

// 
