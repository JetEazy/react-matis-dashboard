import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //
const rootPath = '/org';

const MainRoutesOrg = {
    path: rootPath + '/',
    element: <MainLayout />,
    children: [
        {
            path: rootPath + '/',
            element: <DashboardDefault />
        },
        {
            path: rootPath + 'color',
            element: <Color />
        },
        {
            path: rootPath + 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: rootPath + 'sample-page',
            element: <SamplePage />
        },
        {
            path: rootPath + 'shadow',
            element: <Shadow />
        },
        {
            path: rootPath + 'typography',
            element: <Typography />
        },
        {
            path: rootPath + 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutesOrg;
