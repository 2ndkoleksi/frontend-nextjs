import styled from 'styled-components';

const List = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 30px;
  padding: 1rem 2rem;
  font-size: 14.5px;
  border-radius: 5px;
  color: white;
  overflow: visible;
  margin-bottom: 1.5rem;
  text-align: left;
`;

const ListWrapper = ({ content }) => <List dangerouslySetInnerHTML={{ __html: content }} />;

export default ListWrapper;
