const CommentList = React.createClass ({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>      
      </div>
    );
  }
});

const CommentForm = React.createClass ({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});
// ReactDOM.render(
//   React.createElement(CommentBox, null),
//   document.getElementById('content')
// );
