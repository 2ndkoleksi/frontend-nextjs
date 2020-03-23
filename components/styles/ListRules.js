import styled from 'styled-components'

const List = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 30px;
  padding: 1rem 2rem;
  font-size: 14.5px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary.pink};
  overflow: visible;
  margin-bottom: 1.5rem;
  text-align: left;
  font-weight: bold;
`

const ListWrapper = ({ content }) => (
  <List dangerouslySetInnerHTML={{ __html: content }} />
)

export default ListWrapper
