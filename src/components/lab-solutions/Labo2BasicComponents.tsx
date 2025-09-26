import React, { useState } from 'react';

const Header = ({title, subtitle}: {title: string, subtitle: string}) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
}

const ListItem = ({text}: {text: string}) => {
  return (
    <li>{text}</li>
  );
}

const List = ({items}: {items: string[]}) => {
  return (
    <ul>
      {items.map((item, i) => (
        <ListItem text={item} key={i} />
      ))}
    </ul>
  );
}

const Footer = ({copy, year}: {copy: string, year: number}) => {
  return (
    <footer>
      <p>© {copy} ({year})</p>
    </footer>
  );
}


const App = () => {
  return (
    <>      
      <Header title="Labo 2" subtitle="Basic components" />
      <List items={["item 1", "item 2", "item 3"]} />
      <Footer copy="Andie Similon" year={2021} />
    </>
  );
};

export default App;
