import * as mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

export interface IUserModel extends mongoose.Document {
  name: string
  email: string
  avatarUrl: string
  facebookId: number
  githubId: number
}

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number
})

UserSchema.plugin(
  passportLocalMongoose,
  { usernameField: 'email' }
)

const model: mongoose.Model<IUserModel> = mongoose.model('User', UserSchema as mongoose.PassportLocalSchema)

export default model
