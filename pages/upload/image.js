import styled from 'styled-components'

const FormWrapper = styled.div``

import MainLayout from '../../components/layout/MainLayout'
import UploadForm from '../../components/UploadForm'

export default function Image() {
  return (
    <MainLayout>
      <FormWrapper>
        <UploadForm />
      </FormWrapper>
    </MainLayout>
  )
}
