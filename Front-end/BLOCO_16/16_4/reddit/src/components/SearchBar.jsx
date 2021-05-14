import React from 'react';
import fetchAPI from '../services/fetchAPI';
import { connect } from 'react-redux';

function SearchBar(props) {
  const { fetchApi } = props;
  return (
    <div>
      <label htmlFor="idSelect">
        Select
        <select name="search" id="idSelect" onChange={({ target }) => fetchApi(target.value)}>
          <option value="" selected>Options...</option>
          <option value="frontend">Frontend</option>
          <option value="reactjs">ReactJS</option>
          <option value="redux">Redux</option>
        </select>
      </label>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchApi: (text) => dispatch(fetchAPI(text))
})

export default connect(null, mapDispatchToProps)(SearchBar);
