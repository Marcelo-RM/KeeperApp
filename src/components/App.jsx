import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes";
import AddNote from "./AddNote";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    })
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => index !== id);
    })
  }

  return <div>
    <Header />
    <AddNote onAdd={addNote} />
    {notes.map((note, index) => {
      return <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete={deleteNote} />
    })}
    <Footer />
  </div>;
}

export default App;