import React from "react";
import Container from "../component/container/Container";
import Banner from "../component/homePage/Banner";

const Home = () => {
  return (
    <Container className="pt-[6vh] ">
      <div className="test ">
        <Banner/>
      </div>
    </Container>
  );
};

export default Home;
