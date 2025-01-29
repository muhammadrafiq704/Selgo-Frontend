import { lazy } from "react";

export const Home = lazy(() => import('../pages/home'));
export const Target = lazy(() => import('../pages/Target'));
export const Property = lazy(() => import('../pages/Property'));
export const Notification = lazy(() => import('../pages/home/components/Notification/Notification'));
export const UnauthorizedPage = lazy(() => import('../components/NotFound/NotFound'));
