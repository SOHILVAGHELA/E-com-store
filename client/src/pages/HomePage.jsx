import React from "react";
import Layout from "../components/Layout/Layout";
// import { useAuth } from "../context/auth";
const HomePage = () => {
  // const [auth, setAuth] = useAuth();
  return (
    <>
      <Layout>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          consectetur assumenda, iste optio architecto labore dolorem corporis
          inventore at harum sequi cupiditate, excepturi omnis reiciendis
          incidunt itaque odit sunt veniam.
        </p>
        {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
      </Layout>
    </>
  );
};
export default HomePage;
