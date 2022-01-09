import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RalewaySemiBoldWhite24px,
  RalewayNormalBlack18px,
  RalewaySemiBoldTundora17px,
  RalewayNormalBlack25px,
  RalewayMediumWhite22px,
  RalewayNormalBlack22px,
} from "../../styledMixins";
import "./CreateWalletPhraseDesktop2.css";

function CreateWalletPhraseDesktop2(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    previous,
    number,
    backUpYourSecurityKey,
    informationOutline11,
    backUpTheTextBel,
    place,
    color,
    place2,
    office,
    tech,
    jam,
    soft,
    game,
    xsuper,
    jolly,
    gun,
    world,
    crops,
    finish,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="create-wallet-phrase-desktop screen">
        <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
        <OverlapGroup>
          <Link to="/create-wallet-desktop-1" className="align-self-flex-start">
            <Group50>
              <Arrow1 src="/img/arrow-1@2x.svg" />
              <Previous>{previous}</Previous>
            </Group50>
          </Link>
          <FlexRow>
            <OverlapGroup3>
              <Number>{number}</Number>
            </OverlapGroup3>
            <BackUpYourSecurityKey>{backUpYourSecurityKey}</BackUpYourSecurityKey>
            <Link to="/create-wallet-phrase-desktop-1">
              <InformationOutline11 src={informationOutline11} />
            </Link>
          </FlexRow>
          <BackUpTheTextBel>{backUpTheTextBel}</BackUpTheTextBel>
          <FlexCol>
            <FlexRow1>
              <Place>{place}</Place>
              <Color>{color}</Color>
              <Place1>{place2}</Place1>
              <Office>{office}</Office>
            </FlexRow1>
            <FlexRow2>
              <Tech>{tech}</Tech>
              <Jam>{jam}</Jam>
              <Soft>{soft}</Soft>
              <Game>{game}</Game>
              <Super>{xsuper}</Super>
            </FlexRow2>
            <FlexRow3>
              <Jolly>{jolly}</Jolly>
              <Gun>{gun}</Gun>
              <World>{world}</World>
              <Crops>{crops}</Crops>
            </FlexRow3>
          </FlexCol>
          <OverlapGroup2>
            <Link to="/account-setup-complete-desktop">
              <Rectangle1 src="/img/rectangle-1-5@2x.svg" />
            </Link>
            <Finish>{finish}</Finish>
          </OverlapGroup2>
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
  padding: 82px 109px;
  align-items: center;
  min-height: 677px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const Group50 = styled.div`
  height: 21px;
  align-self: flex-start;
  margin-left: 27px;
  display: flex;
  align-items: flex-end;
  min-width: 108px;
  cursor: pointer;
`;

const Arrow1 = styled.img`
  width: 27px;
  height: 24px;
  margin-left: -1px;
  margin-bottom: -3px;
`;

const Previous = styled.div`
  ${RalewayNormalBlack18px}
  min-height: 21px;
  margin-left: 8px;
  min-width: 72px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  margin-top: 44px;
  margin-left: 18px;
  display: flex;
  align-items: center;
  min-width: 423px;
`;

const OverlapGroup3 = styled.div`
  height: 52px;
  display: flex;
  padding: 11px 19px;
  align-items: flex-start;
  min-width: 52px;
  background-image: url(/img/rectangle-2-1@2x.svg);
  background-size: 100% 100%;
`;

const Number = styled.div`
  ${RalewaySemiBoldWhite24px}
  min-height: 28px;
  letter-spacing: 0;
`;

const BackUpYourSecurityKey = styled.div`
  ${RalewayNormalBlack25px}
  min-height: 29px;
  margin-left: 13px;
  margin-bottom: 3px;
  min-width: 304px;
  letter-spacing: 0;
`;

const InformationOutline11 = styled.img`
  width: 33px;
  height: 33px;
  margin-left: 21px;
  margin-bottom: 1px;
  object-fit: cover;
  cursor: pointer;
`;

const BackUpTheTextBel = styled.div`
  ${RalewayNormalBlack22px}
  min-height: 62px;
  margin-top: 28px;
  margin-right: 27px;
  min-width: 380px;
  letter-spacing: 0;
`;

const FlexCol = styled.div`
  ${RalewaySemiBoldTundora17px}
  width: 457px;
  align-self: flex-end;
  margin-top: 9px;
  display: flex;
  flex-direction: column;
  padding: 51.6px 73px;
  align-items: center;
  min-height: 215px;
  background-image: url(/img/register-button-5@2x.svg);
  background-size: 100% 100%;
`;

const FlexRow1 = styled.div`
  height: 30px;
  margin-left: 11px;
  display: flex;
  align-items: flex-start;
  min-width: 262px;
`;

const Place = styled.div`
  width: 43px;
  min-height: 30px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Color = styled.div`
  width: 98px;
  min-height: 30px;
  margin-left: 10px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Place1 = styled.div`
  width: 36px;
  min-height: 30px;
  margin-left: 11px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Office = styled.div`
  min-height: 30px;
  margin-left: 11px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const FlexRow2 = styled.div`
  height: 30px;
  align-self: flex-end;
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 307px;
`;

const Tech = styled.div`
  width: 44px;
  min-height: 30px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Jam = styled.div`
  width: 36px;
  min-height: 30px;
  margin-left: 19px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Soft = styled.div`
  width: 37px;
  min-height: 30px;
  margin-left: 20px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Game = styled.div`
  width: 56px;
  min-height: 30px;
  margin-left: 20px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Super = styled.div`
  min-height: 30px;
  margin-left: 20px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const FlexRow3 = styled.div`
  ${RalewaySemiBoldTundora17px}
  height: 31px;
  margin-top: 6px;
  margin-left: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 249px;
`;

const Jolly = styled.div`
  width: 41px;
  min-height: 31px;
  letter-spacing: 0;
  line-height: 25px;
`;

const Gun = styled.div`
  width: 39px;
  min-height: 31px;
  margin-left: 19px;
  letter-spacing: 0;
  line-height: 25px;
`;

const World = styled.div`
  width: 57px;
  min-height: 31px;
  margin-left: 19px;
  letter-spacing: 0;
  line-height: 25px;
`;

const Crops = styled.div`
  width: 54px;
  min-height: 31px;
  margin-left: 20px;
  letter-spacing: 0;
  line-height: 25px;
`;

const OverlapGroup2 = styled.div`
  width: 407px;
  height: 54px;
  position: relative;
  margin-top: 16px;
  margin-left: 2px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 407px;
  height: 54px;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const Finish = styled.div`
  ${RalewayMediumWhite22px}
  position: absolute;
  width: 60px;
  top: 16px;
  left: 173px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default CreateWalletPhraseDesktop2;
