import React from 'react'

class NoteItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <li className='note-item'>
        {this.props.note.title}: {this.props.note.content}
        <button onClick={() => }></button>
      </li>
    )
  }

}

export default NoteItem
