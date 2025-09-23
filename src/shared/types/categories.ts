import { z } from "zod";

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  list: z.array(z.object({ id: z.string(), name: z.string() })),
  count: z.number(),
});
export type TCategory = z.infer<typeof CategorySchema>;

export const CategoriesListSchema = z.array(CategorySchema);
export type TCategoriesList = z.infer<typeof CategoriesListSchema>;
