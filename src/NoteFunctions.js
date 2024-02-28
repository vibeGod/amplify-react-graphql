
import client from "./App.js";

import { listNotes } from "./graphql/queries";
import { uploadData, downloadData } from 'aws-amplify/storage';
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";




    
