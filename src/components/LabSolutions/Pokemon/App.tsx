import React from "react";
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import styles from './App.module.css';

const HomePage = () => {
  return <div>Hallo</div>
}

const App = () => {



  return (
    <div>
      <MemoryRouter>
        <nav className={styles.nav}>
            
        </nav>
        <Routes>
            
        </Routes>
      </MemoryRouter>
    </div>
  )
}

export default App;
