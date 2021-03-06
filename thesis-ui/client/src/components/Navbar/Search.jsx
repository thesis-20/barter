import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import Categories from '../Category/Categories.jsx';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: ''
    };
  }
  handleSubmit() {
    this.props.history.push({
      pathname: '/search',
      state: this.state.name
    });
    location.reload();
  }

  enterSearch = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  };

  render() {
    return (
      <section className="navbar-section">
        <div className="input-group input-inline">
          <Categories {...this.props} />
          <input
            className="form-input"
            style={{ width: '100%' }}
            type="text"
            placeholder="Search"
            onChange={e => this.setState({ name: e.target.value })}
            onKeyUp={e => this.enterSearch(e)}
          />
          <RaisedButton
            label="Submit"
            // primary={true}
            style={{ margin: '12' }}
            backgroundColor={'rgb(208, 204, 208)'}
            onClick={() => this.handleSubmit()}
          />
        </div>
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    current_list: state.current_list
  };
}
export default connect(mapStateToProps)(Search);
