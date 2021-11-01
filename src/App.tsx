import React from 'react';
import { Row } from './Row';
import { requests } from './request';
import { Banner } from './Banner';
console.log(requests);

const App = () => {
  return (
    <div className='App'>
      <Banner />
      <Row
        title='NETFLIX ORIGUINALS'
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title='Top Rated' fetchUrl={requests.feachTopRated} />
      <Row title='Action Movies' fetchUrl={requests.feachActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.feachComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.feachHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.feachRomanceMovies} />
      <Row title='DOcumentaries' fetchUrl={requests.feachDocumentMovies} />
    </div>
  );
};

export default App;
