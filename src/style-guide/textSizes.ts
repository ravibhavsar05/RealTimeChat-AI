import {Dimensions} from 'react-native';

const isNarrowDevice = Dimensions.get('window').width < 320;

const narrowDeviceTextSizes = {
  headline: 44,
  h1: 36,
  h2: 16,
  h3: 13,
  default: 10,
};

const defaultTextSizes = {
  headline: 50,
  h1: 40,
  h2: 20,
  h3: 15,
  default: 12,
};

export default isNarrowDevice ? narrowDeviceTextSizes : defaultTextSizes;
