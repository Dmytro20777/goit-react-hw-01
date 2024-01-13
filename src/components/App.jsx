import { Profile } from "./Profile";
import  profilesData  from "../userData.json";



export function App() {
  return (
    <>
      <ul>
        <li>
          <Profile
            name={profilesData.username}
            tag={profilesData.tag}
            location={profilesData.location}
            image={profilesData.avatar}
            stats={profilesData.stats}
          />
        </li>
      </ul>
    </>
  );
}



