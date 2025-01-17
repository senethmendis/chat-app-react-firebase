import "./userInfor.css";
import { useUserStore } from "../../../lib/userStore";
import { auth } from "../../../lib/firebase";

const UserInfor = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  return (
    <div className="userInfor">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h3>{currentUser.username}</h3>
      </div>
      <div className="icons">
        <img
          src="./logout.png"
          alt=""
          className="logout-img"
          onClick={() => auth.signOut()}
        />
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfor;
