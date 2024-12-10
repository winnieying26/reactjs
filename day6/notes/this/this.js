// this => the obj that is executing the current function

// method - > obj
//function -> global(window, global)

const video = {
  title: "Game",
  play() {
    console.log(this);
  },
};
video.stop = function () {
  console.log(this);
};
video.play();
video.stop();

function playVideo() {
  console.log(this);
}
playVideo();

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("Fun Game"); // constructor {}

const book = {
  title: "Harry Potter",
  characters: [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley",
    "Severus Snape",
  ],
  showCharacters() {
    this.characters.forEach(function (character) {
      console.log(this.title, character);
    }, this);
  },
};

book.showCharacters()