import React from 'react'
import NoteForm from '../note-form'
import NoteList from '../note-list'
import uuidv1 from 'uuid/v1'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
    }

    this.addNote = this.addNote.bind(this)
    this.removeNote = this.removeNote.bind(this)
  }

  addNote(note){
    note.id = uuidv1()
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
    }))
  }

  removeNote(note){
    this.setState(prevState => ({
      notes: prevState.notes.filter((kept) => {
        return kept.id !== note.id
      })
    }))
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state)
  }

  render(){
    return (
      <div className='dashboard'>
        <h1> dash Component </h1>
        <NoteForm onComplete={this.addNote} />
        <NoteList
        notes={this.state.notes}
        removeNote={this.removeNote}/>
      </div>
    )
  }
}

export default Dashboard
