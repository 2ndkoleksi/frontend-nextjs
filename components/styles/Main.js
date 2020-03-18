import styled from 'styled-components';

export const CenterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  height: 100%;
`;

export const Main = styled.main`
  height: inherit;
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
