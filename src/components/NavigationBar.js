import { Link } from 'react-scroll';


function NavigationBar(){

  const menuItems = [
    {id: 1, title: 'home'},
    {id: 2, title: 'games'},
    {id: 3, title: 'youtube'},
    {id: 4, title: 'github'},
    {id: 5, title: 'tshirts'},
  ]

return(
    <>
      <nav>
        <h2 className='lamberteDesign'>LamberteDesign</h2>
          <ul>
            {menuItems.map(menu => (
              <li>
                <Link to={menu.title} smooth={true} offset={0} duration={1000}>{menu.title}</Link>
              </li>
            ))}      
          </ul>
      </nav>
    </>
  )
}

export default NavigationBar;