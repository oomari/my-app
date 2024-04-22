import { PrismaClient } from "@prisma/client";
export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()
  // get videos from youtube api
  const prisma = new PrismaClient();
  const videos = await prisma.video.findMany({
    include: {
      channel: true,
    },
  });

  return Response.json({ videos });
}
