import React from 'react'
import { styled } from "styled-components"
import Image from "next/image"
import heart from "@/public/heart.png"
import star from "@/public/star.png"
import cloud from "@/public/cloud.png"
import clover from "@/public/clover.png"

function PaperComponents() {
    return (<Wrapper>
        <Image
            className='heart'
            src={heart}
            alt='하트'
            width={240}
            height={234}
        />
        <Image
            className='star'
            src={star}
            alt='별'
            width={120}
            height={117}
        />
        <div>지은 선임님 ♥</div>
        <Image
            className='cloud'
            src={cloud}
            alt='구름'
            width={240}
            height={234}
        />
        <Image
            className='clover'
            src={clover}
            alt='클로버'
            width={240}
            height={234}
        />
    </Wrapper>
    )
}

const Wrapper = styled.div`
  scroll-snap-align: start;
  display: flex;
  height: 100vh;
  justify-content:space-evenly;
  align-items: center;
  flex-direction: column;


  img{
    
    
      /* animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
      animation-iteration-count: 4; */
    position: absolute;
    top:0;
    left: 0;
  }
  .heart {
    animation: bounce_frames 1.4s infinite;
    animation-direction: alternate;
    top: 20%;
    left: 10%;
  }
  .star{
    animation: bounce_frames 1.2s infinite;
    animation-direction: alternate;
    top: 50%;
    left: 75%;
  }
  .clover{
    animation: bounce_frames 1s infinite;
    animation-direction: alternate;
    top:65%;
    left: 32%;
  }
  .cloud {
    animation: bounce_frames 1.6s infinite;
    animation-direction: alternate;
    top:10%;
    left: 50%;
  }
  @keyframes bounce_frames {
      from {transform: translate3d(0, 0, 0);}
      to {transform: translate3d(0, 50px, 0);}
    }

  `

export default PaperComponents