import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RalewaySemiBoldBlack40px,
  RalewaySemiBoldBlueberry24px,
  RalewaySemiBoldBlack17px,
  RalewaySemiBoldBlack15px,
  RalewayNormalBlack24px,
  RalewayNormalBlack17px,
} from "../../styledMixins";
import "./RewardDashboardDesktop.css";

function RewardDashboardDesktop(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    rewards,
    badges,
    yourRewards,
    gift1,
    collectorsNft,
    clickToView,
    spanText,
    spanText2,
    gift2,
    collectorsNft2,
    clickToView2,
    yourDashboard,
    gift3,
    collectorsNft3,
    clickToView3,
    activities,
    logout,
    logout1,
    gift4,
    collectorsNft4,
    clickToView4,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="reward-dashboard-desktop-2 screen">
        <FlexRow>
          <FlexCol>
            <FlexRow1>
              <FlexCol1>
                <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
                <Rewards>{rewards}</Rewards>
                <Vector1 src="/img/vector-1@2x.svg" />
              </FlexCol1>
              <Link to="/reward-dashboard-desktop2">
                <Badges>{badges}</Badges>
              </Link>
            </FlexRow1>
            <YourRewards>{yourRewards}</YourRewards>
            <Link to="/reward-dashboard-looking-at-a-reward-desktop">
              <Group51>
                <OverlapGroup3>
                  <Gift1 src={gift1} />
                  <CollectorsNFT>{collectorsNft}</CollectorsNFT>
                  <ClickToView>{clickToView}</ClickToView>
                </OverlapGroup3>
              </Group51>
            </Link>
            <Link to="/th-0-activities-desktop" className="align-self-flex-end">
              <WannaEarnMoreDoSomeActivities>
                <span className="raleway-normal-black-17px">{spanText}</span>
                <Span11>{spanText2}</Span11>
              </WannaEarnMoreDoSomeActivities>
            </Link>
          </FlexCol>
          <FlexRow2>
            <Link to="/reward-dashboard-looking-at-a-reward-desktop">
              <Group52>
                <OverlapGroup>
                  <Gift2 src={gift2} />
                  <CollectorsNFT1>{collectorsNft2}</CollectorsNFT1>
                  <ClickToView1>{clickToView2}</ClickToView1>
                </OverlapGroup>
              </Group52>
            </Link>
            <FlexCol2>
              <YourDashboard>{yourDashboard}</YourDashboard>
              <Link to="/reward-dashboard-looking-at-a-reward-desktop">
                <Group53>
                  <OverlapGroup1>
                    <Gift2 src={gift3} />
                    <CollectorsNFT1>{collectorsNft3}</CollectorsNFT1>
                    <ClickToView1>{clickToView3}</ClickToView1>
                  </OverlapGroup1>
                </Group53>
              </Link>
            </FlexCol2>
          </FlexRow2>
        </FlexRow>
        <FlexCol3>
          <FlexRow3>
            <Link to="/th-0-activities-desktop">
              <Activities>{activities}</Activities>
            </Link>
            <Link to="/log-into-your-account-desktop">
              <Group21>
                <Logout>{logout}</Logout>
                <Logout1 src={logout1} />
              </Group21>
            </Link>
          </FlexRow3>
          <Link to="/reward-dashboard-looking-at-a-reward-desktop">
            <Group54>
              <OverlapGroup1>
                <Gift1 src={gift4} />
                <CollectorsNFT>{collectorsNft4}</CollectorsNFT>
                <ClickToView>{clickToView4}</ClickToView>
              </OverlapGroup1>
            </Group54>
          </Link>
        </FlexCol3>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 699px;
  margin-top: 52px;
  display: flex;
  align-items: center;
  min-width: 903px;
`;

const FlexCol = styled.div`
  width: 318px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 699px;
`;

const FlexRow1 = styled.div`
  height: 213px;
  display: flex;
  align-items: flex-end;
  min-width: 233px;
`;

const FlexCol1 = styled.div`
  width: 127px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 213px;
`;

const ParticipantHeadshot2RemovebgPreview = styled.img`
  width: 102px;
  height: 102px;
  margin-right: 11px;
  object-fit: cover;
`;

const Rewards = styled.div`
  ${RalewaySemiBoldBlueberry24px}
  min-height: 28px;
  margin-top: 75px;
  min-width: 99px;
  text-align: center;
  letter-spacing: 0;
`;

const Vector1 = styled.img`
  width: 127px;
  height: 4px;
  margin-top: 4px;
`;

const Badges = styled.div`
  ${RalewayNormalBlack24px}
  min-height: 28px;
  margin-left: 21px;
  margin-bottom: 8px;
  min-width: 85px;
  letter-spacing: 0;
  cursor: pointer;
`;

const YourRewards = styled.div`
  ${RalewaySemiBoldBlack40px}
  min-height: 47px;
  margin-top: 56px;
  margin-left: 13px;
  letter-spacing: 0;
`;

const Group51 = styled.div`
  height: 210px;
  margin-top: 74px;
  margin-left: 13px;
  display: flex;
  align-items: flex-start;
  min-width: 214px;
  cursor: pointer;
`;

const OverlapGroup3 = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
  padding: 29px 44px;
  align-items: center;
  min-height: 210px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const Gift1 = styled.img`
  width: 74px;
  height: 74px;
  object-fit: cover;
`;

const CollectorsNFT = styled.div`
  ${RalewaySemiBoldBlack17px}
  min-height: 20px;
  align-self: flex-end;
  margin-top: 15px;
  min-width: 121px;
  letter-spacing: 0;
`;

const ClickToView = styled.div`
  ${RalewaySemiBoldBlack15px}
  min-height: 18px;
  margin-top: 23px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
`;

const WannaEarnMoreDoSomeActivities = styled.div`
  ${RalewayNormalBlack17px}
  min-height: 20px;
  align-self: flex-end;
  margin-top: 79px;
  min-width: 305px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Span11 = styled.span`
  ${RalewaySemiBoldBlack17px}
  text-decoration: underline;
`;

const FlexRow2 = styled.div`
  height: 562px;
  margin-bottom: 61px;
  display: flex;
  align-items: flex-end;
  min-width: 585px;
`;

const Group52 = styled.div`
  height: 210px;
  display: flex;
  align-items: flex-start;
  min-width: 214px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
  padding: 28px 44px;
  align-items: center;
  min-height: 210px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const Gift2 = styled.img`
  width: 74px;
  height: 74px;
  margin-right: 2px;
  object-fit: cover;
`;

const CollectorsNFT1 = styled.div`
  ${RalewaySemiBoldBlack17px}
  min-height: 20px;
  align-self: flex-start;
  margin-top: 15px;
  letter-spacing: 0;
`;

const ClickToView1 = styled.div`
  ${RalewaySemiBoldBlack15px}
  min-height: 18px;
  margin-top: 23px;
  margin-right: 2px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexCol2 = styled.div`
  width: 280px;
  margin-left: 91px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 562px;
`;

const YourDashboard = styled.div`
  ${RalewaySemiBoldBlueberry24px}
  min-height: 28px;
  align-self: flex-end;
  min-width: 181px;
  letter-spacing: 0;
`;

const Group53 = styled.div`
  height: 210px;
  margin-top: 324px;
  display: flex;
  align-items: flex-start;
  min-width: 214px;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
  padding: 30px 44px;
  align-items: center;
  min-height: 210px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const FlexCol3 = styled.div`
  width: 275px;
  margin-left: 25px;
  margin-top: 83px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 569px;
`;

const FlexRow3 = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  min-width: 266px;
`;

const Activities = styled.div`
  ${RalewayNormalBlack24px}
  min-height: 28px;
  min-width: 100px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Group21 = styled.div`
  margin-left: 38px;
  display: flex;
  align-items: center;
  min-width: 128px;
  cursor: pointer;
`;

const Logout = styled.div`
  ${RalewayNormalBlack24px}
  min-height: 28px;
  min-width: 80px;
  letter-spacing: 0;
`;

const Logout1 = styled.img`
  width: 42px;
  height: 42px;
  margin-left: 4px;
  object-fit: cover;
`;

const Group54 = styled.div`
  height: 210px;
  margin-top: 317px;
  display: flex;
  align-items: flex-start;
  min-width: 214px;
  cursor: pointer;
`;

export default RewardDashboardDesktop;
