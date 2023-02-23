// import React from 'react';
// import styled from 'styled-components';
// import bb from '../../images/map.png'

// // type Props = {
// //   width: number;
// //   height: number;
// // };


// const BackgroundImage = styled.div`
//   width: 100%;
//   height: 100%;
//   background-image: url(${bb});
//   /* background-repeat: no-repeat;
//   display: inline-block; */
//   background-size: contain;
//   background-position: right;
//   background-repeat: no-repeat;
//   position: absolute;
//   top: 0;
//   background-size: contain;
//   right: 0;
//   /* border-radius: 100% 0 100% 100%; */
// `;

// export const MapImage: React.FC = () => {
//   // const diameter = Math.min(width, height) * 0.8;
//   return (
//         <BackgroundImage />
//   );
// };


import React from 'react';
import styled from 'styled-components';
import Image from '../../images/map.png'

type Props = {
  width: number;
  height: number;
};

const Container = styled.div<{ width: number; height: number }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height}px;
`;

const Circle = styled.div<{ diameter: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  width: ${(props) => props.diameter}px;
  height: ${(props) => props.diameter}px;
  border-radius: 50%;
  background-color: white;
  z-index: 1;
`;

const ImageWrapper = styled.div<{ diameter: number }>`
  position: absolute;
  top: -10%;
  left: 54%;
  /* transform: translate(-50%, -50%); */
  width: ${(props) => props.diameter}px;
  height: ${(props) => props.diameter}px;
  overflow: hidden;
  border-radius: 50%;
  z-index: 2;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
`;

export const MapImage: React.FC<Props> = ({ width, height }) => {
  const diameter = Math.min(width, height) * 1;
  return (
    <Container width={width} height={height}>
      {/* <Circle diameter={diameter} /> */}
      <ImageWrapper diameter={diameter}>
        <BackgroundImage />
      </ImageWrapper>
    </Container>
  );
};
