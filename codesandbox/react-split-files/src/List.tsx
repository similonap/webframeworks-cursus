import ListItem from "./ListItem";
import { Game } from "./types";

interface ListProps {
    games: Game[]
}

const List = ({games}: ListProps) => {
  return (
    <div>
    {games.map((game: Game) => {
        return <ListItem key={game.id} game={game}/>
      })}
    </div>
  );
}

export default List;