import * as dotenv from 'dotenv';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

dotenv.config({ path: __dirname + '/.env' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req, res) {
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
    return Response.json({ data: response.choices[0].message.content });
  } catch (error) {
    if (error.status === 401) {
      return Response.json({
        message: 'OpenAI API 키가 설정되지 않았습니다.',
        status: 401,
      });
    }
    return Response.json({
      message: error.message,
      status: 500,
    });
  }
}

// suggest three pet names for the follow ${animal}
