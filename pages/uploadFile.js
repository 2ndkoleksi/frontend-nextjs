import styled from 'styled-components'

import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  UploadButtonWrapper,
  UploadButton,
  StyledFileInput,
  StyledForm
} from '../components/styles/Main'

function UploadFile() {
  return (
    <StyledForm>
      <StyledInputContainer>
        <StyledInput name='brand' type='text' />
        <StyledLabel htmlFor='brand'>Brand</StyledLabel>
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledInput name='description' type='text' />
        <StyledLabel htmlFor='description'>Description</StyledLabel>
      </StyledInputContainer>
      <UploadButtonWrapper>
        <UploadButton>Upload a file</UploadButton>
        <StyledFileInput type='file' />
      </UploadButtonWrapper>
      <button type='submit'>Submit</button>
    </StyledForm>
  )
}

export default UploadFile
