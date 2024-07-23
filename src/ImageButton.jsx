export function ImageButton({...props}){
    console.log(props)
    return(
        <div className={props.className} >
            <h3>{props.obj.question}</h3>
                <img src={props.obj.image1} onClick = {props.onSelect} />
                <img  src={props.obj.image2} onClick = {props.onSelect}/>
                <img  src={props.obj.image3} onClick = {props.onSelect}/>
        </div>
    );
}
// className ={ props.isSelected ? "active" : undefined}        