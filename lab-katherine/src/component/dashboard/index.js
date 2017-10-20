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
    this.updateNote = this.updateNote.bind(this)
  }

  addNote(note){
    note = {...note}
    note.id = uuidv1()
    note.editing = false
    note.completed = false
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
    }))
  }

  removeNote(note){
    this.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id
      })
    }))
  }

  updateNote(note){
    this.setState(({notes}) => ({
      notes: notes.map(item => item.id === note.id ? note : item),
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
        <NoteList notes={this.state.notes} removeNote={this.removeNote updateNote={this.updateNote}/>
      </div>
    )
  }
}

export default Dashboard
