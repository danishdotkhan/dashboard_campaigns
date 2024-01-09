import CampaignHome from "./pages/campaignHome";
import AppDashboard from "./pages/appDashboard";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Welcome from "./pages/welcome";
import Subscription from "./pages/subscription";
import Question from "./pages/question";
import Leads from "./pages/leads";
import Help from "./pages/help";
import Icp from "./pages/icp";
import NewCampaign from "./pages/newcampaign"
import CampaignDetails from "./pages/campaigndetails"
import Profiler from "./pages/profiler"

export default function App() {
  return (
    <>

    <CampaignHome />
    <NewCampaign />
    <CampaignDetails/>
    <AppDashboard/>
    <SignUp />
    <SignIn />
    <Welcome />
    <Profiler />
    <Subscription />
    <Question />
    <Leads />
    <Help />
    <Icp />
    </>
  );
}