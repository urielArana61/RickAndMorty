import {useEffect, useState} from "react"
import type {Card, character} from '../types/card'
export default function Card(){
    const [characters,setCharacters] = useState<character[] | null>(null)
    const url = "https://rickandmortyapi.com/api/character"
    useEffect(()=>{
         fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Hubo un error")
        })
        .then((data:Card) => {
            console.log(data.results)
            setCharacters(data.results)
        })
        .catch(error => {
            console.log(error.mesage)
        })
    },[])   
    return (
        <>
            <div className="container back">
                <div className="row">
                    {characters?.slice(0, 20).map((item) => (
                        <div className="col-sm-3 mb-4" key={item?.id}>
                            <div className="card h-100" style={{ width: '100%' }}>
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
            </div>
        </>
    )
}