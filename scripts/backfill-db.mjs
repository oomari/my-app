import { PrismaClient } from "@prisma/client";
import { Videos } from "../db/db.mjs";

const prisma = new PrismaClient();

await prisma.comment.deleteMany({});
await prisma.video.deleteMany({});
await prisma.channel.deleteMany({});

for (const video of Videos) {
  // create channel for video
  const channel = await prisma.channel.create({
    data: {
      ...video.channel,
    },
  });

  // create video row in db
  const newVideo = await prisma.video.create({
    data: {
      title: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      views: video.views,
      channelId: channel.id,
    },
  });

  // grab comments
  const comments = video.comments ?? [];
  // for each comment create a comment row in db
  comments.forEach(async (comment) => {
    await prisma.comment.create({
      data: {
        body: comment,
        videoId: newVideo.id,
      },
    });
  });
}

// Videos.forEach(async (video) => {});
