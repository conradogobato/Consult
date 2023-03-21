import './explanation_box.css'

const Explanation_box = (props)=>{
    return(
        <div className='box_exp'>
            <img src={props.logo}></img>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Explanation_box