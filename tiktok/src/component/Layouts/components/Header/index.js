import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/component/Icons';
import Image from '~/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        // Menu nhiều cấp (cấp cha)
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                    // ví dụ cho menu có thể nhiều cấp
                    // children: {
                    //     title: 'Language',
                    //     data: [
                    //         {
                    //             code: 'en',
                    //             title: 'English 1',
                    //         },
                    //         {
                    //             code: 'vi',
                    //             title: 'Vietnamese 1',
                    //         },
                    //     ],
                    // },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@phong',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Live Studio',
        to: '/@',
    },
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Setttings',
        to: '/@phong',
    },

    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    const currentUser = true;

    // handle logic go here
    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                // handle change to language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Images Logo Header*/}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                {/* Search Header */}
                <Search />

                {/* Actions Header */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            {/* <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                                <button type="" className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy> */}
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button type="" className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Notification" placement="bottom">
                                <button type="" className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1fe95a4260a3dd0135851dfaaca9ad7c~c5_100x100.jpeg?x-expires=1675670400&x-signature=mthF1xkgRw0vg6B%2FCPsS3Ah3XSc%3D"
                                alt="Phong"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
