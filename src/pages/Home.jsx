import React from "react";
import Container from "../component/container/Container";
import Banner from "../component/homePage/Banner";

const Home = () => {
  return (
    <Container className="pt-[6vh] ">
      <div className="test h-fit">
        <Banner/>
      </div>
    </Container>
  );
};

export default Home;
