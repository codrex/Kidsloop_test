import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import postal from 'postal';

import { messages } from '../../contants';
import logo from '../../images/logo.svg';
import {
  FormCardStyled,
  FormLayoutStyled,
  LogoStyled,
  TitleStyled,
  StyledFooter,
  StyledFooterSpans,
  StyledSelect,
  StyledSelectWrapper,
  StyledLeftFooter,
  ContainerStyled
} from './styles';

const channel = postal.channel(messages.channel);

function FormLayout({ children, title }) {
  const toggleDarkMode = () => channel.publish(messages.topics.toggleDarkMode);
  return (
    <FormLayoutStyled>
      <ContainerStyled>
        <FormCardStyled>
          <LogoStyled src={logo} />
          <TitleStyled>{title}</TitleStyled>
          {children}
        </FormCardStyled>
        <StyledFooter>
          <StyledLeftFooter>
            <FontAwesomeIcon
              icon={faSun}
              id="brightness-icon"
              onClick={toggleDarkMode}
              tabIndex="0"
            />
            <StyledSelectWrapper tabIndex="0">
              <StyledSelect name="languages" id="languages">
                <option value="">Select a language</option>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
                <option value="hindi">Hindi</option>
              </StyledSelect>
              <FontAwesomeIcon icon={faAngleDown} />
            </StyledSelectWrapper>
          </StyledLeftFooter>

          <StyledFooterSpans>
            <a href="/#">Help</a>
            <a href="/#">Privacy</a>
            <a href="/#">Terms</a>
          </StyledFooterSpans>
        </StyledFooter>
      </ContainerStyled>
    </FormLayoutStyled>
  );
}

export default FormLayout;
