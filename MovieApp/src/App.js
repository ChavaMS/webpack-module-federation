import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
// import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
// import Homepage from "./components/Homepage/Homepage.jsx";
// import BookPage from "./components/BookPage/BookPage.jsx";
const HomePage = React.lazy(() => import("homepage/HomePage"));
const DetailsPage = React.lazy(() => import("detailspage/DetailsPage"));
const SeatsSelectionPage = React.lazy(() => import("seatselection/SeatSelection"));

const App = () => {
  const movieClicked = (movie) => {
    history.push(`details/${movie.id}`);
  }

  const history = useHistory();
  const location = useLocation();


  return (
    <Switch>
      <Route path="/details/:id">
        <Suspense fallback={null}>
          <DetailsPage location={location} routing={{history, location}}></DetailsPage>
        </Suspense>
      </Route>
      <Route path="/book">
        <Suspense fallback={null}>
          <SeatsSelectionPage></SeatsSelectionPage>
        </Suspense>
      </Route>
      <Route path="/">
        <Suspense fallback={null}>
          <HomePage movieClicked={movieClicked} routing={{history, location}}></HomePage>
        </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
