import React from 'react'

const ArrowDown = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    width="100%"
    viewBox="0 0 24 24"
    className="icon"
    style={{ transform: 'rotate(90deg)' }}
  >
    <path d="M0 0h24v24H0V0z" fill="none" className="path" />
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" className="path" />
  </svg>
)

export default ArrowDown
