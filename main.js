// background image
// do something w/ audio preview box color
// alert if no results returned from search 404 error
// center title and form box


console.log("JS hooked up")


const songs = document.getElementById("songs-list")

const form = document.querySelector('#search-form')

const submitButton = document.getElementById('submit-search')

let searchText = document.getElementById('search-text')

const url = 'https://proxy-itunes-api.glitch.me/search?media=music&entity=song&limit=15&term='

document.getElementById('submit-search').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(searchText.value)
    listSongs(searchText)
    form.reset()
})


    function listSongs() {
    document.getElementById('songs-list').innerHTML = ''
    fetch(url + searchText.value)
        .then((res) => res.json())
        .then((data) => {
            for (let item of data.results) {
                songs.innerHTML +=
                `<div class="card" >
                    <img src=${item.artworkUrl100}>
                    <h3>${item.artistName}</h3>
                    <div>Song: ${item.trackName}</div>
                    <div>Album: ${item.collectionName}</div>
                    <audio controls src=${item.previewUrl}>Preview</audio>
                </div>
                `
            }
        })
    }







