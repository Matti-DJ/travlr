import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";
import '..//pageStyling/Experiences.css'
import CardWithList from "../componenets/CardWithList.tsx";
import TableRow from "../componenets/TableRow.tsx";

const bulletpointsforCards = [
    {   id: 1,
        price: '1650',
        image: './public/Experiences/Hiking.webp',
        title: '4-Day Alps Crossing Hike',
        description: "A challenging but rewarding guided trek across the Bavarian and Austrian Alps, staying in traditional mountain huts along the way.",
        bulletpoints: ["Hike from Garmisch to Sterzing", "Sleep in high-altitude alpine huts", "Cross the spectacular Austrian border", "Enjoy hearty Tyrolean mountain cuisine"]
    },

    {   id: 2,
        price: '3850',
        image: './MaldivesCarousel.jpg',
        title: 'Maldives Deep Dive Safari',
        description: "A 7-day liveaboard diving expedition exploring the untouched southern atolls, far away from the commercial resorts.",
        bulletpoints: ["15 dives including night dives",
            "Swim with whale sharks and mantas",
            "BBQ dinner on a deserted sandbank",
            "PADI Advanced certification included"]
    },

    {   id: 3,
        price: '2950',
        image: './BaliCarousel.webp',
        title: 'Bali Surf & Yoga Retreat',
        description: "Recharge your body and mind with a 10-day intensive camp in Canggu combining morning surf lessons with sunset meditation.",
        bulletpoints: ["Daily 2-hour private surf coaching",
            "Unlimited Vinyasa yoga classes",
            "Traditional Balinese massage therapy",
            "Organic plant-based meal plan"]
    },

    {   id: 4,
        price: '4999',
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
        price: '2099',
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
        price: '100.000+',
        image: './Experiences/SantoriSailing.jpg',
        title: 'Santorini Sailing Week',
        description: "Captain your own yacht (or hire a skipper) for a week of island hopping through the Cyclades in Greece.",
        bulletpoints: ["Sail through the volcanic caldera",
            "Swim in volcanic hot springs",
            "Sunset dinner in Oia",
            "Explore hidden coves by boat"]
    }
]

const TableValues = [

    {
        id: 1,
        packageType: "Day trip",
        duration: 1,
        priceOrg: 100,
        priceNew: 49.99,
    },

    {   id: 2,
        packageType: 'Weekend Getaway',
        duration: 3,
        priceOrg: 300,
        priceNew: 199.99,
    },

    {   id: 3,
        packageType: 'Week Exploration',
        duration: 6,
        priceOrg: 800,
        priceNew: 699.99,
    },

    {
        id: 4,
        packageType: 'Extended Journey',
        duration: 14,
        priceOrg: 1200,
        priceNew: 999.99,
    }
]


function Experiences() {
    return (
        <>
            {/* Navigation bar */}
            <Navbar/>

            {/* Page header for experiences section */}
            <div className="ExperienceTitle">
                <h1>
                    Curated Experiences
                </h1>
                <p>
                    Choose the perfect experience and create a unforgettable memory
                </p>
            </div>

            {/* Experience cards section */}
            <div className="ExperiencesCard">
                {bulletpointsforCards.map((point) => (
                   <CardWithList
                       id={point.id}
                       price={point.price}
                       image={point.image}
                       title={point.title}
                       description={point.description}
                       bulletpoints={point.bulletpoints}
                    />
                ))}
            </div>

            {/* Package options section header */}
            <div className="ExperienceTitle">
                <h2>
                    Curated Experiences
                </h2>
                <p>
                    Flexible, Discounted journeys to fit your schedule
                </p>
            </div>

            {/* Package pricing table */}
            <div className="PackageList">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Package type</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Original Price</th>
                        <th scope="col">Sale Price</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>

                    {/* Table body with package data */}
                    <tbody>
                    {TableValues.map((item) => (
                        <TableRow
                            key={item.id}
                            id={item.id}
                            packageType={item.packageType}
                            duration={item.duration}
                            priceOrg={item.priceOrg}
                            priceNew={item.priceNew}
                        />
                    ))}
                    </tbody>
                </table>
            </div>


            {/* Footer section */}
            <Footer/>
        </>
    );
}

export default Experiences;
