import '../index.css'
import logo from '../logo.svg'

const Home = () => {
    return (
        <div>
            <div className='menu'>      
                <img src={logo} alt='' className='logo'/>
                <div className='menuitems'> 
                    <a href='/' className='menuitem'>Home</a>
                    <a href='/' className='menuitem'>Blog</a>
                    <a href='/' className='menuitem'>Sources</a>
                </div>
            </div>
        </div>
    );
}
 
export default Home;