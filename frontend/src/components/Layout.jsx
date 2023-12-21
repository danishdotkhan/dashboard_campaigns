import Navbar from "./shared/Navbar.jsx";
import Sidebar from "./shared/Sidebar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
