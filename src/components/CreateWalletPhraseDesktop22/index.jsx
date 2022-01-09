import React from "react";
import styled from "styled-components";
import {
  RalewaySemiBoldWhite24px,
  RalewayNormalBlack18px,
  RalewaySemiBoldTundora17px,
  RalewayNormalBlack25px,
  RalewayMediumWhite22px,
  RalewayNormalBlack22px,
} from "../../styledMixins";
import "./CreateWalletPhraseDesktop22.css";

function CreateWalletPhraseDesktop22(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    text45,
    previous,
    finish,
    number,
    text46,
    place,
    color,
    tech,
    jolly,
    gun,
    world,
    crops,
    jam,
    soft,
    game,
    xsuper,
    place2,
    office,
    information11,
    text47,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="create-wallet-phrase-desktop-1 screen">
        <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
        <OverlapGroup>
          <Rectangle3></Rectangle3>
          <BackUpTheTextBel>{text45}</BackUpTheTextBel>
          <Previous>{previous}</Previous>
          <Arrow1 src="/img/arrow-1@2x.svg" />
          <Rectangle1 src="/img/rectangle-1-18@2x.svg" />
          <Finish>{finish}</Finish>
          <Rectangle2 src="/img/rectangle-2-3@2x.svg" />
          <Number>{number}</Number>
          <BackUpYourSecurityKey>{text46}</BackUpYourSecurityKey>
          <RegisterButton src="/img/register-button-16@2x.svg" />
          <Place>{place}</Place>
          <Color>{color}</Color>
          <Tech>{tech}</Tech>
          <Jolly>{jolly}</Jolly>
          <Gun>{gun}</Gun>
          <World>{world}</World>
          <Crops>{crops}</Crops>
          <Jam>{jam}</Jam>
          <Soft>{soft}</Soft>
          <Game>{game}</Game>
          <Super>{xsuper}</Super>
          <Place1>{place2}</Place1>
          <Office>{office}</Office>
          <Information11 src={information11} />
          <Rectangle12></Rectangle12>
          <ThisWillBeYourNe>{text47}</ThisWillBeYourNe>
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
  width: 782px;
  height: 677px;
  position: relative;
  margin-left: 169px;
  margin-top: 163px;
`;

const Rectangle3 = styled.div`
  position: absolute;
  width: 677px;
  height: 677px;
  top: 0;
  left: 0;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 30px #00000040;
`;

const BackUpTheTextBel = styled.div`
  ${RalewayNormalBlack22px}
  position: absolute;
  top: 227px;
  left: 135px;
  letter-spacing: 0;
`;

const Previous = styled.div`
  ${RalewayNormalBlack18px}
  position: absolute;
  top: 82px;
  left: 170px;
  letter-spacing: 0;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 27px;
  height: 24px;
  top: 82px;
  left: 135px;
`;

const Rectangle1 = styled.img`
  position: absolute;
  width: 407px;
  height: 54px;
  top: 529px;
  left: 136px;
`;

const Finish = styled.div`
  ${RalewayMediumWhite22px}
  position: absolute;
  width: 60px;
  top: 545px;
  left: 309px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Rectangle2 = styled.img`
  position: absolute;
  width: 52px;
  height: 52px;
  top: 147px;
  left: 136px;
`;

const Number = styled.div`
  ${RalewaySemiBoldWhite24px}
  position: absolute;
  top: 158px;
  left: 155px;
  letter-spacing: 0;
`;

const BackUpYourSecurityKey = styled.div`
  ${RalewayNormalBlack25px}
  position: absolute;
  top: 157px;
  left: 201px;
  letter-spacing: 0;
`;

const RegisterButton = styled.img`
  position: absolute;
  width: 457px;
  height: 215px;
  top: 298px;
  left: 111px;
`;

const Place = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 43px;
  top: 350px;
  left: 214px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Color = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 98px;
  top: 350px;
  left: 267px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Tech = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 44px;
  top: 386px;
  left: 188px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Jolly = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 41px;
  top: 422px;
  left: 221px;
  letter-spacing: 0;
  line-height: 25px;
`;

const Gun = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 39px;
  top: 422px;
  left: 281px;
  letter-spacing: 0;
  line-height: 25px;
`;

const World = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 57px;
  top: 422px;
  left: 339px;
  letter-spacing: 0;
  line-height: 25px;
`;

const Crops = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 54px;
  top: 422px;
  left: 416px;
  letter-spacing: 0;
  line-height: 25px;
`;

const Jam = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 36px;
  top: 386px;
  left: 251px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Soft = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 37px;
  top: 386px;
  left: 307px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Game = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 56px;
  top: 386px;
  left: 364px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Super = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 55px;
  top: 386px;
  left: 440px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Place1 = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 36px;
  top: 350px;
  left: 376px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Office = styled.div`
  ${RalewaySemiBoldTundora17px}
  position: absolute;
  width: 53px;
  top: 350px;
  left: 423px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Information11 = styled.img`
  position: absolute;
  width: 33px;
  height: 33px;
  top: 155px;
  left: 526px;
  object-fit: cover;
`;

const Rectangle12 = styled.div`
  position: absolute;
  width: 212px;
  height: 166px;
  top: 154px;
  left: 570px;
  background-color: var(--log-cabin);
  border-radius: 20px;
`;

const ThisWillBeYourNe = styled.p`
  position: absolute;
  top: 189px;
  left: 591px;
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--white);
  font-size: 14px;
  letter-spacing: 0;
`;

export default CreateWalletPhraseDesktop22;
