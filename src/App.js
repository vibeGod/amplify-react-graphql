import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
} from "@aws-amplify/ui-react";






import logo from './logo.svg';
import Header from './Header.js';
import NoteEntry from './NoteEntry.js';
import NoteDisplay from './NoteDisplay.js';

import fetchNotes from "./NoteFunctions";



const App = ({ signOut }) => {
 

  
  return (
    <div className="App">
      <Header />
      <NoteDisplay />
      <button className='SignOut' onClick={signOut}>Sign Out</button>
    
    </div>
    
  );
};

export default withAuthenticator(App);