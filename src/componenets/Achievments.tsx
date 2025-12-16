import './ComponentsStyling/Achievements.css';

interface AchievementsProps {
    image: string;
    title: string;
    description: string;
}

function Achievments({image, title, description} :AchievementsProps) {
    return (
        <div className="AchievementsInAboutUs">
            <img src={image} alt=""/>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
}

export default Achievments;