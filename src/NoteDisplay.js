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


import { listNotes } from "./graphql/queries";
import { uploadData, downloadData } from 'aws-amplify/storage';
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";


import './NoteDisplay.css';


 
  import signOut from './App.js';

  import { useState, useEffect } from "react";
  //import NoteFunctions, {fetchNotes, deleteNote} from './NoteFunctions';

import { generateClient } from 'aws-amplify/api';
const client = generateClient();




export default function NoteDisplay() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
      fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await client.graphql({ query: listNotes });
        const notesFromAPI = apiData.data.listNotes.items;
        await Promise.all(
          notesFromAPI.map(async (note) => {
    
            if (note.image) {
              const url = await downloadData({ key: note.name});
              note.image = url;
            }
    
            return note;
          })
        );
        setNotes(notesFromAPI);
      }
    
    
      async function createNote(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const image = form.get("image");
    
    
        const data = {
          name: form.get("name"),
          description: form.get("description"),
          image: image.name,
        };
    
    
        // if (!!data.image) await Storage.put(data.name, image);
    
        if (!!data.image) await uploadData({
          key: data.name,
          data: image 
        });
    
        await client.graphql({
          query: createNoteMutation,
          variables: { input: data },
        });
        fetchNotes();
        event.target.reset();
      }
    
      async function deleteNote({ id, name }) {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        await Storage.remove(name);
        await client.graphql({
          query: deleteNoteMutation,
          variables: { input: { id } },
        });
      }
    
    return(
        
        <View>
        <View className="NoteForm">
        <View  as="form" margin="3rem 0" onSubmit={createNote}>
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
           <View
          name="image"
          as="input"
          type="file"
          style={{ alignSelf: "end" }}
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
        </View>
      </View>

<View className="NoteList">
   
      <View margin="3rem 0">
      {notes.map((note) => (
      

  <View
    ClassName="NoteBox"
    key={note.id || note.name}
    direction="row"
    justifyContent="left"
    alignItems="left"
    >
    <Text as="strong" fontWeight={700}>
      {note.name}
    </Text>
    <Text as="span">{note.description}</Text>
    {note.image && (
      <Image
        src={note.image}
        alt={`visual aid for ${notes.name}`}
        style={{ width: 400 }}
      />
    )}
    <Button variation="link" onClick={() => deleteNote(note)}>
      Delete note
    </Button>
  </View>
))}

  </View>
      </View>
      
      </View>
    );
}

