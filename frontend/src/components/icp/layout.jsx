import Navbar from "./navbar.jsx";
import Sidebar from "../shared/Sidebar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex  overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
