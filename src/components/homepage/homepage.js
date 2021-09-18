import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  Container, Row, InputGroup, FormControl, Button,
} from 'react-bootstrap';
import { getList } from '../../redux/homepage/homepage';
import Items from './items';
import Header from '../header';

const HomePage = () => {
  const items = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  const CountriesList = () => {
    axios.get('https://api.covid19tracking.narrativa.com/api/2021-08-01')
      .then((response) => {
        const list = [];
        let [countries] = [...Object.values(response.data.dates)];
        countries = countries.countries;
        Object.entries(countries).forEach((element) => {
          if (element[1].regions.length !== 0) {
            list.push({
              country: element[0],
              confirmed_cases: element[1].today_confirmed,
            });
          }
        });
        dispatch(getList(list));
      });
  };

  useEffect(() => {
    CountriesList();
  }, []);

  return (
    <>
      <Header title="countries" backButton />
      <Container className="countries-description">
        <Row>
          <h3>Confirmed cases of covid19 until 2021-08-01</h3>
        </Row>
        <Row>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Filter by country"
            />
            <Button variant="outline-light">
              Search
            </Button>
          </InputGroup>
        </Row>
      </Container>
      <Container className="countries-label">
        <span>STATS BY COUNTRY</span>
      </Container>
      <Container className="countries-table">
        {items.map((item) => (
          <Items
            key={uuidv4()}
            country={item.country}
            confirmedCases={item.confirmed_cases}
          />
        ))}
      </Container>
    </>
  );
};

export default HomePage;
