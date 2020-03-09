import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Container = styled(FlexWrapper)`
  min-height: 100vh;
  flex-direction: column;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.primary.pink};
  font-weight: 700;
`;

export const CenterText = styled.div`
  text-align: center;
`;
