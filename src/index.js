import Post from './Post.js';
import json from './assets/json.json';
import WebpackLogo from './assets/mavic.png';
import './styles/styles.css';
const post = new Post('Webpack Post Title', WebpackLogo);
console.log('Post to sssstring:', post.toString());
console.log('JSON:', json);
