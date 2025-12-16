import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";
import '..//pageStyling/AboutUs.css'
import EmployeeCard from "../componenets/EmployeeCard.tsx";
import Achievments from "../componenets/Achievments.tsx";
import Value from "../componenets/Value.tsx";

{/*Info about employees*/}
const Employeedata = [
    {
        id: 1, name: "Matthias de Jong", image: "CEO.png", position: "Founder & CEO",
    },
    {
        id: 2, name: "Gregor Brutter", image: "./public/AboutUs/headOfOperations.jpeg", position: "Head of Operations",
    },
    {
        id: 3, name: "Edje & sonya", image: "./public/AboutUs/travelDirectors.jpeg", position: "Travel Directors",
    }
]

{/*Achievements Data*/}
const AchievementsData = [
    {
        image: "./public/AboutUs/Destinations.png", title: "50+", description: "Destinations"
    },
    {
        image: "./public/AboutUs/Customers.png", title: "100.000+", description: "Happy customers"
    },
    {
        image: "./public/AboutUs/Awards.png", title: "30", description: "Awards Won"
    },
    {
        image: "./public/AboutUs/CustomerSatisfaction.png", title: "110%", description: "Customer Satisfaction"
    }
]

{/*Value Data*/}
const ValueData = [
    {
        title: "Authenticity", description: "We believe in genuine cultural experiences and meaningful connections.",
    },
    {
        title: "Sustainability", description: "Committed to responsible tourism that protects our planet."
    },
    {
        title: "Excellence", description: "Delivering exceptional service and unforgettable memories."
    },
    {
        title: "Innovation", description: "Constantly evolving to offer unique travel experiences."
    },
    {
        title: "Diversity", description: "Having a diverse team and supporting all genders. example: Travel Directors",
    }
]

function About() {
    return (
        <>
            {/* Navbar */}
            <Navbar/>

            {/* About Title */}
            <div className="AboutUsTitle">
                <h1>
                    About Travlr
                </h1>
                <p>
                    Creating memorable experiences since 2019
                </p>
            </div>

            {/*Travler's story*/}
            <div className="TravlerStory">
                <h2>
                    Our Story
                </h2>
                <p>
                    The story of Travlr is one of strategic pivot and technological consolidation, establishing the company as a leader in the next generation of global travel commerce. Though its origins trace back to 2017 with the successful launch of The Bali Bible, the professional platform known as Travlr was formally established and scaled in late 2019 to address the fragmentation of the digital travel market.
                </p>
                <p>
                    Travlr was founded on the insight that travel booking was overly complicated, requiring users to jump between content sites, flight aggregators, and experience platforms. CEO Elara Vance's vision was to create a single ecosystem—a "Shopify of Travel"—where inspiration, planning, and booking were seamlessly unified.

                    The initial focus was on providing curated, high-quality destination experiences, building a reputation for authenticity and depth over simple volume. This included exclusive offerings like masterclasses with local artisans, private cultural tours, and specialized adventure expeditions.
                </p>
                <p>
                    Travlr’s key innovation was its proprietary Travel-as-a-Service (TaaS) model and its multi-tenant, white-label technology. This technology allows global brands (like media companies and major corporations) to effortlessly launch their own branded travel storefronts, powered entirely by Travlr's robust backend.

                    Crucially, Travlr’s platform fully integrates global flight access with its vast inventory of experiences and accommodations. The booking process is designed to be intuitive and experience-driven: a user selects an activity, and the system automatically provides optimized flight and accommodation options, creating a single, cohesive itinerary. This unification significantly reduces administrative friction for the traveler.
                </p>
                <p>
                    Since 2019, Travlr has expanded globally, moving from a consumer-facing tool to an enterprise-grade solution. Today, it stands as a sophisticated B2B2C platform that empowers major partners to leverage its technology, vast inventory (including over 400 airlines and millions of experiences), and competitive pricing.

                    Travlr has redefined the travel narrative by positioning the experience as the primary product, with logistics acting as the professional, frictionless delivery mechanism. The company's trajectory is one of continuous technological evolution aimed at making every journey, from initial inspiration to final destination, perfectly integrated and memorable.
                </p>
            </div>

            {/*Achievments*/}
            <div className="AchievementsInAboutUsContainer">
                {AchievementsData.map((achievement) => (
                    <Achievments
                        image={achievement.image}
                        title={achievement.title}
                        description={achievement.description} />
                ))}
            </div>



            {/*Our Team title*/}
            <div className="AboutUsTitle">
                <h2>
                    Our Team
                </h2>
                <p>
                    Passionate travel experts dedicated to crafting your perfect journey
                </p>
            </div>


            {/*CEO, Head of Operations, Travel experiences directors*/}
            <div className="EmployeeCards">
                {Employeedata.map((item) => (
                    <EmployeeCard
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        position={item.position}
                    />
                ))}
            </div>

            {/*Values of the company title*/}
            <div className="AboutUsTitle">
                <h2>
                    Our Values
                </h2>
                <p>
                    The principles that guide everything we do
                </p>
            </div>

            {/*Values*/}
            <div className="Values">
                {ValueData.map((item) => (
                    <Value
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
            
            {/*Footer*/}
            <Footer/>
        </>
    );
}

export default About;