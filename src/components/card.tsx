import type {Card} from '../types/card.interface'
import {useCard }from '../hooks/useCardCard.ts'
import '../App.css'
export default function Card(){
    const {loading,input,setInput, onsubmit,characters,page,setPage} = useCard()
    if(loading){
        return(
            <>
                <div className="back">
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="back vh-100">
                <nav className="navbar navbar-light bg-purple">
                <div className="container-fluid">
                    <a className="navbar-brand">RickAndMorty</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={input} onChange={(e) => setInput(e.target.value)}/>
                            <button className="btn btn-outline-dark" type="submit" onClick={(e)=>onsubmit(e, input)}>Search</button>
                    </form>
                </div>
            </nav>
                <div className='back'>
                    <div className="container back">
                        <div className="row">
                            {characters?.map((item) => (
                                <div className="col-sm-3 mb-4" key={item?.id}>
                                    <div className="card h-100" style={{ width: '100%' }}>
                                        <img src={item?.image} className="card-img-top" width="100" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item?.name}</h5>
                                            <p className="card-text">{item?.status} - {item?.species}</p>
                                            <a href="#" className="btn">Guardar</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <nav aria-label="...">
                        <ul className="pagination justify-content-center">
                            <li className="page-item ola"><a href="#" className="page-link" style={{backgroundColor:'rgb(112, 61, 160)',color:'black',border: 'solid black'}} onClick={(e)=>{
                                e.preventDefault
                                setPage(page-1)
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                                </svg></a></li>
                            <li className="page-item"><a className="page-link" href="#" style={{backgroundColor:'rgb(112, 61, 160)',color:'black', border: 'solid black'}}>{page}</a></li>
                            <li className="page-item"><a className="page-link" href="#" style={{backgroundColor:'rgb(112, 61, 160)',color:'black',border: 'solid black'}} onClick={(e)=>{
                                e.preventDefault
                                setPage(page+1)
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                </svg></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}