import React from 'react'
import styled, { keyframes, css }  from 'styled-components';
import '../../Pages/UserInterface/Userinterface.css'

const MovingComponents = () => {
    const row1 = [
        "https://island.lk/wp-content/uploads/2021/01/peoples.jpg",
        "https://www.news.lk/media/k2/items/cache/f89c4880d9faee7a257938aca270e2f8_L.jpg",
        "https://i.pinimg.com/1200x/f6/46/30/f646307ee26d1a714e1cae84fb58aa49.jpg",
        "https://mir-s3-cdn-cf.behance.net/projects/404/7553a8146213243.Y3JvcCw4MDgsNjMyLDAsMA.png",
        "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_140.png?dlUhQ_ZPceg1EjDu_CyLurBP0bDyVfn8&itok=H2IqZeno",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-mLUAz_nbdGTQXmd_LUr_eq9IfwJHEEA0-mV8HiuYA&s",
        "https://cdn.theorg.com/662c256f-c90b-425c-9d64-733b6e98feb6_medium.jpg",
        "https://i0.wp.com/reviewsrilanka.com/wp-content/uploads/2020/09/nsb-bank-1.jpg?fit=800%2C450&ssl=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHEqW1EChbgI9mTqK9U6W6Y0lZl56s5humv0ONePjwFsuwnab9CEllZ8WVtCn0w0SXtQ&usqp=CAU"
      ];
  return <AppContainer>
    <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
    </Wrapper>
  </AppContainer>
}

export default MovingComponents;

const AppContainer = styled.div`
    width: 100vw;
    height: 100%;
    color: #000000;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper =  styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: fit-content;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;