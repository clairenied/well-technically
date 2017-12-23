import Link from 'next/link';


export default () => (
  <div className="header-container">
    <div>
      <Link href="/">
        <a>Episodes</a>
      </Link>
    </div>
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/sponsor">
        <a>Sponsor</a>
      </Link>
    </div>
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

        .header-container > div > a {
          margin-right: 14px;
          color: #eee;
        }
      `}
    </style>
  </div>
);
