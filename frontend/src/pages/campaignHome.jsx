import Layout from "../components/Layout.jsx";
import SearchInput from "../components/campaigns/searchInput.jsx";
import CreateCampaignButton from "../components/campaigns/createCampaignButton.jsx";
import CampaignsTableHome from "../components/campaigns/campaignsTableHome.jsx";

const CampaignHome = () => {
  return (
    <>
      <Layout>
        {
          <>
            <div className="flex justify-between mt-[30px] mx-10">
              <SearchInput />
              <CreateCampaignButton />
            </div>
            <div className="flex mt-[30px] mx-10">
              <CampaignsTableHome />{" "}
            </div>
          </>
        }
      </Layout>
      ;
    </>
  );
};

export default CampaignHome;
