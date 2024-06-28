import "./list.css";
import ChatList from "./chatList/ChatList";
import UserInfor from "./userInfor/UserInfor";

const List = () => {
  return (
    <div className="list">
      <UserInfor />
      <ChatList />
    </div>
  );
};

export default List;
