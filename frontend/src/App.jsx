import CampaignHome from "./pages/campaignHome";
import AppDashboard from "./pages/appDashboard";
import Signup from "./components/signup/signup";
import Signin from "./components/signin/signin";

export default function App() {
  return (
    <>
    <CampaignHome />
    <AppDashboard/>
    <Signup />
    <Signin   />
    </>
  );
}