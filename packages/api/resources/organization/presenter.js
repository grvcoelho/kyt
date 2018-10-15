const {
  always,
  applySpec,
  prop,
} = require('ramda')

const buildEntityResponse = applySpec({
  entity: always('organization'),
  id: prop('id'),
  name: prop('name'),
})

module.exports = {
  buildEntityResponse,
}
