import React from 'react'
import NoteItem from '../note-item'

class NoteList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul>
        {this.props.notes.map(result =>
          <li>
            <NoteItem note={result}/>
          </li>
        )}
      </ul>
    )
  }
}

export default NoteList
