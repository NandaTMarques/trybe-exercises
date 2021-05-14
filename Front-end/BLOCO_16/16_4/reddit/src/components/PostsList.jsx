import React from 'react';
import PostItem from './PostItem';
import { connect } from 'react-redux';

function PostsList(props) {
  const { posts } = props;
  return (
    <div>
      <p>list</p>
      {posts.map((post, index) => {
        const { selftext, author_fullname, title } = post.data;
        return (
          <PostItem post={selftext} author={author_fullname} title={title} key={index} />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.subredditReducer.isLoading,
  posts: state.subredditReducer.posts,
  error: state.subredditReducer.error,
})

export default connect(mapStateToProps)(PostsList);
