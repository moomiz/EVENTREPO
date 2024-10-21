import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import Image from "next/image";
import IntroComponent from "./IntroComponent";

function LogoComponent() {
  const [page, setPage] = useState<number>(0);
  const question = [
    "세교 사무실 건물 이름은?",
    "개발1팀의 막내는 누구일까요?",
    "심 본부장님의 겨울 취미는?",
    "대표님 첫째 아드님의 이름은?",
    "재현이가 가장 좋아하는 판교 배달 음식은? ",
    "개발팀이 가장 싫어하는 업무는?",
    "이영민 선임은 24년 10월 기준 몇 년차 일까요?",
  ];

  const answer = [
    "더 퍼스트 타워",
    "민지",
    "스키",
    "멍구",
    "샐러디아",
    "캘리브레이션",
    "6년차",
  ];

  return (
    <Wrapper>
      {page == 0 && (
        <>
          <TitleContainer>
            <Title className="Endeavoring">티로보 대탈출</Title>
          </TitleContainer>
          <Btn onClick={() => setPage(1)}>start</Btn>
        </>
      )}
      {page >0 && page < 8 && (
        <>
          <IntroComponent
            question={question}
            answer={answer}
            page={page}
            setPage={setPage}
          />
        </>
      )}
      {page == 8 && (
        <>
          <div>탈출</div>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  scroll-snap-align: start;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;


  img {
    /* animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
      animation-iteration-count: 4; */
    position: absolute;
    top: 0;
    left: 0;
  }
  .heart {
    animation: bounce_frames 1.4s infinite;
    animation-direction: alternate;
    top: 20%;
    left: 10%;
  }
  .star {
    animation: bounce_frames 1.2s infinite;
    animation-direction: alternate;
    top: 50%;
    left: 75%;
  }
  .clover {
    animation: bounce_frames 1s infinite;
    animation-direction: alternate;
    top: 65%;
    left: 32%;
  }
  .cloud {
    animation: bounce_frames 1.6s infinite;
    animation-direction: alternate;
    top: 10%;
    left: 50%;
  }
  @keyframes bounce_frames {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 50px, 0);
    }
  }
`;

const Btn = styled.div`
  display: flex;
  width: 20vw;
  height: 10vh;
  background-color: pink;
  border-radius: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 5vh;
  font-family: Cafe24ClassicType-Regular;
  font-size: 4vh;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const TextList = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  position: relative;
  top: -250px;
`;
const Text = styled.div`
  width: 150px;
  height: 150px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding-left: 2%;
  bottom: 50%;
  width: 100%;
  .right {
    margin-left: 60%;
  }
  animation: fadein 3s;
  animation-fill-mode: forwards;
  @keyframes fadein {
    /* 효과를 동작시간 동안 0 ~ 1까지 */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(40%);
    }
  }
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 98px;
  margin: 1rem;
  font-family: Cafe24ClassicType-Regular;
  color: white;
  /* text-shadow: 2px 2px 2px gray; */
  font-weight: normal;
  font-style: normal;
`;
const Point = styled.span`
  color: ${({ theme }) => theme.color.point};
  font-family: Cafe24ClassicType-Regular;
  font-size: 128px;
  text-shadow: 2px 2px 2px gray;
  /* margin-left: 2rem; */
  margin-right: 3rem;
`;

// const Flower = styled.div`
//   width:300px;
//   height: 300px;
//   display: flex;
//   flex-wrap: wrap;
//   z-index: 10;
//   animation: rotate_image 15s linear infinite;transform-origin: 50% 50%;

//   &:hover{
//     animation-play-state: paused;
//   }
//   .flower1:hover{
//     animation: fadeout 1s;
//     animation-fill-mode: forwards;

//   }

//   .flower2 {
//     transform: scaleX(-1);
//   }
//   .flower2:hover{
//     animation: fadeout 1s;
//     animation-fill-mode: forwards;
//   }
//   .flower3 {
//     transform: scaleY(-1);
//   }

//   .flower3:hover{
//     animation: fadeout 1s;
//     animation-fill-mode: forwards;
//   }

//   .flower4:hover{
//     animation: fadeout 1s;
//     animation-fill-mode: forwards;
//   }

//   @keyframes fadeout {
//     0%{
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//   }
//   }
//   @keyframes rotate_image{
//     100% {
//         transform: rotate(360deg);
//     }
//   }
// `
// const Petal = styled.div`

// `

export default LogoComponent;
