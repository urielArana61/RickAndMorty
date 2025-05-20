import {useEffect, useState} from "react"
import type {Card} from '../types/card'
export default function Card(){
    const [characters,setCharacters] = useState<Card[] | null>(null)
    const url = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10"
    useEffect(()=>{
         fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Hubo un error")
        })
        .then((data:Card[]) => {
            console.log(data)
            setCharacters(data)
        })
        .catch(error => {
            console.log(error.mesage)
        })
    },[])   
    return(
        <>
        <div>
            {characters?.slice(0,20).map((item)=> (
                <div className="col">
                    <div className="card" style={{ width: '18rem' }} key={item?.id}>
                        <img src={item?.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item?.name}</h5>
                            <p className="card-text">{item?.status} - {item?.species}</p>
                            <a href="#" className="btn btn-primary">Guardar</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}