import styled, { css } from 'styled-components'

export const CenterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Container = styled.div``

export const Main = styled.main`
  height: 100%;
  padding: 5rem 2rem;
`

export const Footer = styled.footer`
  width: 100%;
  height: 80px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.primary.pink};
  font-weight: 700;
`

export const CenterText = styled.div`
  text-align: center;
`

export const PagesTitle = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: center;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;

  &:focus {
    border-bottom: 2px solid #78788c;
  }
`

export const InputWrapper = styled.p`
  &::before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    color: ${({ theme }) => theme.colors.primary.black};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`

export const UploadButton = styled.button`
  padding: 8px 12px;
  margin: 8px 0 0;
  border: 2px solid ${({ theme }) => theme.colors.primary.blue};
  background: 0;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  ${(props) =>
    props.space &&
    css`
      margin: 2rem 0;
      border: 2px solid ${({ theme }) => theme.colors.primary.pink};
    `}

  &:hover {
    background: ${({ theme }) => theme.colors.primary.pink};
    color: ${({ theme }) => theme.colors.primary.white};
  }
`

export const StyledFileInput = styled.input.attrs((props) => ({
  type: 'file'
}))`
  height: 60px;
  width: 111px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`

export const StyledForm = styled.form`
  width: 100%;
  height: 500px;
  background-image: linear-gradient(-225deg, #fffeff 0%, #d7fffe 100%);
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  position: relative;
  color: ${({ theme }) => theme.colors.primary.pink};
  & h2 {
    margin: 10px 0;
    padding-bottom: 10px;
    width: 275px;
    color: ${({ theme }) => theme.colors.primary.black};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary.black};
  }
`

export const UploadFileWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;
  height: 70px;

  &:focus {
    border-bottom: 2px solid #78788c;
  }
`
