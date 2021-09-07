import mongoose, { Document, Model, Schema } from 'mongoose';
import Random from 'meteor-random-universal';

export interface IUser {
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

export interface ILink {
  linkText: string;
  docId: string;
}

export interface IDialog {
  sender: IUser;
  time: Date;
  message: string;
}

export interface IDoc extends Document {
  maker: IUser;
  expDate: Date;
  title: string;
  text: string;
  textLinks: ILink[];
  dialogs: IDialog[];
  visitors: IUser[];
}

export interface IDocModel extends Model<IDoc> {
}

export const docSchema = new Schema({
  _id: {
    type: String,
    default: () => `doc_${Random.id()}`,
    required: true
  },
  maker: Object,
  expDate: Date,
  title: String,
  text: String,
  textLinks: Array,
  dialogs: Array,
  visitors: Array
}, { timestamps: true });

const Doc = mongoose.model<any, any>('Doc', docSchema);

export default Doc;
