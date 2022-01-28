import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function AddNote(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNewNote((prevValue) => {
      return { ...prevValue, [name]: value }
    });
  };

  function handleSubmit(event) {
    if (newNote.title || newNote.content) {
      props.onAdd(newNote);
    }
    setNewNote({ title: "", content: "" });
    setExpanded(false);
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return <div>
    <form onSubmit={handleSubmit} className="create-note">
      {isExpanded &&
        <input type="text" placeholder="Title"
          name="title" onChange={handleChange} value={newNote.title} />
      }
      <textarea type="text" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onClick={expand}
        name="content" onChange={handleChange} value={newNote.content} />

      <Zoom in={isExpanded}>
        <Fab type="submit">
          <Add />
        </Fab>
      </Zoom>
    </form>

  </div>;

};

export default AddNote;