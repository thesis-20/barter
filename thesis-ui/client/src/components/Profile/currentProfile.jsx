import React, { Component } from 'react';
import Bio from './bio.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import path from 'path';
import { bindActionCreators } from 'redux';
import { addCurrentList } from '../../actions';
import ListingList from '../Feed/listingPostList.jsx';

const { REST_SERVER_URL } = process.env;
class Profile extends Component {
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    const user_id = path.basename(window.location.href);
    const { data } = await axios.get(`${REST_SERVER_URL}/api/posts/${user_id}`);
    this.props.addCurrentList(data);
  }

  render() {
    return (
      <div className="flex-container">
        <div>
          <Bio />
        </div>
        <ListingList {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    current_list: state.current_list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addCurrentList
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
