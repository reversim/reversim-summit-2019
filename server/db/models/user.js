/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

// Other oauthtypes to be added

/*
 User Schema
 */

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  tokens: Array,
  isReversimTeamMember: { type: Boolean, default: false },
  isDataAdmin: { type: Boolean, default: false },
  name: { type: String, default: '' },
  oneLiner: { type: String, default: '' },
  bio: { type: String, default: '' },
  gender: { type: String, default: '' },
  phone: { type: String, default: '' },
  location: { type: String, default: '' },
  website: { type: String, default: '' },
  picture: { type: String, default: '' },
  trackRecord: { type: String, default: '' },
  linkedin: { type: String, default: '' },
  github: { type: String, default: '' },
  twitter: { type: String, default: '' },
  stackOverflow: { type: String, default: '' },
  proposals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proposal'
  }],
  created_at: Date,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  google: {},
  video_url: String,
});

function encryptPassword(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  return bcrypt.genSalt(5, (saltErr, salt) => {
    if (saltErr) return next(saltErr);
    return bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      user.password = hash;
      return next();
    });
  });
}

/**
 * Password hash middleware.
 */
UserSchema.pre('save', encryptPassword);

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {
  comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return cb(err);
      return cb(null, isMatch);
    });
  }
};

/**
 * Statics
 */

UserSchema.statics = {};

export default mongoose.model('User', UserSchema);
