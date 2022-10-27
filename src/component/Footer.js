import Slack from '../assets/slack.png';
import IGlogo from '../assets/I4G.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_top">
                <a href='#STRAKINS' target='_blank' rel='noreferrer' > <img src={Slack} alt="slack-icon" className='social-icons' /> </a>
                <a href='https://github.com/strakins' target='_blank' rel='noreferrer' > <i className="fa-brands fa-github social-icon"> </i> </a>
            </div>
                <hr className='divider'/>
            <div className='footerbase'>
                <h4>Zuri<span className='dot'>.</span>Internship </h4>
                <p className='footer-paragraph'>HNG Internship 9 Frontend Task</p>
                <img src={IGlogo} alt="slack-icon" className='footer-icon' />
            </div>
        </div>
    )
}

export default Footer;