const Header = (props) => {
  console.log(props.data.firstName);
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload()
    props.changeUser("");
  };
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium">
        Hello,
        <br />{" "}
        <span className="text-3xl font-bold">{props.data.firstName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white px-3 py-2 rounded-sm text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
