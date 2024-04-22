import { PrismaClient } from "@prisma/client";
import { Videos } from "../db/db.mjs";

const prisma = new PrismaClient();

await prisma.video.deleteMany({});
await prisma.channel.deleteMany({});

for (const video of Videos) {
  const channel = await prisma.channel.create({
    data: {
      ...video.channel,
    },
  });

  await prisma.video.create({
    data: {
      title: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      views: video.views,
      channelId: channel.id,
    },
  });
}

// Videos.forEach(async (video) => {});
