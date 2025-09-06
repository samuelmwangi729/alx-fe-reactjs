import UserInfo from './UserInfo';
import {userContext} from './UserContext'
import { useContext } from 'react';
function ProfilePage() {
    const userdata = useContext(userContext)
  return <UserInfo userData={userdata} />;
}

export default ProfilePage;