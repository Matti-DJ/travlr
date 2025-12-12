import Card from "../componenets/Card";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";
import '../pageStyling/Homepage.css';

//travlr card destinations data
const destinations = [
    { id: 1, title: "Vienna", image: "./ViennaCard.webp", description: "Have a great adventure in the city of music" , stay: 7},
    { id: 2, title: "London", image: "./LondonCard.jpeg", description: "See the World in a Single City.", stay: 5},
    { id: 3, title: "Cape Town", image: "./CapeTownCard.avif", description: "Where Two Oceans Meet One Magnificent Mountain."  , stay: 14},
    { id: 4, title: "Rio de Janeiro", image: "./RioDeJaneiroCard.jpg", description: "Your Brazilian Epic Starts Here.", stay : 10},
];

//travler details data 
const travlrDetails = [
    {id: 1, image: "./World-htd.png", title: "Personalized trips", description: "Tailor-made travel plans."},
    {id: 2, image: "./Lock-htd.png", title: "Safe & Secure", description: "Safety with top-notch security measures."},
    {id: 3, image: "./Guide-htd.png", title: "Expert guides", description: "Prefessional locals to enhance your travel experience."},
    {id: 4, image: "./Award-htd.png", title: "Award winning", description: "Highest quality service for all our customers."}, 
]

function Homepage() {
    return (
        <>
            {/* Navbar */}
            <div className="Navbar" id="NavbarInHomepage">
                <Navbar />
            </div>

            {/*Carousel Topic*/}
            <div className="TopicHomepage"id="CarouselTopicInHomepage">
                <h2>Featured Journeys</h2>
                <p>Handpicked from Travlr, for you</p>
            </div>


            {/* Carousel*/}
            <div id="CarouselInHomepage">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./TokyoCarousel.webp" className="d-block" alt="..." />
                            <div className="carousel-caption d-none d-md-block" id="CarouselTokyo">
                                <h5>Tokyo</h5>
                                <p>Discover the vastness of the largest metropolis in the world</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="MaldivesCarousel.jpg" className="d-block" alt="..." />
                            <div className="carousel-caption d-none d-md-block" id="CarouselMaldives">
                                <h5>Maldives</h5>
                                <p>Relaxation combined with luxury and Iconic views</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="BaliCarousel.webp" className="d-block" alt="..." />
                            <div className="carousel-caption d-none d-md-block" id="CarouselBali">
                                <h5>Bali</h5>
                                <p>Enjoy the Culture, Temples and Jungle Rythm</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/*Cards Topic*/}
            <div className="TopicHomepage"id = "CardsTopicInHomepage">
                <h2>Popular Destinations</h2>
                <p>Discover our most popular Journeys</p>
            </div>

            {/*Cards*/}
            <div id="CardsInHomepage">
                {destinations.map((destination) => (
                    <Card 
                        key={destination.id}
                        id={destination.id}
                        title={destination.title}
                        image={destination.image}
                        description={destination.description}
                        stay={destination.stay}
                    />
                ))}
            </div>

            {/*View all destinations button*/}
            <div id="DivViewAllDestinationsButtonInHomepage">   
                <a href="/destinations">
                    <button id="ViewAllDestinationsButtonInHomepage">
                        View all destinations →
                    </button>
                </a>
            </div>

            {/*Travlr details*/}
            <div id="AllTravlrDetailsInHomepage">
                {travlrDetails.map((detail) => (
                    <div key={detail.id} className="TravlrDetailInHomepage">
                        <img src={detail.image} alt="" />
                        <h5>{detail.title}</h5>
                        <p>{detail.description}</p>
                    </div>
                ))}
            </div>

            {/*Footer */}
            <div className="Footer" id="FooterInHomepage">
                <Footer />
            </div>


        </>
    );
}

export default Homepage;