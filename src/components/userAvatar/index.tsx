import { renderHTMLEmoji } from '@/utils/emoji';
import { Avatar } from 'antd';

// import './styles/top-bar.less'

interface IUserAvatarProps { 
    src?: string;
    size?: number;
    emoji?:string;
}

export default function UserAvatar({ 
    src,
    size = 48,
    emoji
}: IUserAvatarProps) {
    return (
        <>
            <div style={{ position: 'relative', display: 'flex' }}>
                <Avatar
                    size={size}
                    src={`${src ? src : 'https://enkomm.ntq.solutions/avatar/huynh.phuoc?_dc=19466'}`}
                    shape='circle'
                // style={{ position: 'relative' }}
                >

                </Avatar>
                {emoji ? (
                    <div
                        style={{ position: 'absolute', top: '26px', left: '26px', width: '22px', height: '22px' }}
                        dangerouslySetInnerHTML={renderHTMLEmoji(emoji)}
                    />
                ) : ''}
            </div>
        </>
    );
}
