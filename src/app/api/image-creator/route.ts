export const maxDuration = 30;

export async function POST(req: Request) {
  const body = await req.json();
  const { prompt } = body;
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
