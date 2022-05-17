import style from '../../styles/Home.module.css';

function BlogCard(props) {
  const { blogPost } = props;

  const { title, description, image } = blogPost;

  return (
    <div className={style.BlogCard}>
      <div>
        <img src={image} width={200} />
      </div>
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
}

export { BlogCard };
