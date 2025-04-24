export async function getAlldata(recipes) {
    const url= "https://dummyjson.com/recipes";
    try{

        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        let data=[json.recipes];
        let recipes=data[0];
        //console.log(data);
        // console.log(recipes[5]);
        return recipes;
    }
    catch(error){
        console.error('Error Message:'+ error.message);
        return[];
    }
}

// getAlldata();

