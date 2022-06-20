import { EditOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import UserAvatar from '../userAvatar';

interface IUserDropdownProps {
  status?: string;
}

const menu = (status: string) => (
  <Menu
    className='rc-popover__content'
    items={[
      {
        label: <span>Huỳnh Phước</span>,
        key: '0',
        className: `rc-popover__title`
      },
      {
        label:
          <span className="rc-popover__icon">
            <div className={`rc-header__status-bullet ${status} topbar-status-icon`} />
            <span className="rc-popover__item-text">{status === 'offline' ? 'invisible' : status}</span>
          </span>,
        className: `rc-popover__item`,
        key: '1',
      },
      {
        type: 'divider',
        className: 'rc-popover__divider',
        key: '2',
      },
      {
        label: <span>Users</span>,
        className: `rc-popover__title`,
        key: '3',

      }, {
        label:
          <span className="rc-popover__icon">
            <div className="rc-header__status-bullet online topbar-status-icon" />
            <span className="rc-popover__item-text">online</span>
          </span>,
        className: `rc-popover__item`,
        key: '4',
      }, {
        label:
          <span className="rc-popover__icon">
            <div className="rc-header__status-bullet away topbar-status-icon" />
            <span className="rc-popover__item-text">away</span>
          </span>,
        className: `rc-popover__item`,
        key: '5',
      }, {
        label:
          <span className="rc-popover__icon ">
            <div className="rc-header__status-bullet busy topbar-status-icon" />
            <span className="rc-popover__item-text">busy</span>
          </span>,
        className: `rc-popover__item`,
        key: '6',
      }, {
        label:
          <span className="rc-popover__icon ">
            <div className="rc-header__status-bullet offline topbar-status-icon" />
            <span className="rc-popover__item-text">invisible</span>
          </span>,
        className: `rc-popover__item`,
        key: '7',
      },
      {
        label:
          <span className="rc-popover__icon ">
            <EditOutlined style={{ color: 'var(--theme-color)' }} />
            <span className="rc-popover__item-text">Update Status</span>
          </span>,
        className: `rc-popover__item`,
        key: '8',
      },
      {
        type: 'divider',
        className: 'rc-popover__divider',
        key: '9',
      }, {
        label:
          <span className="rc-popover__icon ">
            <UserOutlined style={{ color: 'var(--theme-color)' }} />
            <span className="rc-popover__item-text">My Account</span>
          </span>,
        className: `rc-popover__item`,
        key: '10',
      }, {
        label:
          <span className="rc-popover__icon ">
            <LogoutOutlined style={{ color: 'var(--theme-color)' }} />
            <span className="rc-popover__item-text">Logout</span>
          </span>,
        className: `rc-popover__item`,
        key: '11',
      },
    ]}
  />
);

export default function UserDropdown({
  status = 'online',
}: IUserDropdownProps) {
  return (
    <>
      <div className='topbar-info'>
        <Dropdown overlay={menu(status)} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
            <UserAvatar size={44} />
          </a>
        </Dropdown>
        <div className="topbar-user">
          <p className="topbar-name">Huỳnh Phước</p>
          <div className="topbar-status">
            <div className={`rc-header__status-bullet ${status} topbar-status-icon`} />
            <p className="topbar-status-text">{status === 'offline' ? 'invisible' : status}</p>
          </div>
        </div>
      </div>
    </>
  );
}
