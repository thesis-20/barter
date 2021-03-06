import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCurrentPost, addCurrentList } from '../../actions';
import SellerPost from '../Post/sellerPost.jsx';
import BuyerPost from '../Post/buyerPost.jsx';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import path from 'path';
import GoogleMap from '../Map/maptest.jsx';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const { REST_SERVER_URL } = process.env;
const geolib = require('geolib');

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
  }
  async componentWillMount() {
    try {
      const url = window.location.href;
      const postId = path.basename(url);
      const { data } = await axios.get(`${REST_SERVER_URL}/api/posts/fetchSinglePost/${postId}`);
      // console.log('successfully received post', data);
      this.props.addCurrentPost(data[0]);
      this.setState({ address: data[0].location });
      localStorage.setItem('oldLat', localStorage.getItem('latitude'));
      localStorage.setItem('oldLng', localStorage.getItem('longitude'));
      const geo = geocodeByAddress(this.state.address)
        .then((results) => {
          // console.log('results is from', results[0].formatted_address);

          getLatLng(results[0])
            .then((latLng) => {
              // console.log('SuccessHome', latLng);
              localStorage.setItem('latitude', latLng.lat);
              localStorage.setItem('longitude', latLng.lng);
            })
            .catch((error) => {
              console.log('Error', error);
            });
        })
        .catch((error) => {
          console.error('Error', error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  // async componentWillUnmount() {
  //   let oldLat = localStorage.getItem('oldLat');
  //   let oldLng = localStorage.getItem('oldLng');
  //   console.log('unmount pre ', localStorage);
  //   await localStorage.setItem('latitude', oldLat);
  //   await localStorage.setItem('longitude', oldLng);
  //   await console.log('unmount post ', localStorage);
  // }

  render() {
    if (this.props.current_post) {
      if (localStorage.id) {
        if (Number(localStorage.id) === this.props.current_post.user_id) {
          return (
            <div>
              <SellerPost {...this.props} />
              <div className="postmap">
                <GoogleMap />
              </div>
            </div>
          );
        }
      }
      return (
        <div>
          <BuyerPost {...this.props} />
          <div className="postmap">
            <GoogleMap />
          </div>
        </div>
      );
    }
    <div class="loading loading-lg" />;
  }
}

function mapStateToProps(state) {
  return {
    current_post: state.current_post,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addCurrentPost,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
