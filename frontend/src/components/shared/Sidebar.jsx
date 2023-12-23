import React from "react";
import { Link } from "react-router-dom";
const CampaignSidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-10 w-[100px] h-screen items-center py-8 border border-b-0">
      <div>
          <img src="../src/assets/sidebar_arrow_right.svg" alt="" />
          </div>
        <span className="mt-5"></span>
        <div>
          <img src="../src/assets/sidebar_icon1.svg" alt="" />
          </div>
        <div>
          <img src="../src/assets/sidebar_icon2.svg" alt="" />
        </div>
        <div>
          <img src="../src/assets/sidebar_icon3.svg" alt="" />
        </div>
        <div>
          <img src="../src/assets/sidebar_icon4.svg" alt="" />
        </div>
        <div>
          <img src="../src/assets/sidebar_icon5.svg" alt="" />
        </div>
        <div>
          <img src="../src/assets/sidebar_icon6.svg" alt="" />
        </div>
        <div>
          <img src="../src/assets/sidebar_icon7.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default CampaignSidebar;
