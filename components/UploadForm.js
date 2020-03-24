import styled from 'styled-components'

import {
  StyledInput,
  InputWrapper,
  UploadButton,
  StyledFileInput,
  UploadFileWrapper,
  StyledForm,
  StyledTextArea
} from '../components/styles/Main'

function UploadForm() {
  return (
    <StyledForm>
      <h2>Hai, hope this item sells fast !</h2>

      <InputWrapper type='Brand:'>
        <StyledInput placeholder='What brand this item?' />
      </InputWrapper>

      <InputWrapper type='Description:'>
        <StyledTextArea placeholder='You can edit later' />
      </InputWrapper>

      <UploadFileWrapper>
        <UploadButton>Upload Image</UploadButton>
        <StyledFileInput type='file' name='myfile' />
      </UploadFileWrapper>

      <UploadButton space>SUBMIT</UploadButton>
    </StyledForm>
  )
}

export default UploadForm
