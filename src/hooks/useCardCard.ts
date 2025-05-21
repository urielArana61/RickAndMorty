import { useState,useEffect } from "react"
import type {Card, character} from '../types/card.interface'
export const useCard = () => {
const [characters,setCharacters] = useState<character[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [input, setInput] = useState("")
    const [page, setPage] = useState < number > (1)
    const url = "https://rickandmortyapi.com/api/character/?page=" + page
    const url2 = "https://rickandmortyapi.com/api/character/?page=" + page + "&name=" + input
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await
                    fetch(url)
                if (!response.ok) {
                    throw new Error('Error en la API')
                }
                const data = await
                    response.json()
                setCharacters(data.results)
                console.log(data.results)

            } catch (e) {
                console.log("error")
            } finally {
                setLoading(false)
            }
        }
        get()
    }, [page])

    const onsubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, text: string) => {
        e.preventDefault();
        if (text == "") {
            console.log('Mostrar completos', text)
            setPage(1)
        } else {
            console.log('Filtrando...', text)
            setInput(text)
            console.log(url2)
            const get2 = async () => {
                setLoading(true)
                setError(null)
                try {
                    const response = await
                        fetch(url2)
                    if (!response.ok) {
                        throw new Error('Error en la API')
                    }
                    const data = await
                        response.json()
                    setCharacters(data.results)
                    console.log(data.results)

                } catch (e) {
                    console.log("error")
                } finally {
                    setLoading(false)
                }
            }
            get2()
        }
    }

    return {
        loading,
        input,
        setInput,
        onsubmit,
        characters,
        page,
        setPage
    }
}