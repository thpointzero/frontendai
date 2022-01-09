import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RalewaySemiBoldBlack40px,
  RalewaySemiBoldBlueberry24px,
  RalewayNormalBlack15px,
  RalewaySemiBoldBlack20px,
  RalewayMediumWhite22px,
  RalewayNormalBlack24px,
  RalewayNormalBlack17px,
} from "../../styledMixins";
import "./TH0ActivitiesDesktop.css";

function TH0ActivitiesDesktop(props) {
  const {
    participant_Headshot2RemovebgPrevie,
    yourDashboard,
    activities,
    logout,
    logout1,
    applyForSomeActiv,
    hackathons,
    hackathonsAreTheN,
    view,
    icons051,
    mentorship,
    weUtiliseOurNetwo,
    view2,
    icons071,
    skillsExchange,
    everyoneHasASkill,
    view3,
    icons091,
    incubator,
    weReachOutToOur,
    view4,
    icons061,
    image,
    partnerWithUs,
    hackathonsAreTheN2,
    view5,
    businessZone,
    participantsAreOur,
    view6,
    icons111,
    image2,
    referral,
    hackathonsAreTheN3,
    view7,
    hiringZone,
    freeVacancyAndPor,
    view8,
    icons101,
    image3,
    shareOnSocial,
    hackathonsAreTheN4,
    view9,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="th-0-activities-desktop screen">
        <FlexCol>
          <FlexRow>
            <ParticipantHeadshot2RemovebgPreview src={participant_Headshot2RemovebgPrevie} />
            <Link to="/reward-dashboard-desktop-2">
              <YourDashboard>{yourDashboard}</YourDashboard>
            </Link>
            <Activities>{activities}</Activities>
            <Link to="/log-into-your-account-desktop">
              <Group21>
                <Logout>{logout}</Logout>
                <Logout1 src={logout1} />
              </Group21>
            </Link>
          </FlexRow>
          <ApplyForSomeActiv>{applyForSomeActiv}</ApplyForSomeActiv>
          <OverlapGroupContainer>
            <OverlapGroup14>
              <OverlapGroup1>
                <Hackathons>{hackathons}</Hackathons>
                <HackathonsAreTheN>{hackathonsAreTheN}</HackathonsAreTheN>
                <OverlapGroup>
                  <View>{view}</View>
                </OverlapGroup>
              </OverlapGroup1>
              <Icons051 src={icons051} />
            </OverlapGroup14>
            <OverlapGroup10>
              <OverlapGroup4>
                <Mentorship>{mentorship}</Mentorship>
                <WeUtiliseOurNetwo>{weUtiliseOurNetwo}</WeUtiliseOurNetwo>
                <OverlapGroup2>
                  <View>{view2}</View>
                </OverlapGroup2>
              </OverlapGroup4>
              <Icons071 src={icons071} />
            </OverlapGroup10>
            <OverlapGroup13>
              <OverlapGroup7>
                <SkillsExchange>{skillsExchange}</SkillsExchange>
                <EveryoneHasASkill>{everyoneHasASkill}</EveryoneHasASkill>
                <OverlapGroup3>
                  <View>{view3}</View>
                </OverlapGroup3>
              </OverlapGroup7>
              <Icons091 src={icons091} />
            </OverlapGroup13>
          </OverlapGroupContainer>
        </FlexCol>
        <FlexRow1>
          <OverlapGroupContainer1>
            <OverlapGroup15>
              <OverlapGroup21>
                <Incubator>{incubator}</Incubator>
                <WeReachOutToOur>{weReachOutToOur}</WeReachOutToOur>
                <OverlapGroup5>
                  <View>{view4}</View>
                </OverlapGroup5>
              </OverlapGroup21>
              <Icons061 src={icons061} />
            </OverlapGroup15>
            <OverlapGroup31>
              <OverlapGroup11>
                <Image>{image}</Image>
              </OverlapGroup11>
              <PartnerWithUs>{partnerWithUs}</PartnerWithUs>
              <HackathonsAreTheN1>{hackathonsAreTheN2}</HackathonsAreTheN1>
              <OverlapGroup6>
                <View>{view5}</View>
              </OverlapGroup6>
            </OverlapGroup31>
          </OverlapGroupContainer1>
          <OverlapGroupContainer2>
            <OverlapGroup15>
              <OverlapGroup51>
                <BusinessZone>{businessZone}</BusinessZone>
                <ParticipantsAreOur>{participantsAreOur}</ParticipantsAreOur>
                <OverlapGroup8>
                  <View>{view6}</View>
                </OverlapGroup8>
              </OverlapGroup51>
              <Icons111 src={icons111} />
            </OverlapGroup15>
            <OverlapGroup61>
              <OverlapGroup11>
                <Image>{image2}</Image>
              </OverlapGroup11>
              <Referral>{referral}</Referral>
              <HackathonsAreTheN1>{hackathonsAreTheN3}</HackathonsAreTheN1>
              <OverlapGroup9>
                <View>{view7}</View>
              </OverlapGroup9>
            </OverlapGroup61>
          </OverlapGroupContainer2>
          <OverlapGroupContainer3>
            <OverlapGroup12>
              <OverlapGroup81>
                <HiringZone>{hiringZone}</HiringZone>
                <FreeVacancyAndPor>{freeVacancyAndPor}</FreeVacancyAndPor>
                <OverlapGroup16>
                  <View>{view8}</View>
                </OverlapGroup16>
              </OverlapGroup81>
              <Icons101 src={icons101} />
            </OverlapGroup12>
            <OverlapGroup91>
              <OverlapGroup11>
                <Image>{image3}</Image>
              </OverlapGroup11>
              <ShareOnSocial>{shareOnSocial}</ShareOnSocial>
              <HackathonsAreTheN1>{hackathonsAreTheN4}</HackathonsAreTheN1>
              <OverlapGroup17>
                <View>{view9}</View>
              </OverlapGroup17>
            </OverlapGroup91>
          </OverlapGroupContainer3>
        </FlexRow1>
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 1196px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 756px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 1196px;
`;

const ParticipantHeadshot2RemovebgPreview = styled.img`
  width: 102px;
  height: 102px;
  object-fit: cover;
`;

const YourDashboard = styled.div`
  ${RalewayNormalBlack24px}
  min-height: 28px;
  margin-left: 613px;
  margin-top: 2px;
  min-width: 177px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Activities = styled.div`
  ${RalewaySemiBoldBlueberry24px}
  min-height: 28px;
  margin-left: 38px;
  margin-top: 2px;
  min-width: 104px;
  letter-spacing: 0;
`;

const Group21 = styled.div`
  margin-left: 34px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  min-width: 128px;
  cursor: pointer;
`;

const Logout = styled.div`
  ${RalewayNormalBlack24px}
  min-height: 28px;
  min-width: 80px;
  letter-spacing: 0;
`;

const Logout1 = styled.img`
  width: 42px;
  height: 42px;
  margin-left: 4px;
  object-fit: cover;
`;

const ApplyForSomeActiv = styled.div`
  ${RalewaySemiBoldBlack40px}
  min-height: 104px;
  align-self: center;
  margin-top: 78px;
  margin-left: 23px;
  min-width: 571px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroupContainer = styled.div`
  margin-top: 58px;
  margin-right: 7px;
  display: flex;
  align-items: flex-end;
  min-width: 1158px;
`;

const OverlapGroup14 = styled.div`
  width: 354px;
  height: 396px;
  position: relative;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 400px;
  top: -21px;
  left: -25px;
  display: flex;
  flex-direction: column;
  padding: 62px 51px;
  align-items: center;
  min-height: 446px;
  background-image: url(/img/register-button-6@2x.svg);
  background-size: 100% 100%;
`;

const Hackathons = styled.div`
  ${RalewaySemiBoldBlack20px}
  min-height: 23px;
  margin-top: 89px;
  margin-left: 3px;
  min-width: 113px;
  text-align: center;
  letter-spacing: 0;
`;

const HackathonsAreTheN = styled.p`
  ${RalewayNormalBlack15px}
  min-height: 102px;
  align-self: flex-end;
  margin-top: 14px;
  min-width: 297px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 54px;
  margin-top: 40px;
  margin-right: 1px;
  display: flex;
  padding: 15px 87px;
  align-items: flex-start;
  min-width: 225px;
  background-image: url(/img/rectangle-1-8@2x.svg);
  background-size: 100% 100%;
`;

const View = styled.div`
  ${RalewayMediumWhite22px}
  min-height: 22px;
  min-width: 51px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Icons051 = styled.img`
  position: absolute;
  width: 130px;
  height: 132px;
  top: 0;
  left: 112px;
  object-fit: cover;
`;

const OverlapGroup10 = styled.div`
  width: 354px;
  height: 414px;
  position: relative;
  margin-left: 48px;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 400px;
  top: -3px;
  left: -25px;
  display: flex;
  flex-direction: column;
  padding: 62px 46px;
  align-items: flex-end;
  min-height: 446px;
  background-image: url(/img/register-button-9@2x.svg);
  background-size: 100% 100%;
`;

const Mentorship = styled.div`
  ${RalewaySemiBoldBlack20px}
  min-height: 23px;
  align-self: center;
  margin-top: 89px;
  margin-left: 3px;
  min-width: 107px;
  text-align: center;
  letter-spacing: 0;
`;

const WeUtiliseOurNetwo = styled.p`
  ${RalewayNormalBlack15px}
  min-height: 102px;
  margin-top: 14px;
  min-width: 307px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  height: 54px;
  margin-top: 40px;
  margin-right: 42px;
  display: flex;
  padding: 15px 87px;
  align-items: flex-start;
  min-width: 225px;
  background-image: url(/img/rectangle-1-11@2x.svg);
  background-size: 100% 100%;
`;

const Icons071 = styled.img`
  position: absolute;
  width: 190px;
  height: 168px;
  top: 0;
  left: 80px;
  object-fit: cover;
`;

const OverlapGroup13 = styled.div`
  width: 354px;
  height: 413px;
  position: relative;
  margin-left: 48px;
`;

const OverlapGroup7 = styled.div`
  position: absolute;
  width: 400px;
  top: -4px;
  left: -25px;
  display: flex;
  flex-direction: column;
  padding: 62px 0;
  align-items: center;
  min-height: 446px;
  background-image: url(/img/register-button-12@2x.svg);
  background-size: 100% 100%;
`;

const SkillsExchange = styled.div`
  ${RalewaySemiBoldBlack20px}
  min-height: 23px;
  margin-top: 89px;
  margin-left: 2px;
  min-width: 148px;
  text-align: center;
  letter-spacing: 0;
`;

const EveryoneHasASkill = styled.p`
  ${RalewayNormalBlack15px}
  min-height: 102px;
  margin-top: 14px;
  min-width: 296px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  height: 54px;
  margin-top: 40px;
  margin-right: 1px;
  display: flex;
  padding: 15px 87px;
  align-items: flex-start;
  min-width: 225px;
  background-image: url(/img/rectangle-1-14@2x.svg);
  background-size: 100% 100%;
`;

const Icons091 = styled.img`
  position: absolute;
  width: 174px;
  height: 166px;
  top: 0;
  left: 89px;
  object-fit: cover;
`;

const FlexRow1 = styled.div`
  height: 863px;
  align-self: center;
  margin-top: 57px;
  margin-left: 2px;
  display: flex;
  align-items: flex-end;
  min-width: 1160px;
`;

const OverlapGroupContainer1 = styled.div`
  width: 356px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 861px;
`;

const OverlapGroup15 = styled.div`
  width: 354px;
  height: 401px;
  position: relative;
`;

const OverlapGroup21 = styled.div`
  position: absolute;
  width: 400px;
  top: -16px;
  left: -25px;
  display: flex;
  flex-direction: column;
  padding: 62px 0;
  align-items: center;
  min-height: 446px;
  background-image: url(/img/register-button-7@2x.svg);
  background-size: 100% 100%;
`;

const Incubator = styled.div`
  ${RalewaySemiBoldBlack20px}
  min-height: 23px;
  margin-top: 89px;
  margin-left: 2px;
  min-width: 92px;
  text-align: center;
  letter-spacing: 0;
`;

const WeReachOutToOur = styled.p`
  ${RalewayNormalBlack15px}
  min-height: 102px;
  margin-top: 14px;
  min-width: 320px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  height: 54px;
  margin-top: 40px;
  margin-right: 1px;
  display: flex;
  padding: 15px 87px;
  align-items: flex-start;
  min-width: 225px;
  background-image: url(/img/rectangle-1-9@2x.svg);
  background-size: 100% 100%;
`;

const Icons061 = styled.img`
  position: absolute;
  width: 145px;
  height: 140px;
  top: 0;
  left: 102px;
  object-fit: cover;
`;

const OverlapGroup31 = styled.div`
  width: 400px;
  margin-top: 43px;
  margin-left: -25px;
  display: flex;
  flex-direction: column;
  padding: 39px 0;
  align-items: center;
  min-height: 446px;
  background-image: url(/img/register-button-8@2x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup11 = styled.div`
  height: 96px;
  margin-left: 2px;
  display: flex;
  padding: 0 12px;
  justify-content: flex-end;
  align-items: center;
  min-width: 96px;
  background-color: var(--mist-gray);
`;

const Image = styled.div`
  ${RalewayNormalBlack24px}
  min-height: 28px;
  min-width: 71px;
  text-align: center;
  letter-spacing: 0;
`;

const PartnerWithUs = styled.div`
  ${RalewaySemiBoldBlack20px}
  min-height: 23px;
  margin-top: 16px;
  margin-left: 2px;
  min-width: 142px;
  text-align: center;
  letter-spacing: 0;
`;

const HackathonsAreTheN1 = styled.div`
  ${RalewayNormalBlack17px}
  min-height: 110px;
  margin-top: 14px;
  min-width: 290px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup6 = styled.div`
  height: 54px;
  margin-top: 32px;
  margin-right: 1px;
  display: flex;
  padding: 15px 87px;
  align-items: flex-start;
  min-width: 225px;
  background-image: url(/img/rectangle-1-10@2x.svg);
  background-size: 100% 100%;
`;

const OverlapGroupContainer2 = styled.div`
  width: 356px;
  margin-left: 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 861px;
`;

const OverlapGroup51 = styled.div`
  position: absolute;
  width: 400px;
  top: -16px;
  left: -25px;
  display: flex;
  flex-direction: column;
  padding: 62px 0;
  align-items: center;
  min-height: 446px;
  background-image: url(/img/register-button-10@2x.svg);
  background-size: 100% 100%;
`;

const BusinessZone = styled.div`
  ${RalewaySemiBoldBlack20px}
  min-height: 23px;
  margin-top: 89px;
  margin-left: 3px;
  min-width: 137px;
  text-align: center;
  letter-spacing: 0;
`;

const ParticipantsAreOur = styled.p`
  ${RalewayNormalBlack15px}
  min-height: 102px;
  margin-top: 14px;
  min-width: 292px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup8 = styled.div`
  height: 54px;
  margin-top: 40px;
  margin-right: 1px;
  display: flex;
  padding: 15px 87px;
  align-items: flex-start;
  min-width: 225px;
  background-image: url(/img/rectangle-1-12@2x.svg);
  background-size: 100% 100%;
`;

const Icons111 = styled.img`
  position: absolute;
  width: 136px;
  height: 138px;
  top: 0;
  left: 109px;
  object-fit: cover;
`;

const OverlapGroup61 = styled.div`
  width: 400px;
  margin-top: 43px;
  margin-left: -25px;
  display: flex;
  flex-direction: column;
  padding: 39px 0;
  align-items: center;
  min-height: 446px;
  background-image: url(/img/register-button-11@2x.svg);
  background-size: 100% 100%;
`;

const Referral = styled.div`
  ${RalewaySemiBoldBlack20px}
  min-height: 23px;
  margin-top: 16px;
  margin-left: 2px;
  min-width: 76px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup9 = styled.div`
  height: 54px;
  margin-top: 32px;
  margin-right: 1px;
  display: flex;
  padding: 15px 87px;
  align-items: flex-start;
  min-width: 225px;
  background-image: url(/img/rectangle-1-13@2x.svg);
  background-size: 100% 100%;
`;

const OverlapGroupContainer3 = styled.div`
  width: 356px;
  margin-left: 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 863px;
`;

const OverlapGroup12 = styled.div`
  width: 354px;
  height: 403px;
  position: relative;
`;

const OverlapGroup81 = styled.div`
  position: absolute;
  width: 400px;
  top: -14px;
  left: -25px;
  display: flex;
  flex-direction: column;
  padding: 62px 0;
  align-items: center;
  min-height: 446px;
  background-image: url(/img/register-button-13@2x.svg);
  background-size: 100% 100%;
`;

const HiringZone = styled.div`
  ${RalewaySemiBoldBlack20px}
  min-height: 23px;
  margin-top: 89px;
  margin-left: 2px;
  min-width: 110px;
  text-align: center;
  letter-spacing: 0;
`;

const FreeVacancyAndPor = styled.p`
  ${RalewayNormalBlack15px}
  min-height: 102px;
  margin-top: 14px;
  min-width: 304px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup16 = styled.div`
  height: 54px;
  margin-top: 40px;
  margin-right: 1px;
  display: flex;
  padding: 15px 87px;
  align-items: flex-start;
  min-width: 225px;
  background-image: url(/img/rectangle-1-15@2x.svg);
  background-size: 100% 100%;
`;

const Icons101 = styled.img`
  position: absolute;
  width: 162px;
  height: 144px;
  top: 0;
  left: 94px;
  object-fit: cover;
`;

const OverlapGroup91 = styled.div`
  width: 400px;
  margin-top: 43px;
  margin-left: -25px;
  display: flex;
  flex-direction: column;
  padding: 39px 0;
  align-items: center;
  min-height: 446px;
  background-image: url(/img/register-button-14@2x.svg);
  background-size: 100% 100%;
`;

const ShareOnSocial = styled.div`
  ${RalewaySemiBoldBlack20px}
  min-height: 23px;
  margin-top: 16px;
  margin-left: 3px;
  min-width: 147px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup17 = styled.div`
  height: 54px;
  margin-top: 32px;
  margin-right: 1px;
  display: flex;
  padding: 15px 87px;
  align-items: flex-start;
  min-width: 225px;
  background-image: url(/img/rectangle-1-16@2x.svg);
  background-size: 100% 100%;
`;

export default TH0ActivitiesDesktop;
