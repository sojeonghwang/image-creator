import { Buffer } from "node:buffer";
export const maxDuration = 30;

export async function POST(req: Request) {
  const body = await req.json();
  const { imageSrc } = body;

  const response = await fetch(imageSrc, {});
  const data = (await response.arrayBuffer()) as any;
  const buffer = Buffer.from(data, "binary").toString("base64");
  return Response.json({ data: buffer });
}
