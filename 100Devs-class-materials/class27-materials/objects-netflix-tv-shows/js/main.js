//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTVShow {
  constructor(
    showTitle,
    showTrailer,
    showCategory,
    showLanguage,
    showSubtitle,
    showEpisode,
    showRating
  ) {
    this.title = showTitle;
    this.category = showCategory;
    this.language = showLanguage;
    this.episode = showEpisode;
    this.rating = showRating;
  }
  clickPlayStopPause() {
    console.log("click!");
  }
  skipIntro() {
    console.log("skipppp introooo");
  }
  onOffSubtitle() {
    console.log("");
  }
  saveToList() {
    console.log("saved!");
  }
  chooseLanguage(showLanguage) {
    console.log(`I want to choose ${this.language}`);
  }
  episodes() {
    console.log(`This ${showEpisode} is awesome!`);
  }
}

let bridgeton = new NetflixTVShow(
  "Brigerton",
  "Period Romantic Drama",
  "British English",
  18,
  "99%"
);
let NetflixTVShow = new NetflixTVShow();
let NetflixTVShow = new NetflixTVShow();
let NetflixTVShow = new NetflixTVShow();
