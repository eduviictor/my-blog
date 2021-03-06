import React from "react"

import Icons from "./Icons"
import links from "./content"

import {
  SocialLinksWrapper,
  SocialLinkList,
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper,
} from "./styles"

const SocialLinks = () => (
  <SocialLinksWrapper>
    <SocialLinkList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]
        return (
          <SocialLinksItem key={i}>
            <SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </SocialLinksLink>
          </SocialLinksItem>
        )
      })}
    </SocialLinkList>
  </SocialLinksWrapper>
)

export default SocialLinks
