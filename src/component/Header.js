import Share from '../assets/Icon.png'
import Share2 from '../assets/Share2.png'

const Header = () => {
    return (
        <div className="header">
            <img src={Share} alt='share' className='share-button' />
            <img src={Share2} alt='share' href='https://twitter.com/straksman' className='share-button-device' />
            <div className="header0">
                <img src="https://raw.githubusercontent.com/strakins/My-Images/main/MY_PICS.jpg" alt="mypics"  id="profile_img"/>
            </div>
            <h3>Blessing Akinola</h3>
        </div>
    )
}

export default Header;