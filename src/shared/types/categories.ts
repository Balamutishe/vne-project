import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  gender: z.enum(["men", "women", "unisex"]),
  category: z.string(),
  price: z.number(),
  quantity: z.number(),
  imagesUrl: z.array(z.string()),
  previewImageUrl: z.string(),
  topList: z.boolean(),
});
export type TProduct = z.infer<typeof ProductSchema>;

export const CategorySchema = z.object({
  id: z.string(),
  slug: z.enum([
    "accessories",
    "accessoriesAll",
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
  list: z.array(ProductSchema),
  count: z.number(),
});
export type TCategory = z.infer<typeof CategorySchema>;

export const CategoriesListSchema = z.array(CategorySchema);
export type TCategoriesList = z.infer<typeof CategoriesListSchema>;

export const CategoriesResponseDataSchema = z.object({
  men: CategoriesListSchema,
  women: CategoriesListSchema,
  accessories: CategoriesListSchema,
});
export type TCategoriesResponseData = z.infer<
  typeof CategoriesResponseDataSchema
>;
