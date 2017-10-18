import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import NoteForm from '../component/noteform'

describe('NoteForm', () => {
  test('inital state is correct', () => {
    let wrapper = mount(<NoteForm />)
    expect(wrapper.state('notes')).toEqual([])
  })
})
