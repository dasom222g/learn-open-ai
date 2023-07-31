import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request) {
  const body = await request.json();
  const animal = body.animal || '';
  // const completion = await openai.createChatCompletion({
  //   model: 'gpt-3.5-turbo',
  //   // 메시지 설정 | 메커니즘은 system -> user -> assistant -> user -> assistant 반복
  //   prompt: `Suggest three pet names for the follow`,
  // });
  // const fortune = completion.data.choices[0].message;
  // console.log('🚀 : fortune===>', fortune);
  return Response.json({ result: 'bla' });
}

// const response = await openai.createChatCompletion({
//   model: 'gpt-3.5-turbo',
//   messages: [],
//   temperature: 0.8,
//   max_tokens: 100,
// });
