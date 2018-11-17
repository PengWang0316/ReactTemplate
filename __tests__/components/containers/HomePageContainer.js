import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import { HomePageContainer } from '../../../app/components/containers/HomePageContainer';

describe('HomePageContainer', () => {
  test('snapshot', () => expect(renderer.create(<HomePageContainer />).toJSON()).toMatchSnapshot());
});
