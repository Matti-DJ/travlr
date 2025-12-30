// Import necessary components
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";
import SideCard from "../componenets/SideCard";

// Import page-specific styles
import '..//pageStyling/Destination.css'

/**
 * Array of destination objects
 * Contains detailed information about available travel destinations including
 * id, title, image, description, duration of stay, and pricing
 */
const destinations= [
    { id: 1, title: "Vienna", image: "./ViennaCard.webp", description: "Have a great adventure in the city of music" , stay: 7, priceOriginal: 1400},
    { id: 2, title: "London", image: "./LondonCard.jpeg", description: "See the World in a Single City.", stay: 5, priceOriginal: 700},
    { id: 3, title: "Cape Town", image: "./CapeTownCard.avif", description: "Where Two Oceans Meet One Magnificent Mountain."  , stay: 14, priceOriginal: 2600},
    { id: 4, title: "Rio de Janeiro", image: "./RioDeJaneiroCard.jpg", description: "Your Brazilian Epic Starts Here.", stay : 10, priceOriginal: 1250},
    { id: 5, title: "Bangkok", image: "./BangkokCard.jpg", description: "Amazing Thailand, It Begins with the People.", stay: 8, priceOriginal: 1499},
    { id: 6, title: "Las Vegas", image: "./LasVegasCard.jpg", description: "What Happens Here, Stays Here.", stay: 2, priceOriginal: 3999},
    { id: 7, title: "Istanbul", image: "./IstanbulCard.jpg", description: "Explore the city on two Continents.", stay: 6, priceOriginal: 1099},
    { id: 8, title: "Islambad", image: "./IslambadCard.webp", description: "Most beautiful city in middle asia", stay: 4, priceOriginal: 799},
]

/**
 * Destinations component - Browse destinations page
 * Displays all available travel destinations with detailed information
 * including pricing and allows users to book trips
 */
function Destinations() {
    return (
        <>
            {/* Navigation bar */}
            <Navbar/>

            {/* Page header section with title and description */}
            <div className="DestinationTopic">
                <h1>Explore Destination</h1>
                <p>Browse available destinations around the world</p>
            </div>

            {/* Destination cards grid section */}
            {/* Maps through destinations array and renders a SideCard for each destination */}
            <div id="SideCardsInDestinationpage">
                {destinations.map((destination) => (
                    <SideCard 
                        key={destination.id}
                        id={destination.id}
                        title={destination.title}
                        image={destination.image}
                        description={destination.description}
                        stay={destination.stay}
                        priceOriginal={destination.priceOriginal}
                    />
                ))}
            </div>

            {/* View more button section */}
            {/* Allows users to load additional destinations (currently links to #) */}
            <div className="DivViewMoreDestinations">
               <a href="#">
                    <button id="ViewMoreDestinationsButton">
                        View more
                    </button>
                </a>
            </div>
            
            {/* Footer section */}
            <Footer/>
        </>
    );
}

export default Destinations;
