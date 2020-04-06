const Profile = require('../models/Profile');
const { getFollowers } = require('../lib/scraperAPI')

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({});
    return res.json(profiles);
  } catch (error) {
    console.log(error)
  }
}

exports.getProfile = async (req, res) => {
  try {
    const instagramId = req.params.profileId
    const profile = await Profile.findOne({ instagramId });
    return res.json(profile);
  } catch (error) {
    console.log(error)
  }
}

exports.scrapProfiles = async (req, res) => {
  try {
    const dataSetSize = await Profile.countDocuments();
    const nbScraps = 2
    console.log(`Going to do ${nbScraps} scraps`)
    for (let i = 0; i < nbScraps; i++) {
      const randomNumber = Math.floor(Math.random() * dataSetSize);
      const [profile] = await Profile.find().limit(1).skip(randomNumber);
      const data = await getFollowers(profile.instagramId);
      if (data && data.graphql && data.graphql.user) {
        const followers = data.graphql.user.edge_followed_by.count;
        const followings = data.graphql.user.edge_follow.count;
        const isPrivate = data.graphql.user.is_private;
        profile.nbFollowers = followers;
        profile.nbFollowing = followings;
        profile.privateProfile = isPrivate;
        await profile.save();
        console.log(`${profile.instagramId} updated`)
      } else {
        console.log(`${profile.instagramId} skipped`)
      }
    }
    console.log(`Completed ${nbScraps} scraps`)
    res.json({message:'Ok'});
  } catch (error) {
    console.log(error)
  }
}

exports.createOrUpdateProfile = async (req, res) => {
  try {
    let incomingProfile = req.body.data
    console.log(incomingProfile)
    const profile = await Profile.findOneAndUpdate(
      { instagramId: incomingProfile.instagramId },
      { ...incomingProfile },
      { new: true, upsert: true });
    console.log(`Profile ${profile.instagramId} created`)
    res.json(profile)
  } catch (error) {
    console.log(error)
  }
}

exports.createOrUpdateMultipleProfiles = async (req, res) => {
  try {
    let incomingProfiles = req.body.data;
    let profiles = [];
    for (let i = 0; i < incomingProfiles.length; i++) {
      const incomingprofile = incomingProfiles[i];
      const profile = await Profile.findOneAndUpdate(
        { instagramId: incomingprofile.instagramId },
        { ...incomingprofile },
        { new: true, upsert: true });
      profiles.push(profile);
    }
    console.log(`Updated or created ${profiles.length}`)
    res.json(profiles)
  } catch (error) {
    console.log(error)
  }
}
