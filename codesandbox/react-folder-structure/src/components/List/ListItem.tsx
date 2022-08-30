import React from "react";
import { Game } from "types";

interface ListItemProps {
  game: Game;
}

const ListItem = ({ game }: ListItemProps) => {
  return (
    <React.Fragment>
      <h2>
        {game.name} ({game.releaseYear})
      </h2>
      <p>Aantal keer verkocht: {game.sales}</p>
    </React.Fragment>
  );
};

export default ListItem;