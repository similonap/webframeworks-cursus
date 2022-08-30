import React from "react";
import List from "components/List/List";
import { Game } from "types";

const App = () => {
  const games : Game[] = [
    {
        id: 0,
        name: "World of Warcraft",
        releaseYear: 2004,
        sales: 5
    },
    {
        id: 1,
        name: "Valheim",
        releaseYear: 2021,
        sales: 10
    },
    {
        id: 2,
        name: "Minecraft",
        releaseYear: 2011,
        sales: 20
    }
  ];
  return (
    <div>
      <h1>Welcome to the H2O Game shop</h1>
      <List games={games}/>
    </div>
  );
}
export default App;
