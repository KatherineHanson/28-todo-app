import React from 'react'
import NoteItem from '../note-item'

class NoteList extends React.Component {
  render(){
    let {removeNote, updateNote} = this.props
    return (
      <ul className='note-list'>
        {this.props.notes.map((note, i) =>
          <NoteItem key={i} note={note} removeNote={removeNote} updateNote={updateNote}/>
        )}
      </ul>
    )
  }
}

export default NoteList
