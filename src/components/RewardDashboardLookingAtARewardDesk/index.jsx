import React from "react";
import { Link } from "react-router-dom";
import Group21 from "../Group21";
import styled from "styled-components";
import {
  RalewaySemiBoldBlack40px,
  RalewaySemiBoldBlueberry24px,
  RalewaySemiBoldBlack22px,
  RalewaySemiBoldBlack17px,
  RalewaySemiBoldBlack15px,
  RalewayNormalBlack24px,
  RalewayNormalBlack17px,
} from "../../styledMixins";
import "./RewardDashboardLookingAtARewardDesk.css";

function RewardDashboardLookingAtARewardDesk(props) {
  const {
    yourDashboard,
    rewards,
    yourRewards,
    activities,
    badges,
    collectorsNft,
    collectorsNft2,
    collectorsNft3,
    clickToView,
    clickToView2,
    clickToView3,
    gift2,
    gift3,
    gift4,
    spanText,
    spanText2,
    collectorsNft4,
    clickToView4,
    participant_Headshot2RemovebgPrevie,
    gift1,
    gift5,
    hospital1,
    collectorsNft5,
    thisIsASpecialyC,
    group21Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="reward-dashboard-looking-at-a-reward-desktop screen">
        <OverlapGroup1>
          <YourDashboard>{yourDashboard}</YourDashboard>
          <Rewards>{rewards}</Rewards>
          <YourRewards>{yourRewards}</YourRewards>
          <Vector1 src="/img/vector-1@2x.svg" />
          <Activities>{activities}</Activities>
          <Badges>{badges}</Badges>
          <Rectangle3></Rectangle3>
          <Rectangle4></Rectangle4>
          <Rectangle5></Rectangle5>
          <Rectangle6></Rectangle6>
          <CollectorsNFT>{collectorsNft}</CollectorsNFT>
          <CollectorsNFT1>{collectorsNft2}</CollectorsNFT1>
          <CollectorsNFT2>{collectorsNft3}</CollectorsNFT2>
          <ClickToView>{clickToView}</ClickToView>
          <ClickToView1>{clickToView2}</ClickToView1>
          <ClickToView2>{clickToView3}</ClickToView2>
          <Gift2 src={gift2} />
          <Gift3 src={gift3} />
          <Gift4 src={gift4} />
          <Group21 className={group21Props.className} />
          <WannaEarnMoreDoSomeActivities>
            <span className="raleway-normal-black-17px">{spanText}</span>
            <Span17>{spanText2}</Span17>
          </WannaEarnMoreDoSomeActivities>
          <CollectorsNFT3>{collectorsNft4}</CollectorsNFT3>
          <ClickToView3>{clickToView4}</ClickToView3>
          <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
          <Gift1 src={gift1} />
          <Rectangle8></Rectangle8>
          <OverlapGroup>
            <FlexRow>
              <Gift5 src={gift5} />
              <Link to="/reward-dashboard-desktop-2">
                <Hospital1 src={hospital1} />
              </Link>
            </FlexRow>
            <CollectorsNFT4>{collectorsNft5}</CollectorsNFT4>
            <ThisIsASpecialyC>{thisIsASpecialyC}</ThisIsASpecialyC>
          </OverlapGroup>
        </OverlapGroup1>
      </div>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  width: 1429px;
  height: 1020px;
  position: relative;
  margin-left: 11px;
  margin-top: 4px;
`;

const YourDashboard = styled.div`
  ${RalewaySemiBoldBlueberry24px}
  position: absolute;
  top: 86px;
  left: 814px;
  letter-spacing: 0;
`;

const Rewards = styled.div`
  ${RalewaySemiBoldBlueberry24px}
  position: absolute;
  top: 225px;
  left: 106px;
  text-align: center;
  letter-spacing: 0;
`;

const YourRewards = styled.div`
  ${RalewaySemiBoldBlack40px}
  position: absolute;
  top: 317px;
  left: 105px;
  letter-spacing: 0;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 127px;
  height: 4px;
  top: 257px;
  left: 92px;
`;

const Activities = styled.div`
  ${RalewayNormalBlack24px}
  position: absolute;
  top: 86px;
  left: 1029px;
  letter-spacing: 0;
`;

const Badges = styled.div`
  ${RalewayNormalBlack24px}
  position: absolute;
  top: 225px;
  left: 240px;
  letter-spacing: 0;
`;

const Rectangle3 = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  top: 438px;
  left: 105px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const Rectangle4 = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  top: 438px;
  left: 410px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const Rectangle5 = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  top: 438px;
  left: 715px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const Rectangle6 = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  top: 438px;
  left: 1020px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const CollectorsNFT = styled.div`
  ${RalewaySemiBoldBlack17px}
  position: absolute;
  top: 555px;
  left: 454px;
  letter-spacing: 0;
`;

const CollectorsNFT1 = styled.div`
  ${RalewaySemiBoldBlack17px}
  position: absolute;
  top: 557px;
  left: 759px;
  letter-spacing: 0;
`;

const CollectorsNFT2 = styled.div`
  ${RalewaySemiBoldBlack17px}
  position: absolute;
  top: 557px;
  left: 1065px;
  letter-spacing: 0;
`;

const ClickToView = styled.div`
  ${RalewaySemiBoldBlack15px}
  position: absolute;
  top: 598px;
  left: 469px;
  text-align: center;
  letter-spacing: 0;
`;

const ClickToView1 = styled.div`
  ${RalewaySemiBoldBlack15px}
  position: absolute;
  top: 600px;
  left: 774px;
  text-align: center;
  letter-spacing: 0;
`;

const ClickToView2 = styled.div`
  ${RalewaySemiBoldBlack15px}
  position: absolute;
  top: 600px;
  left: 1080px;
  text-align: center;
  letter-spacing: 0;
`;

const Gift2 = styled.img`
  position: absolute;
  width: 74px;
  height: 74px;
  top: 466px;
  left: 477px;
  object-fit: cover;
`;

const Gift3 = styled.img`
  position: absolute;
  width: 74px;
  height: 74px;
  top: 468px;
  left: 782px;
  object-fit: cover;
`;

const Gift4 = styled.img`
  position: absolute;
  width: 74px;
  height: 74px;
  top: 468px;
  left: 1088px;
  object-fit: cover;
`;

const WannaEarnMoreDoSomeActivities = styled.div`
  ${RalewayNormalBlack17px}
  position: absolute;
  top: 727px;
  left: 105px;
  letter-spacing: 0;
`;

const Span17 = styled.span`
  ${RalewaySemiBoldBlack17px}
  text-decoration: underline;
`;

const CollectorsNFT3 = styled.div`
  ${RalewaySemiBoldBlack17px}
  position: absolute;
  top: 556px;
  left: 150px;
  letter-spacing: 0;
`;

const ClickToView3 = styled.div`
  ${RalewaySemiBoldBlack15px}
  position: absolute;
  top: 599px;
  left: 165px;
  text-align: center;
  letter-spacing: 0;
`;

const ParticipantHeadshot2RemovebgPreview = styled.img`
  position: absolute;
  width: 102px;
  height: 102px;
  top: 48px;
  left: 99px;
  object-fit: cover;
`;

const Gift1 = styled.img`
  position: absolute;
  width: 74px;
  height: 74px;
  top: 467px;
  left: 173px;
  object-fit: cover;
`;

const Rectangle8 = styled.div`
  position: absolute;
  width: 1429px;
  height: 1020px;
  top: 0;
  left: 0;
  background-color: var(--ebb);
  box-shadow: 0px 4px 30px #00000040;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 410px;
  top: 272px;
  left: 504px;
  display: flex;
  flex-direction: column;
  padding: 11.7px 15.5px;
  align-items: center;
  min-height: 446px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const FlexRow = styled.div`
  height: 214px;
  align-self: flex-end;
  display: flex;
  align-items: flex-start;
  min-width: 274px;
`;

const Gift5 = styled.img`
  width: 170px;
  height: 170px;
  align-self: flex-end;
  object-fit: cover;
`;

const Hospital1 = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 55px;
  object-fit: cover;
  cursor: pointer;
`;

const CollectorsNFT4 = styled.div`
  ${RalewaySemiBoldBlack22px}
  min-height: 26px;
  margin-top: 40px;
  min-width: 156px;
  letter-spacing: 0;
`;

const ThisIsASpecialyC = styled.p`
  ${RalewaySemiBoldBlack15px}
  min-height: 46px;
  margin-top: 40px;
  margin-right: 2px;
  min-width: 306px;
  text-align: center;
  letter-spacing: 0;
`;

export default RewardDashboardLookingAtARewardDesk;
