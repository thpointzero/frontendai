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
import "./CreateAccountDesktop.css";

function CreateAccountDesktop(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    createAnAccountToGetStarted,
    place,
    enterYourName,
    email,
    enterYourEmail,
    password,
    enterAPassword,
    createAccount,
    spanText,
    spanText2,
    earnAmazingRewards,
    participateInActiv,
    group49Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="create-account-desktop screen">
        <FlexCol>
          <CreateAnAccountToGetStarted>{createAnAccountToGetStarted}</CreateAnAccountToGetStarted>
          <Place>{place}</Place>
          <OverlapGroup1>
            <EnterYourName>{enterYourName}</EnterYourName>
          </OverlapGroup1>
          <Email>{email}</Email>
          <OverlapGroup>
            <EnterYourName>{enterYourEmail}</EnterYourName>
          </OverlapGroup>
          <Password>{password}</Password>
          <OverlapGroup4>
            <EnterYourName>{enterAPassword}</EnterYourName>
          </OverlapGroup4>
          <OverlapGroup3>
            <Link to="/account-verification-desktop">
              <Rectangle1 src="/img/rectangle-1-6@2x.svg" />
            
            <CreateAccount>{createAccount}</CreateAccount>
            </Link>
         
          </OverlapGroup3>
         
          <Link to="/log-into-your-account-desktop" className="align-self-flex-center">
            <AlreadyHaveAnAccountLogIn>
              <span className="raleway-normal-black-18px">{spanText}</span>
              <span className="raleway-semi-bold-black-18px">{spanText2}</span>
            </AlreadyHaveAnAccountLogIn>
          </Link>
        </FlexCol>
        <OverlapGroup2>
          <Rectangle2></Rectangle2>
          <EarnAmazingRewards>{earnAmazingRewards}</EarnAmazingRewards>
          <ParticipateInActiv>{participateInActiv}</ParticipateInActiv>
          <Group47 />
          <Group48 />
          <Group49 src={group49Props.src} />
        </OverlapGroup2>
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
  align-items: flex-start;
  min-height: 771px;
`;

const ParticipantHeadshot2RemovebgPreview = styled.img`
  width: 102px;
  height: 102px;
  object-fit: cover;
`;

const CreateAnAccountToGetStarted = styled.div`
  ${RalewayNormalBlack40px}
  min-height: 104px;
  align-self: center;
  margin-top: 75px;
  margin-right: 49px;
  min-width: 341px;
  letter-spacing: 0;
`;

const Place = styled.div`
  ${RalewaySemiBoldLogCabin19px}
  min-height: 25px;
  margin-top: 38px;
  margin-left: 54px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  ${Border2pxBlueberry}
  height: 54px;
  align-self: flex-end;
  margin-top: 12px;
  display: flex;
  padding: 12px 21px;
  align-items: flex-start;
  min-width: 421px;
  background-color: var(--white);
  border-radius: 35px;
`;

const EnterYourName = styled.div`
  ${RalewaySemiBoldTundora19px}
  min-height: 25px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Email = styled.div`
  ${RalewaySemiBoldLogCabin19px}
  min-height: 25px;
  margin-top: 19px;
  margin-left: 54px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  ${Border1pxTundora2}
  height: 54px;
  align-self: flex-end;
  margin-top: 11px;
  display: flex;
  padding: 13px 22px;
  align-items: flex-start;
  min-width: 421px;
  background-color: var(--white);
  border-radius: 35px;
`;

const Password = styled.div`
  ${RalewaySemiBoldLogCabin19px}
  min-height: 25px;
  margin-top: 19px;
  margin-left: 53px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  ${Border1pxTundora2}
  height: 54px;
  align-self: flex-end;
  margin-top: 10px;
  display: flex;
  padding: 13px 21px;
  align-items: flex-start;
  min-width: 421px;
  background-color: var(--white);
  border-radius: 35px;
`;

const OverlapGroup3 = styled.div`
  width: 421px;
  height: 54px;
  position: relative;
  align-self: flex-end;
  margin-top: 49px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 421px;
  height: 54px;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const CreateAccount = styled.div`
  ${RalewayMediumWhite22px}
  position: absolute;
  top: 14px;
  left: 130px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const AlreadyHaveAnAccountLogIn = styled.div`
  ${RalewayNormalBlack18px}
  min-height: 21px;
  align-self: center;
  margin-top: 20px;
  margin-left: 28px;
  min-width: 276px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
`;

const OverlapGroup2 = styled.div`
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

export default CreateAccountDesktop;
