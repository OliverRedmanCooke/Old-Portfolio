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
  <h4>Email Address: <a href="mailto:oliver.r.cooke@gmail.com" >oliver.r.cooke@gmail.com</a></h4>
  </div>
</footer>
  )}
}

export default Footer
