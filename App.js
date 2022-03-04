import  utils from "./utils";
import './styless.css';
import React, { useEffect , useState} from "react";
import MovieCard from "./MovieCard";
import { movieData } from "./utils";
import MovieDetails from "./MovieDetails";
// import Form from "./Form";
export default function App() {
  console.log(movieData);
  return (
    <>
      <div>
        < MovieCard />
        {/* < MovieDetails /> */}
        {/* <Form/> */}
      </div>
    </>
  );
}


