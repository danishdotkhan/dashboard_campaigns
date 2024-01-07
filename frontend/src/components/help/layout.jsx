import Navbar from "../shared/Navbar.jsx"
import Sidebar from "../shared/Sidebar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex  overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar title="Help"/>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
