# RealTimeChat with AI

## Overview
"RealTimeChat" is a React Native application that demonstrates how to integrate an AI model API from Hugging Face. This project showcases how to send text data to an AI model and display the response in a user-friendly interface.

## Features
- AI-powered text processing via Hugging Face API
- User-friendly React Native interface
- Works on both Android and iOS
- Secure API communication

## Demo

https://github.com/user-attachments/assets/6c76f22b-a298-4e3f-9de7-8c35b47e317d


## Prerequisites
Before running the app, ensure you have the following:
- Node.js installed
- React Native CLI set up
- A Hugging Face API token
- Android/iOS development environment configured

## Installation
Clone the repository and install dependencies:
```sh
git clone https://github.com/yourusername/xyz.git
cd xyz
npm install
```

## API Configuration
Create an `.env` file in the root directory and add your Hugging Face API key:
```
HUGGINGFACE_API_KEY=your_api_key_here
```

## Running the App
Start the development server:
```sh
npx react-native start
```

Run the app on an emulator or device:
```sh
npx react-native run-android  # For Android
npx react-native run-ios      # For iOS
```

## Usage
1. Open the app.
2. Enter a text prompt.
3. Press the "Analyze" button to send the request to the Hugging Face API.
4. View the AI-generated response in the UI.

## Dependencies
- `react-native` - Core framework for building the app
- `react-native-dotenv` - For managing environment variables
- `axios` - For making API requests

## API Integration Example
Here's how the API request is handled:
```js
import axios from 'axios';
import { API_KEY } from '@env';

const fetchAIResponse = async (text) => {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/YOUR_MODEL_NAME',
      { inputs: text },
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};
```

## Contributing
Feel free to submit issues and pull requests to enhance the project!

## License
This project is licensed under the MIT License.

