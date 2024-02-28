import "./Header.css";
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

  import signOut from './App.js';



  import logo from './logo.svg';


export default function Header() {
    return (
        <Heading className="header" level={1}>
        
      <Text className="header-text">notes</Text>
      
      
      
      </Heading>
    );
}