import * as dotenv from 'dotenv';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

dotenv.config({ path: __dirname + '/.env' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req, res) {
  console.log('api key!!', !!openai.apiKey);
  const body = await req.json();
  const animal = body.animal || ''; // string like dog
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You will be provided with a product description and seed words, and your task is to generate product names.',
        },
        {
          role: 'user',
          content: `suggest three pet names for the follow ${animal}`,
        },
      ],
      temperature: 0.8,
      max_tokens: 256,
    });
    // console.log('🚀 : response==>', response.choices[0].message.content);
    return Response.json({
      data: response.choices[0].message.content,
      status: 200,
    });
  } catch (error) {
    if (error.response) {
      const message = error.response.data;
      const status = error.response.status;
      console.log(error(status, message));
      return Response.json({
        message,
        status,
      });
    }
    // 에러 발생
    console.error(
      `Error with Open AI API Request: ${error.message}, error Status: ${error.status}`
    );
    const isAuthenticError = error.status === 401;

    return Response.json({
      message: isAuthenticError
        ? 'OpenAI API 키가 설정되지 않았습니다.'
        : 'Error with Open AI API Request',
      status: error.status,
    });
  }
}

// suggest three pet names for the follow ${animal}
