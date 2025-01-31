import db from '$lib/server/mongo.server'
import { MONGODB_COLLECTION } from '$env/static/private';

// Get the DB client with a Database and connect to its collection.
export const data = db.collection(MONGODB_COLLECTION)
