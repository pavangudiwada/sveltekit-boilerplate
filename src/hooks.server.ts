import { start_mongo } from "$lib/server/mongo.server"

// Runs everytime the server is started/restarted, helps maintain a connection with the DB
async function initialize() {
    try {
        await start_mongo();
        console.log("Mongo Started")
    } catch (error) {
        console.error("Error starting Mongo", error)
    }
}

initialize()