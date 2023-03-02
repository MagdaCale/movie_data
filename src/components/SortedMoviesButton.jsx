

const SortedMoviesButton = ({sortTitle, sortTitleReserve }) => {

    
    return(
        <>
            <button onClick={sortTitle}>A bis Z</button>    
            <button onClick={sortTitleReserve}>Z bis A</button>    
        </>
    )
}

export default SortedMoviesButton

