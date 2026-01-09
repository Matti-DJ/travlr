import '..//componenets/ComponentsStyling/CardWithList.css'

interface CardWithListProps {
    id: number;
    price: string;
    image: string;
    title: string;
    description: string;
    bulletpoints: string[];
}

function CardWithList({id, price, image, title, description, bulletpoints}: CardWithListProps){
    return (
        <div className="card CardWithList" key={id}>
            {/*The card for the experiences*/}
            <img src={image} className="card-img" alt={title} />
            <div className="card-body">
                {/*Topic of the experience*/}
                <div className='CardTopic'>
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p className="card-description">
                        ${price} pp
                    </p>
                </div>
                <p className="card-text-experiences">
                    {description}
                </p>
                <ul className="card-bulletpoints">
                    {/*The list in the card which includes features of the experiences*/}
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