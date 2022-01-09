import React from "react";
import { Link } from "react-router-dom";
import Group47 from "../Group47";
import Group48 from "../Group48";
import Group49 from "../Group49";
import styled from "styled-components";
import {
  RalewayNormalBlack40px,
  RalewayMediumWhite22px,
  RalewaySemiBoldLogCabin19px,
  Border1pxTundora2,
  RalewayNormalBlack18px,
  Border2pxBlueberry,
  RalewayBoldWhite70px,
  RalewayMediumWhite25px,
  RalewaySemiBoldTundora19px,
} from "../../styledMixins";
import "./LogIntoYourAccountDesktop.css";

function LogIntoYourAccountDesktop(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    welcomeBackLogIntoYourAccount,
    email,
    enterYourEmail,
    password,
    enterAPassword,
    forgotPassword,
    logIn,
    spanText,
    spanText2,
    earnAmazingRewards,
    participateInActiv,
    group49Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="log-into-your-account-desktop screen">
        <FlexCol>
          <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
          <WelcomeBackLogIntoYourAccount>{welcomeBackLogIntoYourAccount}</WelcomeBackLogIntoYourAccount>
          <Email>{email}</Email>
          <OverlapGroup1>
            <EnterYourEmail>{enterYourEmail}</EnterYourEmail>
          </OverlapGroup1>
          <Password>{password}</Password>
          <OverlapGroup2>
            <EnterYourEmail>{enterAPassword}</EnterYourEmail>
          </OverlapGroup2>
          <Link to="/log-into-your-account-forgot-password-desktop">
            <ForgotPassword>{forgotPassword}</ForgotPassword>
          </Link>
          <OverlapGroup3>
            <LogIn>{logIn}</LogIn>
          </OverlapGroup3>
          <Link to="/create-account-desktop" className="align-self-flex-center">
            <DontHaveAnAccountYetCreateOne>
              <span className="raleway-normal-black-18px">{spanText}</span>
              <span className="raleway-semi-bold-black-18px">{spanText2}</span>
            </DontHaveAnAccountYetCreateOne>
          </Link>
        </FlexCol>
        <OverlapGroup>
          <Rectangle2></Rectangle2>
          <EarnAmazingRewards>{earnAmazingRewards}</EarnAmazingRewards>
          <ParticipateInActiv>{participateInActiv}</ParticipateInActiv>
          <Group47 />
          <Group48 />
          <Group49 src={group49Props.src} />
        </OverlapGroup>
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 452px;
  margin-left: 110px;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 711px;
`;

const ParticipantHeadshot2RemovebgPreview = styled.img`
  width: 102px;
  height: 102px;
  align-self: flex-start;
  object-fit: cover;
`;

const WelcomeBackLogIntoYourAccount = styled.div`
  ${RalewayNormalBlack40px}
  min-height: 104px;
  align-self: center;
  margin-top: 116px;
  margin-left: 14px;
  min-width: 404px;
  letter-spacing: 0;
`;

const Email = styled.div`
  ${RalewaySemiBoldLogCabin19px}
  min-height: 25px;
  align-self: flex-start;
  margin-top: 46px;
  margin-left: 54px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  ${Border2pxBlueberry}
  height: 54px;
  margin-top: 11px;
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

const Password = styled.div`
  ${RalewaySemiBoldLogCabin19px}
  min-height: 25px;
  align-self: flex-start;
  margin-top: 19px;
  margin-left: 53px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  ${Border1pxTundora2}
  height: 54px;
  margin-top: 10px;
  display: flex;
  padding: 13px 21px;
  align-items: flex-start;
  min-width: 421px;
  background-color: var(--white);
  border-radius: 35px;
`;

const ForgotPassword = styled.div`
  min-height: 16px;
  margin-top: 6px;
  margin-right: 4px;
  min-width: 118px;
  font-family: var(--font-family-raleway);
  font-weight: 600;
  color: var(--black);
  font-size: 14px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
`;

const OverlapGroup3 = styled.div`
  height: 54px;
  margin-top: 27px;
  display: flex;
  padding: 14px 176.8px;
  align-items: flex-start;
  min-width: 421px;
  background-image: url(/img/rectangle-1-4@2x.svg);
  background-size: 100% 100%;
`;

const LogIn = styled.div`
  ${RalewayMediumWhite22px}
  min-height: 25px;
  min-width: 64px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const DontHaveAnAccountYetCreateOne = styled.div`
  ${RalewayNormalBlack18px}
  min-height: 21px;
  align-self: center;
  margin-top: 21px;
  margin-left: 28px;
  min-width: 324px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 756px;
  height: 1024px;
  position: relative;
  margin-left: 122px;
`;

const Rectangle2 = styled.div`
  position: absolute;
  width: 713px;
  height: 1024px;
  top: 0;
  left: 43px;
  background-color: var(--blueberry);
`;

const EarnAmazingRewards = styled.div`
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

export default LogIntoYourAccountDesktop;
