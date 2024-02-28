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

  import createNote from './NoteDisplay.js';


export default function NoteEntry() {
    return (

        <View>
        <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
         
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      </View>
      
    );
}