import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 40%;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 4px 0px rgba(214, 214, 214, 1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  width: 20%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background-color: ${props => props.bgColor};
  box-shadow: 2px 0px 3px 0px rgba(133, 133, 133, 1);
`;

export const Label = styled.span`
  text-transform: uppercase;
  font-size: 10px;
`;

export const Persentage = styled.span`
  font-size: 24px;
`;
