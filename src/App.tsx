import React, { useState, useEffect } from 'react';

import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import AppTopbar  from './layout/AppTopbar';
import  AppFooter  from './layout/AppFooter';
import { AppMenu } from './layout/AppMenu';





import PrimeReact from 'primereact/api';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './css/layout/flags/flags.css';
import './css/layout/layout.scss';
import './css/App.scss';



import HomeComponent from "./component/homeComponent";
import {classNames} from "primereact/utils";
import {AdminPage} from "./component/AdminPage";

const App = () => {

    const [layoutMode, setLayoutMode] = useState('static');
    const [layoutColorMode, setLayoutColorMode] = useState('light')
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(true);
    const [staticMenuInactive, setStaticMenuInactive] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);

    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;

    useEffect(() => {
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [mobileMenuActive]);



    const onWrapperClick = (event:any) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }

        if (!mobileTopbarMenuClick) {
            setMobileTopbarMenuActive(false);
        }

        mobileTopbarMenuClick = false;
        menuClick = false;
    }

    const onToggleMenuClick = (event:any) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === 'overlay') {
                if(mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }

                setOverlayMenuActive((prevState) => !prevState);
                setMobileMenuActive(false);
            }
            else if (layoutMode === 'static') {
                setStaticMenuInactive((prevState) => !prevState);
            }
        }
        else {
            setMobileMenuActive((prevState) => !prevState);
        }

        event.preventDefault();
    }

    const onSidebarClick = () => {
        menuClick = true;
    }

    const onMobileTopbarMenuClick = (event:any) => {
        mobileTopbarMenuClick = true;

        setMobileTopbarMenuActive((prevState) => !prevState);
        event.preventDefault();
    }

    const onMobileSubTopbarMenuClick = (event:any) => {
        mobileTopbarMenuClick = true;

        event.preventDefault();
    }

    const onMenuItemClick = (event:any) => {
        if (!event.item.items) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    }
    const isDesktop = () => {
        return window.innerWidth >= 992;
    }

    const menu = [
        {
            label: 'Home',
            items: [{
                label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
            }]
        },
        {
            label: 'UI Kit', icon: 'pi pi-fw pi-sitemap',
            items: [
                {label: 'Admin Page', icon: 'pi pi-fw pi-id-card', to: '/AdminPage'},
                {label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input'},
                {label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel"},
                {label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "invalidstate"},
                {label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button'},
                {label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},
                {label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},
                {label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},
                {label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},
                {label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},
                {label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu'},
                {label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},
                {label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},
                {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},
                {label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},
            ]
        },
        {
            label: 'Pages', icon: 'pi pi-fw pi-clone',
            items: [
                {label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud'},
                {label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline'},
                {label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
            ]
        },
        {
            label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
            items: [
                {
                    label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
                                {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
                                {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
                            ]
                        },
                        {
                            label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},
                                {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}
                            ]
                        },
                    ]
                },
                {
                    label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
                                {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
                                {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},
                            ]
                        },
                        {
                            label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
                                {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}
                            ]
                        }
                    ]
                }
            ]
        },

    ];

    const addClass = (element:any, className:string) => {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    const removeClass = (element:any, className:string) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    const wrapperClass = classNames('layout-wrapper', {
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-static-sidebar-inactive': staticMenuInactive && layoutMode === 'static',
        'layout-overlay-sidebar-active': overlayMenuActive && layoutMode === 'overlay',
        'layout-mobile-sidebar-active': mobileMenuActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false,
        'layout-theme-light': layoutColorMode === 'light'
    });

    return (
        <div className={wrapperClass} onClick={onWrapperClick}>
            <AppTopbar onToggleMenuClick={onToggleMenuClick} layoutColorMode={layoutColorMode}
                       mobileTopbarMenuActive={mobileTopbarMenuActive} onMobileTopbarMenuClick={onMobileTopbarMenuClick} onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick}/>

            <div className="layout-sidebar" onClick={onSidebarClick}>
                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />
            </div>

            <div className="layout-main-container">
                <div className="layout-main">
                    <Route path="/" exact component={HomeComponent}/>
                    <Route path="/AdminPage" exact component={AdminPage} />
                </div>

                <AppFooter layoutColorMode={layoutColorMode}/>
            </div>



            <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition>

        </div>
    );

}

export default App;
