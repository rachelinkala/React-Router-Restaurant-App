import React from 'react';

class Form extends React.Component {
  defaultValues = { item: '', description: '', price: '' }
  state = {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault();
    const menu = { ...this.state }
    this.props.submit(menu)
    this.setState({...this.defaultValues})
  }

  handleChange = (e) => {
    const { target: { name, value }} = e;
    this.setState({ [name]: value })
  }

  render() {
    const { item, description, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="item"
          placeholder="Item"
          value={item}
          onChange={this.handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;