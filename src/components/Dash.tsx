import { Container, } from "react-bootstrap";
import React, { useMemo,useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import NewTask from "./NewTask";
import SignUp from "./SignUp";
import { useLocalStorage } from "../useLocalStorage";
import { v4 as uuidV4 } from "uuid";
import TaskList from "./TaskList";
import NoteLayout from "./NoteLayout";
import OneNote from "./OneNote";
import EditTask from "./EditTask";
import Alert from "../layouts/Alert";
import { loadUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken";
import store from "../store";
import Dashboard from "./Dashboard";
import AdminDashboard from "./AdminDashboard";
import CreateTask from "./CreateTask";
import EditProfile from "./EditProfile";
import AdminLogin from "./AdminLogin";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};
export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const Dash = () => {

  useEffect(()=> {
    store.dispatch<any>(loadUser());
  },[])
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  }

  function onUpdateNote(id:string,{tags, ...data}:NoteData){
    setNotes(prevNotes => {
      return prevNotes.map(note =>{
        if (note.id === id) {
          return {...note,...data,tagIds:tags.map((tag=> tag.id))}
        }else{
          return note
        }
      })
    });
  }

  function onDelete(id:string) {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id)
    })
  }

  function addTag(tag: Tag) {
    setTags((prev) => [...prev, tag]);
  }

  function updateTag(id:string, label:string) {
    setTags(prevTags=> {
      return prevTags.map(tag => {
        if(tag.id === id ){
          return {...tag, label}
        }
        else {
          return tag
        }
      })
    }) 
  }

  function deleteTag(id:string) {
    setTags(prevTags => {
      return prevTags.filter(tag => tag.id !== id)
    })

  }

  return (
    <>
    
     <Alert/>
      <Container className="my-4">
     
        <Routes>
          
          <Route
            path="/dash"
            element={<TaskList notes={notesWithTags} availableTags={tags} onUpdateTag={updateTag} onDeleteTag={deleteTag} />}
          />
          <Route
            path="/new"
            element={
              <NewTask
                onSubmit={onCreateNote}
                onAddTag={addTag}
                availableTags={tags}
              />
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/edit-task" element={<EditProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
            <Route index element={<OneNote onDelete={onDelete}/>} />
            <Route
              path="edit"
              element={
                <EditTask
                  onSubmit={onUpdateNote}
                  onAddTag={addTag}
                  availableTags={tags}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
};

export default Dash;
