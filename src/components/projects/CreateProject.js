import React, { Component } from 'react';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }
  render() {
    return (
      <div className="container">
      <h5 className="grey-text text-darken-3">Create New Project</h5>
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>

          <div className="input-field">
            <button className="btn teal darken-2 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject;