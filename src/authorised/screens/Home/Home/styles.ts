import {StyleSheet, TextStyle, ViewStyle, Platform} from 'react-native';
import {colors} from '@xyz/style-guide';

interface Styles {
  safeArea: ViewStyle;
  keyboardAvoidingView: ViewStyle;
  container: ViewStyle;
  chatContainer: ViewStyle;
  chatContent: ViewStyle;
  messageContainer: ViewStyle;
  userMessage: ViewStyle;
  aiMessage: ViewStyle;
  inputContainer: ViewStyle;
  inputContainerBottom: ViewStyle;
  input: TextStyle;
  messageText: TextStyle;
  sendButton: ViewStyle;
  loaderContainer: ViewStyle;
  loadingBubble: ViewStyle;
  dotsContainer: ViewStyle;
  dot: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  safeArea: {
    flex: 1,
    backgroundColor: colors.greys.white,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
  },
  chatContent: {
    padding: 16,
    paddingBottom: 24,
  },
  messageContainer: {
    marginVertical: 8,
    maxWidth: '80%',
    padding: 12,
    borderRadius: 15,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.greys.black,
    borderBottomRightRadius: 0,
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.greys.lightest,
    borderBottomLeftRadius: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.greys.lightest,
    backgroundColor: colors.greys.white,
    alignItems: 'flex-end',
    ...Platform.select({
      ios: {
        paddingBottom: 16,
      },
      android: {
        paddingBottom: 8,
      },
    }),
  },
  inputContainerBottom: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.greys.lightest,
    backgroundColor: colors.greys.white,
    alignItems: 'flex-end',
    ...Platform.select({
      ios: {
        paddingBottom: 50,
      },
      android: {
        paddingBottom: 8,
      },
    }),
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 12,
    borderRadius: 20,
    backgroundColor: colors.greys.lightest,
    maxHeight: 100,
    fontSize: 16,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
  },
  sendButton: {
    marginBottom: 4,
  },
  loaderContainer: {
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  loadingBubble: {
    backgroundColor: colors.greys.lightest,
    padding: 16,
    borderRadius: 12,
  },
 
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.greys.black,
    marginHorizontal: 4,
  },
});

export default styles;