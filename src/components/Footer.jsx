import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterDiv>
      <InquiryMessage>
        <Message>기획/디자인/개발: SYL</Message>
        <Message>sylagape1231@gmail.com</Message>
        <Message>© 2023. Room Escape Test All Right Reserved.</Message>
        <Message>
          <a href="https://github.com/SangYoonLee1231/escape-99-app">
            SYL's Github
          </a>
        </Message>
      </InquiryMessage>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  background-color: black;
  height: 200px;
`;

const InquiryMessage = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 300;
`;

const Message = styled.div`
  margin: 5px;
  color: white;
`;

export default Footer;
