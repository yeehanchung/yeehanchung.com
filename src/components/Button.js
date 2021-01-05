import React from "react"
import { ButtonWrapper } from "../elements"

export const Button = ({ children, href, size }) => {
  return (
    
    <ButtonWrapper to={`/blog/${href}`} size={size}>
      {children}
    </ButtonWrapper>
  )
}
