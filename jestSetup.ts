// Mock react-native-bootsplash to prevent native dependency issues in Jest
jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn(),
  show: jest.fn(),
}));

// Mock react-native-gesture-handler to avoid native module errors
jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: ({ children }) => children,
  ScrollView: 'ScrollView',
  Slider: 'Slider',
  Switch: 'Switch',
  TextInput: 'TextInput',
  ToolbarAndroid: 'ToolbarAndroid',
  ViewPagerAndroid: 'ViewPagerAndroid',
  DrawerLayoutAndroid: 'DrawerLayoutAndroid',
  WebView: 'WebView',
  NativeViewGestureHandler: 'NativeViewGestureHandler',
  TapGestureHandler: 'TapGestureHandler',
  FlingGestureHandler: 'FlingGestureHandler',
  ForceTouchGestureHandler: 'ForceTouchGestureHandler',
  LongPressGestureHandler: 'LongPressGestureHandler',
  PanGestureHandler: 'PanGestureHandler',
  PinchGestureHandler: 'PinchGestureHandler',
  RotationGestureHandler: 'RotationGestureHandler',
  Swipeable: 'Swipeable',
  DrawerLayout: 'DrawerLayout',
  State: {},
  Directions: {},
  GestureDetector: 'GestureDetector',
  Gesture: {
    Pan: jest.fn(),
    Tap: jest.fn(),
    Fling: jest.fn(),
    Pinch: jest.fn(),
    Rotation: jest.fn(),
    LongPress: jest.fn(),
    Native: jest.fn(),
    Simultaneous: jest.fn(),
    Race: jest.fn(),
    Exclusive: jest.fn(),
  },
}));

// Mock navigation to prevent Jest errors related to react-navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));

// Mock React Native Navigation Stack
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(() => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  })),
}));

// Mock Image and Asset imports (for PNG files)
jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon.png', () => '');
jest.mock('react-native/Libraries/Image/AssetRegistry', () => ({
  registerAsset: jest.fn(),
}));

jest.mock('react-native-screens', () => ({
  enableScreens: jest.fn(),
}));
