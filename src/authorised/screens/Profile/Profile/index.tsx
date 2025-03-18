import Screen from '@xyz/components/Screen';
import { colors } from '@xyz/style-guide';
import {Text, View, TextInput} from 'react-native';

export default function Profile() {
  return (
    <Screen disableScroll>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: colors.greys.white}}>
        <TextInput
          autoFocus
          style={{
            width: '80%',
            padding: 10,
            borderWidth: 1,
            borderColor: colors.greys.default,
            borderRadius: 8
          }}
          placeholder="Enter text here..."
        />
      </View>
    </Screen>
  );
}
