import { Profile } from "./Profile/Profile";
import profilesData from "../userData.json";

import friends from "../friends.json";
import { FriendList } from "./FriendList/FriendList";
import css from "./App.module.css"


export function App() {
  return (
    <>
      <ul>
        <li className={css.item}>
          <Profile
            name={profilesData.username}
            tag={profilesData.tag}
            location={profilesData.location}
            image={profilesData.avatar}
            stats={profilesData.stats}
          />
        </li>
      </ul>
      <FriendList friends={friends} />
    </>
  );
}

