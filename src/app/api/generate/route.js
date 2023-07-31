import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log('env', process.env.OPENAI_API_KEY);

const response = await openai.createChatCompletion({
  model: 'gpt-3.5-turbo',
  messages: [],
  temperature: 0.8,
  max_tokens: 256,
});
