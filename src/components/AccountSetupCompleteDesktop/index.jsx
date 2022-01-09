import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RalewayNormalBlack40px } from "../../styledMixins";
import "./AccountSetupCompleteDesktop.css";

function AccountSetupCompleteDesktop(props) {
  const { participant_Headshot2RemovebgPrevie, youAreAllSet, youAreNowReadyTo, check1 } = props;

  return (
    <div className="container-center-horizontal">
      <div
        className="account-setup-complete-desktop screen"
        onclick="window.open('reward-dashboard-desktop-2.html', '_self');"
      >
        <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
        <YouAreAllSet>{youAreAllSet}</YouAreAllSet>
        <YouAreNowReadyTo>{youAreNowReadyTo}</YouAreNowReadyTo>
        <OverlapGroup>
          <Check1 src={check1} />
        </OverlapGroup>
      </div>
    </div>
  );
}

const ParticipantHeadshot2RemovebgPreview = styled.img`
  width: 102px;
  height: 102px;
  align-self: flex-start;
  object-fit: cover;
`;

const YouAreAllSet = styled.div`
  ${RalewayNormalBlack40px}
  min-height: 47px;
  margin-top: 210px;
  min-width: 268px;
  text-align: center;
  letter-spacing: 0;
`;

const YouAreNowReadyTo = styled.div`
  min-height: 72px;
  margin-top: 29px;
  min-width: 354px;
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--black);
  font-size: 26px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 134px;
  margin-top: 22px;
  display: flex;
  padding: 32px 36px;
  align-items: flex-start;
  min-width: 134px;
  background-image: url(/img/register-button-15@2x.svg);
  background-size: 100% 100%;
`;

const Check1 = styled.img`
  width: 61px;
  height: 61px;
  object-fit: cover;
`;

export default AccountSetupCompleteDesktop;
