import React from 'react'

let modalStyles = (props) => ({
  display: props.show ? 'block' : 'none',
})

class Modal extends React.Component {
  render(){
    return (
      <div style={modalStyles(this.props)} className='modal'>
        <button onClick={this.props.onClose}> close </button>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Modal
