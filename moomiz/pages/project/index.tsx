import React from 'react';
import { styled } from "styled-components";
import Image from "next/image";
import first from "@/public/firstcloud.png";
import second from "@/public/secondcloud.png";
import ProjectComponent from '@/components/project/ProjectComponent';

function project() {
  return (
    <Wrapper>
      <ProjectComponent />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  font-weight: 800;
  font-size: 128px;
  padding-top: 7.5%;
`


export default project