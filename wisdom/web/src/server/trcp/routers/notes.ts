import { z } from 'zod';
import { publicProcedure, router } from '../trcp';
import { db, notes } from '../../../db'
import { eq } from 'drizzle-orm';

export const noteRouter = router({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    )
    .mutation(
      async ({ input }) => await db.insert(notes).values({ content: input.content, title: input.title }).returning()
    ),
  list: publicProcedure.query(async () => {
    const selectedNotes = await db.select().from(notes);
    return selectedNotes.map((note) => ({ ...note, id: +note.id }));
  }),
  remove: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ input }) => await db.delete(notes).where(eq(notes.id, input.id)).returning()),
});
