console.log("JS hooked up")

const url = 'https://proxy-itunes-api.glitch.me/search?term='

const songs = document.getElementById("songs-list")

const form = document.querySelector('#search-form')

// SUBMIT BUTTON DOESN'T WORK

// const submitButton = document.getElementById('submit-search')
// form.addEventListener('search', (e) => {
//     e.preventDefault
//     searchText = document.getElementById('search-text').value
//         createSong(songText)
//         form.reset()
//     })




// listSongs function works, will console log data
// pretty sure renderSongs works too
// renderSongAttributes line 45 artistName is undefined
function listSongs() {
    fetch(url+'prince'+'&entity=song')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            renderSongs(data)
        })
    }


function renderSongs(songObj) {
const li = document.createElement('li')
li.id = songObj.id
renderSongAttributes(li, songObj)
songs.appendChild(li)
}
// what goes in the {} on line 45????
function renderSongAttributes(li, songObj) {
    li.innerHTML = `<span>${results.id.artistName}</span>`
}

listSongs()
