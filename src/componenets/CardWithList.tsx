import '..//componenets/ComponentsStyling/CardWithList.css'

interface CardWithListProps {
    id: number;
    image: string;
    title: string;
    description: string;
    bulletpoints: string[];
}

function CardWithList({id, image, title, description, bulletpoints}: CardWithListProps){
    return (
        <div className="card CardWithList" key={id}>
            <img src={image} className="card-img" alt={title} />
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <p className="card-text-experiences">
                    {description}
                </p>
                <ul className="card-bulletpoints">
                    {bulletpoints.map((point, index) => (
                        <li key={index} className="card-bulletpoint">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardWithList;