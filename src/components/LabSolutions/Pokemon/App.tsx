import React, { createContext, CSSProperties, useContext, useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import oak from './assets/oak.png';


export interface Pokedex {
  abilities:                Ability[];
  base_experience:          number;
  forms:                    Form[];
  game_indices:             any[];
  height:                   number;
  held_items:               any[];
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    any[];
  name:                     string;
  order:                    number;
  past_types:               any[];
  species:                  Dictionary;
  sprites:                  Dictionary;
  stats:                    any[];
  types:                    any[];
  weight:                   number;
}

export interface Ability {
  ability:   Form;
  is_hidden: boolean;
  slot:      number;
}

export interface Form {
  name: string;
  url:  string;
}

export interface Dictionary {
  [key: string]: string
}


const PokemonDetail = ({id} : {id: number}) => { 
  const [pokemon, setPokemon] = useState<Pokedex>();
  useEffect(() => {
    const loadPokemonNames = async() => {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let pokemonJson : Pokedex = await response.json();

      setPokemon(pokemonJson);
    }
    loadPokemonNames();
  }, []);

  if (pokemon === undefined) {
    return (
      <div></div>
    )
  };

  return (
    <div>
      <div>Name: {pokemon.name}</div>
      <div>Weight: {pokemon.weight}</div>
      <div>Height: {pokemon.height}</div>
      <div><img src={pokemon.sprites["front_default"]}/></div>
      <div><Link style={({hover}) => {
        if (hover) return { cursor: "pointer", textDecoration: "underline"}; else return {cursor: "pointer", textDecoration: ""}
      }} to="pokemon">Back</Link></div>
    </div>
  );
}

const Page1 = () => {
  return <div style={{flex: 1, display: "flex", flexDirection: "row", padding: 20}}>
    <div style={{flex: 1}}>
      <img src={oak} style={{width: 100}}/>
    </div>
    <div  style={{flex: 2}}>
      Hello there! Welcome to the world of POKEMON!<br/><br/>My name is OAK! People call me the POKEMON PROF!<br/><br/>This world is inhabited by creatures called POKEMON!<br/><br/>For some people, POKEMON are pets. Others use them for fights. Myself...I study POKEMON as a profession.
    </div>
  </div>;
};

const NavLink = ({children, to, style} : {children: any, to: string, style?: ({active, hover} : {active: boolean, hover: boolean}) => CSSProperties}) => {
  const [hover, setHover] = useState(false);

  const { setCurrentRoute, currentRoute} = useContext(RoutingContext);
  let active = false;
  if (currentRoute === to) {
    active = true;
  }

  const currentStyle = style({active: active, hover: hover});

  return (
    <span onClick={() => setCurrentRoute(to)} style={currentStyle} onMouseEnter={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)} >
      {children}
    </span>
  )
}

const Link = ({children, to, style} : {children: any, to: string, style?: ({hover} : {hover: boolean}) => CSSProperties}) => {
  const [hover, setHover] = useState(false);

  const { setCurrentRoute, currentRoute} = useContext(RoutingContext);
  let active = false;
  if (currentRoute === to) {
    active = true;
  }

  const currentStyle = style({hover: hover});

  return (
    <span onClick={() => setCurrentRoute(to)} style={currentStyle} onMouseEnter={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)} >
      {children}
    </span>
  )
}

const PokemonListItem = ({pokemon} : {pokemon: Pokemon}) => {
  const [mouseOver, setMouseOver] = useState(false);

  const { setCurrentRoute, currentRoute} = useContext(RoutingContext);

  return <div onClick={() => setCurrentRoute("pokemon/" + (pokemon.id + 1))} onMouseEnter={(e) => setMouseOver(true)} onMouseLeave={(e) => setMouseOver(false)} style={{display: "flex", justifyContent: "center", alignItems: "center", margin: 10, height: "70px",boxShadow: "0px 0px 1px black", cursor: "pointer", backgroundColor: mouseOver ? "#1AC8A2" : "white", color: mouseOver ? "white" : "black"}}>{pokemon.name}</div>
}

