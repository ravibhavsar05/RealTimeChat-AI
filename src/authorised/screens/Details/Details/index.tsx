import Screen from '@xyz/components/Screen';
import { colors } from '@xyz/style-guide';
import {Text, View} from 'react-native';

export default function Details() {
  return (
    <Screen disableScroll>
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1,backgroundColor:colors.greys.white}}>
        <Text>Details</Text>
      </View>
    </Screen>
  );
}
