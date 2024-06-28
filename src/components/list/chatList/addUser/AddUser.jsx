import "./adduser.css";

const AddUser = () => {
  return (
    <div className="addUser">
      <form action="">
        <input type="search" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>User Name</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
