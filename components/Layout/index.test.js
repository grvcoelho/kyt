import React from 'react'
import { shallow } from 'enzyme'
import Layout from './index'

describe('Layout', () => {
  it('should mount', () => {
    shallow(
      <Layout title="Rotten Tomatoes">
        <div>100% critic reviews</div>
      </Layout>
    )
  })

  it('should mount with title', () => {
    const component = shallow(
      <Layout title="Rotten Tomatoes">
        <div>100% critic reviews</div>
      </Layout>
    )

    const title = component.find('title')
    expect(title.text()).toEqual('Rotten Tomatoes')
  })
})
