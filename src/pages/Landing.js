import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Job <span>traking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              fugit, maxime est dolores itaque dolorum reprehenderit voluptate
              ipsum, neque ducimus quae ratione reiciendis. Consequatur illum in
              dolor voluptate. Perferendis, eligendi? Distinctio recusandae
              minima necessitatibus neque mollitia architecto eveniet molestias
              maiores?
            </p>
            <button className="btn btn-hero">Login/Register</button>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
