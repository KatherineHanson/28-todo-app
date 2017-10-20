import React from 'react'

let emptyState = {
  title: '',
  content: '',
}

class NoteForm extends React.Component {
  constructor(props){
    super(props)
    let {note} = props
    this.state = note ? note : emptyState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.note){
      this.setState(nextProps.note)
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
    console.log('reset form')
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  render(){
    let buttonText = this.props.note ? 'update note' : 'create note'
    return (
      <form
        className='note-form'
        onSubmit={this.handleSubmit}
        >
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
          />

          <input
            type='text'
            name='content'
            placeholder='content'
            value={this.state.content}
            onChange={this.handleChange}
            />
        <button type='submit'> {buttonText} </button>
      </form>
    )

  }
}

export default NoteForm
