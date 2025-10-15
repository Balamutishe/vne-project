import { z } from "zod";

export const GenderSchema = z.enum(["men", "women", "unisex"]);
export type TGender = z.infer<typeof GenderSchema>;

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  gender: GenderSchema,
  category: z.string(),
  price: z.number(),
  quantity: z.number(),
  imagesUrl: z.array(z.string()),
  previewImageUrl: z.string(),
  topList: z.boolean(),
  details: z.object({
    description: z.string(),
    care: z.string(),
    sizeChart: z.array(
      z.object({
        sizeShared: z.string(),
        sizeRussian: z.number(),
        sizeBreast: z.number(),
        sizeWaist: z.number(),
        sizeHips: z.number(),
      }),
    ),
    color: z.array(z.string()),
  }),
});
export type TProduct = z.infer<typeof ProductSchema>;

export const CategorySchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  list: z.array(ProductSchema),
  count: z.number(),
});
export type TCategory = z.infer<typeof CategorySchema>;

export const CategoriesListSchema = z.array(CategorySchema);
export type TCategoriesList = z.infer<typeof CategoriesListSchema>;

export const CollectionSchema = z.object({
  clothing: CategoriesListSchema,
  accessories: CategoriesListSchema,
});
export type TCollection = z.infer<typeof CollectionSchema>;

export const CategoriesResponseDataSchema = z.object({
  men: CollectionSchema,
  women: CollectionSchema,
  unisex: CollectionSchema,
});
export type TCategoriesResponseData = z.infer<
  typeof CategoriesResponseDataSchema
>;
