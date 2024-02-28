import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";






import logo from './logo.svg';
import Header from './Header.js';
import NoteEntry from './NoteEntry.js';
import NoteDisplay from './NoteDisplay.js';

import fetchNotes from "./NoteFunctions";



const App = ({ signOut }) => {
 

  
  return (
    <View className="App">
      <Header />
      <NoteDisplay />
      <Button className='SignOut' onClick={signOut}>Sign Out</Button>
    
    </View>
    
  );
};

export default withAuthenticator(App);