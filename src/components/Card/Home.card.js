export default function CardHome(props) {
    return (
        <div className="card__home">
            <div className={props.class}>
                <img src={props.logo} alt={props.alt} />
            </div>
            <div className="card__home__content">
                <span className="card__home__content-title">
                    {props.title}
                    {props.unit}
                </span>
                <span className="card__home__content-details">
                    {props.details}
                </span>
            </div>
        </div>
    );
}
