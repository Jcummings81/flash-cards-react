import React from 'react'

class Form extends React.Component {
  initialState = { front: '', back: '' }
  state = {...this.initialState}

  componentDidUpdate(prevProps, prevState) {
    const { editing } = this.props
    if (prevProps.editing !== this.props.editing) {
      if (editing)
        this.setState({...editing})
    }
  }

  cancel = () => {
    const { editing } = this.props
    if (editing) {
      this.setState({...editing})
    } else {
      this.setState({...this.initialState})
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    //const name = e.target.name
    //const value = e.target.value
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { editing, handleSubmit } = this.props
    const { front, back } = this.state
    let card = editing || {}
    card.front = front
    card.back = back
    card.show = card.show || 'front' 
    card.id = card.id || this.genId()
    handleSubmit(card)
    this.setState({ ...this.initialState })
  }

  genId = () => {
    return Math.floor(Math.random() * 1000)
  }

  render() {
    const { front, back } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field col s6">
          <input
            placeholder="Front of card"
            name="front"
            value={front}
            onChange={this.handleChange}
            required
          />
          <input
            placeholder="Back of card"
            name="back"
            value={back}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="button" className="btn" onClick={this.cancel}>
          Cancel
        </button>
        <button className="btn">Save</button>
      </form>
    )
  }
}

export default Form
