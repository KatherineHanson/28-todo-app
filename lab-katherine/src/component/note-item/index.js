import React from 'react'

class NoteItem extends React.Component {
  render(){
    let {note, removeNote} = this.props
    return (
      <li className='note-item'>
        {this.props.note.title}: {this.props.note.content}
        <button onClick={() => removeNote(note.id) }> delete </button>
      </li>
    )
  }

}

export default NoteItem
