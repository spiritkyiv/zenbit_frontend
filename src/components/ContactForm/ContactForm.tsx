import React, { FormEvent } from 'react';
import styled from 'styled-components';
import Image from '../../images/map.png'
import { Footer } from '../Footer';
import { CartoonImage } from '../CartoonImage';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { updateEmail, updateName, updateMessage, clearMessage } from '../../features/userMessage/usersMessageSlice';
import { postDataMessage } from '../../api/sendMessage';

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
  z-index: 1;
`;

const Header = styled.h1`
  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  color: #3E3E3E;
  padding: 7% 10% 0 10%;
  z-index: 3;
`;

export const Input = styled.input`
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    height: 50px;
    padding-left: 40px;
    padding-right: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 180%;
    color: #2D2D2D;
    z-index: 3;
`

const EmailInput = styled(Input)`
  margin-bottom: 8px;
`;

export const Button = styled.button`
  width: 218px;
  height: 55px;
  margin-top: 23px;
  background: #FAD34F;
  border-radius: 500px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  cursor: pointer;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    padding-left: 10%;
    margin-top: 30px;
    & :nth-child(n + 2):nth-child(-n + 3) {
      margin-top: 8px;
    }
`

export const Textarea = styled.textarea`
  font-family: 'ApercuArabicPro';
  resize: none;
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  height: 100px;
  padding-top: 31px;
  padding-left: 40px;
  padding-right: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 180%;
  color: #2D2D2D;
  z-index: 3;
`

export const ContactPage: React.FC = () => {
  const dispatch = useDispatch();
  const { message, email, name } = useAppSelector(state => state.usersMessage);

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    const newMessage = {
      name,
      email,
      text: message
    }
    try {
      const result = await postDataMessage(newMessage);
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    dispatch(clearMessage());
  };

  return (
    <PageContainer>
        <BackgroundImage>   
        <CartoonImage name='red_cartoon_3' right={17} top={42} width={200} zindex={3} />
        <CartoonImage name='red_cartoon_4' right={90} top={5} width={90} zindex={3} />
        <CartoonImage name='goodie1' right={25} top={40} width={80} zindex={3} />
          <Header>Reach out to us!</Header>
          <Form onSubmit={submitForm}>
            <Input 
              type="text" 
              placeholder="Your name*" 
              required
              value={name}
              onChange={(event) => dispatch(updateName(String(event.target.value)))}
            />
            <EmailInput 
              type="email" 
              placeholder="Your email*" 
              required
              value={email} 
              onChange={(event) => dispatch(updateEmail(String(event.target.value)))}
            />
            <Textarea 
              placeholder="Your message*" 
              required
              value={message}
              onChange={(event) => dispatch(updateMessage(String(event.target.value)))}
            />
            <Button>Submit</Button>
          </Form>
        </BackgroundImage>
        <Footer />
    </PageContainer>
  );
};
