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
            // console.log(data.results) 
            for (let item of data.results) {
                // root.appendChild(data.results)
                console.log(item.artistName)
                songs.innerHTML +=
                `<div class="card" >
                <img src=${item.artworkUrl100}>
                <li>${item.artistName}</li>
                <li>${item.trackName}</li>
                <li>${item.collectionName}</li>
                <audio controls src=${item.previewUrl}></audio>
                </div>



                `
            }
        })
    }




listSongs()






// // what goes in the {} on line 45????
// function renderSongAttributes(li, songObj) {
//     li.innerHTML = `<span>${results.id.artistName}</span>`
// }

// 
