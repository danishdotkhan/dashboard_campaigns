import Layout from "../components/dashboard/layout.jsx";
import Topbar from "../components/dashboard/topbar.jsx"
import Campaigntable from "../components/dashboard/campaigntable.jsx"
import Charts from "../components/dashboard/charts.jsx"
import Sidetab from "../components/dashboard/sidetab.jsx";
import AnalyticsComponent from "../components/dashboard/campaigntable.jsx"

const appDashboard = () => {
  return (
    <div className="w-[full] h-[full] overflow-scroll chrome-scrollbar-hidden" >
    
      <Layout>
      <Sidetab />
        <Topbar />
        <Charts />
        <AnalyticsComponent />
      </Layout>
    </div>
  );
}
export default appDashboard;
