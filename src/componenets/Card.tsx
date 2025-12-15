import './ComponentsStyling/Card.css';

interface CardProps {
    id: number;
    title: string;
    image: string;
    description: string;
    stay: number
}

function Card({ id, title, image, description}: CardProps) {
    return (
        <>
            <div className="CardContainer" id={`Card-${id}`}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <div className="card-title-price">
                            <h5 className="card-title">{title}</h5>
                        </div>
                        <p className="card-text">{description}</p>
                        {/*<p className="card-stay"> ⏲ {stay} nights</p>*/}
                        <a href="#" className="btn btn-primary">Book trip</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;