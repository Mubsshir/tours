import { useState } from "react";
import styles from "./TourCard.module.css";
const TourCard = (props) => {
    const [readMore, setReadMore] = useState(false);
    const ShowMoreHandler = () => {
        setReadMore(!readMore);
    }
    const onClickHandler = () => {
        props.clickHandler(props.id);
    }
    return (
        <article className={styles.TourCard}>
            <img
                src={props.img}
                alt="tour img"
            />
            <h3>{props.title}</h3>
            <h4>$ {props.price}</h4>
            <p>
                {readMore ? `${props.description}` : `${props.description.substring(0, 200)}....`}
                <span onClick={ShowMoreHandler}>{readMore ? "Show less" : "Read more"}</span>
            </p>
            <button onClick={onClickHandler}>Not interested</button>
        </article>
    );
};

export default TourCard;
