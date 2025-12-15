import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";
import '..//pageStyling/Experiences.css'
import CardWithList from "../componenets/CardWithList.tsx";

const bulletpointsforCards = [
    {   id: 1,
        image: './public/Experiences/Hiking.webp',
        title: '4-Day Alps Crossing Hike',
        description: "A challenging but rewarding guided trek across the Bavarian and Austrian Alps, staying in traditional mountain huts along the way.",
        bulletpoints: ["Hike from Garmisch to Sterzing", "Sleep in high-altitude alpine huts", "Cross the spectacular Austrian border", "Enjoy hearty Tyrolean mountain cuisine"]
    },

    {   id: 2,
        image: './MaldivesCarousel.jpg',
        title: 'Maldives Deep Dive Safari',
        description: "A 7-day liveaboard diving expedition exploring the untouched southern atolls, far away from the commercial resorts.",
        bulletpoints: ["15 dives including night dives",
            "Swim with whale sharks and mantas",
            "BBQ dinner on a deserted sandbank",
            "PADI Advanced certification included"]
    },

    {   id: 3,
        image: './BaliCarousel.webp',
        title: 'Bali Surf & Yoga Retreat',
        description: "Recharge your body and mind with a 10-day intensive camp in Canggu combining morning surf lessons with sunset meditation.",
        bulletpoints: ["Daily 2-hour private surf coaching",
            "Unlimited Vinyasa yoga classes",
            "Traditional Balinese massage therapy",
            "Organic plant-based meal plan"]
    },

    {   id: 4,
        image: './Experiences/Tokyo.webp',
        title: 'Tokyo Neon Drift & Gaming',
        description: "Experience the adrenaline of Tokyo's underground car culture followed by a private tour of the city's hidden nocturnal gaming arcades.",
        bulletpoints: ["Professional drift taxi experience",
            "Late-night Daikoku Futo car meet",
            "Retro arcade tour in Akihabara",
            "Street food tour in Omoide Yokocho"]
    },

    {
        id: 5,
        image: './Experiences/AmazonRainforest.jpg',
        title: 'Amazon Jungle Survival Trek',
        description: "Embark on a 5-day immersive survival experience deep in the Peruvian Amazon, learning indigenous techniques and wildlife tracking.",
        bulletpoints: ["Learn to build shelter and find water",
            "Night walks to spot caimans",
            "Piranha fishing in the river",
            "Medicinal plant workshop with a guide"],
    },

    {
        id: 6,
        image: './Experiences/SantoriSailing.jpg',
        title: 'Santorini Sailing Week',
        description: "Captain your own yacht (or hire a skipper) for a week of island hopping through the Cyclades in Greece.",
        bulletpoints: ["Sail through the volcanic caldera",
            "Swim in volcanic hot springs",
            "Sunset dinner in Oia",
            "Explore hidden coves by boat"]
    }
]

function Experiences() {
    return (
        <>
            {/* Navbar */}
            <Navbar/>

            {/*Experiences Title*/}
            <div className="ExperienceTitle">
                <h1>
                    Curated Experiences
                </h1>
                <p>
                    Choose the perfect experience and create a unforgettable memory
                </p>
            </div>

            {/*Experiences cards*/}
            <div className="ExperiencesCard">
                {bulletpointsforCards.map((point) => (
                   <CardWithList
                       id={point.id}
                       image={point.image}
                       title={point.title}
                       description={point.description}
                       bulletpoints={point.bulletpoints}
                    />
                ))}
            </div>

            {/*Experience Cards*/}
            <div>

            </div>

            {/*Footer*/}
            <Footer/>
        </>
    );
}

export default Experiences;