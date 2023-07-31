import * as dotenv from 'dotenv';
import { NextResponse } from 'next/server';
// import { Configuration, OpenAIApi } from 'openai';

dotenv.config({ path: __dirname + '/.env' });

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req) {
  const body = await req.json();
  const animal = body.animal || '';

  console.log('configuration.apiKey', configuration.apiKey);

  const response = await openai.createChatCompletion({
    model: 'text-davinci-003',
    prompt: `suggest three pet names for the follow ${animal}`,
    temperature: 0.8,
    max_tokens: 100,
  });
  return Response.json({ result: response.data.choices[0].text });
}

// suggest three pet names for the follow ${animal}
