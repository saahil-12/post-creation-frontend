import classes from './Post.module.css';


export default function Post(prop) {

  return (
    <li className={classes.post}>
        
        <p className={classes.author}>{prop.author}</p>
        <p className={classes.body}>{prop.body}</p>
    </li>
    
  );
}

