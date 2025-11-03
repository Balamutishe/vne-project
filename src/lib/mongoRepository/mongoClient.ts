import { MongoClient } from "mongodb";

const uri = process.env.DB_URI!;

export const client = new MongoClient(uri, {
  maxPoolSize: 10,
});

export const connectToDb = async () => {
  try {
    const clientPromise = await client.connect();
    await clientPromise.db("vne").command({ ping: 1 });
  } catch (err) {
    console.log("Can't connect to database");
    await client.close();
  }
};
