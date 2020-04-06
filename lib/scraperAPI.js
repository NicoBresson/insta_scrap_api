const axios = require('axios');

const jitterFunction = () => {
  const jitter = Math.random()*2000
  const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve()
    }, jitter);
  })
  return promise
}

exports.getFollowers = async (username) => {
  await jitterFunction();
  const { data } = await axios.get(`https://www.instagram.com/${username}/?__a=1`);
  return data;
}

