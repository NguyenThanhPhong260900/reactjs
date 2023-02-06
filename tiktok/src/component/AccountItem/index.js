import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/Image';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/d7312c990d970b98c022e67bb4ffcfcd~c5_100x100.jpeg?x-expires=1675440000&amp;x-signature=vfNFrCJ6aOgXIr2BcgXwYa8O8Po%3D"
                alt="phong"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Thanh Phong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Nguyen Thanh Phong</span>
            </div>
        </div>
    );
}

export default AccountItem;
