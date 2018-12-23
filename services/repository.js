module.exports = (knex, tbname) => {
  return {

    async add (entity) {
      return knex(tbname)
        .returning('id')
        .insert(entity)
    },

    async update (id, entity) {
      return knex(tbname)
        .where('id', '=', id)
        .update(entity)
    },

    async delete (id) {
      await knex(tbname)
        .where('id', '=', id)
        .del()
    },

    async list () {
      return knex(tbname).select()
    },

    async getById (id) {
      return knex(tbname).select()
        .where('id', '=', id)
    }

  }
}