import React from 'react';
import UserAvatar from "@/components/userAvatar";
import UserDropDown from "@/components/userDropDown";
// import '@/styles/demo/index.less';




export default function Demo() {

  return (
    <div className="topbar" >
      <UserDropDown />
      {/* <span style={{ width: '5%' }}> <UserAvatar emoji=":thumbsup:" /></span>
      <span style={{ width: '5%' }}> <UserAvatar src="https://joeschmoe.io/api/v1/random" /></span>
      <span style={{ width: '5%' }}> <UserAvatar emoji=":speech_balloon:" src="https://joeschmoe.io/api/v1/random" /></span>  */}
    </div>

  );
}
