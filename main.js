// new search adds songs
// background image
// items centered in box
// do something w/ preview box
// alert if no results returned from search
// add css to header
// center title and form box
// 


console.log("JS hooked up")


const songs = document.getElementById("songs-list")

const form = document.querySelector('#search-form')

const submitButton = document.getElementById('submit-search')

let searchText = document.getElementById('search-text')

const url = 'https://proxy-itunes-api.glitch.me/search?media=music&entity=song&limit=10&term='

document.getElementById('submit-search').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(searchText.value)
    listSongs(searchText)
    form.reset()
})


// listSongs function works, will console log data
    function listSongs() {
    fetch(url + searchText.value)
        .then((res) => res.json())
        .then((data) => {
            for (let item of data.results) {
                songs.innerHTML +=
                `<div class="card" >
                    <img src=${item.artworkUrl100}>
                    <div>Name: ${item.artistName}</div>
                    <div>Song: ${item.trackName}</div>
                    <div>Album: ${item.collectionName}</div>
                    <audio controls src=${item.previewUrl}>Preview</audio>
                </div>
                `
            }
        })
    }




// listSongs()






