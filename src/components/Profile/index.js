import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Avatar from "../Avatar"

import getThemeColor from "../../utils/getThemeColor"

import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from "./styles"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `)

  return (
    <ProfileWrapper>
      <ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>
      <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper>
  )
}

export default Profile
