import { HeaderOnly } from '~/component/Layouts';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// Không cần đăng nhập vẫn xem được các trang
/*
    Lưu ý:  + layout === null thì sẽ không có layout
            + Không truyền layout thì sẽ layout mặc định
            + truyền layout thì sẽ lấy layout được truyền vào
*/
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// cần đăng nhập mới vào được trang này
const privateRoutes = [];

//
export { publicRoutes, privateRoutes };