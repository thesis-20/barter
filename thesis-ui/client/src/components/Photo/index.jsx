import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addImages } from '../../actions';
import PhotoSlide from './photoslide.jsx';
import path from 'path';

class PhotoUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      posting: false,
      file: null,
      images: [],
    };
  }

  cancelPost = async (postId) => {
    try {
      const url = window.location.href;
      const postId = path.basename(url);
      this.setState({ posting: false });
      const data = await axios.delete(`http://localhost:8593/api/${postId}`);
      console.log(data);
      this.props.addImages(null);
    } catch (error) {
      console.log(error);
    }
  };

  urlInput = async (event) => {
    await this.setState({ file: event.target.files[0] });
    console.log('this file', this.state.file);
  };

  handleSubmit = () => {
    this.setState({
      posting: false,
      file: null,
    });
  };
  handleUpload = async () => {
    // this.props.loadingTrue();
    const url = window.location.href;
    const postId = path.basename(url);
    const value = this.state.val;
    console.log('urlpostid should = home', postId);
    const { file } = this.state;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('post_id', postId); // this is from state post id
    // console.log('formData', formData);
    // change to match the route i need for dp route

    // 1 changes to postID
    const { data } = await axios.post(`http://localhost:8593/api/addphoto/${postId}`, formData);
    console.log('thisis data from upload', data.key);

    this.setState({
      file: null,
    });
    this.state.images.push({
      original: `https://s3-us-west-1.amazonaws.com/barterbruh/${data.key}`,
      thumbnail: `https://s3-us-west-1.amazonaws.com/barterbruh/${data.key}`,
    });
    console.log(this.state.images);
    this.props.addImages(this.state.images);
    // 'https://{s3-us-west-1}.amazonaws.com/{barterbruh}/{1/1de93ec.jpg}'
  };

  removePhoto = async (postId, key) => {
    try {
      const data = await axios.delete(`http://localhost:8593/api/removephoto/${postId}/${key}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchAlbum = async (postId) => {
    try {
      const data = await axios.get(`http://localhost:8593/api/${postId}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  renderForm = () => (
    <div>
      {/* <img
        style={{ width: '128px', height: '128px' }}
        src={'https://s3-us-west-1.amazonaws.com/barterbruh/localhost%3A1337/1de93ec.jpg'}
      /> */}
      <form>
        <label>
          Upload:
          <input type="file" onChange={this.urlInput} />
          {/* need to clear file after upload look up */}
        </label>
      </form>
      {this.state.file ? <button onClick={this.handleUpload}>Upload</button> : null}
      <button onClick={this.fetchAlbum}>Fetch</button>
      <button onClick={this.removePhoto}>DeletePhoto</button>
      <button onClick={this.handleSubmit}>Submit</button>
      <button onClick={this.cancelPost}>Cancel</button>
    </div>
  );
  renderNormal = () => (
    <div>
      <button
        onClick={() => {
          this.setState({ posting: true });
        }}
      >
        Add New Post
      </button>
    </div>
  );
  render() {
    return (
      <div>
        <PhotoSlide />
        {this.state.posting ? this.renderForm() : this.renderNormal()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    current_post: state.current_post,
    images: state.images,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addImages,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);
