import { getDoc } from "@junobuild/core-peer";


export const getTheData = async(id: string) => {
    try {
        const myDoc =  await getDoc({
        collection: "links", 
        key: id,
        });
        console.log(typeof(myDoc?.data))
        console.log(myDoc?.data)
        console.log(id);
        console.log(myDoc)
        return myDoc?.data;
    } catch (error) {
        console.log(error)
    }
}
