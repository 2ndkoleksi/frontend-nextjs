import styled from 'styled-components'

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
  height: 100px;
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
  font-size: 2rem;
  text-align: center;
`

export const StyledInput = styled.input`
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 100%;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: #fff;

  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid #e74c3c;
  }

  &:focus ~ label {
    top: -12px;
    font-size: 12px;
  }
`

export const StyledInputContainer = styled.div`
  position: relative;
`

export const StyledLabel = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 16px;
  color: #fff;
  pointer-event: none;
  transition: all 0.5s ease-in-out;
`

export const UploadButtonWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
`

export const UploadButton = styled.button`
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
`

export const StyledFileInput = styled.input.attrs((props) => ({
  type: 'file'
}))`
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`

export const StyledForm = styled.form`
  width: 100%;
`
