import { data } from "$lib/server/trialdb.server";
import type { PageServerLoad } from "./$types";


// Runs on the server to get data from the DB, TODO: Change "tutorials" based on requirements
export const load: PageServerLoad = async function () {
    const tutorials = await data.find({}, {
        limit: 2, projection: {
            title: 1
        }
    }).toArray()


    // Mongo DB attaches _id object, convert it to string TODO: Change "tutorials" based on requirements
    const serializedTutorials = tutorials.map(tutorials => (
        {
            ...tutorials,
            _id: tutorials._id.toString()
        }
    ))

    console.log(serializedTutorials)
    return {
        data: serializedTutorials // TODO: Export data as required
    }
}