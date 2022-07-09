import { Row, Col } from 'antd';
import { CardItem } from '../card-item';
import { useAppSelector } from '../../hooks/store-hooks';

import './card-list.scss';

export const CardList = () => {
  const { cardList } = useAppSelector((state) => state.cardList);

  const cols: JSX.Element[] = [];

  cardList.forEach((card, index) => {
    cols.push(
      <Col key={index} span={8}>
        <CardItem cardData={card} id={index}/>
      </Col>
    );
  });

  return (
    <section className="card-list">
      <Row gutter={[16, 16]}>{cols}</Row>
    </section>
  );
};
