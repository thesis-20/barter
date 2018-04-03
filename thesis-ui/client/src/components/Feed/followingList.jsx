import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFollowingList } from '../../actions';
import axios from 'axios';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

const { REST_SERVER_URL } = process.env;
// this component will be used in the profile feed renders all users from following table
class Following extends Component {
  constructor() {
    super();
    this.state = {
      followings: '',
    };
  }
  async componentWillMount() {
    try {
      const user_id = localStorage.id;
      const { data } = await axios.get(`${REST_SERVER_URL}/api/followings/${user_id}`);
      this.setState({
        followings: data,
      });
      this.props.addFollowingList(data);
    } catch (err) {
      console.log('err fetching followers');
    }
  }

  async handleUnfollowButtonClick(followingId) {
    try {
      const user_id = localStorage.id;
      await axios.delete(`${REST_SERVER_URL}/api/followings/${user_id}/${followingId}`);
      const records = this.state.followings.filter(data => data.id !== followingId);
      this.setState({
        followings: records,
      });
      this.props.addFollowingList(this.state.followings);
    } catch (err) {
      console.log('err unfollwing user', err);
    }
  }

  switchToProfile = async (userId) => {
    try {
      this.props.history.push(`/othersprofile/${userId}`);
    } catch (err) {
      console.log('error switching to profile from followingList');
    }
  };

  render() {
    return (
      <div>
        {this.props.following_list &&
          this.props.following_list.map((following, i) => (
            <List>
              <ListItem
                key={i}
                disabled={true}
                leftAvatar={
                  <Avatar
                    src={following.photo_url}
                    onClick={() => this.switchToProfile(following.id)}
                  />
                }
              >
                <span onClick={() => this.switchToProfile(following.id)}>{following.username}</span>
                <RaisedButton
                  label="Unfollow"
                  secondary={true}
                  style={{ margin: 10 }}
                  onClick={() => this.handleUnfollowButtonClick(following.id)}
                />
              </ListItem>
            </List>
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    following_list: state.following_list,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addFollowingList,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Following);
