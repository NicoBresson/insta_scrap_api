import { useContext } from 'react';
import { ScrapeContext } from './scrapeContext';
import Table from './Table';
import Chart from './Chart';

const Data = () => {
  const { scrapes, fetchScrapes, remainingScrapes } = useContext(ScrapeContext)
  return (<div>
    <button type='button' onClick={fetchScrapes}>Refresh</button>
    <h2>Top 100 Profiles connected to Dreister (Followers + Following) sorted by number of Followers</h2>
    <h4>{remainingScrapes} remaining to complete the DB - Our cron is working on it!</h4>
    <Table scrapes={scrapes}/>
    <Chart scrapes={scrapes}/>
  </div>)
}

export default Data;
