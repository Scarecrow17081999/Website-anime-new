import { Link  } from "react-router-dom";

import { Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function Genres() {
    

const Genres = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Dementia",
  "Demons",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Game",
  "Harem",
  "Historical",
  "Horror",
  "Isekai",
  "Josei",
  "Kids",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Music",
  "Mystery",
  "Parody",
  "Police",
];


  return (
    <div style={{padding:'15px'}}>

      <SimpleGrid columns={2} spacing={8}>
        {Genres.map((e)=>{
              return <Link  to={`/genres/${e}`}>{e}</Link>;
        })}
     
      </SimpleGrid>
    </div>
  );
}
