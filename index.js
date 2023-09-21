const songs = [
  {
    title: "Hayloft I",
    artist: "Mother Mother",
    genre: "Indie rock",
    duration: "3:24",
    yearOfRelease: 2008,
    wasPopular: true,
  },
  {
    title: "La posada de los muertos",
    artist: "Mägo de Oz",
    genre: "Metal progresivo",
    duration: "4:45",
    yearOfRelease: 2005,
    wasPopular: true,
  },
  {
    title: "Vitality",
    artist: "Mittsies",
    genre: "Instrumental",
    duration: "3:37",
    yearOfRelease: 2020,
    wasPopular: false,
  },
];

newsong = {
  title: "hola",
  artist: "hola",
  genre: "hola",
  duration: "hola",
  yearOfRelease: 2222,
  wasPopular: true,
};

const addToSongs = (newsong) => songs.push(newsong);

const deleteFromSongsByTitle = (title) =>
  songs.splice(
    songs.indexOf((song) => song.title === title),
    1
  );

const findSongByTitle = (title) => songs.find((song) => song.title === title);

const findSongBygenre = (genre, songs) =>
  songs.filter((song) => song.genre === genre);

const findSongWhoWerePopular = (songs) =>
  songs.filter((song) => song.wasPopular).length;

const getSortedSongsByRelease = (songs) =>
  songs.toSorted((songA, songB) => songA.yearOfRelease - songB.yearOfRelease);

const getSongsTitles = (songs) => songs.map((song) => song.title);

const getAverageDurationOfSongs = (songs) =>
  songs
    .map((song) => song.duration)
    .map((song) =>
      song
        .split(":")
        .map((song, position) => Number(song) / Math.pow(60, position))
        .reduce((totalTime, time) => totalTime + time)
    )
    .reduce((totalTime, timeInMin) => totalTime + timeInMin) / songs.length;

const showSongs = (songs) => songs.forEach((song) => console.log(song.title));

showSongs(songs);
console.log(getAverageDurationOfSongs(songs));
