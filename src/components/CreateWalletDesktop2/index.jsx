import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RalewayMediumWhite22px } from "../../styledMixins";
import "./CreateWalletDesktop2.css";

function CreateWalletDesktop2(props) {
  const { participant_Headshot2RemovebgPrevie, connectOrCreateA, connectYourWallet, createANewWallet } = props;

  return (
    <div className="container-center-horizontal">
      <div className="create-wallet-desktop screen">
        <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
        <ConnectOrCreateA>{connectOrCreateA}</ConnectOrCreateA>
        <OverlapGroup1>
          <Link to="/add-existing-wallet-desktop">
            <Rectangle1 src="/img/rectangle-1@2x.svg" />
          </Link>
          <ConnectYourWallet>{connectYourWallet}</ConnectYourWallet>
        </OverlapGroup1>
        <Link to="/create-wallet-desktop-1">
          <RegisterButton>
            <OverlapGroup>
              <CreateANewWallet>{createANewWallet}</CreateANewWallet>
            </OverlapGroup>
          </RegisterButton>
        </Link>
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

const ConnectOrCreateA = styled.div`
  min-height: 94px;
  margin-top: 218px;
  min-width: 436px;
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--black);
  font-size: 36px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  width: 249px;
  height: 54px;
  position: relative;
  margin-top: 39px;
  margin-right: 1px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 249px;
  height: 54px;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const ConnectYourWallet = styled.div`
  ${RalewayMediumWhite22px}
  position: absolute;
  width: 217px;
  top: 14px;
  left: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const RegisterButton = styled.div`
  margin-top: 39px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 251px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  height: 54px;
  display: flex;
  padding: 11px 13px;
  align-items: flex-start;
  min-width: 249px;
  border-radius: 35px;
  border: 3px solid #4790ff;
`;

const CreateANewWallet = styled.div`
  width: 217px;
  min-height: 25px;
  font-family: var(--font-family-raleway);
  font-weight: 500;
  color: #424246;
  font-size: var(--font-size-xxxl);
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

export default CreateWalletDesktop2;
