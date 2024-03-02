import { useState } from 'react';
import emptyHeartImage from "./empty-heart.png";
import heartImage from "./heart.png";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    /* Replace comment with code */
    <div className="like-info">
    <div className="like-button" onClick={() =>
      setLikes(likes + 1)
    }>
      {likes > 0 ? <img src={heartImage} alt="heart for like button"/> : <img src={emptyHeartImage} alt="Empty heart for like button"/>}
    </div>

    <p>{likes == 1 ? `  ${likes} Like` : `${likes} Likes`}</p>
  </div>

  )
}

export default LikeButton;