import { MONGODB_URI, MONGODB_DB } from '$env/static/private';
import { MongoClient } from 'mongodb';

const client = new MongoClient(MONGODB_URI);

// Connect to the database
export async function start_mongo() {
    return await client.connect();
}

export default client.db(MONGODB_DB)