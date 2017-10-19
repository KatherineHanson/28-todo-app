import React from 'react'

class NoteItem extends React.Component {
  render(){
    let {note, removeNote} = this.props
    return (
      <li className='note-item'>
        {note.title}: {note.content}
        <button onClick={() => removeNote(note) }> delete </button>
      </li>
    )
  }
}

export default NoteItem
