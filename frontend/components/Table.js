import NumberFormat from 'react-number-format';

const Table = ({scrapes})=> {
 return (
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
 )
}

export default Table;
