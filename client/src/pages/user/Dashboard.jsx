import Layout from "../../components/Layout/Layout";
import UserManu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <section>
        <div className="row">
          <div className="col-md-3">
            <UserManu></UserManu>
          </div>
          <div className="col-md-3">
            <h3>{auth?.user?.name}</h3>
            <h3>{auth?.user?.email}</h3>
            <h3>{auth?.user?.address}</h3>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
