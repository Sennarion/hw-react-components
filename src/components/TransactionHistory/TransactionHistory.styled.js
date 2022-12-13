import styled from '@emotion/styled';

export const Table = styled.table`
  width: 60%;
  margin: 0 auto;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(214, 214, 214, 1);
`;

export const TableHead = styled.thead`
  color: #fff;
  text-transform: uppercase;
  background-color: #6bc4ff;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #d9d9d9;
  }
`;

export const TableBody = styled.tbody``;

export const TableHeader = styled.th`
  border-right: 1px solid #949494;
  padding: 8px 0;
  :last-child {
    border-right: none;
  }
`;

export const TableData = styled.td`
  text-align: center;
  padding: 8px 0;
  border-right: 1px solid #949494;
  :last-child {
    border-right: none;
  }
`;
