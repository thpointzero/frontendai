import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RalewaySemiBoldWhite24px,
  RalewaySemiBoldLogCabin19px,
  Border1pxTundora2,
  RalewaySemiBoldWhite22px,
  Border2pxBlueberry,
  RalewayNormalBlack18px,
  RalewayNormalBlack25px,
  RalewaySemiBoldTundora19px,
} from "../../styledMixins";
import "./AddExistingWalletDesktop.css";

function AddExistingWalletDesktop(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    number,
    enterWalletNameAddress,
    walletName,
    enterYourWalletName,
    walletAddress,
    enterYourWalletAddress,
    addYourWallet,
    spanText,
    spanText2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="add-existing-wallet-desktop screen">
        <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
        <OverlapGroup>
          <FlexRow>
            <OverlapGroup4>
              <Number>{number}</Number>
            </OverlapGroup4>
            <EnterWalletNameAddress>{enterWalletNameAddress}</EnterWalletNameAddress>
          </FlexRow>
          <WalletName>{walletName}</WalletName>
          <OverlapGroup2>
            <EnterYourWalletName>{enterYourWalletName}</EnterYourWalletName>
          </OverlapGroup2>
          <WalletAddress>{walletAddress}</WalletAddress>
          <OverlapGroup3>
            <EnterYourWalletName>{enterYourWalletAddress}</EnterYourWalletName>
          </OverlapGroup3>
          <OverlapGroup1>
            <Link to="/account-setup-complete-desktop">
              <Rectangle1 src="/img/rectangle-1-1@2x.svg" />
            </Link>
            <AddYourWallet>{addYourWallet}</AddYourWallet>
            <Arrow3 src="/img/arrow-3@2x.svg" />
          </OverlapGroup1>
          <Link to="/create-wallet-desktop-1">
            <DontHaveAWalletCreateOne>
              <span className="raleway-normal-black-18px">{spanText}</span>
              <span className="raleway-semi-bold-black-18px">{spanText2}</span>
            </DontHaveAWalletCreateOne>
          </Link>
        </OverlapGroup>
      </div>
    </div>
  );
}

const ParticipantHeadshot2RemovebgPreview = styled.img`
  width: 102px;
  height: 102px;
  margin-top: 52px;
  object-fit: cover;
`;

const OverlapGroup = styled.div`
  width: 677px;
  margin-left: 169px;
  margin-top: 163px;
  display: flex;
  flex-direction: column;
  padding: 125px 0;
  align-items: center;
  min-height: 677px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const FlexRow = styled.div`
  margin-top: 1px;
  margin-right: 53px;
  display: flex;
  align-items: center;
  min-width: 396px;
`;

const OverlapGroup4 = styled.div`
  height: 52px;
  display: flex;
  padding: 11px 20px;
  align-items: flex-start;
  min-width: 52px;
  background-image: url(/img/rectangle-2@2x.svg);
  background-size: 100% 100%;
`;

const Number = styled.div`
  ${RalewaySemiBoldWhite24px}
  min-height: 28px;
  letter-spacing: 0;
`;

const EnterWalletNameAddress = styled.div`
  ${RalewayNormalBlack25px}
  min-height: 29px;
  margin-left: 13px;
  margin-bottom: 3px;
  min-width: 331px;
  letter-spacing: 0;
`;

const WalletName = styled.div`
  ${RalewaySemiBoldLogCabin19px}
  min-height: 25px;
  align-self: flex-start;
  margin-top: 28px;
  margin-left: 137px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  ${Border2pxBlueberry}
  height: 54px;
  margin-top: 9px;
  display: flex;
  padding: 12px 21px;
  align-items: flex-start;
  min-width: 449px;
  background-color: var(--white);
  border-radius: 35px;
`;

const EnterYourWalletName = styled.div`
  ${RalewaySemiBoldTundora19px}
  min-height: 25px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const WalletAddress = styled.div`
  ${RalewaySemiBoldLogCabin19px}
  min-height: 25px;
  margin-top: 16px;
  margin-right: 267px;
  min-width: 136px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  ${Border1pxTundora2}
  height: 54px;
  margin-top: 8px;
  display: flex;
  padding: 13px 21px;
  align-items: flex-start;
  min-width: 449px;
  background-color: var(--white);
  border-radius: 35px;
`;

const OverlapGroup1 = styled.div`
  width: 449px;
  height: 54px;
  position: relative;
  margin-top: 46px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 449px;
  height: 54px;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const AddYourWallet = styled.div`
  ${RalewaySemiBoldWhite22px}
  position: absolute;
  top: 14px;
  left: 143px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Arrow3 = styled.img`
  position: absolute;
  width: 37px;
  height: 24px;
  top: 15px;
  left: 321px;
`;

const DontHaveAWalletCreateOne = styled.div`
  ${RalewayNormalBlack18px}
  min-height: 21px;
  margin-top: 34px;
  margin-left: 13px;
  min-width: 266px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default AddExistingWalletDesktop;
