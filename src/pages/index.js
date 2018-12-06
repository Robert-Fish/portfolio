import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/1.png'
import thumb02 from '../assets/images/thumbs/2.png'
import thumb03 from '../assets/images/thumbs/3.png'
import thumb04 from '../assets/images/thumbs/4.png'

import full01 from '../assets/images/fulls/1.png'
import full02 from '../assets/images/fulls/2.png'
import full03 from '../assets/images/fulls/3.png'
import full04 from '../assets/images/fulls/4.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Dev Up - The Social Network For Developers',
    description:
      'This is the social network i built for developers. Built using the MERN stack(MongoDB, Express JS, React and Node).',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Space X Launches',
    description:
      'An app to see all Space X launches(past and present).Powered by React, Apollo and GraphQL.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Grilled',
    description:
      'Mock restaurant using modern web design to create an intuitive and friendly website. Powered by HyperJS.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Lyrica',
    description:
      'A song lyrica finder. Simply search a song and fin the lyrics instantly. Powered by React and the MusicMatch API.',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Robert Fish - Software Engineer'
    const siteDescription = 'Portfolio site for Robert Fish'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Always looking to improve my skills as a developer.</h2>
            </header>
            <p>
              I am always pursuing new frameworks and new libraries to improve
              my skills as a developer. I feel that a portfolio speaks for
              itself, so feel free to explore my recent work as well as visit my
              blog to follow me in my journey as a developer.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://reactivated.netlify.com/"
                  className="button"
                  target="_blank"
                >
                  Visit my blog
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Have a question or want to get in touch? Shoot me an email and i
              will get back to you as fast as possible!
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                {/* <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                </form> */}
                {/* <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul> */}
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Queensland, Gold Coast
                    <br />
                    Australia
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    0478-728-295
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">robertfish597@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
