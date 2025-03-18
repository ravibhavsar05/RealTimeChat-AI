import React, {Ref, forwardRef, useState} from 'react';
import {
  View,
  TextInput as RNTextInput,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextStyle,
  Platform,
} from 'react-native';
import {TextInput, Icon} from 'react-native-paper';
import styles from './styles';
import {colors} from '@xyz/style-guide';
import Text from '../Text';

export interface Props {
  value?: any;
  onChange?(newValue: any): void;
  onBlur?(newValue: any): void;
  placeholder?: string;
  successIconStyle?: TextStyle;
  label?: string;
  maxLength?: number;
  onSubmitEditing?(): void;
  error?: boolean;
  enableIcon?: boolean;
  touched?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: ReturnKeyTypeOptions;
  onKeyPress?(e: NativeSyntheticEvent<TextInputKeyPressEventData>): void;
  blurOnSubmit?: boolean;
  style?: any;
  mask?: any;
  restProps?: any;
  fieldStyle?: any;
  fieldRef?: any;
  numberOfLines?: any;
  onFocus?: any;
  errorText?: string;
  editable?: boolean;
  textContentType?: 'username' | 'password' | 'newPassword' | 'emailAddress';
  mode?: 'outlined' | 'flat';
  testID?: string;
}

function Input(
  {
    value,
    onChange,
    onBlur,
    touched,
    enableIcon,
    successIconStyle,
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
    mask,
    restProps,
    fieldStyle,
    fieldRef,
    numberOfLines,
    onFocus,
    errorText,
    editable = true,
    textContentType,
    mode = 'outlined',
    testID
  }: Props,
  ref: Ref<RNTextInput>,
) {
  const [focussed, setFocussed] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleFocus = () => {
    setFocussed(true);
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    setFocussed(false);
    if (onBlur) {
      onBlur(value);
    }
  };

  // console.log(focussed, 'focussed');

  return (
    <View style={[styles.control, style]}>
      {label && (
        <Text style={styles.labelText} bold>
          {label}
        </Text>
      )}
      <View
        style={[styles.inputContainer, focussed && styles.textInputFocussed]}>
        <TextInput
          ref={ref}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit={blurOnSubmit}
          onChangeText={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry && !visible}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          onKeyPress={onKeyPress}
          allowFontScaling={false}
          textContentType={textContentType}
          editable={editable}
          // label={label}
          mode={mode}
          enablesReturnKeyAutomatically
          style={[
            styles.textInput,
            multiline && styles.textMultiline,
            // focussed && styles.textInputFocussed,
            error && styles.textInputError,
          ]}
          onSubmitEditing={onSubmitEditing}
          theme={{
            roundness: 8,
            mode: 'exact',
            colors: {
              primary: focussed ? colors.greys.light : colors.greys.lightest, // focused border color
              // secondary: colors.greys.lightest,
              background: colors.greys.white,
              error: colors.reds.default,
              placeholder: colors.greys.default,
              text: !editable ? colors.greys.darker : colors.greys.black,
              shadow: '#000',
              disabled: colors.greys.lightest,
              surface: colors.greys.white,
              accent: colors.greys.light,
              outline: colors.greys.light, //
            },
          }}
          dense
          autoFocus={false}
          right={
            secureTextEntry ? (
              <TextInput.Icon
                icon={visible ? 'eye' : 'eye-off'}
                color={focussed ? colors.greys.black : colors.greys.default}
                onPress={() => setVisible(!visible)}
                style={styles.icon}
                size={20}
              />
            ) : null
          }
          testID={testID}
        />
      </View>
    </View>
  );
}

export default forwardRef(Input);
