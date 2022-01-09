import React from "react";
import styled from "styled-components";
import { RalewaySemiBoldBlack17px, RalewaySemiBoldBlack15px } from "../../styledMixins";


function Group35(props) {
  const { className } = props;

  return (
    <Group351 className={`group-35 ${className || ""}`}>
      <Badge1 className="badge-1-1" src="/img/badge-1@2x.png" />
      <HackerBadge className="hacker-badge-1">Hacker Badge</HackerBadge>
      <ClickToView className="click-to-view-4">Click to view</ClickToView>
    </Group351>
  );
}

const Group351 = styled.div`
  position: absolute;
  width: 118px;
  top: 481px;
  left: 163px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 152px;

  &.group-35.group-36 {
    left: 424px;
  }

  &.group-35.group-37 {
    left: 684px;
  }

  &.group-35.group-38 {
    left: 945px;
  }
`;

const Badge1 = styled.img`
  width: 74px;
  height: 74px;
  margin-right: 2px;
  object-fit: cover;
`;

const HackerBadge = styled.div`
  ${RalewaySemiBoldBlack17px}
  min-height: 20px;
  margin-top: 17px;
  margin-right: 4px;
  min-width: 114px;
  text-align: center;
  letter-spacing: 0;
`;

const ClickToView = styled.div`
  ${RalewaySemiBoldBlack15px}
  min-height: 18px;
  margin-top: 23px;
  margin-right: 4px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
`;

export default Group35;
