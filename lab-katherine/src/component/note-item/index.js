import React from 'react'
import NoteForm from '../note-form'
import Modal from '../modal'

class NoteItem extends React.Component {
  render(){
    let {note, removeNote, updateNote} = this.props

    let showEdit = () => updateNote({...note, editing: true})
    let hideEdit = () => updateNote({...note, editing: false})

    let updateAndClose = (note) => {
      updateNote({...note, editing: false})
    }

    return (
      <li className='note-item'>
        <div onDoubleClick={showEdit}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
        <button onClick={showEdit}> edit </button>
        <button onClick={() => removeNote(note) }> delete </button>

        <Modal onClose={hideEdit} show={note.editing} >
          <h1> editing </h1>
          <NoteForm onComplete={updateAndClose} note={note}/>
        </Modal>
      </li>
    )
  }
}

export default NoteItem
