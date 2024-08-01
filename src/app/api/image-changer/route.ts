import { Buffer } from "node:buffer";
import { ERROR_MESSAGE } from "../constants/message";
export const maxDuration = 30;

export async function POST(req: Request) {
  const body = await req.json();
  const { imageSrc = undefined } = body;

  if (!imageSrc) {
    return Response.json(
      { data: null, message: ERROR_MESSAGE.INVALID_INPUT },
      {
        status: 400,
      }
    );
  }

  const response = await fetch(imageSrc, {});
  const data = (await response.arrayBuffer()) as any;
  const buffer = Buffer.from(data, "binary").toString("base64");
  return Response.json({ data: buffer });
}
