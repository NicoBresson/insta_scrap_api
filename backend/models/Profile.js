const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  instagramId: { type: String, unique: true, required: true },
  name: String,
  isFollowingDreister: {type:Boolean},
  isFollowedByDreister: { type: Boolean},
  privateProfile: { type: Boolean},
  nbPosts: { type: Number},
  nbFollowers: { type: Number},
  nbFollowing: { type: Number}
}, { timestamps: true });


const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
