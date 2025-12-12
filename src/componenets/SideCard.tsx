import '..//componenets/ComponentsStyling/SideCard.css'

interface SideCardProps {
    id: number;
    title: string;
    image: string;
    description: string;
    stay: number;
    priceOriginal: number;
}

function SideCard({id, title, image, description, stay, priceOriginal}: SideCardProps) {
    return(
        <>
            <div className="card SideCard">
                <div className="SideCard-body">
                            <img src={image} alt="..."/>
                        <div className="SideCard-textbox">
                            <div className='CardTopic'>
                                <h5 className="SideCard-title">{title}</h5>
                                <p className="SideCard-price">${priceOriginal} pp</p>
                            </div>
                            <div className="SideCard-info">
                                <p className='SideCard-description'>{description}</p>
                                {/*<p className='SideCard-stay'>⏲ {stay} nights</p>*/}
                            </div>
                            <a href="#" className="btn btn-primary">Book trip</a>
                        </div>
                </div>
            </div>
        </>
    );
}

export default SideCard;