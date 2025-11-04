import { MongoClient } from "mongodb";

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://Vercel-Admin-server-mongo:YgUmivrAWKuhC1VK@server-mongo.fvqlbng.mongodb.net/?retryWrites=true&w=majority";

export const clientPromise = MongoClient.connect(uri, {
  maxPoolSize: 10,
  monitorCommands: true,
});

export const connectToDb = async () => {
  try {
    const client = await clientPromise;
    return client.db("vne");
  } catch (err) {
    console.error("Can't connect to database");
  }
};
