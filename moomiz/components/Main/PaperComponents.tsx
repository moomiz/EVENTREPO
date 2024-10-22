import React, { use, useState } from 'react'
import { styled } from "styled-components"
import Image from "next/image"
import heart from "@/public/heart.png"
import star from "@/public/star.png"
import cloud from "@/public/cloud.png"
import clover from "@/public/clover.png"
import ballon from "@/public/ballon.png"
import gift from "@/public/gift.png"
import Swal from 'sweetalert2'
import Modal from './Modal'
import confetti from 'canvas-confetti'


function PaperComponents() {
    const hr_msg = '선임님!! ㅎㅎ 정말 의외로 가장 먼저 탈출하시는 분이 지은 선임님이시라니.. 아쉬운 마음이 너무너무너무!!크지만.. 그래도 웃으면서 보내드려야겠죠?ㅎㅎ 입사 초반부터 잘 챙겨주시구.. 크게 티나지 않을 곳 까지 먼저 움직이시는거 보면서 많이 감사했고 또 많이 배웠습니다. 첫 회사에서 선임님같은 분을 만날 수 있어서, 직장 상사로서두 그리고 사회생활 선배님으로서도 너무 영광이었어요 ㅎㅎ 그만큼 선임님께서는 신경쓰실 부분도 많고 손 가는 부분도 많아서 번거로우셨을텐데 늘 웃는 얼굴로 따뜻하게 대해주셔서 참 감사해요,, 이게 진짜 매일 웃기가 정말 어려운거라구 갈수록 실감과 동시에 선임님을 존경하는 마음이 막 .. ㅎㅎ 생깁니다!! 늘 뭐든 열정있게!! 밝게!! 하시는 모습 이제 못본다고 생각하니 쬐금..(사실은 꽤나 많이...) 슬프지만 그래두!! 섭섭은 남은 사람들이 할테니 선임님께서는 시원한 마음으로 지내시길 소망합니다 ㅎㅎ!! 선임님은 그런 에너지를 지니신 분이니, 분명 좋은 일들 가득하실거에요! 당분간은 자주 생각날 것 같은데,, 늘 잘 지내셔야해요♥ 날이 많이 춥던데.. 따뜻한 응원을 가득담아 메시지 남깁니다!! 행복하세용 많이요 ,,,, 🩷'
    const mj_msg = '지은 선임님🍀  항상 보기만 해도 기분 좋아지는 선임님이셨는데! 먼저 떠나실 거라고는 상상을 못했나봐요. 처음에 들었을 때 너무너무 놀래서 심란했었는데.. 시간이 너무 빨리 가는지 수요일이 마지막 출근 날이라는게 부러우면서도 섭섭하네요 😭 회사에 올 이유가 하나 사라지게 된 이 마음... 그래도 선임님은 뒤도 돌아보지 마시고 시원하게 떠나십쇼!! 쉽지 않은 첫 회사 생활이였지만 선임님과 함께 하면서 너무 행복했습니다! 주소에 happy 보이시나용? 항상 행복을 주셨던 선임님께 드리는 저희 개발팀의 작은 행복 입니다🥰앞으로도 항상 행복하시길 바라며🫶'
    const ht_msg = '선임님! 업무로 바쁘신 와중에도 항상 친절하고 밝은 에너지로 챙겨주셔서 첫 회사 생활 적응에 큰 힘이 되었고, 많은 것을 배울 수 있었습니다. 잦은 출장 생활을 하면서 사소한 불편함까지 신경써주시는 배려 덕분에 더욱 잘 지낼 수 있었기에 항상 감사했습니다 :) 퇴사 소식이 개인적으로는 아쉬울 따름이지만, 항상 건강하시고, 앞으로의 길에 좋은 일들만 가득하시길 기원합니다. 앞으로도 계속 응원하겠습니다!'
    const jh_msg = '선임님, 박재현 사원입니다! 선임님과의 새로웠던 인연을 기념하며 이렇게 타자를 쳐봅니다! 저는 선임님하면 떠오르는 생각은 사원들뿐만 아니라 주변을 잘 챙겨주는 어머니 같다는 생각이네요.그 덕분에 저희 회사 생활에 포근함이 더해졌고 하루하루 지나가는데에 도움이 많이 되었다고 생각해요. 특히, 파주에서 한번씩 저희들을 걱정하고 응원해주시는게 정말 힘이 되었어요. 저는 믿고 있어요. 앞으로도 주변을 따뜻하게 해주는 에너지를 가지신 선임님에게 좋은일이 가득할거라고! 또 언젠가 인연이 되어 뵈었음 좋겠네요! 약속했던 레몬커드도 꼭 받아주세요!항상 감사해요!'
    const ym_msg = '사랑하는 나의 지은 선임님~~~~~~🩵선임님을 떠나 보낼 생각에 정말 너무 마음이 아파요,,,,, 아니 떠나보낼 수 없어,,,,,,,,,그래도 선임님을 위한 길이 무엇임을 잘 알기에 눈물 흘리며 보내드려요 선임님,,,,,, 할 말 너무 너무 많은데 이건 롤링페이퍼니까 따로 제 마음을 전할게요🤧선임님~~ 저희팀에 그리고 제게 와주셔서 감사했습니다🌷🩷 밝고 화사한 선임님이 계셔서 힘든 순간들도 잘 이겨낼 수 있었고 재밌게 잘 지낼 수 있었던 것 같아요! 회사 동료로는 여기까지겠지만 우리 밖에서 계속 따로 볼거니깐!!!!!🩵 회사 싫긴 싫은데,,,, 그래도 선임님이라는 귀한 인연을 만나게 해줬으니 그것만으로 회사에 절하면서 잘 버텨볼게요!!!!! 선임님 그동안 정말 고생 많으셨습니다~~~ 지은 is free'
    const sh_msg = '작년 5월에 입사하셔서 1년 반을 함께 동고동락했는데 이렇게 갑작스럽게 퇴사를 하시게 되어 유감스럽고 아쉬움이 많이 남습니다.언제나 밝고 긍적적이신 선임님 덕분에 침울했던 직장생활에 활력이 넘쳤던 것 같고, 개인적으로 힘들었던 일들, 회사 생활에서의 고충들도 잘 이겨낼 수 있었습니다. 저도 선임님에게 그런 좋은 친구였길 바래봅니다. 그 동안 고생 많으셨어요.가족들과 행복한 시간 보내시고 나중에 또 기회가 된다면 꼭 좋은 회사에서 같이 일할 수 있었으면 좋겠습니다. 종종 연락드릴게요!'

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [msg, setMsg] = useState('')
    const [name, setName] = useState('')
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;


    const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        var timeLeft = animationEnd - Date.now();
        var ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: (Math.random() * skew) - 0.2
            },
            colors: ['#fafffa'],
            shapes: ['circle'],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4)
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }());


    const msgHandler = (img: string) => {
        setIsModalOpen(true)
        switch (img) {
            case 'heart':
                setMsg(mj_msg)
                setName('민지')
                break
            case 'star':
                setMsg(jh_msg)
                setName('재현')
                break
            case 'cloud':
                setMsg(ht_msg)
                setName('현태')
                break
            case 'clover':
                setMsg(hr_msg)
                setName('해린')
                break
            case 'ballon':
                setMsg(sh_msg)
                setName('성환')
                break
            case 'gift':
                setMsg(ym_msg)
                setName('영민')
                break

        }
    }

    return (<Wrapper>
        <Modal isOpen={isModalOpen} onClose={closeModal} name={name}>
            {msg}
        </Modal>
        <Image
            className='heart'
            src={heart}
            alt='하트'
            width={240}
            height={234}
            onClick={() => msgHandler('heart')}
        />
        <Image
            className='star'
            src={star}
            alt='별'
            width={240}
            height={234}
            onClick={() => msgHandler('star')}
        />
        <Image
            className='ballon'
            src={ballon}
            alt='ballon'
            width={340}
            height={450}
            onClick={() => msgHandler('ballon')}
        />
        <Title>지은 is free♥</Title>
        <Image
            className='cloud'
            src={cloud}
            alt='구름'
            width={240}
            height={234}
            onClick={() => msgHandler('cloud')}
        />
        <Image
            className='gift'
            src={gift}
            alt='gift'
            width={240}
            height={234}
            onClick={() => msgHandler('gift')}
        />
        <Image
            className='clover'
            src={clover}
            alt='클로버'
            width={240}
            height={234}
            onClick={() => msgHandler('clover')}
        />
    </Wrapper>
    )
}

