import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { getList } from '../../redux/homepage/homepage';

const HomePage = () => {
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

  return (<h1>Home Page</h1>);
};

export default HomePage;
