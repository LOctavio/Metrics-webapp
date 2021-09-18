import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';
import Items from './items';
import { getList } from '../../redux/details/details';
import Header from '../header';

const Default = () => {
  const items = useSelector((state) => state.detailsReducer);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const country = slug.split(' ').join('_').toLowerCase();

  const regionsList = () => {
    const url = `https://api.covid19tracking.narrativa.com/api/2021-08-01/country/${country}`;
    axios.get(url)
      .then((response) => {
        const list = [];
        const [date] = [...Object.values(response.data.dates)];
        const { countries } = date;
        const [country] = [...Object.values(countries)];
        const { regions } = country;
        Object.entries(regions).forEach((region) => {
          list.push({
            region: region[1].name,
            confirmed_cases: region[1].today_confirmed,
          });
        });
        dispatch(getList(list));
      });
  };

  useEffect(() => {
    regionsList();
  }, []);

  return (
    <>
      <Header title={slug} backButton={false} />
      <Container className="regions-description">
        <h3>{slug}</h3>
      </Container>
      <Container className="regions-label">
        <span>STATS BY REGION</span>
      </Container>
      <Container className="regions-table">
        {items.map((item) => (
          <Items
            key={uuidv4()}
            region={item.region}
            confirmedCases={item.confirmed_cases}
          />
        ))}
      </Container>
    </>
  );
};

export default Default;
