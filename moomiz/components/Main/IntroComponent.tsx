import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

interface quiz {
  question: string[];
  answer: string[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function IntroComponent({ question, answer, page, setPage }: quiz) {
  const [texts, setTexts] = useState(Array.from(question[page - 1]));

  useEffect(() => {
    // page가 변경될 때마다 새로운 문제 텍스트를 설정
    setTexts(Array.from(question[page - 1]));
  }, [page, question]);

  const [answerBox, setAnswerBox] = useState("");
  const viewProblem: { [key: string]: string[] } = {
    "1": ["더 퍼스트 타워", "제 2 테크노 벨리", "봇봇봇", "지곶동"],
    "2": ["해린", "재현", "현태", "민지"],
    "3": ["스키", "스노우보드", "겨울 등산", "눈사람 만들기"], // 예시로 추가
    "4": ["땡구", "멍구", "친구", "핑구"],
    "5": ["말라리아", "갤러리아", "롯데리아", "샐러디아"],
    "6": ["출근", "개발", "캘리브레이션", "야근"],
    "7": ["3년차", "6년차", "9년차", "12년차"],
    // 다른 page에 따른 선택지도 추가 가능
  };

  const colors = ["#FF8A80", "#80D8FF", "#d4c83c", "#84C539"];

  const answerHandler = (view: string) => {
    if (view == answer[page - 1]) {
      setPage(page + 1);
    } else {

    }
  };

  const getColor = (page: number) => {
    const colorValue = Math.max(0, 255 - page * 30); // 페이지에 따라 색상 값 조정
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`; // 검은색으로 어두워짐
  }

  return (
    <Wrapper>
      <TextLine key={page}>
        {" "}
        {/* page가 변경될 때마다 새롭게 렌더링되도록 key 추가 */}
        {texts.map((text, index) => (
          <Text key={index} delay={`${index * 100}ms`} textColor={getColor(page)}>
            {text}
          </Text>
        ))}
      </TextLine>
      <BtnComponent>
        {viewProblem[page.toString()]?.map((view, index) => (
          <Btn
            key={index}
            onClick={() => answerHandler(view)}
            bgColor={colors[index % colors.length]}
          >
            {view}
          </Btn>
        ))}
      </BtnComponent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: Pretendard-Regular;
  font-weight: 600;
  font-size: 32px;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const TextLine = styled.div`
  animation: fade 3s ease-in-out;
  animation-fill-mode: forwards;
  @keyframes fade {
    /* 효과를 동작시간 동안 0 ~ 1까지 */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Text = styled.span<{ delay: string, textColor: string }>`
  font-family: Pretendard-Regular;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
  animation-delay: ${(props) => props.delay};
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  color: ${({ textColor }) => textColor};
`;

const BtnComponent = styled.div`
  display: flex;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
`;

const Btn = styled.div<{ bgColor: string }>`
  display: flex;
  width: 20vw;
  height: 7vh;
  background-color: ${(props) => props.bgColor};
  border-radius: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 5vh;
  font-size: 18px;
`;

export default IntroComponent;
