import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <Layout>
        <section>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <AdminMenu></AdminMenu>
              </div>
              <div className="col-md-9">
                <h3>Admin Name:{auth?.user.name}</h3>
                <h3>Admin Email:{auth?.user.email}</h3>
                <h3>Admin Phone:{auth?.user.phone}</h3>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default AdminDashboard;
