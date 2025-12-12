import './ComponentsStyling/HomepageTravlrDetails.css';

interface HomepageTravlrDetailsProps {
    image: string;
    title: string;
    description: string;
}

function HomepageTravlrDetails({image, title, description} : HomepageTravlrDetailsProps) {
    return (
        <div className="TravlrDetailsInHomepage">
            <img src={image} alt=""/>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
}

export default HomepageTravlrDetails;