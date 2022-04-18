import "./Card.css";

function Card(props) {

    const classes = "card "+ props.className;//to accept className for our default component  //create our custom wrappper component
    return <div className={classes}>{props.children}</div>;
}

export default Card;
