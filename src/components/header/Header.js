

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
            active: false
        },
        {
            text: 'EN',
            active: false
        },
    ]

    return <div className="header-container">
        <div className="logo"> <img src="/Logo.png" /> </div>

        <span className="nav-link-container">
        {navbarLinks.map((link) => {
            return <span className={`destinations ${link.active === true ? 'active' : ''}`}> {link.text} </span>
        })}
        </span> 
    </div>

   
    

}; 



