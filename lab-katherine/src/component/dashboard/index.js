import React from 'react'
import ExpenseForm from '../note-form'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
    }

    this.addExpense = this.addExpense.bind(this)
  }

  addExpense(note){
    note.create = new Date()
    note.id = Math.random()
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
    }))
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state)
  }

  render(){
    let total = this.state.notes.reduce((result, note) => result + note.price, 0)
    return (
      <div className='dashboard'>
        <h1> dash Component </h1>
        <ExpenseForm onComplete={this.addExpense} />
        <p> total: ${total} </p>
      </div>
    )
  }
}

export default Dashboard
