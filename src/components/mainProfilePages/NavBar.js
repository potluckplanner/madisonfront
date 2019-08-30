import React from 'react';
import { NavLink } from "react-router-dom";
import '../../App.css';

const NavBar = () => {


  return( 

    <div className="navflex">
      <NavLink className="navlink" to='/menu/events'>All Events</NavLink>

      <NavLink className="navlink" to='/menu/profile' >My Events</NavLink>

      <NavLink className="navlink" to='/menu'>New Event</NavLink>
    </div>
  )

}


export default NavBar



// import React, {Component} from 'react';
// import PropTypes from 'prop-types'
// import { Menu } from 'semantic-ui-react'
// import { Link } from "react-router-dom";




// const colors = [
//   "orange",
// ]
 
// class ExampleMenu extends Component {
//   static propTypes = {
//     color: PropTypes.string,
//   }

//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { color } = this.props
//     const { activeItem } = this.state

//     return (
//       <div>
        
//         <Menu color={color} inverted widths={3}>
            
        

//         <Menu.Item
//           className="text"
//           active={activeItem === 'All Events'}
//           onClick={this.handleItemClick}
//         ><Link to='/menu/profile'>All Events</Link> </Menu.Item>
        

            
        
//         <Menu.Item
//           active={activeItem === 'My Events'}
//           onClick={this.handleItemClick}
//         > <Link to='/menu/friends'>My Events</Link> </Menu.Item>
        


        
//        <Menu.Item
//           active={activeItem === 'New Event'}
//           onClick={this.handleItemClick}
//         > <Link to='/menu'>New Event</Link> </Menu.Item>
       

      //   <Menu.Item
      //     className="text devin"
      //     name='All Events'
      //     active={activeItem === 'All Events'}
      //     onClick={this.handleItemClick}
      //   />
            
        
      //   <Menu.Item
      //   className="text devin"
      //     name='My Events'
      //     active={activeItem === 'My Events'}
      //     onClick={this.handleItemClick}
      //   />
      //  <Menu.Item
      //  className="text devin"
      //     name='New Event'
      //     active={activeItem === 'New Event'}
      //     onClick={this.handleItemClick}
      //   />
        
//       </Menu>

      
//       </div>
//     )
//   }
// }

// const NavBar = () => {
//   const menus = colors.map((color) => <ExampleMenu color={color} key={color} />)

//   return <div>{menus}</div>
// }


// export default NavBar






