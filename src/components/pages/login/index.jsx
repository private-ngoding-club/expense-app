import { useNavigate } from "react-router-dom";
import Container from "../../templates/Container";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    console.log(event.target);
    navigate("/");
  };

  return (
    <Container>
      <div className="bg-slate-400 px-4 py-12 space-y-4 rounded-md shadow-md">
        <h1 className="font-medium">Login</h1>

        <button onClick={handleClick}>Login by Google</button>
      </div>
    </Container>
  );
};

export default Login;
