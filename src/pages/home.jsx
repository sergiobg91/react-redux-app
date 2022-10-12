import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unSetUser } from "../reducers/user/userSlice";

const Home = () => {

  //Consumir valores del state
  const { email, fullName, token } = useSelector((state) => state.user);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-center">Home Page</h1>
      <br />
      <h2>
        Welcome to <strong>{fullName}</strong>
      </h2>
      <br />
      <h3>
        Email from global state: <strong>{email}</strong>
      </h3>
      <h3>
        Token from global state: <strong>{token}</strong>
      </h3>
      <br />
      <button className="btn btn-danger" onClick={() => {
          dispatch(unSetUser())
          navigate("/");
        }}
        >
        Delete User
      </button>
    </div>
  );
};

export default Home;
