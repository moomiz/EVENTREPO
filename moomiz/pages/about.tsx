import React from 'react';
import { styled } from "styled-components";
import IntroComponent from '@/components/Main/IntroComponent';
import ProfileComponent from '@/components/about/ProfileComponent';

function about() {
  return (
    <Wrapper>
      <IntroComponent />
      <ProfileComponent />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  /* font-weight: 800;
  font-size: 128px; */
`


export default about
