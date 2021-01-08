import React from "react"
import { PaginationWrapper, PaginationElement } from "../elements"

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>
        {/* {isLast ? "← Newer posts" : ""} */}
        {isLast && "← Newer posts"}
      </PaginationElement>
      <PaginationElement to={nextPage}>Older posts →</PaginationElement>
    </PaginationWrapper>
  )
}
