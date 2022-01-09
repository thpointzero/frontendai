import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./RegisterMemberDesktop.css";

function RegisterMemberDesktop(props) {
  const { participant_Headshot2RemovebgPrevie, accountVerificationSuccessful, check1 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="register-member-desktop screen" onclick="window.open('create-wallet-desktop.html', '_self');">
        <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
        <AccountVerificationSuccessful>{accountVerificationSuccessful}</AccountVerificationSuccessful>
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

const AccountVerificationSuccessful = styled.div`
  min-height: 100px;
  margin-top: 225px;
  margin-right: 1px;
  min-width: 345px;
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--black);
  font-size: 38px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 134px;
  margin-top: 12px;
  display: flex;
  padding: 32px 36px;
  align-items: flex-start;
  min-width: 134px;
  background-image: url(/img/register-button@2x.svg);
  background-size: 100% 100%;
`;

const Check1 = styled.img`
  width: 61px;
  height: 61px;
  object-fit: cover;
`;

export default RegisterMemberDesktop;
