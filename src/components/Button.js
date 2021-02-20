import React from "react"
import { ButtonWrapper } from "../elements"

export const Button = ({ children, href, size }) => {
  return (
    
    <ButtonWrapper to={`/${href}`} size={size}>
      {children}
    </ButtonWrapper>
  )
}
