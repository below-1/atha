module.exports = (knex) => {
  return {

    async findByUser (id) {
      let list = await knex('group_siswa')
        .select()
        .where({
          user_id: id
        })
      return list
    },

    async addMember (groupId, member) {
      let payload = { ...member, group_id: groupId }
      console.log(payload)
      return await knex('siswa')
        .returning('id')
        .insert(payload)
    },

    async updateMember (id, member) {
      // Remove id from member
      let payload = { ...member }
      if (payload.id) {
        delete payload.id
      }

      return await knex('siswa')
        .where('id', '=', id)
        .update(payload)
    },

    async findMembers (groupId) {
      let result = await knex('siswa')
        .select()
        .where({
          group_id: groupId
        })
      return result
    }

  }
}