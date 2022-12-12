import styled from '@emotion/styled';

export const Section = styled.section`
max-width: 40%;
margin: 0 auto;
margin-bottom: 20px;
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
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
color: #fff;
background-color: ${props => props.bgColor}
`;

export const Label = styled.span`
text-transform: uppercase;
font-size: 8px;
`;

export const Persentage = styled.span`
font-size: 24px;
`;