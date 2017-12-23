import Link from 'next/link';


export default () => (
  <div className="header-container">
    <Link href="/">
      <a>Episodes</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx="true">
      {`
        .header-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .header-container > a {
          margin-right: 14px;
        }
      `}
    </style>
  </div>
);
