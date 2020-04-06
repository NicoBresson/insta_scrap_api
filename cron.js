const cron = require('node-cron');
const axios = require('axios');

cron.schedule('* * * * *', async() => {
  try{
    console.log('⏲  Cron job starting')
    const results = await axios.get(`http://localhost:3000/api/update-followers`)
    console.log(results.status)
    return console.log('✅ Cron job completed successfully');
  }
  catch(error){
    console.log('Error with the cron job')
  }
});
