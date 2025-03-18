// api.js
import axios from 'axios';

const HUGGING_FACE_API_TOKEN = ''; // TODO: passyour hugging face api token here

export const callHuggingFaceAPI = async (modelName, inputData) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `https://api-inference.huggingface.co/models/${modelName}`,
      headers: {
        'Authorization': `Bearer ${HUGGING_FACE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: inputData,
    });
    
    return response.data;
  } catch (error) {
    console.error('Error calling Hugging Face API:', error);
    throw error;
  }
};