import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/ProgramForAll"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Robert-Fish"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://reactivated.netlify.com"
                className="icon fa-edit"
              >
                <span className="label">Blog</span>
              </a>
            </li>
            {/* <li>
              <a href="#" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li> */}
          </ul>
          <ul className="copyright">
            <li>&copy; Robert Fish</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
