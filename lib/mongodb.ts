import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

if (!dbName) {
  throw new Error("Missing MONGODB_DB_NAME environment variable");
}

type GlobalMongoCache = {
  clientPromise?: Promise<MongoClient>;
};

const globalForMongo = globalThis as typeof globalThis & {
  __mongoCache?: GlobalMongoCache;
};

const mongoCache = globalForMongo.__mongoCache ?? {};

if (!globalForMongo.__mongoCache) {
  globalForMongo.__mongoCache = mongoCache;
}

if (!mongoCache.clientPromise) {
  const client = new MongoClient(uri);
  mongoCache.clientPromise = client.connect();
}

export const mongoClientPromise = mongoCache.clientPromise;

export async function getMongoDatabase() {
  const client = await mongoClientPromise;
  return client.db(dbName);
}
