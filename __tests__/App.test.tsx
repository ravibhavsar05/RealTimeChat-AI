/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../../xyz/src/app';


// Mock react-native-bootsplash to prevent errors
jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn(),
  show: jest.fn(),
}));


test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
