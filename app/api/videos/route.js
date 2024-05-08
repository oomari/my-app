import { PrismaClient } from "@prisma/client";

//
//
/**
 * GET /api/videos?page=3&skip=2
 * Return list of videos
 * @param page the page number to fetch
 */
export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ?? 1;

  const PAGE_SIZE = 8;
  const prisma = new PrismaClient();
  const videos = await prisma.video.findMany({
    include: {
      channel: true,
    },
    skip: PAGE_SIZE * (parseInt(page) - 1),
    take: PAGE_SIZE,
  });

  return Response.json({ videos });
}

/* const res = await fetch('https://data.mongodb-api.com/...', {
//   headers: {
//     'Content-Type': 'application/json',
//     'API-Key': process.env.DATA_API_KEY,
//   },
// })
// const data = await res.json()
// get videos from youtube api
*/
