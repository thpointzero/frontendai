import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RalewayMediumWhite22px, RalewayNormalBlack22px, RalewayNormalBlack20px } from "../../styledMixins";
import "./AccountVerificationDesktop.css";

function AccountVerificationDesktop(props) {
  const { participant_Headshot2RemovebgPrevie, pleaseEnterTheVer, sendToVerify, spanText, spanText2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="account-verification-desktop screen">
        <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
        <PleaseEnterTheVer>{pleaseEnterTheVer}</PleaseEnterTheVer>
        <RegisterButtonContainer>
          <RegisterButton src="/img/register-button-1@2x.svg" />
          <RegisterButton1 src="/img/register-button-2@2x.svg" />
          <RegisterButton2 src="/img/register-button-3@2x.svg" />
          <RegisterButton3 src="/img/register-button-4@2x.svg" />
        </RegisterButtonContainer>
        <Link to="/register-member-desktop">
          <Group63>
            <OverlapGroup>
              <SendToVerify>{sendToVerify}</SendToVerify>
              <Arrow2 src="/img/arrow-2@2x.svg" />
            </OverlapGroup>
          </Group63>
        </Link>
        <DidntGetItResendIt>
          <span className="raleway-normal-black-20px">{spanText}</span>
          <span className="raleway-semi-bold-black-20px">{spanText2}</span>
        </DidntGetItResendIt>
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

const PleaseEnterTheVer = styled.div`
  ${RalewayNormalBlack22px}
  min-height: 62px;
  margin-top: 158px;
  margin-right: 1px;
  min-width: 329px;
  text-align: center;
  letter-spacing: 0;
`;

const RegisterButtonContainer = styled.div`
  width: 457px;
  height: 119px;
  position: relative;
  margin-top: 58px;
  margin-right: 0.12px;
`;

const RegisterButton = styled.img`
  position: absolute;
  width: 119px;
  height: 119px;
  top: 0;
  left: 0;
`;

const RegisterButton1 = styled.img`
  position: absolute;
  width: 119px;
  height: 119px;
  top: 0;
  left: 113px;
`;

const RegisterButton2 = styled.img`
  position: absolute;
  width: 119px;
  height: 119px;
  top: 0;
  left: 225px;
`;

const RegisterButton3 = styled.img`
  position: absolute;
  width: 119px;
  height: 119px;
  top: 0;
  left: 338px;
`;

const Group63 = styled.div`
  height: 68px;
  margin-top: 50px;
  margin-left: 0.84px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 315px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  height: 69px;
  margin-top: -0.36px;
  display: flex;
  padding: 21.4px 57.9px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 315px;
  background-image: url(/img/rectangle-1-2@2x.svg);
  background-size: 100% 100%;
`;

const SendToVerify = styled.div`
  ${RalewayMediumWhite22px}
  min-height: 25px;
  min-width: 142px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Arrow2 = styled.img`
  width: 32px;
  height: 23px;
  align-self: center;
  margin-left: 16px;
  margin-top: 0.35px;
`;

const DidntGetItResendIt = styled.div`
  ${RalewayNormalBlack20px}
  min-height: 23px;
  margin-top: 32px;
  min-width: 210px;
  letter-spacing: 0;
`;

export default AccountVerificationDesktop;
