import Link from 'next/link';

import HeaderStyle from './HeaderStyle';


export default () => (
  <div className="header-container">
    <Link href="/">
      <a>Episodes</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    {HeaderStyle()}
  </div>
);
