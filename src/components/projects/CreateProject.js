import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
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

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);