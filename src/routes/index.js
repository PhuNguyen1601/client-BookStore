// Layouts
import { CustomLayout } from '~/components/Layout';

import Home from '~/page/Home/Home';
import Category from '~/page/Category/Category';
import Search from '~/page/Search/Search';
import Upload from '~/page/Upload/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/category', component: Category },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: CustomLayout },
];

const pritaveRoutes = [];

export { publicRoutes, pritaveRoutes };
