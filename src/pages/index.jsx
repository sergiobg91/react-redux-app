import { useDispatch } from "react-redux";
import { setUser } from "../reducers/user/userSlice";
import { useNavigate } from "react-router-dom";

const Index = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center">React Redux + React Router Dom</h1>

      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(
            setUser({
              email: "sbg@gmail.com",
              fullName: "sergio beltran",
              token: "JTW12345",
            })
          );
          navigate("/home");
        }}
      >
        Create User
      </button>
    </>
  );
};

export default Index;
