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
          background-color: #000;
          color: #fff;
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin: 0;
          padding: 14px;
        }

        .header-container > a {
          margin-right: 14px;
          color: #eee;
        }
      `}
    </style>
  </div>
);
