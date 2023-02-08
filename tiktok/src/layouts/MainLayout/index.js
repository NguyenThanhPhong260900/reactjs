import Header from '~/layouts/Components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
