import PropTypes from 'prop-types';
import { randomHsl } from 'utils/getRandomColor';
import {
  Section,
  Title,
  List,
  ListItem,
  Label,
  Persentage,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}

      <List>
        {stats.map(el => (
          <ListItem key={el.id} bgColor={randomHsl()}>
            <Label>{el.label}</Label>
            <Persentage>{el.percentage}%</Persentage>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
