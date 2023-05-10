import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import Api from './Api';
import './Home.css'
import Twitter from './Twitter'
import TwtrRight from './TwtrRight'
const Home = (props) => {
  const handleLogout = async () => {
    await auth.signOut();
    
  };
  return (
    <>
    <Twitter />
    <div className=" container car">
    <div className="welcome-message bg-black">Hello Home</div>
    
    {props.user ? <Link to="/register"><button onClick={handleLogout}>Logout</button></Link> : <Link to="/login">Login</Link>} 
    
    <div className="w-100 w1001">
    <Api/>
    </div>
    </div>
    <TwtrRight />
    </>
    )
  }
  
  export default Home