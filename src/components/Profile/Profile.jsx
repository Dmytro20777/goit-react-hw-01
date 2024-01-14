import css from "./Profile.module.css"
import clsx from 'clsx';

export const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.listItem}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.label}>Views</span>
          <span className={css.value}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};