const organizationSchema = require('./schema')
const organizationService = require('./service')
const { buildEntityResponse } = require('./presenter')
const database = require('../../database')
const { validateEntity } = require('../../validation')
const { buildErrorResponse } = require('../../errors/builder')

const create = async (req, res) => {
  try {
    const validator = validateEntity(organizationSchema.create)
    const validatedOrganization = await validator(req.body)
    const createdOrganization = await organizationService.create({
      data: validatedOrganization,
      database,
    })

    return res
      .status(201)
      .send(buildEntityResponse(createdOrganization))
  } catch (error) {
    const { body, statusCode } = buildErrorResponse(error)
    console.log(error)
    return res.status(statusCode).send(body)
  }
}

module.exports = {
  create,
}
