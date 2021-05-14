import React from 'react';
import SearchBar from '../components/SearchBar';
import PostsList from '../components/PostsList';


function searchOnReddit(props) {
  return (
    <div>
      <SearchBar />
      <PostsList />
    </div>
  );
}

export default searchOnReddit;
