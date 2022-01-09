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
import "./RewardDashboardDesktop3.css";

function RewardDashboardDesktop3(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    yourDashboard,
    activities,
    logout,
    logout1,
    rewards,
    badges,
    yourBadges,
    badge1,
    hackerBadge,
    clickToView,
    badge12,
    hackerBadge2,
    clickToView2,
    badge13,
    hackerBadge3,
    clickToView3,
    badge14,
    hackerBadge4,
    clickToView4,
    spanText,
    spanText2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="reward-dashboard-desktop2 screen">
        <FlexRow>
          <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
          <YourDashboard>{yourDashboard}</YourDashboard>
          <Link to="/th-0-activities-desktop">
            <Activities>{activities}</Activities>
          </Link>
          <Link to="/log-into-your-account-desktop">
            <Group21>
              <Logout>{logout}</Logout>
              <Logout1 src={logout1} />
            </Group21>
          </Link>
        </FlexRow>
        <FlexRow1>
          <Link to="/reward-dashboard-desktop-2">
            <Rewards>{rewards}</Rewards>
          </Link>
          <Badges>{badges}</Badges>
        </FlexRow1>
        <Vector1 src="/img/vector-1@2x.svg" />
        <YourBadges>{yourBadges}</YourBadges>
        <GroupContainer>
          <Link to="/reward-dashboard-desktop">
            <Group55>
              <Badge1 src={badge1} />
              <HackerBadge>{hackerBadge}</HackerBadge>
              <ClickToView>{clickToView}</ClickToView>
            </Group55>
          </Link>
          <Link to="/reward-dashboard-desktop">
            <Group56>
              <Badge11 src={badge12} />
              <HackerBadge1>{hackerBadge2}</HackerBadge1>
              <ClickToView1>{clickToView2}</ClickToView1>
            </Group56>
          </Link>
          <Link to="/reward-dashboard-desktop">
            <Group56>
              <Badge11 src={badge13} />
              <HackerBadge1>{hackerBadge3}</HackerBadge1>
              <ClickToView1>{clickToView3}</ClickToView1>
            </Group56>
          </Link>
          <Link to="/reward-dashboard-desktop">
            <Group58>
              <Badge12 src={badge14} />
              <HackerBadge2>{hackerBadge4}</HackerBadge2>
              <ClickToView2>{clickToView4}</ClickToView2>
            </Group58>
          </Link>
        </GroupContainer>
        <Link to="/th-0-activities-desktop">
          <WannaEarnMoreDoSomeActivities>
            <span className="raleway-normal-black-17px">{spanText}</span>
            <Span14>{spanText2}</Span14>
          </WannaEarnMoreDoSomeActivities>
        </Link>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 1196px;
`;

const ParticipantHeadshot2RemovebgPreview = styled.img`
  width: 102px;
  height: 102px;
  object-fit: cover;
`;

const YourDashboard = styled.div`
  ${RalewaySemiBoldBlueberry24px}
  min-height: 28px;
  margin-left: 613px;
  margin-top: 2px;
  min-width: 181px;
  letter-spacing: 0;
`;

const Activities = styled.div`
  ${RalewayNormalBlack24px}
  min-height: 28px;
  margin-left: 34px;
  margin-top: 2px;
  min-width: 100px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Group21 = styled.div`
  margin-left: 38px;
  margin-top: 2px;
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

const FlexRow1 = styled.div`
  height: 28px;
  margin-top: 88px;
  margin-left: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 220px;
`;

const Rewards = styled.div`
  ${RalewayNormalBlack24px}
  min-height: 28px;
  min-width: 96px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
`;

const Badges = styled.div`
  ${RalewaySemiBoldBlueberry24px}
  min-height: 28px;
  margin-left: 37px;
  letter-spacing: 0;
`;

const Vector1 = styled.img`
  width: 127px;
  height: 4px;
  margin-top: 4px;
  margin-left: 118px;
`;

const YourBadges = styled.div`
  ${RalewaySemiBoldBlack40px}
  min-height: 47px;
  margin-top: 56px;
  margin-left: 6px;
  letter-spacing: 0;
`;

const GroupContainer = styled.div`
  height: 210px;
  margin-top: 77px;
  margin-left: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 990px;
`;

const Group55 = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
  padding: 27px 47px;
  align-items: center;
  min-height: 210px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
  cursor: pointer;
`;

const Badge1 = styled.img`
  width: 74px;
  height: 74px;
  object-fit: cover;
`;

const HackerBadge = styled.div`
  ${RalewaySemiBoldBlack17px}
  min-height: 20px;
  align-self: flex-start;
  margin-top: 17px;
  min-width: 114px;
  text-align: center;
  letter-spacing: 0;
`;

const ClickToView = styled.div`
  ${RalewaySemiBoldBlack15px}
  min-height: 18px;
  margin-top: 23px;
  margin-right: 2px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
`;

const Group56 = styled.div`
  width: 210px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  padding: 27px 0;
  align-items: center;
  min-height: 210px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
  cursor: pointer;
`;

const Badge11 = styled.img`
  width: 74px;
  height: 74px;
  margin-left: 2px;
  object-fit: cover;
`;

const HackerBadge1 = styled.div`
  ${RalewaySemiBoldBlack17px}
  min-height: 20px;
  margin-top: 17px;
  min-width: 114px;
  text-align: center;
  letter-spacing: 0;
`;

const ClickToView1 = styled.div`
  ${RalewaySemiBoldBlack15px}
  min-height: 18px;
  margin-top: 23px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
`;

const Group58 = styled.div`
  width: 210px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  padding: 27px 47px;
  align-items: center;
  min-height: 210px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
  cursor: pointer;
`;

const Badge12 = styled.img`
  width: 74px;
  height: 74px;
  margin-left: 4px;
  object-fit: cover;
`;

const HackerBadge2 = styled.div`
  ${RalewaySemiBoldBlack17px}
  min-height: 20px;
  align-self: flex-end;
  margin-top: 17px;
  min-width: 114px;
  text-align: center;
  letter-spacing: 0;
`;

const ClickToView2 = styled.div`
  ${RalewaySemiBoldBlack15px}
  min-height: 18px;
  margin-top: 23px;
  margin-left: 2px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
`;

const WannaEarnMoreDoSomeActivities = styled.div`
  ${RalewayNormalBlack17px}
  min-height: 20px;
  margin-top: 79px;
  margin-left: 6px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Span14 = styled.span`
  ${RalewaySemiBoldBlack17px}
  text-decoration: underline;
`;

export default RewardDashboardDesktop3;
