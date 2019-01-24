
var myRequest = new XMLHttpRequest();
var songOptions = document.getElementById('song-options');
var getSongs = document.getElementById('get-songs');
var genreSelect = document.getElementById('genre-select');
var difficultySelect = document.getElementById('difficulty-select');


//XML request & parsing JSON
getSongs.addEventListener('click', () => {

  if(myRequest.readyState == 4 && myRequest.status == 200) {
    var myData = JSON.parse(myRequest.responseText);
    let genre = genreSelect.value;
    let difficulty = difficultySelect.value;

    var genreResult = myData.filter(song => song.genre === genre);
    var bothResult = genreResult.filter(song => song.difficulty === difficulty);

    if(songOptions.innerHTML != null) {
        $("div.songoptions").empty();
    }

    renderHTML(bothResult);
  }
});
myRequest.open('GET', '/public/songs.json', true);
myRequest.send();

//Renders returned JSON into readable format
function renderHTML(data) {
    var htmlString = "";
    for(i=0; i<data.length; i++) {
        htmlString += "<p>" + data[i].title + " by " + data[i].artist + "</p>";
    }
    songOptions.insertAdjacentHTML('beforeend', htmlString);
};
