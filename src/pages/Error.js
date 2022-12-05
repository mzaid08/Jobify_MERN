import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Page Not Found!</h3>
        <p>We Can't Seem To Find The Page Your Looking For</p>
        <Link to="/">Back To Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
