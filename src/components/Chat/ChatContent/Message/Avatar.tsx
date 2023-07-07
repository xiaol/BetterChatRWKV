import React from 'react';
import { Role } from '@type/chat';
import SettingIcon from '@icon/SettingIcon';
import PersonIcon from '@icon/PersonIcon';
import AssistantLogo from "./assistant.png"
import SystemLogo from "./system.png"

const Avatar = React.memo(({ role }: { role: Role }) => {
  return (
    <div className='w-[30px] flex flex-col relative items-end'>
      {role === 'user' && <UserAvatar />}
      {role === 'assistant' && <AssistantAvatar />}
      {role === 'system' && <SystemAvatar />}
    </div>
  );
});

const UserAvatar = () => {
  return (
    <div
      className='relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center'
      style={{ backgroundColor: 'rgb(200, 70, 70)' }}
    >
      <PersonIcon />
    </div>
  );
};

// 助手图标
const AssistantAvatar = () => {
  return (

  <div >
    <img src={AssistantLogo} />
  </div>
    
  );
};

const SystemAvatar = () => {
  return (
   <div >
     <img src={SystemLogo} />
   </div>
  );
};

export default Avatar;
