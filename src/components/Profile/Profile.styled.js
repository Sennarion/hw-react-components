import styled from '@emotion/styled';

export const User = styled.div`
  width: 300px;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px 0px rgba(214, 214, 214, 1);
  border: 1px solid #d9d9d9;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  background-color: #d9d9d9;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  color: #9e9e9e;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 1px;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #d9d9d9;
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
