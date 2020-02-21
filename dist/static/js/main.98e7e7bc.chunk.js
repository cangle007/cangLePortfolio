(this.webpackJsonpcomponentexperiment = this.webpackJsonpcomponentexperiment || []).push([
  [0],
  {
    140: function(e, t, a) {
      e.exports = a.p + 'static/media/art_demo.eff283e2.gif';
    },
    146: function(e, t, a) {
      e.exports = a.p + 'static/media/historyDev_google.c9cd3bd2.png';
    },
    147: function(e, t, a) {
      e.exports = a.p + 'static/media/historyDev_bar.64b54d74.png';
    },
    148: function(e, t, a) {
      e.exports = a.p + 'static/media/historyDev_query.9b971863.png';
    },
    149: function(e, t, a) {
      e.exports = a.p + 'static/media/inspector_home.ac01d836.png';
    },
    150: function(e, t, a) {
      e.exports = a.p + 'static/media/inspector_main.6f2cfd97.png';
    },
    151: function(e, t, a) {
      e.exports = a.p + 'static/media/cang01.1d832637.jpg';
    },
    152: function(e, t, a) {
      e.exports = a.p + 'static/media/gmail_demo.626a8901.gif';
    },
    153: function(e, t, a) {
      e.exports = a.p + 'static/media/iotprofile_cells.26e2e009.png';
    },
    154: function(e, t, a) {
      e.exports = a.p + 'static/media/iotdemo.0aa8fa06.gif';
    },
    155: function(e, t, a) {
      e.exports = a.p + 'static/media/cl_resume.5afb1f60.pdf';
    },
    156: function(e, t, a) {
      e.exports = a.p + 'static/media/artAcademy-logo.1479234c.png';
    },
    157: function(e, t, a) {
      e.exports = a.p + 'static/media/af-device-history-logo.1f294d84.svg';
    },
    158: function(e, t, a) {
      e.exports = a.p + 'static/media/gmail-clone-logo.351d1fbe.png';
    },
    159: function(e, t, a) {
      e.exports = a.p + 'static/media/af-inspector-logo.5bfc747c.svg';
    },
    160: function(e, t, a) {
      e.exports = a.p + 'static/media/af-iotProfile-logo.b5f30fa9.png';
    },
    161: function(e, t, a) {
      e.exports = a.p + 'static/media/pokemon-logo.9578e4ce.png';
    },
    162: function(e, t, a) {
      e.exports = a.p + 'static/media/respGrid-logo.44889983.png';
    },
    163: function(e, t, a) {
      e.exports = a.p + 'static/media/toDos-logo.b42ad8a6.png';
    },
    164: function(e, t, a) {
      e.exports = a.p + 'static/media/poke_intro.24e9adb3.gif';
    },
    165: function(e, t, a) {
      e.exports = a.p + 'static/media/poke_battle.709cffde.png';
    },
    166: function(e, t, a) {
      e.exports = a.p + 'static/media/poke_deck.264b7238.png';
    },
    167: function(e, t, a) {
      e.exports = a.p + 'static/media/poke_select.cecadfbc.png';
    },
    168: function(e, t, a) {
      e.exports = a.p + 'static/media/poke_build.2bba9b8f.png';
    },
    169: function(e, t, a) {
      e.exports = a.p + 'static/media/responsive_screen.b9b4a0e3.png';
    },
    170: function(e, t, a) {
      e.exports = a.p + 'static/media/responsive.7bf3d9be.gif';
    },
    171: function(e, t, a) {
      e.exports = a.p + 'static/media/todoApp_demo.9bc10e87.gif';
    },
    180: function(e, t, a) {
      e.exports = a(316);
    },
    301: function(e, t, a) {},
    302: function(e, t, a) {},
    303: function(e, t, a) {},
    304: function(e, t, a) {},
    305: function(e, t, a) {},
    306: function(e, t, a) {},
    307: function(e, t, a) {},
    308: function(e, t, a) {},
    309: function(e, t, a) {},
    310: function(e, t, a) {},
    311: function(e, t, a) {},
    312: function(e, t, a) {},
    313: function(e, t, a) {},
    314: function(e, t, a) {},
    315: function(e, t, a) {},
    316: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        i = a.n(n),
        r = a(33),
        l = a.n(r),
        o = a(8),
        c = a(9),
        s = a(10),
        m = a(11),
        u = a(13),
        d = a(12),
        p = a(47),
        E = a(90);
      function h() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { pokemonImages: [], checkerArr: [] },
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case 'CLEAR_ROOT_REDUCER':
            return Object(E.a)({}, e, { aferoAttribute: t.aferoAttribute });
          case 'GET_IMAGES_SUCCESS':
            return Object(E.a)({}, e, { pokemonImages: t.pokemonImages });
          default:
            return e;
        }
      }
      var f = a(133),
        b = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || p.c)(Object(p.a)(f.a));
      var v = a(26),
        g = a(38),
        O = a(25),
        y = a(4),
        _ = a(96),
        j = a(320);
      function k(e) {
        var t = e.handle_routeMain;
        return i.a.createElement(
          'div',
          { className: 'sidebar-container' },
          i.a.createElement('div', null),
          i.a.createElement(
            'a',
            { href: '#bannerComp', id: 'sidebar-about-item', onClick: t },
            i.a.createElement('p', null, 'ABOUT'),
            i.a.createElement(_.a, { name: 'info' }),
            i.a.createElement('p', null, 'WHO I AM')
          ),
          i.a.createElement(
            'a',
            { href: '#portfolioComp', id: 'sidebar-work-item', onClick: t },
            i.a.createElement('p', null, 'WORK'),
            i.a.createElement(_.a, { name: 'computer' }),
            i.a.createElement('p', null, 'VIEW CASE STUDIES')
          ),
          i.a.createElement(
            'a',
            { href: '#inquiryComp', id: 'sidebar-contact-item', onClick: t },
            i.a.createElement('p', null, 'CONTACT'),
            i.a.createElement(_.a, { name: 'phone' }),
            i.a.createElement('p', null, "LET'S GET IN TOUCH")
          ),
          i.a.createElement('div', null)
        );
      }
      var w = a(140),
        S = a.n(w),
        C = (function(e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).handle_routeMain = function() {
                a.props.history.push('/');
              }),
              (a.handle_openArtAcademy = function() {
                window.open('http://faulty-breakfast.surge.sh/', '_blank').focus();
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'art-container' },
                    i.a.createElement(
                      'div',
                      { id: 'art-bio-item' },
                      i.a.createElement(
                        'article',
                        null,
                        i.a.createElement('h1', null, 'ART-ACADEMY'),
                        i.a.createElement('p', null, 'pixel-Art with vanilla JavaScriptL'),
                        i.a.createElement(
                          'p',
                          null,
                          'Created a pixel art maker through vanilla Javascript with functionality to paint pixel from a variety of colors'
                        ),
                        i.a.createElement(
                          'div',
                          { className: 'launch-website', onClick: this.handle_openArtAcademy },
                          i.a.createElement(
                            'span',
                            null,
                            'LAUNCH ART-ACADEMY',
                            i.a.createElement(_.a, { name: 'external alternate' })
                          )
                        )
                      ),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'HTML/CSS'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Vanilla Javascript'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Front-End Development')
                    ),
                    i.a.createElement(
                      'div',
                      { id: 'art-details-item' },
                      i.a.createElement('section', null, i.a.createElement('img', { src: S.a, alt: 'art_demo' }))
                    ),
                    i.a.createElement(k, { id: 'sidebarComp', handle_routeMain: this.handle_routeMain })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var T = Object(y.b)({}),
        A = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        x = Object(y.a)(A, T)(
          Object(g.f)(function(e) {
            var t = e.history;
            return i.a.createElement('div', null, i.a.createElement(C, { history: t }));
          })
        ),
        I = a(146),
        N = a.n(I),
        R = a(147),
        D = a.n(R),
        M = a(148),
        L = a.n(M),
        G = (function(e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).handle_routeMain = function() {
                a.props.history.push('/');
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'devHistory-container' },
                    i.a.createElement(
                      'div',
                      { id: 'devHistory-bio-item' },
                      i.a.createElement(
                        'article',
                        null,
                        i.a.createElement('h1', null, 'AFERO DEVICE HISTORY'),
                        i.a.createElement('p', null, 'query historical device data'),
                        i.a.createElement(
                          'p',
                          null,
                          "The process of querying historical data can be time consuming and mundane if you don't have the right tool, a common problem holding back most QA teams from optimizing their productivity.",
                          i.a.createElement('br', null),
                          i.a.createElement('br', null),
                          "This internal application was developed to facilitate the QA team's daily task of querying historical data, increasing productivity by 70%. The software provides a clean and easy to use interface to query and filter device historical data for the entire life of the device."
                        )
                      ),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'React-Redux'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'CSS-Grid'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Sass/Scss'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'UI/UX Design'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Front-End Development')
                    ),
                    i.a.createElement(
                      'div',
                      { id: 'devHistory-details-item' },
                      i.a.createElement(
                        'section',
                        null,
                        i.a.createElement('img', { src: L.a, alt: 'historyDev_query' })
                      ),
                      i.a.createElement('section', null, i.a.createElement('img', { src: D.a, alt: 'historyDev_bar' })),
                      i.a.createElement(
                        'section',
                        null,
                        i.a.createElement('img', { src: N.a, alt: 'historyDev_google' })
                      )
                    ),
                    i.a.createElement(k, { id: 'sidebarComp', handle_routeMain: this.handle_routeMain })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var P = Object(y.b)({}),
        H = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        F = Object(y.a)(H, P)(
          Object(g.f)(function(e) {
            var t = e.history;
            return i.a.createElement('div', null, i.a.createElement(G, { history: t }));
          })
        ),
        U = a(149),
        B = a.n(U),
        W = a(150),
        K = a.n(W),
        q = (function(e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).handle_routeMain = function() {
                a.props.history.push('/');
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'inspector-container' },
                    i.a.createElement('div', { id: 'inspector-header-item' }),
                    i.a.createElement(
                      'div',
                      { id: 'inspector-bio-item' },
                      i.a.createElement(
                        'article',
                        null,
                        i.a.createElement('h1', null, 'INSPECTOR'),
                        i.a.createElement('p', null, 'real-time IoT connectivity and data analytics'),
                        i.a.createElement(
                          'p',
                          null,
                          'Inspector is reliable and industry proven software that allows developers to view and interact with their IoT devices at a massive scale with an in depth, real-time view of the state of all their connected IoT devices. My software is currently connecting 500K+ IoT devices to the cloud from Fortune 500 companies such as Home Depot & Kenmore enabling data mining for improving product functionality.'
                        )
                      ),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'React-Redux'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'CSS-Grid'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Sass/Scss'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'UI/UX Design'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Front-End Development')
                    ),
                    i.a.createElement(
                      'div',
                      { id: 'inspector-details-item' },
                      i.a.createElement(
                        'section',
                        null,
                        i.a.createElement(
                          'p',
                          null,
                          "This landing page offers basic details of IoT devices, such as connectivity status, icon, and device's name."
                        ),
                        i.a.createElement('img', { src: B.a, alt: 'inspector_home' })
                      ),
                      i.a.createElement(
                        'section',
                        null,
                        i.a.createElement('img', { src: K.a, alt: 'inspector_main' }),
                        i.a.createElement(
                          'p',
                          null,
                          "This tool allows developers to view the state of their IoT devices when testing and debugging device behavior. The app displays data analytics of all IoT devices associated with a user's account in real-time."
                        )
                      )
                    ),
                    i.a.createElement(k, { id: 'sidebarComp', handle_routeMain: this.handle_routeMain })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var z = Object(y.b)({}),
        J = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        V = Object(y.a)(J, z)(
          Object(g.f)(function() {
            return i.a.createElement('div', null, i.a.createElement(q, null));
          })
        ),
        X = a(151),
        Q = a.n(X);
      function Y() {
        return i.a.createElement(
          'div',
          { className: 'banner-container' },
          i.a.createElement(
            'div',
            { id: 'banner-img-item' },
            i.a.createElement('img', { src: Q.a, alt: 'Cang-headshot' })
          ),
          i.a.createElement(
            'div',
            { id: 'myTitle-item' },
            i.a.createElement('h1', null, 'CANG LE'),
            i.a.createElement(
              'p',
              null,
              'FRONT-END DEVELOPER | SAN JOSE, CA',
              i.a.createElement('br', null),
              'MAKING THE WEB GREAT AGAIN, ONE PIXEL AT A TIME'
            )
          )
        );
      }
      var Z = Object(y.b)({}),
        $ = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        ee = Object(y.a)($, Z)(
          Object(g.f)(function() {
            return i.a.createElement('div', null, i.a.createElement(Y, null));
          })
        ),
        te = a(152),
        ae = a.n(te),
        ne = (function(e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).handle_routeMain = function() {
                a.props.history.push('/');
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'gmail-container' },
                    i.a.createElement(
                      'div',
                      { id: 'gmail-bio-item' },
                      i.a.createElement(
                        'article',
                        null,
                        i.a.createElement('h1', null, 'GMAIL CLONE'),
                        i.a.createElement('p', null, "cloning Gmail's with React-Redux"),
                        i.a.createElement(
                          'p',
                          null,
                          'Developed email functionality by replicating the front-end of Gmail. Where users can compose, delete, and favorite their emails.'
                        )
                      ),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Front-End Development'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Back-End Development'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'React'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Materialize CSS'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Airtable')
                    ),
                    i.a.createElement(
                      'div',
                      { id: 'gmail-details-item' },
                      i.a.createElement('section', null, i.a.createElement('img', { src: ae.a, alt: 'gmail_demo' }))
                    ),
                    i.a.createElement(k, { id: 'sidebarComp', handle_routeMain: this.handle_routeMain })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var ie = Object(y.b)({}),
        re = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        le = Object(y.a)(re, ie)(
          Object(g.f)(function(e) {
            var t = e.history;
            return i.a.createElement('div', null, i.a.createElement(ne, { history: t }));
          })
        );
      var oe = Object(y.b)({}),
        ce = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        se = Object(y.a)(ce, oe)(
          Object(g.f)(function(e) {
            var t = e.history;
            return i.a.createElement('div', null, i.a.createElement(q, { history: t }));
          })
        ),
        me = a(153),
        ue = a.n(me),
        de = a(154),
        pe = a.n(de),
        Ee = (function(e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).handle_routeMain = function() {
                a.props.history.push('/');
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'iot-container' },
                    i.a.createElement(
                      'div',
                      { id: 'iot-bio-item' },
                      i.a.createElement(
                        'article',
                        null,
                        i.a.createElement('h1', null, 'IOT PROFILE'),
                        i.a.createElement('p', null, 'mock-up for mobile app.'),
                        i.a.createElement(
                          'p',
                          null,
                          "This was a mock-up version of Afero Mobile SDKS, it outlines how a user creates an account, manages and interacts with their devices, and how they connect to Afero's softhub and Wi-Fi"
                        )
                      ),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'CSS-Grid'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Sass/Scss'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'UI/UX Design')
                    ),
                    i.a.createElement(
                      'div',
                      { id: 'iot-details-container' },
                      i.a.createElement(
                        'section',
                        null,
                        i.a.createElement('img', { src: ue.a, alt: 'iotprofile_cells' })
                      ),
                      i.a.createElement('section', null, i.a.createElement('img', { src: pe.a, alt: 'iotdemo' }))
                    ),
                    i.a.createElement(k, { id: 'sidebarComp', handle_routeMain: this.handle_routeMain })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var he = Object(y.b)({}),
        fe = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        be = Object(y.a)(fe, he)(
          Object(g.f)(function(e) {
            var t = e.history;
            return i.a.createElement('div', null, i.a.createElement(Ee, { history: t }));
          })
        ),
        ve = a(155),
        ge = a.n(ve);
      function Oe(e) {
        var t = e.handle_openTabGithub,
          a = e.handle_openTabLinkedin;
        return i.a.createElement(
          'div',
          { className: 'myBio-container' },
          i.a.createElement(
            'section',
            { id: 'myBio-item' },
            i.a.createElement(
              'p',
              null,
              'Graduated from San Jose State University with a Finance/Economics degree and spent 5 years in Corporate Finance but decided to make a career switch to become a Frontend developer.'
            ),
            i.a.createElement('p', null, '2 years of hands-on software engineering experience, specializing in:'),
            i.a.createElement(
              'ul',
              null,
              i.a.createElement('li', null, 'Frontend development (UI) with Javascript and React-Redux'),
              i.a.createElement('li', null, 'UX/UI design with CSS/HTML, SASS/SCSS, and CSS-Grid'),
              i.a.createElement('li', null, 'Backend development (APIs) with Nodes.js and PostgreSQL'),
              i.a.createElement('li', null, 'Object-oriented programming and design patterns'),
              i.a.createElement('li', null, 'Data modeling, persistence, and relational databases')
            ),
            i.a.createElement(
              'p',
              null,
              '2 years of leading and developing product design (UI/UX), managing the product development lifecycle and roadmap, and as well as release management and production support.'
            ),
            i.a.createElement(
              'p',
              null,
              '2 years of spearheading medium-scale projects from scratch at an early-stage tech startup environment.'
            ),
            i.a.createElement(
              'p',
              null,
              'Fortune 500 companies such as Home Depot & Kenmore are using my software design for data mining to improve their product functionality.'
            ),
            i.a.createElement(
              'p',
              null,
              'When I am not coding I train at the gym to shape up for the Ironman Triathlon, and occasionally skydive. I believe in having an efficient workflow and constantly work toward the inbox zero.'
            ),
            i.a.createElement('p', null, "Let's get in touch!")
          ),
          i.a.createElement(
            'div',
            { id: 'resume-item' },
            i.a.createElement(
              'a',
              { href: ge.a, download: !0 },
              i.a.createElement(_.a, { name: 'file outline' }),
              i.a.createElement('p', null, 'RESUME')
            )
          ),
          i.a.createElement(
            'div',
            { id: 'github-item', onClick: t },
            i.a.createElement(
              'span',
              { href: '#' },
              i.a.createElement(_.a, { name: 'github' }),
              i.a.createElement('p', null, 'GITHUB')
            )
          ),
          i.a.createElement(
            'div',
            { id: 'linkedin-item', onClick: a },
            i.a.createElement(
              'span',
              null,
              i.a.createElement(_.a, { name: 'linkedin' }),
              i.a.createElement('p', null, 'LINKEDIN')
            )
          ),
          i.a.createElement(
            'div',
            { id: 'expertise-item', className: 'expertise-container' },
            i.a.createElement(
              'h3',
              { id: 'expertHeader-item' },
              i.a.createElement('span', null, 'TECHNICAL EXPERTISE')
            ),
            i.a.createElement(
              'ul',
              { id: 'frontend-item' },
              i.a.createElement(_.a, { name: 'desktop', size: 'large' }),
              i.a.createElement('h3', null, 'Front-End'),
              i.a.createElement('li', null, 'React-Redux'),
              i.a.createElement('li', null, 'HTML/CSS'),
              i.a.createElement('li', null, 'Scss/Sass')
            ),
            i.a.createElement(
              'ul',
              { id: 'backend-item' },
              i.a.createElement(_.a, { name: 'cogs', size: 'large' }),
              i.a.createElement('h3', null, 'Back-End'),
              i.a.createElement('li', null, 'Node.js'),
              i.a.createElement('li', null, 'Express.js'),
              i.a.createElement('li', null, 'Knex.js'),
              i.a.createElement('li', null, 'PostgreSQL'),
              i.a.createElement('li', null, 'Python')
            ),
            i.a.createElement(
              'ul',
              { id: 'others-item' },
              i.a.createElement(_.a, { name: 'puzzle', size: 'large' }),
              i.a.createElement('h3', null, 'Others'),
              i.a.createElement('li', null, 'MySQL'),
              i.a.createElement('li', null, 'Linux'),
              i.a.createElement('li', null, 'Chai'),
              i.a.createElement('li', null, 'Socket.io'),
              i.a.createElement('li', null, 'AWS(RDS & EB)')
            )
          )
        );
      }
      var ye = a(156),
        _e = a.n(ye),
        je = a(157),
        ke = a.n(je),
        we = a(158),
        Se = a.n(we),
        Ce = a(159),
        Te = a.n(Ce),
        Ae = a(160),
        xe = a.n(Ae),
        Ie = a(161),
        Ne = a.n(Ie),
        Re = a(162),
        De = a.n(Re),
        Me = a(163),
        Le = a.n(Me);
      function Ge(e) {
        var t = e.handle_routeArt,
          a = e.handle_routeDeviceHistory,
          n = e.handle_routeGmail,
          r = e.handle_routeInspector,
          l = e.handle_routeIoT,
          o = e.handle_routePokemon,
          c = e.handle_routeResponsive,
          s = e.handle_routeTodo;
        return i.a.createElement(
          'div',
          { className: 'portfolio-container' },
          i.a.createElement(
            'div',
            { className: 'portfolio-title', id: 'professional-title-item' },
            i.a.createElement('h1', null, 'PROFESSIONAL WORK'),
            i.a.createElement('p', null, 'A SHOWCASE OF PROFESSIONAL DESIGN AND DEVELOPMENT')
          ),
          i.a.createElement(
            'div',
            { id: 'inspector-item', onClick: r },
            i.a.createElement('img', { id: 'inspector-logo', src: Te.a, alt: 'inspector-logo' }),
            i.a.createElement(
              'div',
              { className: 'card-text' },
              i.a.createElement('span', null, 'AFERO INSPECTOR'),
              i.a.createElement('p', null, 'real-time app. enabling large scale tracking of IoT devices')
            )
          ),
          i.a.createElement(
            'div',
            { id: 'deviceHistory-item', onClick: a },
            i.a.createElement('img', { id: 'deviceHistory-logo', src: ke.a, alt: 'devHistoryLogo' }),
            i.a.createElement(
              'section',
              { className: 'card-text' },
              i.a.createElement('span', null, 'AFERO DEVICE HISTORY'),
              i.a.createElement('p', null, 'query historical device data')
            )
          ),
          i.a.createElement(
            'div',
            { id: 'iotProfile-item', onClick: l },
            i.a.createElement('img', { id: 'iotProfile-logo', src: xe.a, alt: 'iotProfileLogo' }),
            i.a.createElement(
              'section',
              { className: 'card-text' },
              i.a.createElement('span', null, 'AFERO PROFILE'),
              i.a.createElement('p', null, 'mock-up for mobile app.')
            )
          ),
          i.a.createElement(
            'div',
            { className: 'portfolio-title', id: 'personal-title-item' },
            i.a.createElement('h1', null, 'PERSONAL WORK'),
            i.a.createElement('p', null, 'A SHOWCASE OF PERSONAL DESIGN')
          ),
          i.a.createElement(
            'div',
            { id: 'pokemonBattleArea-item', onClick: o },
            i.a.createElement('img', { id: 'pokemon-logo', src: Ne.a, alt: 'pokemonlogo' }),
            i.a.createElement(
              'section',
              { className: 'card-text' },
              i.a.createElement(
                'div',
                null,
                i.a.createElement('span', null, 'POKEMON BATTLE AREA'),
                i.a.createElement('p', null, 'real-time battle between multiple players')
              )
            )
          ),
          i.a.createElement(
            'div',
            { id: 'responsiveGrid-item', onClick: c },
            i.a.createElement('img', { id: 'respGrid-logo', src: De.a, alt: 'respGridlogo' }),
            i.a.createElement(
              'section',
              { className: 'card-text' },
              i.a.createElement('span', null, 'RESPONSIVE-GRID'),
              i.a.createElement('p', null, 'responsive Website with CSS-Grid')
            )
          ),
          i.a.createElement(
            'div',
            { id: 'gmailClone-item', onClick: n },
            i.a.createElement('img', { id: 'gmailClone-logo', src: Se.a, alt: 'gmailCloneLogo' }),
            i.a.createElement(
              'section',
              { className: 'card-text' },
              i.a.createElement('span', null, 'GMAIL-CLONE'),
              i.a.createElement('p', null, "cloning Gmail's with React-Redux")
            )
          ),
          i.a.createElement(
            'div',
            { id: 'artAcademy-item', onClick: t },
            i.a.createElement('img', { id: 'artAcademy-logo', src: _e.a, alt: 'artAcademylogo' }),
            i.a.createElement(
              'section',
              { className: 'card-text' },
              i.a.createElement('span', null, 'ART-ACADEMY'),
              i.a.createElement('p', null, 'pixel-Art with raw CSS & HTML')
            )
          ),
          i.a.createElement(
            'div',
            { id: 'toDos-item', onClick: s },
            i.a.createElement('img', { id: 'toDos-logo', src: Le.a, alt: 'toDosLogo' }),
            i.a.createElement(
              'section',
              { className: 'card-text' },
              i.a.createElement('span', null, "TO-DO'S"),
              i.a.createElement('p', null, 'mock-up for mobile phone')
            )
          )
        );
      }
      var Pe = (function(e) {
        function t(e) {
          var a;
          return (
            Object(o.a)(this, t),
            ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).handle_openTabGithub = function() {
              window.open('https://github.com/cangle007', '_blank').focus();
            }),
            (a.handle_openTabLinkedin = function() {
              window.open('https://www.linkedin.com/in/cangle/', '_blank').focus();
            }),
            (a.handle_routeInspector = function() {
              window.scrollTo(0, 0), a.props.history.push('/inspector');
            }),
            (a.handle_routeDeviceHistory = function() {
              window.scrollTo(0, 0), a.props.history.push('/devhistory');
            }),
            (a.handle_routeIoT = function() {
              window.scrollTo(0, 0), a.props.history.push('/iot');
            }),
            (a.handle_routePokemon = function() {
              window.scrollTo(0, 0), a.props.history.push('/pokemon');
            }),
            (a.handle_routeResponsive = function() {
              window.scrollTo(0, 0), a.props.history.push('/responsive');
            }),
            (a.handle_routeGmail = function() {
              window.scrollTo(0, 0), a.props.history.push('/gmail');
            }),
            (a.handle_routeArt = function() {
              window.scrollTo(0, 0), a.props.history.push('/art');
            }),
            (a.handle_routeTodo = function() {
              window.scrollTo(0, 0), a.props.history.push('/todo');
            }),
            (a.handle_routeMain = function() {
              window.scrollTo(0, 0), a.props.history.push('/');
            }),
            (a.state = {}),
            a
          );
        }
        return (
          Object(u.a)(t, e),
          Object(c.a)(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.history;
                return i.a.createElement(
                  'div',
                  { className: 'main-container' },
                  i.a.createElement('div', { id: 'bannerComp' }, i.a.createElement(Y, null)),
                  i.a.createElement(
                    'div',
                    { id: 'myBioComp' },
                    i.a.createElement(Oe, {
                      handle_openTabGithub: this.handle_openTabGithub,
                      handle_openTabLinkedin: this.handle_openTabLinkedin
                    })
                  ),
                  i.a.createElement(
                    'div',
                    { id: 'portfolioComp' },
                    i.a.createElement(Ge, {
                      handle_routeArt: this.handle_routeArt,
                      handle_routeDeviceHistory: this.handle_routeDeviceHistory,
                      handle_routeGmail: this.handle_routeGmail,
                      handle_routeMain: this.handle_routeMain,
                      handle_routeInspector: this.handle_routeInspector,
                      handle_routeIoT: this.handle_routeIoT,
                      handle_routePokemon: this.handle_routePokemon,
                      handle_routeResponsive: this.handle_routeResponsive,
                      handle_routeTodo: this.handle_routeTodo
                    })
                  ),
                  i.a.createElement(
                    'div',
                    { id: 'sidebarComp' },
                    i.a.createElement(k, { history: e, handle_routeMain: this.handle_routeMain })
                  )
                );
              }
            }
          ]),
          t
        );
      })(n.Component);
      var He = Object(y.b)({ componentDidMount: function() {} }),
        Fe = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        Ue = Object(y.a)(Fe, He)(
          Object(g.f)(function(e) {
            var t = e.history,
              a = e.pokemonImages;
            return i.a.createElement('div', null, i.a.createElement(Pe, { history: t, pokemonImages: a }));
          })
        ),
        Be = a(164),
        We = a.n(Be),
        Ke = a(165),
        qe = a.n(Ke),
        ze = a(166),
        Je = a.n(ze),
        Ve = a(167),
        Xe = a.n(Ve),
        Qe = a(168),
        Ye = a.n(Qe),
        Ze = (function(e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).handle_routeMain = function() {
                a.props.history.push('/');
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'pokemon-container' },
                    i.a.createElement('div', { id: 'pokemon-header-item' }),
                    i.a.createElement(
                      'div',
                      { id: 'pokemon-bio-item' },
                      i.a.createElement(
                        'article',
                        null,
                        i.a.createElement('h1', null, 'POKEMON BATTLE ARENA'),
                        i.a.createElement('p', null, 'real-time battles between multiple players'),
                        i.a.createElement(
                          'p',
                          null,
                          'This is a Pokemon CRUD app that revolves around users building their own Pokemon deck to battle other players in real time!!'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'A full stack application consisting of a back-end to manage over 500+ players worth of data, and a beautiful front-end UI design with authentication to keep your Pokemon data safe.'
                        )
                      ),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'React-Redux'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Express.js'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Node.Js'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Socket.io'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'PostgreSQL'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Front-End Development'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Back-End Development')
                    ),
                    i.a.createElement(
                      'div',
                      { id: 'pokemon-details-item' },
                      i.a.createElement(
                        'section',
                        { id: 'poke_intro' },
                        i.a.createElement('img', { src: We.a, alt: 'poke_intro' }),
                        i.a.createElement(
                          'p',
                          null,
                          'Start by building your team from a list of 18 unique Pokemon with different strategies and moves. Then connect online with your friends or find new players to battle it out to see who has the best team of Pokemon.'
                        )
                      ),
                      i.a.createElement(
                        'section',
                        { id: 'poke_select' },
                        i.a.createElement('img', { src: Xe.a, alt: 'poke_select' })
                      ),
                      i.a.createElement(
                        'section',
                        { id: 'poke_build' },
                        i.a.createElement('img', { src: Ye.a, alt: 'poke_build' })
                      ),
                      i.a.createElement(
                        'section',
                        { id: 'poke_deck' },
                        i.a.createElement('img', { src: Je.a, alt: 'poke_deck' })
                      ),
                      i.a.createElement(
                        'section',
                        { id: 'poke_battle' },
                        i.a.createElement('img', { src: qe.a, alt: 'poke_battle' })
                      )
                    ),
                    i.a.createElement(k, { id: 'sidebarComp', handle_routeMain: this.handle_routeMain })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var $e = Object(y.b)({}),
        et = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        tt = Object(y.a)(et, $e)(
          Object(g.f)(function(e) {
            var t = e.history;
            return i.a.createElement('div', null, i.a.createElement(Ze, { history: t }));
          })
        ),
        at = a(169),
        nt = a.n(at),
        it = a(170),
        rt = a.n(it),
        lt = (function(e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).handle_routeMain = function() {
                a.props.history.push('/');
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'responsive-container' },
                    i.a.createElement('div', { id: 'responsive-header-item' }),
                    i.a.createElement(
                      'div',
                      { id: 'responsive-bio-item' },
                      i.a.createElement(
                        'article',
                        null,
                        i.a.createElement('h1', null, 'RESPONSIVE WEB'),
                        i.a.createElement('p', null, 'website displaying css-grid system'),
                        i.a.createElement(
                          'p',
                          null,
                          'This is a responsive website constructed using CSS-Grid, compatible with desktops, tablets, and mobile phones.',
                          i.a.createElement('br', null),
                          i.a.createElement('br', null),
                          "I developed this project to learn the new Css-Grid layout system that is capable of 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system. I applied this new technogy to my profession designs app. because it compatible to React's philosophy of component driven development."
                        )
                      ),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Front-End Development'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'CSS-Grid')
                    ),
                    i.a.createElement(
                      'div',
                      { id: 'responsive-details-item' },
                      i.a.createElement(
                        'section',
                        null,
                        i.a.createElement('img', { src: rt.a, alt: 'responsive' }),
                        i.a.createElement(
                          'p',
                          null,
                          "Demo to show how the web's grid responds to changes of the width of the screen."
                        )
                      ),
                      i.a.createElement(
                        'section',
                        null,
                        i.a.createElement('img', { src: nt.a, alt: 'responsive_screen' })
                      )
                    ),
                    i.a.createElement(k, { id: 'sidebarComp', handle_routeMain: this.handle_routeMain })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var ot = Object(y.b)({}),
        ct = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        st = Object(y.a)(ct, ot)(
          Object(g.f)(function(e) {
            var t = e.history;
            return i.a.createElement('div', null, i.a.createElement(lt, { history: t }));
          })
        ),
        mt = a(171),
        ut = a.n(mt),
        dt = (function(e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).handle_routeMain = function() {
                a.props.history.push('/');
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'todo-container' },
                    i.a.createElement(
                      'div',
                      { id: 'todo-bio-item' },
                      i.a.createElement(
                        'article',
                        null,
                        i.a.createElement('h1', null, "To-Do's"),
                        i.a.createElement('p', null, 'mock-up for mobile phone'),
                        i.a.createElement(
                          'p',
                          null,
                          'A CRUD application where users can input their chores that need to be done.'
                        )
                      ),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'Front-End Development'),
                      i.a.createElement(j.a, { as: 'a', tag: !0 }, 'CSS-Grid')
                    ),
                    i.a.createElement(
                      'div',
                      { id: 'todo-details-item' },
                      i.a.createElement('section', null, i.a.createElement('img', { src: ut.a, alt: 'todoApp_demo' }))
                    ),
                    i.a.createElement(k, { id: 'sidebarComp', handle_routeMain: this.handle_routeMain })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var pt = Object(y.b)({}),
        Et = Object(d.b)(
          function(e, t) {
            return {};
          },
          function(e, t) {
            return {};
          }
        ),
        ht = Object(y.a)(Et, pt)(
          Object(g.f)(function(e) {
            var t = e.history;
            return i.a.createElement('div', null, i.a.createElement(dt, { history: t }));
          })
        ),
        ft = (Object(O.a)(), Object(p.d)(h, b)),
        bt = (function(e) {
          function t() {
            return Object(o.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments));
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'App' },
                    i.a.createElement(
                      d.a,
                      { store: ft },
                      i.a.createElement(
                        v.a,
                        null,
                        i.a.createElement(
                          g.c,
                          null,
                          i.a.createElement(g.a, { exact: !0, path: '/', component: Ue }),
                          i.a.createElement(g.a, { exact: !0, path: '/art', component: x }),
                          i.a.createElement(g.a, { exact: !0, path: '/body', component: V }),
                          i.a.createElement(g.a, { exact: !0, path: '/devhistory', component: F }),
                          i.a.createElement(g.a, { exact: !0, path: '/gmail', component: le }),
                          i.a.createElement(g.a, { exact: !0, path: '/header', component: ee }),
                          i.a.createElement(g.a, { exact: !0, path: '/inspector', component: se }),
                          i.a.createElement(g.a, { exact: !0, path: '/iot', component: be }),
                          i.a.createElement(g.a, { exact: !0, path: '/pokemon', component: tt }),
                          i.a.createElement(g.a, { exact: !0, path: '/responsive', component: st }),
                          i.a.createElement(g.a, { exact: !0, path: '/todo', component: ht })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      a(301),
        a(302),
        a(303),
        a(304),
        a(305),
        a(306),
        a(307),
        a(308),
        a(309),
        a(310),
        a(311),
        a(312),
        a(313),
        a(314),
        a(315);
      l.a.render(i.a.createElement(bt, null), document.getElementById('root'));
    }
  },
  [[180, 1, 2]]
]);
