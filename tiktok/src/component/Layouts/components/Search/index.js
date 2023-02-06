import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlesTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import { SearchIcon } from '~/component/Icons';
import { useDebounce } from '~/Hook';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    // để mặc định hiển là hiển thị kết quả tìm kiếm
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // b1: debounced = " "
    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        // setSearchResult([]);
        inputRef.current.focus();
    };

    // logic go here
    // muốn ẩn kết quả tìm kiếm đi thì set cho kết quả bằng false
    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        // encodeURIComponent dùng để mã hóa các ký tự gây hiểu làm thành các ký tự hợp lệ
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

    return (
        <HeadlesTippy
            // Khi thỏa thuận của 2 điều kiện thì mới hiển thị tìm kiếm
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    {/* là phần Wrapper => Popper */}
                    <PopperWrapper>
                        <h5 className={cx('search-title')}>Accounts</h5>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            {/* Search*/}
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    // tắt gạch chân trong ô tìm kiếm
                    spellCheck={false}
                    // Lưu lại giá trị khi tìm kiếm
                    onChange={(e) => setSearchValue(e.target.value)}
                    // khi bấm vào ô tìm kiếm thì lại hiển thị kết quả tìm kiếm
                    onFocus={() => setShowResult(true)}
                />

                {/* Button Icon clear */}
                {/* ############ Logic Search ############ */}
                {/* khi không có giá trị trong input thi icon clear sẽ ẩn */}
                {/* Nếu có giá trị thì hiển thị button icon close */}
                {/* khi click vào icon clear thì nó sẽ hiển xóa hết giá trị và hiển thị chuỗi rỗng */}
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        // Sử dụng trực tiếp
                        // onClick={() => {
                        //     setSearchValue('');
                        //     inputRef.current.focus();
                        // }}

                        // Tái sử dụng
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* icon loading */}
                <button type="" className={cx('loading')}>
                    {loading && <FontAwesomeIcon icon={faSpinner} />}
                </button>

                {/* search-btn */}
                <button type="" className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlesTippy>
    );
}

export default Search;
