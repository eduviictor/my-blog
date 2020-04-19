import React from "react"
import PropTypes from "prop-types"

import { RecommendedWrapper, RecommendedLink } from "./styles"

import getThemeColor from "../../utils/getThemeColor"

const RecommendedPosts = ({ next, previous }) => (
  <RecommendedWrapper>
    {previous && (
      <RecommendedLink
        to={previous.fields.slug}
        className="previous"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        {previous.frontmatter.title}
      </RecommendedLink>
    )}

    {next && (
      <RecommendedLink
        to={next.fields.slug}
        className="next"
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
      >
        {next.frontmatter.title}
      </RecommendedLink>
    )}
  </RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
