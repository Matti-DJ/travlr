import './ComponentsStyling/Achievements.css';
import CountUp from "../componenets/CountUp.tsx";

interface AchievementsProps {
    image: string;
    title: number;
    description: string;
}

function Achievments({image, title, description}: AchievementsProps) {
    return (
        <div className="AchievementsInAboutUs">
            <img src={image} alt="Achievement" className="Achievements__image" />
            <CountUp
                from={0}
                to={title}
                separator=". "
                direction="up"
                duration={2}
                className="count-up-text"
            />
            <p>{description}</p>
        </div>
    );
}

export default Achievments;

