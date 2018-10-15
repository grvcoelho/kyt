const { createUser } = require('../../runtime/firebase')

const create = async ({ data, database }) => {
  const { Organization } = database.models
  const createdOrganization = await Organization.create(data)

  await createUser()

  return createdOrganization
}

module.exports = {
  create,
}
