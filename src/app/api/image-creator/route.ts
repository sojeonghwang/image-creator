import { ERROR_MESSAGE } from "../constants/message";

export const maxDuration = 30; //next server timeout 설정 방법

/**
 * @description 카카오 API를 이용해 사용자가 입력한 명령어 기반으로 이미지를 만들어주는 API
 */
export async function POST(req: Request) {
  const body = await req.json();
  const { prompt = undefined } = body;

  if (prompt.length === 0 || !prompt) {
    return Response.json(
      { data: null, message: ERROR_MESSAGE.INVALID_INPUT },
      {
        status: 400,
      }
    );
  }

  const res = await fetch(
    "https://api.kakaobrain.com/v2/inference/karlo/t2i?version=2.0",
    {
      method: "POST",
      headers: {
        Authorization: `KakaoAK ${process.env.IMAGE_CREATOR_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "v2.1",
        prompt,
        height: 1024,
        width: 1024,
      }),
    }
  );

  const result = await res.json();

  return Response.json({ data: result });
}
