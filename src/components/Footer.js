import React from 'react'
import github from '../img/github-icon.svg'

const Footer = class extends React.Component {
   
 render() {
   return (
<footer className="footer">
  <div className="content has-text-centered">
  <h4 className="is-spaced" >  Checkout my Github </h4> 
  <a
     
          href="https://github.com/OliverRedmanCooke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
  </div>
</footer>
  )}
}

export default Footer
