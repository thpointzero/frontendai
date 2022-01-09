import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RalewaySemiBoldWhite24px,
  RalewaySemiBoldLogCabin19px,
  Border1pxTundora2,
  RalewaySemiBoldWhite22px,
  RalewayNormalBlack18px,
  RalewayNormalBlack25px,
  RalewaySemiBoldTundora19px,
} from "../../styledMixins";
import "./CreateWalletDesktop.css";

function CreateWalletDesktop(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    number,
    setYourPassword,
    password,
    chooseAPassword,
    repeatPassword,
    repeatYourPassword,
    xcontinue,
    spanText,
    spanText2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="create-wallet-desktop-1 screen">
        <OverlapGroup>
          <FlexRow>
            <OverlapGroup2>
              <Number>{number}</Number>
            </OverlapGroup2>
            <SetYourPassword>{setYourPassword}</SetYourPassword>
          </FlexRow>
          <Password>{password}</Password>
          <OverlapGroup3>
            <ChooseAPassword>{chooseAPassword}</ChooseAPassword>
          </OverlapGroup3>
          <RepeatPassword>{repeatPassword}</RepeatPassword>
          <OverlapGroup4>
            <ChooseAPassword>{repeatYourPassword}</ChooseAPassword>
          </OverlapGroup4>
          <OverlapGroup1>
            <Link to="/create-wallet-phrase-desktop">
              <Rectangle1 src="/img/rectangle-1-17@2x.svg" />
            </Link>
            <Continue>{xcontinue}</Continue>
            <Arrow3 src="/img/arrow-3-1@2x.svg" />
          </OverlapGroup1>
          <Link to="/add-existing-wallet-desktop" className="align-self-flex-center">
            <AlreadyHaveAWalletAddIt>
              <span className="raleway-normal-black-18px">{spanText}</span>
              <span className="raleway-semi-bold-black-18px">{spanText2}</span>
            </AlreadyHaveAWalletAddIt>
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
  margin-top: 167px;
  display: flex;
  flex-direction: column;
  padding: 121px 113px;
  align-items: flex-start;
  min-height: 677px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const FlexRow = styled.div`
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 278px;
`;

const OverlapGroup2 = styled.div`
  height: 52px;
  display: flex;
  padding: 11px 20px;
  align-items: flex-start;
  min-width: 52px;
  background-image: url(/img/rectangle-2-2@2x.svg);
  background-size: 100% 100%;
`;

const Number = styled.div`
  ${RalewaySemiBoldWhite24px}
  min-height: 28px;
  letter-spacing: 0;
`;

const SetYourPassword = styled.div`
  ${RalewayNormalBlack25px}
  min-height: 29px;
  margin-left: 13px;
  margin-bottom: 3px;
  min-width: 213px;
  letter-spacing: 0;
`;

const Password = styled.div`
  ${RalewaySemiBoldLogCabin19px}
  min-height: 25px;
  margin-top: 34px;
  margin-left: 25px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  ${Border1pxTundora2}
  height: 54px;
  align-self: flex-end;
  margin-top: 9px;
  display: flex;
  padding: 13px 22px;
  align-items: flex-start;
  min-width: 449px;
  background-color: var(--white);
  border-radius: 35px;
`;

const ChooseAPassword = styled.div`
  ${RalewaySemiBoldTundora19px}
  min-height: 25px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const RepeatPassword = styled.div`
  ${RalewaySemiBoldLogCabin19px}
  min-height: 25px;
  margin-top: 16px;
  margin-left: 25px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  ${Border1pxTundora2}
  height: 54px;
  align-self: flex-end;
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
  align-self: flex-end;
  margin-top: 49px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 449px;
  height: 54px;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const Continue = styled.div`
  ${RalewaySemiBoldWhite22px}
  position: absolute;
  top: 14px;
  left: 158px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Arrow3 = styled.img`
  position: absolute;
  width: 31px;
  height: 24px;
  top: 15px;
  left: 261px;
`;

const AlreadyHaveAWalletAddIt = styled.div`
  ${RalewayNormalBlack18px}
  min-height: 21px;
  align-self: center;
  margin-top: 31px;
  margin-left: 5px;
  min-width: 246px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default CreateWalletDesktop;
