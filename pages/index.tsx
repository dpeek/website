import Head from "next/head";
import { useRef, useEffect } from "react";
import { draw } from "../lib/logo";

const Home = () => {
  let logo = useRef(null);

  let onScroll = () => {
    if (logo.current) {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      draw(logo.current, 150 + scrollTop * 0.05);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, [logo.current]);

  return (
    <div className="container">
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
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
      </Head>

      <header>
        <div className="centered">
          <div className="content topBorder">
            <h1>David Peek</h1>
            <img className="mugshot" src="david-peek.png" alt="David Peek" />
            <canvas
              id="logo"
              className="no-print"
              ref={logo}
              width="224"
              height="224"
            ></canvas>
          </div>
          <div className="content links bottomBorder">
            <a className="no-print" href="david-peek.pdf" title="View PDF">
              <i className="fa fa-file-pdf-o"></i>
              <span className="link">Open PDF</span>
            </a>
            <a
              className="no-screen"
              href="https://dpeek.com"
              title="Read online"
            >
              <i className="fa fa-file-text-o"></i>
              <span className="link">https://dpeek.com</span>
            </a>
            <a
              href="mailto:&#109;&#97;&#105;&#108;&#64;&#100;&#112;&#101;&#101;&#107;&#46;&#99;&#111;&#109;&#63;&#115;&#117;&#98;&#106;&#101;&#99;&#116;&#61;&#119;&#111;&#114;&#107;&#32;&#119;&#105;&#116;&#104;&#32;&#117;&#115;&#33;"
              title="Email me"
            >
              <i className="fa fa-envelope-o"></i>
              <span className="link">
                &#109;&#97;&#105;&#108;&#64;&#100;&#112;&#101;&#101;&#107;&#46;&#99;&#111;&#109;
              </span>
            </a>
            <a
              className="link"
              href="tel:&#x2B;&#x36;&#x31;&#x34;&#x37;&#x38;&#x36;&#x38;&#x31;&#x38;&#x39;&#x35;"
              title="Call me"
            >
              <i className="fa fa-phone"></i>
              <span className="link">
                &#x2B;&#x36;&#x31;&#x34;&#x37;&#x38;&#x36;&#x38;&#x31;&#x38;&#x39;&#x35;
              </span>
            </a>
            <a href="https://www.linkedin.com/in/dpeeky" title="Hire me">
              <i className="fa fa-linkedin"></i>
              <span className="link">https://www.linkedin.com/in/dpeeky</span>
            </a>
            <a href="https://github.com/dpeek" title="Judge me">
              <i className="fa fa-github"></i>
              <span className="link">https://github.com/dpeek</span>
            </a>
            <a href="https://twitter.com/dpeeky" title="Follow me">
              <i className="fa fa-twitter"></i>
              <span className="link">https://twitter.com/dpeeky</span>
            </a>
          </div>
        </div>
      </header>
      <main className="centered">
        <div className="content bottomBorder">
          <h2>Summary</h2>

          <p>
            I am a creative software architect and engineering manager with
            fifteen years experience in all aspects of software design and
            delivery - from product definition and development, to usability and
            user interface design to full-stack application development and
            front-end architecture. I have delivered large scale projects to
            millions of users for{" "}
            <a href="#clients">tier one telcos and broadcasters</a> around the
            world on <a href="#platforms">most major platforms and devices</a>,
            working with a huge range of{" "}
            <a href="#technologies">technologies and solutions</a>. I have also
            initiated and contributed to a number of{" "}
            <a href="#community">open source projects</a> as well as regularly
            speaking at, and <a href="community">organising community events</a>
            .
          </p>

          <p>
            I care deeply about the culture and processes required to build
            effective teams and maximise their potential. I genuinely love
            building polished products that delight users and empower
            businesses.
          </p>

          <p>
            Creating software is an intoxicating mix of analytical and creative
            thinking: taming human complexity with logic and order; delivering
            predictability and stability from changing and imperfect
            requirements. I am truly fortunate to have found a career that
            challenges and inspires me.
          </p>

          <h2>Strengths</h2>

          <h3>Engineering leadership</h3>

          <p>
            My extensive experience on both product and service teams has given
            me valuable insight into opportunities for improving company wide
            engineering processes, from sales through to delivery:
          </p>

          <ul>
            <li>Research and development</li>
            <li>Sales engineering and estimation</li>
            <li>Process implementation and refinement</li>
          </ul>

          <h3>Team development</h3>

          <p>
            At Massive I was involved in building the UI Engineering teams in
            both Sydney and London offices. Building effective teams involved
            careful attention to hiring, induction and performance evaluation to
            best understand the strengths and weaknesses of new employees:
          </p>

          <ul>
            <li>Recruitment and team building</li>
            <li>Induction and mentoring</li>
            <li>Performance review</li>
          </ul>

          <h3>Developer productivity</h3>

          <p>
            The right processes and tools can dramatically improve the ability
            of a team to define, design and deliver quality software in a
            predictable way. In every role I have championed the iterative
            refinement of the development process:
          </p>

          <ul>
            <li>Agile tools (Confluence, JIRA, Stash, Bamboo)</li>
            <li>Build tools (Rake, Ant, Gradle, NPM+Gulp, custom)</li>
            <li>Continuous integration and release</li>
          </ul>

          <h3>Quality assurance</h3>

          <p>
            Effective QA requires close collaboration between engineers and
            testers, designing features with testability in mind, and a tight QA
            feedback loop. At Massive I was involved in the development and
            deployment of automated testing tools (unit, mocking and code
            coverage) as well as the definition of company QA processes:
          </p>

          <ul>
            <li>Code review (style and architecture)</li>
            <li>Unit and integration testing</li>
            <li>Build and test automation</li>
          </ul>

          <h3>Video Delivery</h3>

          <p>
            Massive builds TV Everywhere solutions. Leading the client SDK team
            gave me valuable insight in delivering live and on demand video
            content to a huge range of devices:
          </p>

          <ul>
            <li>Encoding, packaging and encryption</li>
            <li>Playback, analytics and QoS</li>
            <li>VOD/live work flows</li>
          </ul>

          <h2>Experience</h2>

          <h3>
            Solutions Architect,
            <a href="http://massive.co">
              Massive Interactive
              <span className="link">(http://massive.co)</span>
            </a>{" "}
            (2 years)
          </h3>

          <p>
            As a Solutions Architect I led service delivery teams in Massive's
            London and Prague offices in delivering projects built on the AXIS
            video platform. My oversight spanned the duration of each project –
            from sales and estimation, to delivery and eventual handover to
            ongoing support teams.
          </p>

          <p>
            During the sales process I was responsible for communicating
            Massive's platform and solution to potential clients, refining the
            sales pitch based on the requirements and scope of the project.
          </p>

          <p>Projects included:</p>

          <ul>
            <li>
              <a href="http://www.cravetv.ca">
                CraveTV<span className="link"> (http://www.cravetv.ca)</span>
              </a>{" "}
              (Bell Media)
            </li>
            <li>
              <a href="https://my5.tv">
                My5<span className="link"> (https://my5.tv)</span>
              </a>{" "}
              (Channel 5)
            </li>
            <li>
              <a href="http://youview.com">
                YouView<span className="link"> (http://youview.com)</span>
              </a>{" "}
              (YouView)
            </li>
            <li>
              <a href="http://www.videoload.de">
                Videoload
                <span className="link"> (http://www.videoload.de)</span>
              </a>{" "}
              (Deutsche Telekom)
            </li>
            <li>
              <a href="http://www.animaxtv.com">
                Animax<span className="link"> (http://www.animaxtv.com)</span>
              </a>{" "}
              (Sony Pictures Entertainment)
            </li>
          </ul>

          <h3>
            Software Architect,
            <a href="http://massive.co">
              Massive Interactive
              <span className="link">(http://massive.co)</span>
            </a>{" "}
            (4 years)
          </h3>

          <p>
            As software architect I designed and delivered the
            <a href="http://www.massive.co/products/">
              Massivision MDK
              <span className="link">(http://www.massive.co/products/)</span>
            </a>
            , a cross-platform UI toolkit targeting Flash, HTML/JavaScript and
            C++/OpenGL written in
            <a href="http://haxe.org">
              Haxe<span className="link"> (http://haxe.org)</span>
            </a>
            . The development of the MDK was completed in 18 months by a team of
            five developers, and consisted of a large number of modular
            libraries:
          </p>

          <ul>
            <li>
              Low level graphics abstractions for HTML/CSS, Flash and OpenGL
            </li>
            <li>
              Flexible high level component library including widgets, layout
              and focus management, multiple input methods (touch, mouse, remote
              control unit, voice)
            </li>
            <li>
              Cross-platform unit testing, code coverage and mocking support
            </li>
            <li>Robust dependency injection based MVC framework</li>
            <li>
              Custom build tool for compiling and packaging applications for
              each platform
            </li>
            <li>
              Pluggable API support for Android, iOS and a wide range of
              connected TVs and consoles
            </li>
            <li>Custom package manager for installing project dependencies</li>
            <li>
              VAST/VMAP/SMIL capable video player supporting a range of
              streaming and DRM options
            </li>
            <li>Support libraries and utilities</li>
          </ul>

          <p>
            The MDK has been used on projects by tier one telcos and
            broadcasters around the world, including: Univision, Telstra,
            Viocorp, Cisco, Northern and Shell, Bell Media, Rogers, Dendy,
            TabCorp Australia and British Telecom. The multi-platform nature of
            the MDK allowed Massive to deliver these projects faster and more
            efficiently than our competition.
          </p>

          <p>
            As architect of the MDK I also took responsibility for developing
            and documenting appropriate quality control processes for both the
            product and service teams using the MDK.
          </p>

          <ul>
            <li>Unit, integration and behavioural testing</li>
            <li>Continuous integration (first on Team City, then on Bamboo)</li>
            <li>Release and dependency management</li>
            <li>Documentation (high level and API)</li>
            <li>Source management (branching work flow and code-review)</li>
            <li>Architecture and code style guidelines</li>
          </ul>

          <h3>
            Software Engineer,
            <a href="http://massive.co">
              Massive Interactive
              <span className="link">(http://massive.co)</span>
            </a>{" "}
            (1 years)
          </h3>

          <p>
            As software engineer I developed complex data-driven Flex
            applications including a video recruitment tool and a collaborative
            data entry tool for the United Nations{" "}
            <a href="http://www.standardsmap.org">
              Trade for Sustainable Development{" "}
              <span className="link">(http://www.standardsmap.org)</span>
            </a>{" "}
            organisation with more than four thousand entry fields. I also led
            the team building a video on demand store for a resource constrained
            set top box (BT Vision on YouView). The project involved working
            with prototype hardware and pushing very limited resources as far as
            possible. The store interacted with a variety of back-end services
            for content, authentication, purchase and rights management.
          </p>

          <h3>Consultant Software Engineer (2 years)</h3>

          <p>
            During my time as a consultant I worked on site with a number of
            advertising agencies in Sydney, working on more challenging
            technical projects that could not be completed in house. These
            included augmented reality and 3D graphics, Google Maps integration,
            a virtual character animation system and a project that used face
            detection and image manipulation to render facial hair onto uploaded
            user images.
          </p>

          <p>
            My final consultant role was at Massive Interactive, where I was
            offered a full time position based on my work.
          </p>

          <h3>Software Engineer/Creative Technologist (5 years)</h3>

          <p>
            At{" "}
            <a href="frostcollective.com.au">
              Frost Design{" "}
              <span className="link">(frostcollective.com.au)</span>
            </a>{" "}
            I led a team of developers building interactive interpretations of
            the high impact visual designs of Vince Frost. The role challenged
            me to translate concepts from print to screen without losing the
            powerful simplicity of the designers' vision. I also had the
            opportunity to create experiences in a range of media, including 3D
            and stop motion animation, and physical installations.
          </p>

          <p>
            At{" "}
            <a href="http://www.ogilvy.com.au">
              Ogilvy Interactive{" "}
              <span className="link">(http://www.ogilvy.com.au)</span>
            </a>{" "}
            I led a team of Flash developers building games, micro-sites and
            other advertising for clients like IBM, KFC, Coca-Cola and Uncle
            Tobys. I introduced basic engineering practices like source control
            and a shared code library to the non-technical design team and ran a
            monthly session for designers wanting to improve their coding
            skills.
          </p>

          <p>
            At{" "}
            <a href="http://www.digitaleskimo.net">
              Digital Eskimo{" "}
              <span className="link">(http://www.digitaleskimo.net)</span>
            </a>{" "}
            I built interactive art in Flash and websites in HTML/JS/Flash and
            PHP. As the only developer in this small business I was expected to
            jump between any job that came in.
          </p>

          <p>
            At{" "}
            <a href="https://savv-e.com.au">
              {" "}
              Savv-e<span className="link"> (https://savv-e.com.au)</span>
            </a>{" "}
            I built e-learning content in Flash and HTML. I also introduced the
            team to a data/template driven approach from what had been a very
            manual and bespoke development process.
          </p>

          <h3>Community and Open Source</h3>
          <a id="community"></a>

          <ul>
            <li>
              Creator of{" "}
              <a href="http://github.com/dpeek/hvm">
                hvm <span className="link">(http://github.com/dpeek/hvm)</span>
              </a>
              ,
              <a href="http://github.com/massiveinteractive/minject">
                minject{" "}
                <span className="link">
                  (http://github.com/massiveinteractive/minject)
                </span>
              </a>
              ,
              <a href="http://github.com/massiveinteractive/mmvc">
                mmvc{" "}
                <span className="link">
                  (http://github.com/massiveinteractive/mmvc)
                </span>
              </a>
              and
              <a href="http://github.com/dpeek/haxe-markdown">
                haxe-markdown{" "}
                <span className="link">
                  (http://github.com/dpeek/haxe-markdown)
                </span>
              </a>
            </li>
            <li>
              Creator of{" "}
              <a href="http://github.com/dpeek/dox">
                dox<span className="link"> (http://github.com/dpeek/dox)</span>
              </a>
              , a documentation generator for Haxe used on http://api.haxe.org
            </li>
            <li>
              Maintainer of{" "}
              <a href="http://github.com/dpeek/dart-markdown">
                dart-markdown
                <span className="link">
                  (http://github.com/dpeek/dart-markdown)
                </span>
              </a>
            </li>
            <li>
              Hacker/contributor to Homebrew, Haxe, Neko, Haxelib, Sublime Text
              and iTerm
            </li>
            <li>Speaker at WebDU 2012, WWX 2012/2015 and SydJS</li>
            <li>Founder of London Haxe User Group</li>
          </ul>

          <h2>Skills</h2>

          <p>
            I've worked with many languages, platforms, tools and technologies
            so talking about them all in detail is not practical. Here, instead,
            is a long list of names and accronyms I have experience with. Take
            note of the ones that interest you and we can talk about them in
            more detail.
          </p>

          <h3>Languages</h3>
          <a id="languages"></a>
          <p>
            <a href="http://haxe.org">Haxe</a>,
            <a href="http://www.adobe.com/devnet/actionscript.html">
              ActionScript
            </a>
            , <a href="http://www.gnu.org/software/bash">Bash</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              JavaScript
            </a>
            , <a href="https://github.com/lukehoban/es6features">ES6</a>,
            <a href="https://github.com/hemanth/es7-features">ES7</a>,
            <a href="https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html">
              Objective C
            </a>
            , <a href="https://developer.apple.com/swift/">Swift</a>,
            <a href="https://www.java.com/en/about/">Java</a>,
            <a href="https://www.ruby-lang.org">Ruby</a>,
            <a href="https://secure.php.net/manual/en/index.php">PHP</a>,
            <a href="https://www.python.org/">Python</a>,
            <a href="http://www.cplusplus.com/doc/tutorial">C++</a>,
            <a href="http://www.cprogramming.com">C</a>,
            <a href="https://www.dartlang.org">Dart</a>,
            <a href="https://sdkdocs.roku.com/display/sdkdoc/BrightScript+Language+Reference">
              BrightScript
            </a>
            ,<a href="https://www.opengl.org/documentation/glsl/">GLSL</a>
          </p>

          <h3>Platforms</h3>
          <a id="platforms"></a>
          <p>
            <a href="http://nekovm.org">Neko</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
              HTML
            </a>
            , <a href="https://en.wikipedia.org/wiki/IOS">iOS</a>,
            <a href="https://en.wikipedia.org/wiki/TvOS">tvOS</a>,
            <a href="https://en.wikipedia.org/wiki/OS_X">OS X</a>,
            <a href="https://www.android.com">Android</a>,
            <a href="https://www.android.com/intl/en_uk/tv/">Android TV</a>,
            <a href="http://www.adobe.com/uk/products/flashplayer.html">
              Flash
            </a>
            ,
            <a href="https://en.wikipedia.org/wiki/List_of_smart_TV_platforms_and_middleware_software">
              Samsung Orsay
            </a>
            ,
            <a href="https://en.wikipedia.org/wiki/List_of_smart_TV_platforms_and_middleware_software">
              Samsung Tizen
            </a>
            ,
            <a href="http://develop.scee.net/research-technology/">
              Sony WebMAF
            </a>
            , <a href="http://www.youview.com">YouView</a>,
            <a href="http://www.xbox.com/en-GB/xbox-one">Xbox One</a>,
            <a href="https://en.wikipedia.org/wiki/List_of_smart_TV_platforms_and_middleware_software">
              LG Netcast
            </a>
            ,
            <a href="https://en.wikipedia.org/wiki/List_of_smart_TV_platforms_and_middleware_software">
              LG WebOS
            </a>
            ,
            <a href="https://en.wikipedia.org/wiki/List_of_smart_TV_platforms_and_middleware_software">
              Panasonic Viera
            </a>
            ,
            <a href="https://en.wikipedia.org/wiki/List_of_smart_TV_platforms_and_middleware_software">
              Panasonic FirefoxOS
            </a>
            , <a href="https://www.hbbtv.org">HbbTV</a>,
            <a href="https://nodejs.org/en/">NodeJS</a>,
            <a href="https://www.raspberrypi.org">Raspberri Pi</a>,
            <a href="https://www.roku.com/en-gb">Roku</a>,
            <a href="https://www.google.com/intl/en_uk/chromecast">
              Chromecast
            </a>
          </p>

          <h3>Tools</h3>
          <a id="tools"></a>
          <p>
            <a href="https://www.omnigroup.com/omnifocus/">Omnifocus</a>,
            <a href="https://www.gnu.org/software/make/">Make</a>,
            <a href="http://rake.rubyforge.org/">Rake</a>,
            <a href="http://gulpjs.com/">Gulp</a>,
            <a href="http://webpack.github.io/docs/">WebPack</a>,
            <a href="http://ant.apache.org/">Ant</a>,
            <a href="https://gradle.org/">Gradle</a>,
            <a href="https://www.jetbrains.com/idea/">IntelliJ IDEA</a>,
            <a href="https://eclipse.org/">Eclipse</a>,
            <a href="https://developer.apple.com/xcode/">Xcode</a>,
            <a href="http://developer.android.com/tools/studio/index.html">
              Android Studio
            </a>
            , <a href="http://www.sublimetext.com">Sublime Text</a>,
            <a href="https://iterm2.com">iTerm</a>,
            <a href="https://www.google.com/chrome/">Chrome</a>/
            <a href="http://www.apple.com/uk/safari/">Safari</a>/
            <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>/
            <a href="https://www.microsoft.com/en-gb/windows/microsoft-edge">
              IE
            </a>
            and
            <a href="https://developer.chrome.com/devtools">Devloper Tools</a>,
            <a href="http://charlesproxy.com">Charles</a>,
            <a href="https://www.wireshark.org">WireShark</a>,
            <a href="http://www.adobe.com/uk/products/cs6.html">
              Adobe PhotoShop/Illustrator/FlashBuilder
            </a>
            , <a href="http://ffmpeg.org">ffmpeg</a>,
            <a href="http://www.videolan.org/developers/x264.html">x264</a>,
            <a href="http://www.videolan.org/developers/x265.html">x265</a>,
            <a href="http://unified-streaming.com">Unified Streaming</a>,
            <a href="https://products.office.com/en-gb/home">
              Microsoft Word/Excel/PowerPoint
            </a>
            , <a href="http://www.apple.com/uk/mac/keynote/">Keynote</a>,
            <a href="http://brew.sh">Homebrew</a>,
            <a href="http://phantomjs.org">PhantomJS</a>,
            <a href="https://git-scm.com">Git</a>,
            <a href="https://github.com">Github</a>,
            <a href="https://www.atlassian.com">
              Atlassian Confluence/JIRA/Bamboo/BitBucket
            </a>
            , <a href="https://subversion.apache.org">SVN</a>,
            <a href="http://www.nongnu.org/cvs/">CVS</a>,
            <a href="http://npmjs.com">NPM</a>,
            <a href="https://fastlane.tools">Fastlane</a>,
            <a href="href://">LiveReload</a>,
            <a href="http://babeljs.io">Babel</a>,
            <a href="http://eslint.org">ESLint</a>
          </p>

          <h3>Frameworks</h3>
          <a id="frameworks"></a>
          <p>
            <a href="http://www.adobe.com/uk/products/flex.html">Flex</a>,
            <a href="http://rubyonrails.org">Ruby on Rails</a>,
            <a href="http://www.robotlegs.org">RobotLegs</a>,
            <a href="http://expressjs.com">Express</a>,
            <a href="http://loopback.io">LoopBack</a>,
            <a href="https://en.wikipedia.org/wiki/Papervision3D">
              PaperVision
            </a>
            ,<a href="http://socket.io">Socket.io</a>,
            <a href="http://sass-lang.com">SASS</a>,
            <a href="http://lesscss.org">LESS</a>,
            <a href="https://github.com/postcss/postcss">PostCSS</a>,
            <a href="http://getbootstrap.com">BootStrap</a>,
            <a href="https://facebook.github.io/react/">React</a>,
            <a href="https://facebook.github.io/react-native/">React Native</a>,
            <a href="https://facebook.github.io/flux/">Flux</a>,
            <a href="https://github.com/reactjs/redux">Redux</a>,
            <a href="http://cordova.apache.org">Cordova</a>,
            <a href="https://cucumber.io">Cucumber</a>,
            <a href="http://nightwatchjs.org">Nightwatch</a>,
            <a href="http://www.seleniumhq.org">Selenium</a>,
            <a href="http://appium.io">Appium</a>
          </p>

          <h3>Technologies</h3>
          <a id="technologies"></a>
          <p>
            <a href="https://www.chromeexperiments.com/webgl">WebGL</a>,
            <a href="https://www.opengl.org/">OpenGL</a>,
            <a href="https://daringfireball.net/projects/markdown/">Markdown</a>
            ,<a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>,
            <a href="http://dashif.org/">DASH</a>,
            <a href="https://developer.apple.com/streaming/">HLS</a>,
            <a href="http://www.iis.net/downloads/microsoft/smooth-streaming">
              Microsoft Smooth Streaming
            </a>
            ,
            <a href="https://www.microsoft.com/playready/">
              Microsoft PlayReady
            </a>
            , <a href="http://www.widevine.com/">Google Widevine</a>,
            <a href="https://developer.apple.com/streaming/fps/">
              Apple Fairplay
            </a>
            ,
            <a href="http://www.adobe.com/uk/products/adobe-access.html">
              Adobe Access
            </a>
            ,
            <a href="http://www.adobe.com/uk/marketing-cloud/primetime-tv-platform.html">
              Adobe Primetime
            </a>
            ,
            <a href="https://www.w3.org/TR/2014/WD-encrypted-media-20140828/cenc-format.html">
              CENC
            </a>
            , <a href="https://en.wikipedia.org/wiki/H.264/MPEG-4_AVC">H264</a>,
            <a href="https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding">
              HEVC
            </a>
            , <a href="http://oauth.net/2/">OAuth</a>,
            <a href="https://en.wikipedia.org/wiki/AirPlay">Airplay</a>,
          </p>

          <h3>Services</h3>
          <a id="services"></a>
          <p>
            <a href="http://buydrm.com/">BuyDRM</a>,
            <a href="http://www.gigya.com/">Gigya</a>,
            <a href="https://www.akamai.com/">Akamai</a>,
            <a href="http://aws.amazon.com/">AWS</a>,
            <a href="http://www.adobe.com/uk/marketing-cloud.html">Omniture</a>,
            <a href="https://stripe.com/gb">Stripe</a>,
            <a href="https://www.vindicia.com/">Vindicia</a>,
            <a href="https://get.fabric.io/">Fabric.io</a>,
            <a href="http://hockeyapp.net/features/">HockeyApp</a>,
            <a href="https://itunesconnect.apple.com">iTunes Connect</a>,
            <a href="https://developer.apple.com/">Apple Developer</a>,
            <a href="https://play.google.com/store">Google Play</a>
          </p>

          <h3>Processes</h3>
          <a id="processes"></a>
          <p>
            <a href="http://agilemethodology.org/">Agile</a>,
            <a href="https://www.scrumalliance.org/why-scrum">Scrum</a>,
            <a href="http://kanbanblog.com/explained/">Kanban</a>,
            <a href="https://www.atlassian.com/agile/code-reviews">
              Code Review
            </a>
            ,
            <a href="https://www.thoughtworks.com/continuous-integration">CI</a>
            ,<a href="http://www.agiledata.org/essays/tdd.html">TDD</a>,
            <a href="http://dannorth.net/introducing-bdd/">BDD</a>
          </p>

          <h2>Trivia</h2>

          <ul>
            <li>
              I've was born in Australia but have lived in Malaysia, Chile,
              France, and England. I speak passable Spanish and French.
            </li>
            <li>
              I have a Bachelor of Digital Media Degree from the University of
              New South Wales.
            </li>
            <li>
              My hobbies are largely the same as my non-hobbies, but when I'm
              not hacking or hanging out with my family I enjoy traveling,
              cooking and eating tasty food, and exercising to avoid the
              consequences of same.
            </li>
            <li>I'm almost certainly taller than you.</li>
          </ul>
        </div>
      </main>

      <style jsx>{`
        .centered {
          margin: 0 auto;
          max-width: 800px;
        }

        .content {
          margin-left: 56px;
          padding: 22px 56px;
        }

        /** logo doodad **/

        .topBorder {
          border-left: solid 14px #fffd42;
        }

        .bottomBorder {
          border-left: solid 14px #11348e;
        }

        /** header **/

        header {
          width: 100%;
          position: fixed;
        }

        header .content {
          padding-top: 80px;
          position: relative;
          box-sizing: border-box;
          background-color: rgba(255, 255, 255, 0.95);
        }

        header .links {
          font-size: 18px;
          padding-top: 0px;
        }

        .fa {
          margin-right: 8px;
        }

        #logo {
          transform: scale(0.5);
          transform-origin: top left;
          position: absolute;
          top: 50px;
          left: -63px;
        }

        header .mugshot {
          position: absolute;
          width: 72px;
          height: 72px;
          top: 68px;
          right: 20px;
        }

        header h1 {
          margin: 0px 0px 6px 0px;
        }

        header .links a {
          padding-right: 2px;
        }

        header .links a:hover {
          text-decoration: none;
        }

        /** section **/

        main .content {
          padding-top: 180px;
        }

        /** media **/

        @page {
          size: 21cm 29.7cm;
          margin: 30mm 45mm 30mm 45mm;
        }

        @media screen {
          .no-screen {
            display: none !important;
          }
          a .link {
            display: none;
          }
          a {
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        }

        @media print {
          .no-print {
            display: none !important;
          }
          .links a {
            display: block;
          }
          header {
            position: relative;
          }
          main .content {
            padding-top: 18px;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          header .logo {
            display: none;
          }
          .content {
            border: none !important;
            padding-left: 0px;
          }
        }
      `}</style>

      <style jsx global>{`
        @import url(
          https://fonts.googleapis.com/css?family=Source + Sans + Pro:300,
          400
        );

        body {
          margin: 0px;
          font-family: "Source Sans Pro", sans-serif;
          font-weight: 400;
        }

        h1,
        h2,
        h3 {
          font-family: "Source Sans Pro", sans-serif;
          font-weight: 300;
        }

        h2 {
          border-bottom: solid 1px #eee;
        }

        a {
          color: #c3222f;
        }

        a:hover {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Home;
