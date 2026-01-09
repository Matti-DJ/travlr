import '..//componenets/ComponentsStyling/EmployeeCard.css'

interface EmployeeCard {
    id: number;
    image: string;
    name: string;
    position: string;
}

function EmployeeCard({id, image, name, position}: EmployeeCard) {
    return (
        <>
            <div className="card" key={id}>
                {/*The card for a employee which has an image at the top and the name and position of the employee at the bottom*/}
                <img src={image} className="card-img" alt="..."/>
                <div className="card-body text-center">
                    <h5>{name}</h5>
                    <p>{position}</p>
                </div>
            </div>
        </>
    );
}

export default EmployeeCard;