import React from "react"
import links from "./content"

import {
  MenuLinksWrapper,
  MenuLinksList,
  MenuLinksItem,
  MenuLinksLink,
} from "./styles"

import getThemeColor from "../../utils/getThemeColor"

const MenuLinks = () => (
  <MenuLinksWrapper>
    <MenuLinksList>
      {links.map((link, i) => (
        <MenuLinksItem key={i}>
          <MenuLinksLink
            activeClassName="active"
            to={link.url}
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
          >
            {link.label}
          </MenuLinksLink>
        </MenuLinksItem>
      ))}
    </MenuLinksList>
  </MenuLinksWrapper>
)

export default MenuLinks
