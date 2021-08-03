

export function Header(){ 

    const navbarLinks = [
        {
            text: 'Destinations',
            active: true
        },
        {
            text: 'Hotels',
            active: false
        },
        {
            text: 'Flights',
            active: false
        },
        {
            text: 'Bookings',
            active: false
        },
        {
            text: 'Login',
            active: false
        },
        {
            text: 'Signup',
            active: false,
            className:'button'
        },
        {
            text: 'EN',
            active: false,
            className: 'dropdown'
        },
    ]

    return <div className="header-container">
        <div className="logo"> <img src="/Logo.png" /> </div>

        <span className="nav-link-container">

        {navbarLinks.map((link) => {

            return <span className={`destinations ${link.active === true ? 'active' : ''}` + link.className} > 
            {link.text} 
            {link.className === 'dropdown' ? <img src="Vector1.png"/> : ''}
            
            
        </span>

        })}

        </span> 
        
    </div>






    

}; 



