import {Screen} from '@xyz/components';
import {colors} from '@xyz/style-guide';
import {callHuggingFaceAPI} from '@xyz/utility/api';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Keyboard,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';
import React from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

export default function Home() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const [dot1] = useState(new Animated.Value(0));
  const [dot2] = useState(new Animated.Value(0));
  const [dot3] = useState(new Animated.Value(0));

  useEffect(() => {
    const animateDots = () => {
      Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.sequence([
              Animated.timing(dot1, {
                toValue: 1,
                duration: 400,
                easing: Easing.ease,
                useNativeDriver: true,
              }),
              Animated.timing(dot1, {
                toValue: 0,
                duration: 400,
                easing: Easing.ease,
                useNativeDriver: true,
              }),
            ]),
            Animated.sequence([
              Animated.delay(200),
              Animated.timing(dot2, {
                toValue: 1,
                duration: 400,
                easing: Easing.ease,
                useNativeDriver: true,
              }),
              Animated.timing(dot2, {
                toValue: 0,
                duration: 400,
                easing: Easing.ease,
                useNativeDriver: true,
              }),
            ]),
            Animated.sequence([
              Animated.delay(400),
              Animated.timing(dot3, {
                toValue: 1,
                duration: 400,
                easing: Easing.ease,
                useNativeDriver: true,
              }),
              Animated.timing(dot3, {
                toValue: 0,
                duration: 400,
                easing: Easing.ease,
                useNativeDriver: true,
              }),
            ]),
          ]),
        ]),
      ).start();
    };

    if (loading) {
      animateDots();
    }
  }, [loading, dot1, dot2, dot3]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

 
  // Replace the loading view with this custom loader
  const renderLoader = () => (
    <View style={styles.loaderContainer}>
      <View style={styles.loadingBubble}>
        <View style={styles.dotsContainer}>
          <Animated.View
            style={[
              styles.dot,
              {
                transform: [
                  {
                    scale: dot1.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.5],
                    }),
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.dot,
              {
                transform: [
                  {
                    scale: dot2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.5],
                    }),
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.dot,
              {
                transform: [
                  {
                    scale: dot3.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.5],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </View>
    </View>
  );

  const handleSubmit = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {text: input.trim(), isUser: true};
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Scroll after user message
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({animated: true});
    }, 100);

    try {
      const data = await callHuggingFaceAPI(
        'facebook/blenderbot-400M-distill',
        {
          inputs: input,
          parameters: {max_length: 10, temperature: 0.7},
        },
      );

      const aiMessage = {
        text: data[0].generated_text,
        isUser: false,
      };
      setMessages(prev => [...prev, aiMessage]);
      // Scroll after AI response
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({animated: true});
      }, 100);
    } catch (error) {
      const errorMessage = {
        text: 'Error: ' + error.message,
        isUser: false,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <View style={styles.container}>
          <ScrollView
            ref={scrollViewRef}
            style={styles.chatContainer}
            contentContainerStyle={styles.chatContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            {messages?.map((message, index) => (
              <View
                key={index}
                style={[
                  styles.messageContainer,
                  message.isUser ? styles.userMessage : styles.aiMessage,
                ]}>
                <Text
                  style={[
                    styles.messageText,
                    {
                      color: message.isUser
                        ? colors.greys.white
                        : colors.greys.black,
                    },
                  ]}>
                  {message.text}
                </Text>
              </View>
            ))}
            {loading && renderLoader()}
          </ScrollView>
        </View>
        <View
          style={[
            isKeyboardOpen
              ? styles.inputContainer
              : styles.inputContainerBottom,
          ]}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Ask me anything..."
            multiline
            placeholderTextColor={colors.greys.default}
            ref={inputRef}
            autoFocus={true}
          />
          <IconButton
            icon="send"
            size={24}
            disabled={loading || !input.trim()}
            onPress={handleSubmit}
            style={styles.sendButton}
            iconColor={
              loading || !input.trim()
                ? colors.greys.default
                : colors.reds?.default
            }
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
