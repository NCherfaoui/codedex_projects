import { useState } from "react";

function FollowButton() {
  const [following, setFollowing] = useState(false);

  return(
    /* Replace comment with code */   <div id="follow-button" className={following ? "following" : "not-following"} onClick={() => setFollowing(!following)}>
     {following == true ? "Following" : "Follow"}
     </div>
  
  )
}

export default FollowButton;