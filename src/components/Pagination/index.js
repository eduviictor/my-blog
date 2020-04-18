import React from "react"
import PropTypes from "prop-types"

import { PaginationWrapper } from "./styles"
import { Link } from "gatsby"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <PaginationWrapper>
    {!isFirst && <Link to={prevPage}>&lArr; página anterior</Link>}

    <p>
      {currentPage} de {numPages}
    </p>

    {!isLast && <Link to={nextPage}>próxima página &rArr;</Link>}
  </PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
