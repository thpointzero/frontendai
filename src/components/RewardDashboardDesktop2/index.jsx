import React from "react";
import { Link } from "react-router-dom";
import Group21 from "../Group21";
import Group35 from "../Group35";
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
import "./RewardDashboardDesktop2.css";

function RewardDashboardDesktop2(props) {
  const {
    yourDashboard,
    rewards,
    yourBadges,
    activities,
    badges,
    spanText,
    spanText2,
    participant_Headshot2RemovebgPrevie,
    badge1,
    hospital1,
    hackerBadge,
    thisIsASpecialyC,
    group35Props,
    group352Props,
    group353Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="reward-dashboard-desktop screen">
        <OverlapGroup1>
          <YourDashboard>{yourDashboard}</YourDashboard>
          <Rewards>{rewards}</Rewards>
          <YourBadges>{yourBadges}</YourBadges>
          <Vector1 src="/img/vector-1@2x.svg" />
          <Activities>{activities}</Activities>
          <Badges>{badges}</Badges>
          <Rectangle3></Rectangle3>
          <Rectangle4></Rectangle4>
          <Rectangle5></Rectangle5>
          <Rectangle6></Rectangle6>
          <Group21 />
          <WannaEarnMoreDoSomeActivities>
            <span className="raleway-normal-black-17px">{spanText}</span>
            <Span13>{spanText2}</Span13>
          </WannaEarnMoreDoSomeActivities>
          <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
          <Group35 />
          <Group35 className={group35Props.className} />
          <Group35 className={group352Props.className} />
          <Group35 className={group353Props.className} />
          <Rectangle8></Rectangle8>
          <OverlapGroup>
            <FlexRow>
              <Badge1 src={badge1} />
              <Link to="/reward-dashboard-desktop2">
                <Hospital1 src={hospital1} />
              </Link>
            </FlexRow>
            <HackerBadge>{hackerBadge}</HackerBadge>
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
  margin-top: 4px;
`;

const YourDashboard = styled.div`
  ${RalewaySemiBoldBlueberry24px}
  position: absolute;
  top: 86px;
  left: 825px;
  letter-spacing: 0;
`;

const Rewards = styled.div`
  ${RalewayNormalBlack24px}
  position: absolute;
  top: 238px;
  left: 116px;
  text-align: center;
  letter-spacing: 0;
`;

const YourBadges = styled.div`
  ${RalewaySemiBoldBlack40px}
  position: absolute;
  top: 330px;
  left: 116px;
  letter-spacing: 0;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 127px;
  height: 4px;
  top: 270px;
  left: 228px;
`;

const Activities = styled.div`
  ${RalewayNormalBlack24px}
  position: absolute;
  top: 86px;
  left: 1040px;
  letter-spacing: 0;
`;

const Badges = styled.div`
  ${RalewaySemiBoldBlueberry24px}
  position: absolute;
  top: 238px;
  left: 249px;
  letter-spacing: 0;
`;

const Rectangle3 = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  top: 454px;
  left: 116px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const Rectangle4 = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  top: 454px;
  left: 376px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const Rectangle5 = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  top: 454px;
  left: 636px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const Rectangle6 = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  top: 454px;
  left: 896px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const WannaEarnMoreDoSomeActivities = styled.div`
  ${RalewayNormalBlack17px}
  position: absolute;
  top: 743px;
  left: 116px;
  letter-spacing: 0;
`;

const Span13 = styled.span`
  ${RalewaySemiBoldBlack17px}
  text-decoration: underline;
`;

const ParticipantHeadshot2RemovebgPreview = styled.img`
  position: absolute;
  width: 102px;
  height: 102px;
  top: 48px;
  left: 110px;
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
  height: 217px;
  align-self: flex-end;
  display: flex;
  align-items: flex-start;
  min-width: 274px;
`;

const Badge1 = styled.img`
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

const HackerBadge = styled.div`
  ${RalewaySemiBoldBlack22px}
  min-height: 26px;
  margin-top: 37px;
  margin-left: 1px;
  min-width: 147px;
  text-align: center;
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

export default RewardDashboardDesktop2;
