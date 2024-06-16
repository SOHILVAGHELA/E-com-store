import Layout from "../../components/Layout/Layout";
import UserManu from "../../components/Layout/UserMenu";
const Profile = () => {
  return (
    <>
      <Layout>
        <section>
          <div className="row">
            <div className="col-md-3">
              <UserManu></UserManu>
            </div>
            <div className="col-md-9">
              <div className="card w-75 p3">
                <h3>Your Profile </h3>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Profile;
