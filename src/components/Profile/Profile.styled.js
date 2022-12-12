import styled from "@emotion/styled";

export const User = styled.div`
    max-width: 300px;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 4px 0px rgba(214,214,214,1);
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
background-color: #fff;
`;

export const Name = styled.p`
`;

export const Info = styled.p`
`;

export const StatsList = styled.ul`
display: flex;
`;

export const StatsItem = styled.li`
width: calc(100% / 3);
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
`;

export const Label = styled.span`
`;

export const Quantity = styled.span`
`;
