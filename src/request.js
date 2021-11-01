// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = process.env.REACT_APP_API_KEY;

export const requests = {
  feachTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
  feachTopRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feachActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feachComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feachHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feachRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feachDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
