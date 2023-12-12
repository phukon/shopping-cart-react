import { Col, Row } from 'react-bootstrap';
import storeItems from '../src/data/items.json';
import { StoreItems } from './components/StoreItems';

export const Store = () => {
  return (
    <>
      {' '}
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map(item => (
          <Col key={item.id}><StoreItems {...item}/></Col>
        ))}
      </Row>
    </>
  );
};
