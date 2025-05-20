export default function Header(){

    return (
        <>
            <nav className="navbar navbar-light bg-purple">
                <div className="container-fluid">
                    <a className="navbar-brand">RickAndMorty</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </nav>  
        </>
    )
}