const axios = require('axios');

const updateFollowers = async () => {
  try {
    let results = await axios.get(`http://localhost:3000/api/update-followers`)
    console.log(results.status)
    return console.log('done');
  }catch(error){
    console.log(error)
  }
}

updateFollowers();
