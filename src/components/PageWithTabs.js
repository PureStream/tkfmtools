import React, { useEffect, useState } from 'react';
import { useLocation } from "@reach/router"
import styled from 'styled-components';
import { Tab, Tabs } from '@material-ui/core';
import LocalizedLink from 'components/LocalizedLink'
import { useLanguage } from 'components/LanguageProvider';
import {
    StatsIcon,
    FilterIcon,
    OverviewIcon,
    PotentialIcon,
    ListIcon,
    PiechartIcon
} from 'components/icon';

const StyledTabs = styled(Tabs)`
    && {
        transition: all 0.3s ease;
        border-bottom: 1px solid ${props => props.theme.colors.border};
        .MuiTabs-indicator {
            background-color:  ${props => props.theme.colors.secondary};
            height: 100%;
            border-radius: .25rem;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
        .MuiTab-root {
            min-width: 0;
            min-height: 0;
            padding: 0 1rem;
            padding-top: .6rem;
            z-index: 1;
            > span {
                display: ${props => {
        if (props.$lang === 'en') return 'flex'
        else return 'inline'
    }};
                font-size: ${props => {
        if (props.$lang === 'en') return '1rem'
        else return 'medium'
    }};
                color: ${props => props.theme.colors.onSurface}
            }
        }
        .MuiTab-root.MuiTab-labelIcon {
            min-height: 0;
        }
        && svg {
            width: 1.4rem;
            height: 1.4rem;
            margin: 0rem .2rem;
            margin-left: 0;
        }
        svg {
            fill: ${props => props.theme.colors.onSurface};
        }
        .Mui-selected > span {
            color: ${props => props.theme.colors.onSecondary};
            svg {
                fill: ${props => props.theme.colors.onSecondary};
            }
        }
    }
`
const TabPanel = styled.div`
    position: relative;
    margin-top: 1rem;
`
export default function PageWithTabs({
    children,
    pagePath,
}) {
    const { userLanguage, pageString } = useLanguage()

    const tabsConfig = {
        enlist: {
            enlist: {
                label: pageString.enlist.tabLabel[0],
                icon: OverviewIcon,
                to: '/enlist/',
            },
            filter: {
                label: pageString.enlist.tabLabel[1],
                icon: FilterIcon,
                to: '/enlist/filter/',
            },
        },
        drop: {
            drop: {
                label: pageString.items.drop.tabLabel[0],
                icon: OverviewIcon,
                to: '/items/drop/',
            },
            filter: {
                label: pageString.items.drop.tabLabel[1],
                icon: FilterIcon,
                to: '/items/drop/filter/',
            },
        },
        characters: {
            potential: {
                label: pageString.characters.tabLabel[0],
                icon: PotentialIcon,
                to: '/characters/potential/',
            },
            exp: {
                label: pageString.characters.tabLabel[1],
                icon: StatsIcon,
                to: '/characters/stats/',
            }
        },
        analysis: {
            analysis: {
                label: pageString.analysis.tabLabel[0],
                icon: ListIcon,
                to: '/analysis/',
            },
            result: {
                label: pageString.analysis.tabLabel[1],
                icon: PiechartIcon,
                to: '/analysis/result/',
            }
        }
    }

    const configKey = Object.keys(tabsConfig)
        .find(key => pagePath.includes(key))
    const tabIndex = Object.values(tabsConfig[configKey])
        .findIndex(value => value.to === pagePath)

    const [state, setState] = useState({
        tab: tabIndex,
        pageState: undefined,
    })

    const handlePageState = (newState) => {
        setState(state => ({ ...state, pageState: newState }))
    }

    let location = useLocation()

    // handle tab change on location change
    useEffect(() => {
        setState(state => ({ ...state, tab: tabIndex }))
    }, [location])

    return (
        <>
            <StyledTabs
                value={state.tab}
                $lang={userLanguage}
            >
                {Object.values(tabsConfig[configKey]).map((item, idx) => (
                    <Tab
                        value={idx}
                        label={item.label}
                        icon={item.icon}
                        component={LocalizedLink}
                        to={item.to}
                        key={item.label}
                    />
                ))}
            </StyledTabs>
            <TabPanel>
                {React.cloneElement(children, {
                    pageState: state.pageState,
                    handlePageState: handlePageState
                })}
            </TabPanel>
        </>
    )
}
