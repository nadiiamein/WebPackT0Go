import * as $ from 'jquery';
import Post from './Post.js';
//import json from './assets/json.json';
//import xml from './assets/data.xml';
import WebpackLogo from './assets/mavic.png';
import './styles/styles.css';

const post = new Post('Webpack Post Title', WebpackLogo);
$('pre').addClass('code').html(post.toString());
//console.log('Post to sssstring:', post.toString());
//console.log('JSON:', json);
//console.log('XML:', xml);












