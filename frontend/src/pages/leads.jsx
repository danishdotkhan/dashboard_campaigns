
import Layout from "../components/leads/layout.jsx";
import AnalyticsComponent from "../components/leads/campaigntable.jsx"

const Leads = () => {
  return (
    <>
       <div className="w-[full] h-[full] overflow-scroll chrome-scrollbar-hidden" >
    
    <Layout>
    
      <AnalyticsComponent />
    </Layout>
  </div>
    </>
  );
};

export default Leads;
