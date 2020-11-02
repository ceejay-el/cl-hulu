import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Showcase from "./Showcase";
import Showcase_2 from "./Showcase_2";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Showcase/>
      <Row title="2020 Releases" fetchUrl={requests.fetchThisYear}/>
      <Row  title="CL-HULU PICKS"
            fetchUrl={requests.fetchPopular}
            isLargeRow
      />
      <Row title="ACTION" fetchUrl={requests.fetchAction}/>
      <Row title="FANTASY" fetchUrl={requests.fetchFantasy}/>
      <Row title="SCI-FI" fetchUrl={requests.fetchSciFi}/>
      <Showcase_2/>
      <Row title="KIDS"
      fetchUrl={requests.fetchKids}
      isLargeRow
      />
      <Row title="DRAMA" fetchUrl={requests.fetchDrama}/>
      <Row title="ROMANCE" fetchUrl={requests.fetchRomance}/>
      <Row title="HORROR" fetchUrl={requests.fetchHorror}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
