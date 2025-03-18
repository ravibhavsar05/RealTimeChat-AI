import React, {Ref, forwardRef, useState} from 'react';
import {
  View,
  TextInput as RNTextInput,
  KeyboardTypeOptions,
  ViewStyle,
  ReturnKeyTypeOptions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';

import Text from '../Text';
import styles from './styles';
import {colors} from '@xyz/style-guide';

export interface Props {
  value: string;
  onChange(newValue: string): void;
  placeholder?: string;
  label?: string;
  maxLength?: number;
  onSubmitEditing?(): void;
  error?: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: ReturnKeyTypeOptions;
  onKeyPress?(e: NativeSyntheticEvent<TextInputKeyPressEventData>): void;
  blurOnSubmit?: boolean;
  style?: ViewStyle;
  testID?: string;
}

function Input(
  {
    value,
    onChange,
    label,
    maxLength,
    onSubmitEditing,
    placeholder,
    error,
    secureTextEntry = false,
    multiline = false,
    keyboardType = 'default',
    autoCapitalize,
    returnKeyType = 'done',
    onKeyPress,
    blurOnSubmit,
    style,
    testID
  }: Props,
  ref: Ref<RNTextInput>,
) {
  const [focussed, setFocussed] = useState(false);

  const setFocussedTrue = () => setFocussed(true);
  const setFocussedFalse = () => setFocussed(false);

  return (
    <View style={[styles.container, style && style]}>
      {label && (
        <Text style={styles.labelText} bold>
          {label}
        </Text>
      )}
      <RNTextInput
        ref={ref}
        style={[
          styles.textInput,
          multiline && styles.textMultiline,
          focussed && styles.textInputFocussed,
          error && styles.textInputError,
        ]}
        value={value}
        onFocus={setFocussedTrue}
        onBlur={setFocussedFalse}
        blurOnSubmit={blurOnSubmit}
        onChangeText={onChange}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor={colors.greys.default}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        autoCapitalize={autoCapitalize} 
        multiline={multiline}
        onKeyPress={onKeyPress}
        allowFontScaling={false}
        testID={testID}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

export default forwardRef(Input);
