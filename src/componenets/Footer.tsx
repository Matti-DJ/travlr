import './ComponentsStyling/Footer.css';

let QuickLinks = ['Home', 'Destinations', 'Experiences', 'About'];
let PopularDestinations = ['Paris', 'New York', 'Tokyo', 'Maldives', 'Bali'];
let ContactInfo = {
    email: 'managment@travlr.com',
    phone: '+1 (123) 456-7890',
    address: '123 Travel St, Travlr City, World'
};

function Footer() {
    return (
        <footer className="Footer">
            
            {/*Topics section in the footer*/}
            <div className="FooterTopic">
                <h5 className="SectionTopic">Travlr</h5>
                <p className='TravlrNote'>Your gateway to unforgettable travel experiences.</p>
                <p className="TravlrNote">Creating memorable Experiences since 2025.</p>
            </div>

            {/*Quick links section in the footer*/}
            <div className='FooterQuickLinks'>
                <h5 className="SectionTopic">Quick Links</h5>
                <ul style={{listStyleType: "none", paddingLeft: 0}}>
                    {QuickLinks.map((QuickLinks) => (
                        <li key={QuickLinks}><a href ="#" className='SectionLinks'>{QuickLinks}</a>
                    </li>
                ))}
                </ul>
            </div>

            {/*Popular Destinations section in the footer*/}
            <div className='FooterPopularDestinations'>
                <h5 className="SectionTopic">Popular Destinations</h5>
                <ul style={{listStyleType: "none", paddingLeft: 0}}>
                    {PopularDestinations.map((PopularDestinations) => (
                        <li key={PopularDestinations}><a href ="#" className='SectionLinks'>{PopularDestinations}</a>
                    </li>
                ))}
                </ul>
            </div>

            {/*Contact section in the footer*/}
            <div className='FooterContact'>
                <h5 className="SectionTopic">Contact Us</h5>
                <p className='ContactDetails'>Email: {ContactInfo.email}</p>
                <p className='ContactDetails'>Phone: {ContactInfo.phone}</p>
                <p className='ContactDetails'>Address: {ContactInfo.address}</p>
            </div>
        </footer>
    );
}

export default Footer;