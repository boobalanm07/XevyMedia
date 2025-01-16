import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>404 - Page Not Found</title>
        <style>
          {`
            body {
              color: #000;
              background: #fff;
              margin: 0;
              font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            }
            .next-error-container {
              height: 100vh;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .next-error-message {
              line-height: 48px;
            }
            .next-error-h1 {
              display: inline-block;
              margin: 0 20px 0 0;
              padding-right: 23px;
              font-size: 24px;
              font-weight: 500;
              vertical-align: top;
              border-right: 1px solid rgba(0,0,0,.3);
            }
            .next-error-h2 {
              font-size: 14px;
              font-weight: 400;
              line-height: 28px;
            }
            @media (prefers-color-scheme: dark) {
              body {
                color: #fff;
                background: #000;
              }
              .next-error-h1 {
                border-right: 1px solid rgba(255,255,255,.3);
              }
            }
          `}
        </style>
      </Head>
      <div className="next-error-container">
        <div className="next-error-message">
          <h1 className="next-error-h1">404</h1>
          <div>
            <h2 className="next-error-h2">
              This page could not be found.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
