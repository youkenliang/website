import {useState} from "react";
import axios from "axios";

const Comments = ({ postId, comments: initialComments }) => {
  const [comments, setOldComment] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = () => {
    console.log(newComment)
    // Un-comment the lines below to complete your solution
    // ====================
    axios.post(`http://localhost:3002/post/${postId}/comment`, { newComment })
    .then((res) => {
      setOldComment([...comments, newComment]);
      setNewComment("")
    })
  }

  return (
    <div style={{ border: '1px solid black'}}>
      {comments && comments.map((comment, i) => (
        <div key={i + comment}>
        <p>
          {comment}
        </p>
        </div>
      ))}
      <div>
        <input value={newComment} onChange={e => setNewComment(e.target.value)}/>
      </div>
      <button  onClick={handleSubmitComment}>
        Submit
      </button>
    </div>
  )
}

export default Comments;