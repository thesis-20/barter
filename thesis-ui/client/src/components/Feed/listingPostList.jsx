import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCurrentPost, addSellingList } from '../../actions';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class ListingPostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // filtered out sold listings
      listings: [],
    };
  }

  async componentWillMount() {
    try {
      // console.log('hello forn listing post list');
      const url = window.location.href;
      if (!url.includes('othersprofile')) {
        const id = localStorage.id;
        // console.log('the id is', localStorage.id);
        const { data } = await axios.get(`http://localhost:3396/api/posts/${id}`);
        data.sort((a, b) => b.id - a.id);
        this.setState({ listings: data });
        this.props.addSellingList(data);
        // filter out sold listings from sellers listing and render that
        // set state --> reder bottom
      }
    } catch (err) {
      console.log('err fetching posts', err);
    }
  }
  switchToSinglePost = async (post) => {
    // console.log('!!!shayne::Clicked post.id:', post);
    try {
      this.props.addCurrentPost(post);
      this.props.history.push(`/post/${post.id}`);
    } catch (err) {
      console.log('listingpostswitch', err);
    }
  };
  render() {
    return (
      <div style={styles.root}>
        <GridList cellHeight={200} style={styles.gridList}>
          {this.state.listings &&
            this.state.listings.map(post => (
              <GridTile
                key={post.id}
                title={post.title}
                subtitle={
                  <span>
                    <b>{post.id}</b>
                    <b>{post.username}</b>
                  </span>
                }
                onClick={() => this.switchToSinglePost(post)}
              >
                <img src={post.main_photo} />
              </GridTile>
            ))}
        </GridList>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selling_list: state.selling_list,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addCurrentPost,
      addSellingList,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingPostList);