interface PokemonPageProps {
  pokemon: Pokemon[],
}

const PokemonPage = ({pokemon} :  PokemonPageProps) => {
  const { searchTerm, setSearchTerm} = useContext(RoutingContext);

  return <div style={{flex: 1, display: "flex", flexDirection: "column", padding: 10}}>
    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" style={{border: "1px solid #a0d18c", borderRadius: "10px", padding :10, margin: 10}} placeholder="search"/>
    <div style={{flex: 1}}>
     {pokemon.filter((p) => p.name.toUpperCase().startsWith(searchTerm.toUpperCase())).map(p => <PokemonListItem pokemon={p}/>)}
    </div>
  </div>;
};

interface Pokemon {
  id: number,
  name: string
}

interface RoutingContext {
  currentRoute: string,
  setCurrentRoute: (route: string) => void,
  searchTerm: string,
  setSearchTerm: (search: string) => void
}

const RoutingContext = createContext<RoutingContext>({
  currentRoute: "",
  setCurrentRoute: () => {},
  searchTerm: "",
  setSearchTerm: () => {}
});


const LoadingIndicator = () => {
  return (
      <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
  )
}


const App = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  let page = <Page1/>
  if (currentRoute == "pokemon") {
    page = <PokemonPage pokemon={pokemon}/>
  } if (currentRoute.match(/pokemon\/[0-9]+/g)) {
    let groups = /pokemon\/([0-9]+)/g.exec(currentRoute);
    page = <PokemonDetail id={parseInt(groups[1])}/>
  }


  useEffect(() => {
    const loadPokemonNames = async() => {
      setLoading(true);
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500");
      let pokemonJson = await response.json();

      setPokemon(pokemonJson.results.map((p,i) => { return {name: p.name, id: i}}));
      setLoading(false);
    }
    loadPokemonNames();
  }, []);

  const navStyle = ({active, hover}) => {
    let baseStyle : CSSProperties = {fontSize: "11pt", display: "flex", justifyContent: "center", alignItems:"center", width: 80, cursor: "pointer", color: "white"};
    if (hover) {
      baseStyle = {...baseStyle, backgroundColor: "green"};
    } else {
      baseStyle = {...baseStyle, backgroundColor: ""};
    }
    if (active) {
      baseStyle = {...baseStyle, backgroundColor: "green"};
    }
    return baseStyle;
  }

  return (
    <RoutingContext.Provider value={{currentRoute, setCurrentRoute, searchTerm, setSearchTerm}}>
    <div>
      <div className="browser">
        <div className="browser-navigation-bar">
          <i></i>
          <i></i>
          <i></i>
          <input value={"http://localhost:8080/" + currentRoute} className="urlbar"/>
        </div>

        <div className="browser-container">
          <div>
            <div
              style={{
                height: '50px',
                width: '100%',
                backgroundColor: '#1AC8A2',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
              }}
            >
              <NavLink to="" style={navStyle}>Home</NavLink>
              <NavLink to="pokemon" style={navStyle}>Pokemon</NavLink>
              {/* <div style={{fontSize: "11pt", display: "flex", justifyContent: "center", alignItems:"center", width: 80, cursor: "pointer", color: "white", backgroundColor: currentRoute == "" ? "green" : ""}} onClick={() => { setCurrentRoute("")}}>Home</div>
              <div style={{fontSize: "11pt", display: "flex", justifyContent: "center", alignItems:"center", width: 80, cursor: "pointer", color: "white", backgroundColor: currentRoute == "pokemon" ? "green" : ""}} onClick={() => { setCurrentRoute("pokemon")}}>Pokemon</div> */}
            </div>

            
          </div>
          {loading && <LoadingIndicator/>}
          {page}
        </div>
      </div>
    </div>
    </RoutingContext.Provider>
  );
};

export default App;
