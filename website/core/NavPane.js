/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const React = require("react");

const NavPane = (props) => {
  // This fails with unmatched registers if I use a single hook... what gives???
  //const [isNavOpen, setIsNavOpen] = React.useState(false);
  const isNavOpen = false;
  const setIsNavOpen = () => { };

  return (
    <div className={isNavOpen ? "docsNavContainer docsSliderActive" : "docsNavContainer"}>
      <nav className="toc">
        <div className="toggleNav">
          <section className="navWrapper wrapper">
            <div className="navBreadcrumb wrapper">
              <div className="navToggle" id="navToggler" onClick={setIsNavOpen(!isNavOpen)}>
                <div className="hamburger-menu">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
              </div>
              <h2>Resources</h2>
              <div class="tocToggler" id="tocToggler"><i class="icon-toc"></i></div>
            </div>
            <div className="navGroups">
              <div className="navGroup">
                <h3 className="navGroupCategoryTitle">Resources</h3>
                <ul>
                  <li className="navListItem navListItemActive">
                    <a className="navItem">Repos</a>
                  </li>
                  <li className="navListItem">
                    <a href="./resources-news-social" className="navItem" >News &amp; Social</a>
                  </li>
                  <li className="navListItem">
                    <a href="./resources-videos" className="navItem" >Videos</a>
                  </li>
                  <li className="navListItem">
                    <a href="./resources-showcase" className="navItem" >Showcase</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </nav>
    </div>
  )
}

  module.exports = NavPane;