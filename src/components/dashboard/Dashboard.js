import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { projects, authStatus } = this.props;
    if(!authStatus.uid) return <Redirect to='/signin'/>

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col sm12 m6">
            <ProjectList projects={projects}/>
          </div>

          <div className="col sm12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    authStatus: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard);