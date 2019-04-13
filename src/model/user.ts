import * as mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githunId: Number
})

UserSchema.plugin(
  passportLocalMongoose,
  { usernameField: 'email' }
)

const model = mongoose.model('User', UserSchema as mongoose.PassportLocalSchema)

export default model
