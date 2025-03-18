import React from 'react';
import {TouchableOpacity} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export interface Props {
  name: string;
  size: number;
  color: string;
  onPress?(): void;
  solid?: boolean;
}

function Icon({onPress, ...props}: Props) {
  if (!onPress) {
    return <FontAwesomeIcon {...props} />;
  }

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <FontAwesomeIcon {...props} />
    </TouchableOpacity>
  );
}

export default Icon;
