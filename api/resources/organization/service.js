const create = async ({ data, database }) => {
  const { Organization } = database.models
  const createdOrganization = await Organization.create(data)
  return createdOrganization
}

module.exports = {
  create,
}
