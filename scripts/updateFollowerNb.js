const axios = require('axios');

const updateFollowers = async () => {
  try {
    await axios.get(`http://localhost:3000/api/profiles/update-followers`)
    return console.log('done');
  }catch(error){console.log(error)}
}

updateFollowers();
