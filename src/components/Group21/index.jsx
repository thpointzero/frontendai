import React from "react";
import styled from "styled-components";
import { RalewayNormalBlack24px } from "../../styledMixins";


function Group21(props) {
  const { className } = props;

  return (
    <Group211 className={`group-21-1 ${className || ""}`}>
      <Logout className="logout-2">Logout</Logout>
      <Logout1 className="logout-1-1" src="/img/logout-1@2x.png" />
    </Group211>
  );
}

const Group211 = styled.div`
  position: absolute;
  height: 42px;
  top: 79px;
  left: 1178px;
  display: flex;
  align-items: center;
  min-width: 128px;

  &.group-21-1.group-21-2 {
    left: 1167px;
  }
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

export default Group21;
