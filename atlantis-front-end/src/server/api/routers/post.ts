import { eq } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  queeryParts: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input }) => {
      return await db.query.posts.findMany({
        where: eq(posts.part_title, input.text),
      });
    }
  ),
});

export const nodeRouter = createTRPCRouter({
  graphFull: publicProcedure
    .query(async () => {
      return db.query.graph
    }
  ),
});