const modalWrapper = styled.div`
    width: 60vw;
    height: 50vw;
`

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
    top: 80%;
    left: 70%;
  }
  .clover{
    animation: bounce_frames 1s infinite;
    animation-direction: alternate;
    top:65%;
    left: 12%;
  }
  .cloud {
    animation: bounce_frames 1.6s infinite;
    animation-direction: alternate;
    top:10%;
    left: 50%;
  }
  .gift {
    animation: bounce_frames 1.8s infinite;
    animation-direction: alternate;
    top:6%;
    left: 30%;
  }
  .ballon {
    animation: bounce_frames 1.3s infinite;
    animation-direction: alternate;
    top:5%;
    left: 80%;
  }
  @keyframes bounce_frames {
      from {transform: translate3d(0, 0, 0);}
      to {transform: translate3d(0, 50px, 0);}
    }

  `
const Title = styled.div`
font-weight: 800;
font-size:100px;
margin: 1rem;
font-family:PilseungGothic;
color: #0a0406;
/* text-shadow: #1b1b1b; */
text-shadow: 4px 4px 4px gray;
font-weight: normal;
font-style: normal;
`;

const Sub = styled.div`
font-weight: 600;
font-size:50px;
/* margin: 0.2rem; */
color: #0a0406;
/* text-shadow: #1b1b1b; */
text-shadow: 4px 4px 4px gray;
font-weight: normal;
font-style: normal;
`
export default PaperComponents