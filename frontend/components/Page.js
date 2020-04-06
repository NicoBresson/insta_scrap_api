import fetch from 'node-fetch';
import { useEffect, useState } from 'react';
import { ScrapeProvider } from './scrapeContext';

//custom hook!
function useRemainingScrapes() {
  const [remainingScrapes, setRemainingScrapes] = useState(0)
  // Use effect accept only a function as parameter
  useEffect(function () {
    (async () => {
      const res = await fetch('http://localhost:3000/api/ramaining-scrapes')
      const data = await res.json()
      setRemainingScrapes(data)
    })()
  }, [])
  return remainingScrapes
}


function useScrapes() {
  const [scrapes, setScrapes] = useState([{ instagramId: '' }])

  // Use effect accept only a function as parameter
  useEffect(function () {
    (async () => {
      console.log('Mounting or Updating')
      const res = await fetch('http://localhost:3000/api/top100')
      const data = await res.json()
      setScrapes(data)
    })()
  }, [])
  return scrapes
}

const Page = ({ children }) => {
  const scrapes = useScrapes();
  const remainingScrapes = useRemainingScrapes();
  return (
    <ScrapeProvider value={
      { scrapes, remainingScrapes }
    }>
      <div className="page">
        {children}
      </div>
    </ScrapeProvider>
  );
}

export default Page;
