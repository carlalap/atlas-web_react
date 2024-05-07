import React from 'react';
import { shallow } from 'enzyme';
import { expect as expect } from 'chai';
import BodySection from './BodySection'

describe('Test BodySection.js', () => {
  it('Render without crashing', (done) => {
    expect(shallow(<BodySection title='test' />).exists());
    done();
  });

  it('render "h2" with text "test title" and "p" with text "test children node"', (done) => {
    const wrapper = shallow(<BodySection title='test title'><p>test children node</p></BodySection>);
    expect(wrapper.find('h2')).to.have.lengthOf(1);
    expect(wrapper.find('h2').text()).to.equal('test title');
    expect(wrapper.find('p')).to.have.lengthOf(1);
    expect(wrapper.find('p').text()).to.equal('test children node');
    done();
  });
});