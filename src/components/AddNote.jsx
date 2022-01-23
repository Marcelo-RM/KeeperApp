import React, { useState } from "react";

function AddNote(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNewNote((prevValue) => {
      return { ...prevValue, [name]: value }
    });
  };

  return <div>
    <form onSubmit={(event) => {
      props.onAdd(newNote);
      setNewNote({ title: "", content: "" });

      event.preventDefault();
    }}>
      <input type="text" placeholder="Title"
        name="title" onChange={handleChange} value={newNote.title} />
      <textarea type="text" placeholder="Take a note..." rows="3"
        name="content" onChange={handleChange} value={newNote.content} />

      <button type="submit">Add</button>
    </form>

  </div>;

};

export default AddNote;