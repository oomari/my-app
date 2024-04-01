// GET /api/videos/[id]
// GET /api/videos/345
// GET "/api/music/box"
import { Videos } from "@/db/db";

export async function GET(request, { params }) {
  // pull video id from params
  const id = params.id; // "345"

  // using the id, fetch video from database with corresponding id
  const video =
    Videos.find((video) => video.id === Number(id)) ?? "no video found";

  // return video
  return Response.json(video);
}
