import React from 'react';

const SocialIcons = props => (
  <ul {...props}>
    <li>
      <a
        href="https://web.facebook.com/dennis.njogu.10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-facebook" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/dennisndegwa13"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-twitter" />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/Njogu-Ndegwa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github" />
      </a>
    </li>
    <li>
      <a
        href="https://stackoverflow.com/users/12456923/dennis-njogu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-stack-overflow" />
      </a>
    </li>
    {/* <li>
      <a
        href="https://www.linkedin.com/in/bryan-cee/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin" />
      </a>
    </li> */}
    <li>
      <a
        href="https://medium.com/@dennisnjogu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-medium" />
      </a>
    </li>
  </ul>
);

export default SocialIcons;
