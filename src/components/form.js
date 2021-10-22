import React, { Component } from 'react'
import FormElements from './formElements'
class Form extends Component {
  state = {
    name: '',
    last: '',
    msg: '',
    error: {},
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.name === '' || this.state.last === '') {
      this.setState({
        error: { name: 'Required field.', last: 'Required field.' },
      })
      return
    } else if (this.state.msg === '') {
      this.setState({
        error: { msg: 'Say something...' },
      })
      return
    }
    this.props.history.push({ pathname: '/user', state: this.state })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: { [e.target.name]: '' },
    })
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <FormElements
            element='input'
            label='First name'
            cb={this.handleChange}
            name='name'
            value={this.state.name}
            error={this.state.error.name}
          />
          <FormElements
            element='input'
            label='Last name'
            cb={this.handleChange}
            name='last'
            value={this.state.last}
            error={this.state.error.last}
          />
          <FormElements
            element='textarea'
            label='Message'
            cb={this.handleChange}
            name='msg'
            value={this.state.msg}
            error={this.state.error.msg}
          />

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default Form
