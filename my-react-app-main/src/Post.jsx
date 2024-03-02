import userImage from "./hippocorn.png";
import postImage from "./post-image.png";
import LikeButton from "./LikeButton";
import FollowButton from "./FollowButton";

function Post() {
  return (
    <div>
      {/* <h1>NYC Stops</h1>
      <ul>
        <li>🗽 Manhattan - Washington Square Park</li>
        <li>🏟️ The Bronx - Yankee Stadium</li>
        <li>🎡 Brooklyn - Coney Island</li>
        <li>✈️ Queens - Astoria Park</li>
        <li>🌉 Staten Island - Historic Richmond Town</li>
      </ul> */}
      <div className="post">
        <div className="user-info">
          <img id="profile-img" src={userImage} alt="Profile Image" />
          <p>Hipthehippocorn</p>
          <FollowButton />
        </div>
        <img id="post-img" src={postImage} alt="Post Image" />
        <LikeButton />
      </div>
    </div>
  );
}

export default Post;
