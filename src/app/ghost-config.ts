import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: "http://localhost:2368",
    key: "e312dde7a131df170417430561",
    version: "v5.0"
})

export async function getPosts(){
    return await api.posts
    .browse({
        include: ['tags', 'authors'],
        limit: 10
    }).catch(err=>{
        // throw new Error(err)
        console.log(err);
    })
}

