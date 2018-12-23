module.exports = (knex) => {
  return {

    async findUser ({ username, password }) {
      console.log('username = ', username)
      console.log('password = ', password)

      let list = await knex('app_user')
        .select()
        .where({
          username,
          password
        })
      console.log(list)
      if (list.length != 1) {
        throw Error("There's error when retrieving user")
      }
      return list[0]
    }

  }
}