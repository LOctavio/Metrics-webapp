import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getList } from '../../redux/homepage/homepage';
import Items from './items';

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
          list.push({
            country: element[0],
            confirmed_cases: element[1].today_confirmed,
          });
        });
        dispatch(getList(list));
      });
  };

  useEffect(() => {
    CountriesList();
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <Items
          key={uuidv4()}
          country={item.country}
          confirmedCases={item.confirmed_cases}
        />
      ))}
    </ul>
  );
};

export default HomePage;
