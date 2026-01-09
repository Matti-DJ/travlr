import './ComponentsStyling/Value.css';

interface ValueProps {
    title: string;
    description: string;
}

function Value({title, description} :ValueProps) {
    return (
        <div className="AchievementsInAboutUs">
            {/*The value the company cares about*/}
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
}

export default Value;