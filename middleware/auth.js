import Account from '../ui/models/Account'

export default function ({ store, redirect }) {
    const user = Account.query().first()
    console.log(user)
    if (user.isLoggedIn) {
      //console.log(!this.$store.$db().model('account'))
      // error({
      //   message: 'You are not connected',
      //   statusCode: 403
      // })
      return redirect('/help')
    }
  }