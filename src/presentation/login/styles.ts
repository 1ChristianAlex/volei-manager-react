import styled from '@mui/material/styles/styled';

const ScreenContainer = styled('div')`
  width: 100%;
  margin: auto;
  height: fit-content;
  display: flex;
  padding: 24px;
`;

const CenterContainer = styled('div')`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const LogoImage = styled('img')`
  width: 154px;
  height: 154px;
  margin: 0 auto;
  display: block;
`;

const LogoTitle = styled('h1')`
  color: ${(theme) => theme.theme.palette.text.primary};
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Bebas Neue;
  margin: 0;
`;

const ForgotPasswordLink = styled('span')`
  color: #36c;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: block;
  text-align: right;
  padding-top: 12px;
`;

export {
  ScreenContainer,
  CenterContainer,
  LogoImage,
  LogoTitle,
  ForgotPasswordLink,
};
