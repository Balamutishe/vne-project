import { z } from "zod";

export const CategorySchema = z.object({
  id: z.string(),
  slug: z.enum([
    "accessories",
    "dresses",
    "jackets",
    "outerwear",
    "skirts",
    "t-shirts",
    "shirts",
    "sweaters",
    "tops",
    "trousers",
  ]),
  name: z.string(),
  list: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      slug: z.string(),
      price: z.number(),
      quantity: z.number(),
      imagesUrl: z.array(z.string()),
      previewImageUrl: z.string(),
    }),
  ),
  count: z.number(),
});
export type TCategory = z.infer<typeof CategorySchema>;

export const CategoriesListSchema = z.array(CategorySchema);
export type TCategoriesList = z.infer<typeof CategoriesListSchema>;

export const CategoriesResponseDataSchema = z.object({
  categoriesMen: CategoriesListSchema,
  categoriesWomen: CategoriesListSchema,
  accessoriesListAll: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      slug: z.string(),
      price: z.number(),
      quantity: z.number(),
      imagesUrl: z.array(z.string()),
      previewImageUrl: z.string(),
    }),
  ),
});
export type TCategoriesResponseData = z.infer<
  typeof CategoriesResponseDataSchema
>;
