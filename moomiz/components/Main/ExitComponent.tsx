import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import confetti from 'canvas-confetti';

function ExitComponent() {
    const sentence = '당신은 티로보를 탈출 하셨습니다 -!'
    const texts = Array.from(sentence)

    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }


    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
    return (
        <Wrapper>
            <TextLine>
                {texts.map((text, index) => (
                    <Text key={index} delay={`${index * 100}ms`} >{text}</Text>
                ))
                }
            </TextLine>
        </Wrapper>
    )
}

export default ExitComponent

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

const Text = styled.span<{ delay: string }>`
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
  color: black;
`;