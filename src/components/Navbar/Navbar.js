import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <div className="BreadcrumbsNav">
        <Link color="inherit" href="/" onClick={handleClick}>
          HOME
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          ABOUT
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          PORTFOLIO
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          CONTACT
        </Link>
      </div>
    </Breadcrumbs>
  );
}

// import React, { useState, useEffect } from 'react';
// import { Button } from '../Button/Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

  

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             TN
//             <i class='fas fa-carrot' />
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/about'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 About
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/portfolio'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Portfolio
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
