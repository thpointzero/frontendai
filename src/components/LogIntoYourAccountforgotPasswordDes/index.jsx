import React from "react";
import { Link } from "react-router-dom";
import Group47 from "../Group47";
import Group48 from "../Group48";
import Group49 from "../Group49";
import styled from "styled-components";
import {
  RalewaySemiBoldLogCabin19px,
  Border2pxBlueberry,
  RalewayMediumWhite25px,
  RalewayBoldWhite70px,
  RalewayMediumWhite22px,
  RalewayNormalBlack35px,
  RalewayMediumLogCabin22px,
  RalewaySemiBoldTundora19px,
} from "../../styledMixins";
import "./LogIntoYourAccountforgotPasswordDes.css";

function LogIntoYourAccountforgotPasswordDes(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    forgotYourPassword,
    pleaseEnterYourRe,
    email,
    enterYourEmail,
    resetMyPassword,
    earnAmazingRewards,
    participateInActiv,
    group49Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="log-into-your-account-forgot-password-desktop screen">
        <FlexCol>
          <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
          <ForgotYourPassword>{forgotYourPassword}</ForgotYourPassword>
          <PleaseEnterYourRe>{pleaseEnterYourRe}</PleaseEnterYourRe>
          <Email>{email}</Email>
          <OverlapGroup>
            <EnterYourEmail>{enterYourEmail}</EnterYourEmail>
          </OverlapGroup>
          <OverlapGroup2>
            <Link to="/log-into-your-account-forgot-password-desktop-1">
              <Rectangle1 src="/img/rectangle-1-7@2x.svg" />
            </Link>
            <ResetMyPassword>{resetMyPassword}</ResetMyPassword>
          </OverlapGroup2>
        </FlexCol>
        <OverlapGroup1>
          <Rectangle2></Rectangle2>
          <EarnAmazingRewards>{earnAmazingRewards}</EarnAmazingRewards>
          <ParticipateInActiv>{participateInActiv}</ParticipateInActiv>
          <Group47 />
          <Group48 />
          <Group49 src={group49Props.src} />
        </OverlapGroup1>
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 506px;
  margin-left: 110px;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 633px;
`;

const ParticipantHeadshot2RemovebgPreview = styled.img`
  width: 102px;
  height: 102px;
  object-fit: cover;
`;

const ForgotYourPassword = styled.div`
  ${RalewayNormalBlack35px}
  min-height: 41px;
  margin-top: 184px;
  margin-left: 31px;
  letter-spacing: 0;
`;

const PleaseEnterYourRe = styled.div`
  ${RalewayMediumLogCabin22px}
  min-height: 64px;
  align-self: flex-end;
  margin-top: 26px;
  min-width: 475px;
  letter-spacing: 0;
`;

const Email = styled.div`
  ${RalewaySemiBoldLogCabin19px}
  min-height: 25px;
  margin-top: 38px;
  margin-left: 54px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  ${Border2pxBlueberry}
  height: 54px;
  align-self: center;
  margin-top: 11px;
  margin-right: 23px;
  display: flex;
  padding: 12px 21px;
  align-items: flex-start;
  min-width: 421px;
  background-color: var(--white);
  border-radius: 35px;
`;

const EnterYourEmail = styled.div`
  ${RalewaySemiBoldTundora19px}
  min-height: 25px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  width: 421px;
  height: 54px;
  position: relative;
  align-self: center;
  margin-top: 34px;
  margin-right: 19px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 421px;
  height: 54px;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const ResetMyPassword = styled.div`
  ${RalewayMediumWhite22px}
  position: absolute;
  top: 14px;
  left: 109px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 756px;
  height: 1024px;
  position: relative;
  margin-left: 68px;
`;

const Rectangle2 = styled.div`
  position: absolute;
  width: 713px;
  height: 1024px;
  top: 0;
  left: 43px;
  background-color: var(--blueberry);
`;

const EarnAmazingRewards = styled.h1`
  ${RalewayBoldWhite70px}
  position: absolute;
  top: 396px;
  left: 173px;
  letter-spacing: 0;
`;

const ParticipateInActiv = styled.div`
  ${RalewayMediumWhite25px}
  position: absolute;
  top: 597px;
  left: 173px;
  letter-spacing: 0;
`;

export default LogIntoYourAccountforgotPasswordDes;
