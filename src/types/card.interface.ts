export type Card ={
    info:{
        count: number
        pages: number
        next: string
        prev: string
    }
    results: character[]
}

export type character={
    id: number
    name: string
    status:string
    species: string
    type:string
    gender: string
    origin:{
        name:string
        url:string
    }
    location:{
        name:string
        url:string
    }
    image:string
    episode : string[]
    url: string
    created: string
}
