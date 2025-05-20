export default function Api(){
    const url="https://rickandmortyapi.com/api/character"
    fetch(url)
        .then((response)=>{
            if (response.ok){
                return response.json()
            }
            throw new Error("Hubo un error")
        })
        .then(data =>{
            console.log(data)
        })
        .catch(error=>{
            console.log(error.mesage)
        })

    return(
        <>

        </>
    )
}