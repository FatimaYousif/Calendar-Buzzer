import React from 'react';

function Footer() {
//Creating Dynamic copyright year
const year = new Date().getFullYear()

  return (
    <footer className="Footer">
    <div className='container'>
    <p> &copyright  c {year} Team Fatima-Aneela </p>    
    </div>
    </footer>
  );
}

export default Footer;
