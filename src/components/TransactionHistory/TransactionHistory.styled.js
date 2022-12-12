import styled from "@emotion/styled";

export const Table = styled.table`
width: 60%;
margin: 0 auto;
border-collapse: collapse;
background-color: #fff;
box-shadow: 0px 4px 4px 0px rgba(214,214,214,1);
`;

export const TableHead = styled.thead`
background-color: pink;

`;

export const TableRow = styled.tr`
    &:nth-of-type(even) {
        background-color: #999;
    }
`;

export const TableBody = styled.tbody`
`;

export const TableHeader = styled.th`
`;

export const TableData = styled.td`
text-align: center;
`;