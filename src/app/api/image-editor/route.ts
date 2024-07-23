// @description 기능만 만들어두고 쓰지 않을 예정(제대로 피드백을 반영하지 못함 ㅠㅠ)
export async function POST(req: Request) {
  const body = await req.json();
  const { prompt, image } = body;
  const res = await fetch(
    "https://api.kakaobrain.com/v2/inference/karlo/variations",
    {
      method: "POST",
      headers: {
        Authorization: `KakaoAK ${process.env.IMAGE_CREATOR_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "v2.1",
        prompt,
        image,
        height: 1024,
        width: 1024,
        return_type: "base64_string",
      }),
    }
  );

  const result = await res.json();

  return Response.json({ data: result });
}
