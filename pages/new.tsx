import Head from 'next/head';
import unified from 'unified';
import parse from 'remark-parse';
import slug from 'remark-slug';
import headings from 'remark-autolink-headings';
import render from 'remark-react';
import content from './index.md';
import Obfuscate from 'react-obfuscate';

const MyLink = (props: any) => {
  let { href } = props;
  if (href.startsWith('tel:')) {
    let tel = href.substr(4);
    return (
      <Obfuscate tel={tel} obfuscateChildren={false} {...props}>
        {props.children} <span className="noscreen">({tel})</span>
      </Obfuscate>
    );
  }
  if (href.startsWith('mailto:')) {
    let email = href.substr(7);
    <Obfuscate email={email} obfuscateChildren={false} {...props}>
      {props.children} <span className="noscreen">({email})</span>
    </Obfuscate>;
  }
  if (href.startsWith('#')) {
    return <a {...props} />;
  }
  return (
    <a {...props}>
      {props.children} <span className="noscreen"> ({href})</span>
    </a>
  );
};

const Home = () => {
  return (
    <>
      <Head>
        <title>@dpeek</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          id="favicon"
          rel="icon"
          href="0.png"
          type="image/png"
          sizes="16x16"
        ></link>
      </Head>
      <div className="content">
        {
          unified()
            .use(parse)
            .use(slug)
            .use(headings)
            .use(render, {
              remarkReactComponents: { a: MyLink },
              sanitize: false,
            })
            .processSync(content).result
        }
        <style jsx global>{`
          .content {
            color: #222;
            margin: 0 auto;
            padding: 20px 20px 80px 20px;
            max-width: 800px;
            position: relative;
          }

          img {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 140px;
            height: 140px;
          }

          @media screen {
            .noscreen {
              display: none;
            }
            a[title] + a[title] {
              margin-left: 12px;
            }
          }

          @media print {
            a {
              color: #222 !important;
            }
            a[title] {
              display: block;
            }
          }

          a {
            display: inline-block;
            text-decoration: none;
            color: #ce0a0a;
          }

          a:hover {
            color: #ed0e0e;
          }

          h2 {
            margin-bottom: 0 !important;
            border-bottom: solid 0.349em #ce0a0a;
          }

          html,
          body {
            font: 18px/1.6 'Georgia';
          }

          h1 {
            font-size: 2.44em;
            line-height: 1.32em;
            padding-top: 0.318em;
            margin-bottom: 0.341em;
          }

          h2 {
            font-size: 1.94em;
            line-height: 1.66em;
            padding-top: 0.486em;
            margin-bottom: 0.343em;
          }

          h3 {
            font-size: 1.56em;
            line-height: 1.04em;
            padding-top: 0.179em;
            margin-bottom: 0.857em;
          }

          h4 {
            font-size: 1.28em;
            line-height: 1.26em;
            padding-top: 0.304em;
            margin-bottom: 0.957em;
          }

          p {
            font-size: 1em;
            line-height: 1.61em;
            padding-top: 0.444em;
            margin-bottom: 1.17em;
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;
