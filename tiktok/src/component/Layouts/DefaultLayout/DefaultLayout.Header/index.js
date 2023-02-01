import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Images Logo*/}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>

                {/* Search*/}
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    {/* icon close */}
                    <button className={cx('close')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* icon loading */}
                    <button type="" className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    {/* search-btn */}
                    <button type="" className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* Actions */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
