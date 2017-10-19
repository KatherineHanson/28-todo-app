import React from 'react'
import NoteItem from '../note-item'

class NoteList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul className="NoteList">
        {this.props.notes.map(result =>
          <NoteItem note={result} removeNote={this.props.removeNote}/>
        )}
      </ul>
    )
  }
}

export default NoteList
