import './info_box.css'

const Info_box = (props) =>{
    
    return(
        <div className='box'>
            <img src={props.image}/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Info_box