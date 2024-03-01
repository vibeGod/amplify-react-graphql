import {
    Button,
  } from "@aws-amplify/ui-react";




export default function NoteContainer(props) {
   
    return (

<div style={{display: 'flex'}}>
<p style={{margin: '10px'}}>
  {props.note.name}
</p>
<p style={{margin: '10px'}}>{props.note.description}</p>
{props.note.image && (
  <img
    src={props.note.image}
    alt={`visual aid for ${props.note.name}`}
    style={{ width: 400 }}
  />
)}
<Button variation="link" >
  Delete note
</Button>
</div>

    );
}

;