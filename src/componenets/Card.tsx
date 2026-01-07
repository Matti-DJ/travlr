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
                <div className="card">
                    <img src={image} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        {/* Title and price section */}
                        <div className="card-title-price">
                            <h5 className="card-title">{title}</h5>
                        </div>
                        {/* Destination description */}
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary" id="CardButton">Book trip</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;