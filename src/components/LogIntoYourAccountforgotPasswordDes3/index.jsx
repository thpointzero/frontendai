import React from "react";
import Group47 from "../Group47";
import Group48 from "../Group48";
import Group49 from "../Group49";
import styled from "styled-components";
import {
  RalewayBoldWhite70px,
  RalewayNormalBlack35px,
  RalewayMediumWhite25px,
  RalewayMediumWhite22px,
  RalewayMediumLogCabin22px,
} from "../../styledMixins";
import "./LogIntoYourAccountforgotPasswordDes3.css";

function LogIntoYourAccountforgotPasswordDes3(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    emailWasSent,
    text12,
    resendInstructions,
    text10,
    text11,
    group49Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="log-into-your-account-forgot-password-desktop-1 screen">
        <FlexCol>
          <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
          <EmailWasSent>{emailWasSent}</EmailWasSent>
          <PleaseFollowTheIn>{text12}</PleaseFollowTheIn>
          <OverlapGroup1>
            <ResendInstructions>{resendInstructions}</ResendInstructions>
          </OverlapGroup1>
        </FlexCol>
        <OverlapGroup>
          <Rectangle2></Rectangle2>
          <EarnAmazingRewards>{text10}</EarnAmazingRewards>
          <ParticipateInActiv>{text11}</ParticipateInActiv>
          <Group47 />
          <Group48 />
          <Group49 src={group49Props.src} />
        </OverlapGroup>
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 454px;
  margin-left: 110px;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 596px;
`;

const ParticipantHeadshot2RemovebgPreview = styled.img`
  width: 102px;
  height: 102px;
  object-fit: cover;
`;

const EmailWasSent = styled.div`
  ${RalewayNormalBlack35px}
  min-height: 41px;
  margin-top: 227px;
  margin-left: 31px;
  letter-spacing: 0;
`;

const PleaseFollowTheIn = styled.div`
  ${RalewayMediumLogCabin22px}
  min-height: 102px;
  align-self: center;
  margin-top: 26px;
  margin-left: 16px;
  min-width: 408px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 54px;
  align-self: flex-end;
  margin-top: 44px;
  display: flex;
  padding: 14px 107.8px;
  align-items: flex-start;
  min-width: 421px;
  background-image: url(/img/rectangle-1-3@2x.svg);
  background-size: 100% 100%;
`;

const ResendInstructions = styled.div`
  ${RalewayMediumWhite22px}
  min-height: 25px;
  min-width: 203px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 756px;
  height: 1024px;
  position: relative;
  margin-left: 120px;
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

export default LogIntoYourAccountforgotPasswordDes3;
