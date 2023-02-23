import styled from 'styled-components';

interface ImageCartoonProps {
  top?: number;
  right?: number;
  width?: number;
}

export const Img = styled.img<ImageCartoonProps>`
  position: absolute;
  top: ${(props) => (props.top)}%;
  right: ${(props) => (props.right)}%;
  height: auto;
  width: ${(props) => (props.width)}px;
`

interface ImageComponent {
  name: string;
  top: number;
  right: number;
  width: number;
  zindex?: number;
}

export const CartoonImage: React.FC<ImageComponent> = ({ name, top, right, width, zindex = 1 }) => {
  return (
    <Img 
      top={top} 
      right={right}
      width={width}
      z-index = {zindex}
      src={require(`../../images/cartoons/${name}.png`)} 
    />
  )
}
