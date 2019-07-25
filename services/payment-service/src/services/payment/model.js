import mongoose from 'mongoose'

const mongoUrl = process.env.MONGODB_URL
mongoose.connect(mongoUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
})

const { Schema } = mongoose
const schema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
)

schema.virtual('fullName').get(function() {
  const fullName = this.firstName + ' ' + this.lastName
  return fullName
})

export const PaymentModel = mongoose.model('Payment', schema)
