console.log("JS hooked up")


const songs = document.getElementById("songs-list")

const form = document.querySelector('#search-form')

const submitButton = document.getElementById('submit-search')


// document.getElementById('submit-search').addEventListener('click', (e) => {
//     console.log(searchText)
//     function listSongs(searchText, data) {
//         const url = 'https://proxy-itunes-api.glitch.me/search?media=music&entity=song&term='
//         fetch(url + 'kiss')
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//             })
//         }
    
// })



// listSongs function works, will console log data


    let searchText = ('prince')

    function listSongs(searchText, data) {
    const url = 'https://proxy-itunes-api.glitch.me/search?media=music&entity=song&term='
    fetch(url + "prince")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }

listSongs()


// let searchText = document.getElementById('searchText').value;
// fetch(`url + ${searchText} + '&entity=song'`)
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
//     // renderSongs(data)
// })


// function renderSongs(data) {
//     const li = document.createElement('li')
//     li.id = songObj.id
//     renderSongAttributes(li, data)
//     songs.appendChild(li)
// }


// // what goes in the {} on line 45????
// function renderSongAttributes(li, songObj) {
//     li.innerHTML = `<span>${results.id.artistName}</span>`
// }

// 
