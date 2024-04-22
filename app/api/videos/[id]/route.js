// GET /api/videos/[id]
// GET /api/videos/345
// GET "/api/music/box"
import { PrismaClient } from "@prisma/client";

export async function GET(request, { params }) {
  // pull video id from params
  const id = params.id; // "345"
  const prisma = new PrismaClient();
  // using the id, fetch video from database with corresponding id
  const video =
    (await prisma.video.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        channel: true,
      },
    })) ?? "no video found";
  // const video =
  //   Videos.find((video) => video.id === Number(id)) ?? "no video found";

  // return video
  return Response.json(video);
}
