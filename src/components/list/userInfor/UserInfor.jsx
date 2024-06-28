import "./userInfor.css";

const UserInfor = () => {
  return (
    <div className="userInfor">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h3>Wolfy Uci</h3>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfor;
