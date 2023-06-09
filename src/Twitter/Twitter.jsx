import img from './imges/twitter-logo.svg';
import img1 from './imges/chat.svg';
import img2 from './imges/kopsms.svg';
import img3 from './imges/lists.svg';
import img4 from './imges/profel.svg';
import img5 from './imges/qungiroq.svg';
import img6 from './imges/reshotka.svg';
import img7 from './imges/sms.svg';
import img8 from './imges/twitr-uycha.svg';
import img9 from './imges/Bobur.svg';
import img10 from './imges/uchhnuqta.svg';
import './Twtr.css';
import { NavLink,Link } from "react-router-dom";


const Twitter = () => {
    
  return (
    <div>
          <nav>
            <div className=" container">
                <div className="nav d-block">
                <ul className='nav__list'>
                <li className="item d-block"><Link className="d-block text-decoration-none" ><img className='nav__logo' src={img} alt="logo" /></Link></li>
                    <li className="item d-block"><NavLink to='/' className="d-block text-decoration-none hover_href" >
                        <div className="d-block"><img src={img8} alt="reshotka" />
                        <span className='item__leni d-none d-xl-inline'>Home</span></div>
                        </NavLink></li>
                    <li className="item d-block"><div className="d-block text-decoration-none hover_href" >
                        <div className="d-block"><img src={img6} alt="reshotka" />
                        <span className='item__leni  d-none d-xl-inline'>Explore</span></div>
                        </div></li>
                    <li className="item d-block"><div className="d-block text-decoration-none hover_href" >
                        <div className="d-block"><img src={img5} alt="qungiroq" />
                        <span className='item__leni  d-none d-xl-inline'>Notifications</span></div>
                        </div></li>
                    <li className="item d-block"><div className="d-block text-decoration-none hover_href" >
                        <div className="d-block"><img src={img7} alt="sms" />
                        <span className="item__leni  d-none d-xl-inline">Messages</span></div>
                        </div></li>
                    <li className="item d-block"><div className="d-block text-decoration-none hover_href" >
                        <div className="d-block"><img src={img1} alt="chat" />
                       <span className="item__leni  d-none d-xl-inline"> Bookmarks</span></div>
                       </div></li>
                    <li className="item d-block"><div className="d-block text-decoration-none hover_href" >
                        <div className="d-block"><img src={img3} alt="lits" />
                        <span className='item__leni  d-none d-xl-inline'>Lists</span></div>
                        </div></li>
                    <li className="item  d-block"><NavLink to={'/Profile'} className="d-block text-decoration-none hover_href" >
                        <div className={`d-block `}><img src={img4} alt="profeli" />
                        <span className={`item__leni  d-none d-xl-inline fs-4 `} >Profile</span></div>
                        </NavLink></li>
                    <li className="item d-block"><div className="d-block text-decoration-none hover_href" >
                        <div className="d-block"><img src={img2} alt="more" />
                        <span className="item__leni  d-none d-xl-inline">More</span></div>
                        </div></li>
                    <li className="item d-block"><div className="d-block text-decoration-none hover_href" >
                        <button className='item__btn  d-none d-xl-inline'>Tweet</button>
                        </div></li>
                </ul>
                <div className='d-flex align-items-center d-none d-xl-flex justify-content-center'>
                    <img src={img9} alt="Bobur" />
                    <div className=" ps-3 pe-3">
                        <h6 className='nav__title'>Bobur</h6>
                        <Link className='text-decoration-none nav__link'>@bobur_mavlonov</Link>
                    </div>
                        <img src={img10} alt="tuqtalar" />
                </div>
                </div>
            </div>
          </nav>
    </div>
  )
}

export default Twitter;