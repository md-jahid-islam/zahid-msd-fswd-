import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
   <nav>
   <div className="container">
    <div className="meno-logo">
    <h2>zahid</h2>
    <div className=''>
        <ul className=''>
            <li> <Link to={"/"}>Home</Link> </li>
            <li> <Link to={"/About"}>About</Link> </li>
            <li> <Link to={"/Skills"}>Skills</Link> </li>
            <li> <Link to={"/Projects"}>Projects</Link> </li>
            <li> <Link to={"/Experience"}>Experience</Link> </li>
            <li> <Link to={"/Achievements"}>Achievements</Link> </li>
            <li> <Link to={"/Contact"}>Contact</Link> </li>
        </ul>
    </div>
    </div>
   </div>
   </nav>
   </>
  )
}

export default Navbar
 //  adfsdgfsdghdgjfgsd