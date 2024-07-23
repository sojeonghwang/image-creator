export const maxDuration = 30;

export async function POST(req: Request) {
  const body = await req.json();
  const { prompt } = body;
  const res = await fetch(
    "https://naveropenapi.apigw.ntruss.com/nmt/v1/translation",
    {
      method: "POST",
      headers: {
        "X-NCP-APIGW-API-KEY-ID": `${process.env.TRANSLATOR_KEY_ID}`,
        "X-NCP-APIGW-API-KEY": `${process.env.TRANSLATOR_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: "ko",
        target: "en",
        text: prompt,
        image_format: "png",
      }),
    }
  );

  const result = await res.json();

  return Response.json({ data: result });
}
