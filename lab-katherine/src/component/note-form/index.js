import React from 'react'

class NoteForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    return this.props.onComplete(this.state)
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  render(){
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
        <button type='submit'> create note </button>
      </form>
    )

  }
}

export default NoteForm
