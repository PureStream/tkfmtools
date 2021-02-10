import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';

const TabPanel = styled.div`
    position: relative;
    margin-top: 1rem;
`
const StyledTabs = styled(Tabs)`
    border-bottom: 1px solid ${props => props.theme.colors.border};
    > div {
        > .MuiTabs-indicator {
            background-color:  ${props => props.theme.colors.secondary};
            height: 100%;
            border-radius: .25rem;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
        > div {
            > .MuiTab-root {
                min-width: 0;
                min-height: 0;
                padding: 0 1rem;
                padding-top: .6rem;
                z-index: 1;
                > span {
                    display: inline;
                    font-size: medium;
                    color: ${props => props.theme.colors.onSurface}
                }
            }
            > .MuiTab-root.MuiTab-labelIcon {
                min-height: 0;
            }
            > .Mui-selected {
                > span {
                    transition: all 355ms ease;
                    color: ${props => props.theme.colors.onSecondary};
                    svg {
                        transition: all 355ms ease;
                        fill: ${props => props.theme.colors.onSecondary};
                    }
                }
            }
        }
    }
    svg {
        width: 1.4rem;
        height: 1.4rem;
        margin: .3rem .2rem;
        margin-left: 0;
        fill: ${props => props.theme.colors.onSurface};
    }
}
`
export default function PageWithTabs(props) {
    const getDefaultTab = () => {
        let localSetting = localStorage.getItem(props.title + 'select-tab')
        return localSetting ? parseInt(localSetting) : 0
    }
    const [tab, setTab] = useState(getDefaultTab)

    const handleTabChange = (event, toTab) => {
        setTab(toTab)
        localStorage.setItem(props.title + 'select-tab', toTab)
    }
    React.useEffect(() => {
        document.title = props.title
    })

    return (
        <>
            <StyledTabs
                value={tab}
                onChange={handleTabChange}
            >
                {props.tabs.map(item => (
                    <Tab label={item.label} icon={item.icon} key={item.label} />
                ))}
            </StyledTabs>
            {props.tabs.map((item, idx) => (
                <TabPanel hidden={tab !== idx} key={idx}>
                    {item.content}
                </TabPanel>
            ))}
        </>
    )
}