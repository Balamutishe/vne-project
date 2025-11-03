import { client, connectToDb } from "@/lib/mongoRepository/mongoClient";
import { GenderSchema } from "@/shared/types/categories";
import { z } from "zod";

export const CollectionsNamesSchema = z.enum(["men", "women", "unisex"]);
export type TCollectionsNames = z.infer<typeof CollectionsNamesSchema>;

export const CategoriesNamesSchema = z.enum([
  "trousers",
  "shirts",
  "t-shirts",
  "sweaters",
  "jackets",
  "outerwear",
  "bags",
  "hoods",
  "scarfs",
  "caps",
  "balaclavas",
  "dresses",
  "skirts",
]);
export type TCategoriesNames = z.infer<typeof CategoriesNamesSchema>;

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
  _id: z.string(),
  id: z.string(),
  gender: CollectionsNamesSchema,
  group: z.enum(["clothing", "accessories"]),
  slug: z.string(),
  name: z.string(),
  list: z.array(ProductSchema),
});
export type TCategory = z.infer<typeof CategorySchema>;

export const collectionGet = async (collectionName: TCollectionsNames) => {
  try {
    await connectToDb();

    return await client
      .db("vne")
      .collection<TCategory>(collectionName)
      .find({})
      .toArray();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return [];
  } finally {
    await client.close();
  }
};

export const categoryGet = async (
  collectionName: TCollectionsNames,
  categoryName: TCategoriesNames,
): Promise<TCategory> => {
  try {
    await connectToDb();

    const data = await client
      .db("vne")
      .collection<TCategory>(collectionName)
      .find({ slug: categoryName })
      .toArray();

    return data[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    // @ts-ignore
    return [];
  } finally {
    await client.close();
  }
};

export const productGetById = async (productId: string) => {
  try {
    await connectToDb();
    let productFind: TProduct | undefined = undefined;

    const collectionsList = await client.db("vne").listCollections().toArray();
    for (let collectionItem of collectionsList) {
      const collection = await collectionGet(
        collectionItem.name as TCollectionsNames,
      );

      const category = collection.find((category) =>
        category.list.some((product) => product.id.toString() === productId),
      );

      if (category) {
        const result = category.list.find(
          (product) => product.id.toString() === productId,
        );

        if (result) productFind = { ...result, id: result!.id.toString() };
        break;
      }
    }

    if (!productFind) {
      console.log(`Product id: ${productId} not founded`);
    }

    return productFind;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  } finally {
    await client.close();
  }
};

export const productGetByTop = async () => {
  try {
    await connectToDb();
    let productsTop: TProduct[] | [] = [];

    const collectionsList = await client.db("vne").listCollections().toArray();

    for (let collectionItem of collectionsList) {
      const collection = await collectionGet(
        collectionItem.name as TCollectionsNames,
      );

      const categoryTopList = collection
        .map((category) =>
          category.list.filter((product) => product.topList === true),
        )
        .flat();

      productsTop = [...productsTop, ...categoryTopList];
    }

    if (productsTop.length === 0) {
      console.log(`Products top not founded`);
    }

    return { name: "СТИЛЬ ВНЕ ВРЕМЕНИ", list: productsTop };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return { name: "ОШИБКА ПРИ ПОЛУЧЕНИИ ДАННЫХ", list: [] };
  } finally {
    await client.close();
  }
};

export const productGetByFilter = async (
  productName: string,
  collectionName?: TCollectionsNames,
  categoryName?: TCategoriesNames,
) => {
  try {
    await connectToDb();

    if (collectionName && !categoryName) {
      const collection = await collectionGet(collectionName);

      const productList: TProduct[] = collection
        .map((category) => {
          return category.list.filter((product) =>
            product.name.toLowerCase().includes(productName.toLowerCase()),
          );
        })
        .flat();

      return { name: collectionName, list: productList };
    }

    if (collectionName && categoryName) {
      const category = await categoryGet(collectionName, categoryName);

      const listFiltered = category.list.filter((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase()),
      );

      return { name: category.name, list: listFiltered };
    }

    const collectionsList = await client.db("vne").listCollections().toArray();

    let result: TProduct[] = [];

    for (let collectionItem of collectionsList) {
      const collection = await collectionGet(
        collectionItem.name as TCollectionsNames,
      );

      const productsFiltered = collection
        .map((category) => {
          return category.list.filter((product) =>
            product.name.toLowerCase().includes(productName.toLowerCase()),
          );
        })
        .flat();

      if (productsFiltered.length !== 0)
        result = [...result, ...productsFiltered];
    }

    return { name: "ВСЕ РЕЗУЛЬТАТЫ", list: result };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }

    return { name: "ОШИБКА В ПОИСКЕ", list: [] };
  } finally {
    await client.close();
  }
};

export const getDataAll = async () => {
  try {
    await connectToDb();
    let dataAll: TCategory[] | [] = [];

    const collectionsList = await client.db("vne").listCollections().toArray();

    for (let collectionItem of collectionsList) {
      const collection = await collectionGet(
        collectionItem.name as TCollectionsNames,
      );

      const collectionCategories = collection
        .map((category) => category)
        .flat();

      dataAll = [...dataAll, ...collectionCategories];
    }

    if (dataAll.length === 0) {
      console.log(`Data not founded`);
    }

    return dataAll;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return [];
  } finally {
    await client.close();
  }
};
