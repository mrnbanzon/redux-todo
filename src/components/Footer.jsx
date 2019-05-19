import React from 'react';
import Link from './Link.jsx';

const Footer = ({ visiblityFilter, setVisiblityFilter }) => (
  <div>
    <p>
      Show:{' '}
      <Link
        active={'SHOW_ALL' === visiblityFilter}
        onClick={() => setVisiblityFilter('SHOW_ALL')}
      >
        All
      </Link>
      {', '}
      <Link
        active={'SHOW_ACTIVE' === visiblityFilter}
        onClick={() => setVisiblityFilter('SHOW_ACTIVE')}
      >
        Active
      </Link>
      {', '}
      <Link
        active={'SHOW_COMPLETE' === visiblityFilter}
        onClick={() => setVisiblityFilter('SHOW_COMPLETE')}
      >
        Completed
      </Link>
    </p>
  </div>
);

export default Footer;
