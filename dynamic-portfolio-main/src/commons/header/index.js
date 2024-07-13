import React, { useEffect, useState } from "react";
import {
  HeadersContainer, Nav, NavigationLink, UL,
  LI, HideLogo, FadeInLogo, LogoLink, ViewImg,
  BurgerMenuImg
} from "./style";
import MoonLogo from '../../../src/icons/moon.png';
import SunLogo from '../../../src/icons/sun.png';
import { useCookies } from 'react-cookie'
import MenuBurger from "../../svg/menu-burger.svg"


function Header({ hideLogo }) {
  const [cookies, setCookies] = useCookies(['view'])
  const [view, setView] = useState(cookies.view || 'dark');
  const [hamburgerView, setHamburgerView] = useState('none');

  const changeView = () => {
    if (view === 'dark') {
      setView('light');
      setCookies('view', 'light');
    } else {
      setView('dark');
      setCookies('view', 'dark');
    }

  };

  const changeHamburgerView = () => {
    if (hamburgerView === 'none') {
      setHamburgerView('block');
    } else {
      setHamburgerView('none');
    }
  }
  const theme_control = { 'dark': 1, 'light': 0 };

  useEffect(() => {
    document.body.className = view;
  }, [view])

  const LiComponent = (navgation, to) => {
    return (
      <LI>
        <NavigationLink to={to}>
          {navgation}
        </NavigationLink>
      </LI>
    )
  }

  return (
    <HeadersContainer>
      <BurgerMenuImg src={MenuBurger} onClick={changeHamburgerView} $theme={theme_control[view]}></BurgerMenuImg>
      <Nav>
        {
          hideLogo ? <HideLogo /> :
            <FadeInLogo>
              <LogoLink to="/">
                Shikha Virender Chandel
              </LogoLink>
            </FadeInLogo>
        }
        <UL $hamburgerStatus={hamburgerView} >
          {/* {LiComponent('Home', '/')} */}
          {LiComponent('Education', '/educations')}
          {LiComponent('Experience', '/experiences')}
          {LiComponent('Project', '/projects')}
          {LiComponent('About', '/about')}
          {LiComponent('Contact', '/contact')}
        </UL>
      </Nav>

      <div>{

        (view === 'dark') ?
          <ViewImg src={SunLogo} alt="light" onClick={changeView} /> :
          <ViewImg src={MoonLogo} alt="dark" onClick={changeView} />


      }</div>
    </HeadersContainer>
  );
}

export default Header;
