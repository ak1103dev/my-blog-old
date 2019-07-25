import { PaymentModel } from './model'

// export const find = async () => {
//   const users = await UserModel.find({}, { password: false })
//   return users
// }

// export const findById = async args => {
//   const user = await UserModel.findById(args.id, { password: false })
//   return user.toJSON({ virtuals: true })
// }

export const create = async args => {
  const payment = new PaymentModel(args)
  return payment.save()
}

export default {
  create,
}
