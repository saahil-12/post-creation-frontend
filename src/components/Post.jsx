import classes from './Post.module.css';
import { Link } from 'react-router-dom';


export default function Post({id,author,body}) {

  return (
    <li className={classes.post}>
    <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.body}>{body}</p>
      </Link>
    </li>
    
  );
}

