import { useContext } from 'react';
import NumberFormat from 'react-number-format';
import { ScrapeContext } from './scrapeContext';

const Data = () => {
  const { scrapes, remainingScrapes } = useContext(ScrapeContext)
  return (<div>
    <h2>Top 100 Profiles connected to Dreister (Followers + Following) sorted by number of Followers</h2>
    <h4>{remainingScrapes} remaining to complete the DB - Our cron is working on it!</h4>
    <table>
      <thead>
        <tr>
          <th style={{ padding: 5 }}>Index</th>
          <th style={{ padding: 5 }}>InstagramId</th>
          <th style={{ padding: 5 }}>Name</th>
          <th style={{ padding: 5 }}>Number of followers</th>
          <th style={{ padding: 5 }}>This profile is following Dreister</th>
        </tr>
      </thead>
      <tbody>
        {scrapes.map((scrape, index) => (
          <tr key={scrape.instagramId}>
            <td style={{ padding: 5 }}>{index + 1}</td>
            <td style={{ padding: 5 }}>{scrape.instagramId}</td>
            <td style={{ padding: 5 }}>{scrape.name}</td>
            <td style={{ textAlign: 'right', padding: 5 }}><NumberFormat value={scrape.nbFollowers} displayType={'text'} thousandSeparator={' '} /></td>
            <td style={{ textAlign: 'right', padding: 5 }}>{scrape.isFollowingDreister ? 'YES' : 'NO'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>)
}

export default Data;
