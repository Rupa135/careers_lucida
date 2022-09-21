import JobOpenings from "./components/JobOpenings";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useCallback } from "react";
import {Routes , Route , BrowserRouter} from "react-router-dom"
import SingleJobListing from "./components/Listing/SingleJobListing";

function App() {
  return(
      <Routes>
        <Route path="/" element={<JobOpenings/>}/>
        <Route path ="/job/:id" element={<SingleJobListing/>}/>
      </Routes>
  )
}

export default App;
