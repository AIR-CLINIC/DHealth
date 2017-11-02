import React from 'react';
import { Icon } from 'antd';
const state = Math.random().toString(36).substring(7);
import './Github.less';

const GithubBtn = ({ disconnect }) => (
  <button className="ConnectGithub"
    onClick={() => {
      if (!disconnect) {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.UTOPIAN_GITHUB_CLIENT_ID}&redirect_uri=${process.env.UTOPIAN_GITHUB_REDIRECT_URL}&scope=repo,user,gist&state=${state}`
      } else {
        disconnect();
      }
    }}
  >
    <Icon type="github" /> {!disconnect ? 'Sync with Github' : 'Disconnect Github' }
  </button>
);

export default GithubBtn
