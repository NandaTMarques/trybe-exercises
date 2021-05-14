import React from 'react';

function PostItem(props) {
  const { title, author, post } = props;
  return (
    <div>
      <h3>{ title }</h3>
      <p>{ post }</p>
      <h5>{ author }</h5>
    </div>
  );
}

// acrescentar propType e propDefault

export default PostItem;
