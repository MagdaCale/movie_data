

const Data = (props) =>{
    return (
        <div className='MovieContainer'>
            <h3>{props.title}</h3>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <p>{props.genre.map(item => <li>{item}</li>)}</p>
            {/* <div>{props.genre.map(item => <p>{item}</p>)}</div>*/}
        </div>

    )
}
export default Data

