import Layout from "../components/dashboard/layout.jsx";
import Topbar from "../components/dashboard/topbar.jsx"
import Campaigntable from "../components/dashboard/campaigntable.jsx"
import Charts from "../components/dashboard/charts.jsx"
import Linechart from "../components/dashboard/linechart.jsx"

const appDashboard = () => {
    return (
        <div className="w-[full] h-[full] overflow-scroll chrome-scrollbar-hidden" >
          <Layout>
          <Topbar />
          <Charts />
        
          <Campaigntable />
        
          </Layout>
        </div>
      );
}
export default appDashboard;
