import { MongoClient } from "mongodb";

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://Vercel-Admin-server-mongo:YgUmivrAWKuhC1VK@server-mongo.fvqlbng.mongodb.net/?retryWrites=true&w=majority";

export const client = new MongoClient(uri, {
  maxPoolSize: 10,
});

export const connectToDb = async () => {
  try {
    const clientPromise = await client.connect();
    return await clientPromise.db("vne").command({ ping: 1 });
  } catch (err) {
    console.error("Can't connect to database");
    await client.close();
  }
};
