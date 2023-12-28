import CampaignHome from "./pages/campaignHome";
import AppDashboard from "./pages/appDashboard";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Welcome from "./pages/welcome";

export default function App() {
  return (
    <>
    <CampaignHome />
    <AppDashboard/>
    <SignUp />
    <SignIn />
    <Welcome />
    </>
  );
}