import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

/*
    tham so fallback:   + khong truyen fallback tu ngoai vao thi no lay images.noImage
                        + Khi truyen fallback no image khong duoc su dung ma no su dung fallback ben ngoai
*/
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    className: PropTypes.string,
    fallback: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
