import { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";

const CreateCategory = () => {
  // const [catergories, setCategories] = useState([]);
  // // get all category
  // const getAllCategory=async()=>{

  // }
  return (
    <>
      <Layout>
        <section>
          <div className="row">
            <div className="col-md-3">
              <AdminMenu></AdminMenu>
            </div>
            <div className="col-md-9">
              <h1>Create Catergory</h1>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default CreateCategory;
