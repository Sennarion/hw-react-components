import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeader,
  TableData,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
