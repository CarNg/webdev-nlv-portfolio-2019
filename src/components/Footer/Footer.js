import React from 'react';
import './Footer.module.css';

function Footer() {
  	return (
		<footer>
			&copy; 2019 Carmen Ng | <a href="https://github.com/CarNg/webdev-nlv-portfolio-2019" target="_blank" rel="noopener noreferrer">Built with React</a>
		</footer>
  );
}

export default React.memo(Footer);;
