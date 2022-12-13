import styled from '@emotion/styled';

export const Friend = styled.li`
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(214, 214, 214, 1);
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  background-color: #d9d9d9;
  padding: 10px;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-weight: 700;
`;
