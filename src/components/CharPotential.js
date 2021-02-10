import React from 'react';
import styled from 'styled-components';
import { ContainerHeader, FilterPanel } from '../components/FilterComponents';
import { AlertIcon, BuffIcon, ItemIcon, RaceIcon } from '../components/Icon';
import { Col, Form } from 'react-bootstrap';
import data from '../../src/characterPotential.json';
import { Snackbar } from '@material-ui/core';

const Select = styled(Form.Control)`
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.onSurface};
    border-radius: .25rem;
    padding: .1rem;
    border: 1px solid ${props => props.theme.colors.secondary};
    width: 100%;
    &:focus {
        box-shadow: 0 0 .4rem ${props => props.theme.colors.secondary};
    }
`
const IconWrapper = styled.div`
    svg {
        width: 1.2rem;
        height: 1.2rem;
        margin-bottom: .2rem;
        fill: ${props => props.theme.colors.onSurface};
    }
`
const CharImgWrapper = styled.img`
    width: 5rem;
    border: 2px solid ${props => props.theme.colors.secondary};
    border-radius: .25rem;
`
const ContainerBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Gutter = styled.div`
    margin-top: 3rem;
`

const SelectPanel = (props) => {
    const widthConfig = {
        default: '25%',
        992: '100%',
    }

    return (
        <FilterPanel widthConfig={widthConfig}>
            <ContainerHeader
                title={
                    <IconWrapper>
                        {RaceIcon}{'角色選擇'}
                    </IconWrapper>
                }
            />
            <ContainerBody>
                <CharImgWrapper
                    src={`${process.env.PUBLIC_URL}/img/char_${data.characters[props.character].id}.png`}
                    alt=''
                />
                <div>
                    <Form>
                        角色<br />
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Select
                                    as="select"
                                    custom
                                    size="sm"
                                    onChange={props.handleSelect('character')}
                                >
                                    {Object.keys(data['characters'])
                                        .map((c, idx) => <option key={idx}>{c}</option>)}
                                </Select>
                            </Form.Group>
                        </Form.Row>
                        <Gutter/>當前<br />
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Select
                                    as="select"
                                    custom
                                    size="sm"
                                    onChange={props.handleSelect('currStage')}
                                >
                                    {props.stages}
                                </Select>
                            </Form.Group>
                            –
                            <Form.Group as={Col}>
                                <Select
                                    as="select"
                                    custom
                                    size="sm"
                                    onChange={props.handleSelect('currSub')}
                                >
                                    {[...Array(7).keys()].slice(1)
                                        .map(i => <option key={i}>{i}</option>)}
                                </Select>
                            </Form.Group>
                        </Form.Row>
                        目標<br />
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Select
                                    as="select"
                                    custom
                                    size="sm"
                                    onChange={props.handleSelect('targetStage')}
                                >
                                    {props.stages}
                                </Select>
                            </Form.Group>
                            –
                            <Form.Group as={Col}>
                                <Select
                                    as="select"
                                    custom
                                    size="sm"
                                    onChange={props.handleSelect('targetSub')}
                                >
                                    {[...Array(7).keys()].slice(1)
                                        .map(i => <option key={i}>{i}</option>)}
                                </Select>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div>
            </ContainerBody>
        </FilterPanel>
    )
}

const ImgMaterialWrapper = styled.img`
    width: 2rem;
    height: 2rem;
    margin-right: .4rem;
`
const ImgOtherWrapper = styled.img`
    width: 1.6rem;
    height: 1.6rem;
    margin-right: .4rem;
`
const MaterialContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    min-height: 6rem;
`
const MaterialWrapper = styled.span`
    min-width: 4.8rem;
`

const ResultPanel = (props) => {
    const MaterialBox = () => {
        if (!props.result.items) return <></>

        return (
            <MaterialContainer>
                {Object.entries(props.result.items).map((item, idx) => (
                    <MaterialWrapper key={idx}>
                        <ImgMaterialWrapper
                            src={
                                `${process.env.PUBLIC_URL}/img/item_${('00' + item[0]).slice(-3)}.png`
                            }
                            alt=''
                        />
                        {item[1]}
                    </MaterialWrapper>
                ))}
                <MaterialWrapper>
                    <ImgMaterialWrapper
                        src={`${process.env.PUBLIC_URL}/img/money.png`}
                        alt='money'
                    />
                    {props.result.money}
                </MaterialWrapper>
            </MaterialContainer>
        )
    }

    return (
        <FilterPanel widthConfig={props.widthConfig}>
            <div>
                <ContainerHeader
                    title={
                        <IconWrapper>
                            {ItemIcon}{'需求道具'}
                        </IconWrapper>
                    }
                />
                <MaterialBox />
            </div>
            <div>
                <ContainerHeader
                    title={
                        <IconWrapper>
                            {BuffIcon}{'增益'}
                        </IconWrapper>
                    }
                />
                <div>
                    <MaterialWrapper>
                        <ImgOtherWrapper
                            src={`${process.env.PUBLIC_URL}/img/ATK.png`}
                            alt='ATK'
                        />
                        {`${props.result.buff.ATK} %`}
                    </MaterialWrapper>
                    <MaterialWrapper>
                        <ImgOtherWrapper
                            src={`${process.env.PUBLIC_URL}/img/HP.png`}
                            alt='HP'
                        />
                        {`${props.result.buff.HP} %`}
                    </MaterialWrapper>
                </div>
            </div>
        </FilterPanel>
    )
}

const FilterContainer = styled.div`
    display: flex;
    @media screen and (max-width: 992px) {
        display: block;
    }
    > div:last-child {
        vertical-align: top;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin-left: calc(100% - ${props => props.resultPanelWidthConfig.default});
        @media screen and (max-width: 992px) {
            width: ${props => props.resultPanelWidthConfig[992]};
            margin-left: calc(100% - ${props => props.resultPanelWidthConfig[992]});
            position: relative;
            margin-top: 1rem;
        }
    }
    > .MuiSnackbar-root > div {
        background-color: #ff9800;
        font-size: medium;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        > .MuiSnackbarContent-action {
            margin: 0;
            padding: 0;
            svg 
            {
                width: 1.4rem;
                height: 1.4rem;
                fill: #fff;
            }
        }
    }
`

const resultPanelWidthConfig = {
    default: 'calc(75% - 1rem)',
    992: '100%',
}

export default function CharPotential() {
    const [state, setState] = React.useState({
        character: '魔王 巴爾',
        currStage: "1",
        currSub: "1",
        targetStage: "1",
        targetSub: "1",
        isValid: true,
        isSnackbarOpen: false,
        result: {
            items: undefined,
            money: 0,
            buff: {
                ATK: 0,
                HP: 0,
                PASSIVE: 0
            },
        },
    })

    const handleSelect = (attr) => (event) => {
        //update state
        let newState = { ...state }
        newState[attr] = event.target.value
        if (event.target.value === 'N/R角') {
            newState.currStage = state.currStage > 6 ? 1 : state.currStage
            newState.targetStage = state.targetStage > 6 ? 1 : state.targetStage
        }
        newState.isValid =
            parseInt(newState.targetStage) > parseInt(newState.currStage) ||
            (parseInt(newState.targetStage) === parseInt(newState.currStage) &&
                parseInt(newState.targetSub) >= parseInt(newState.currSub))
        newState.isSnackbarOpen = !newState.isValid
        if (!newState.isValid) {
            newState.result = {
                items: undefined,
                money: 0,
                buff: {
                    ATK: 0,
                    HP: 0,
                    PASSIVE: 0
                },
            }
            setState(newState)
            return
        }
        let result = {
            items: {},
            money: 0,
            buff: {
                ATK: 0,
                HP: 0,
                PASSIVE: 0
            },
        }
        // calculate demand
        let type = data.characters[newState.character].type
        let stages = data.type[type]
        let start = newState.currStage - 1
        let end = newState.targetStage - 1
        for (let i = start; i < end + 1; i++) {
            let stage = stages[i]
            for (
                let j = i === start ? newState.currSub - 1 : 0;
                j < (i === end ? newState.targetSub : 6);
                j++
            ) {
                let id = stage.pattern[j] + stage.rank[j]
                if (result.items[id]) {
                    result.items[id] += stage.num[j]
                } else {
                    result.items[id] = stage.num[j]
                }
                result.money += (i + 1) * 8000
                let buff = data.itemMap[stage.pattern[j]].type
                result.buff[buff] += stage.buff[j]
            }
        }
        // parse result
        let parsedItem = {}
        for (const [key, value] of Object.entries(result.items)) {
            let itemId = data.itemMap[key[0]].id.map(id => (
                (parseInt(key[1]) * 100 + id).toString()
            ))
            for (let i of itemId) {
                if (parsedItem[i]) {
                    parsedItem[i] += value
                } else {
                    parsedItem[i] = value
                }
            }
        }
        result.items = parsedItem
        result.buff.ATK = Math.round(result.buff.ATK * 100) / 100
        result.buff.HP = Math.round(result.buff.HP * 100) / 100
        newState.result = result
        setState(newState)
    }

    const stages = [...Array(state.character === 'N/R角' ? 7 : 13).keys()]
        .slice(1).map(i => <option key={i}>{i}</option>)

    const handleSnackbarClose = () => {
        let newState = { ...state }
        newState.isSnackbarOpen = false
        setState(newState)
    }

    return (
        <FilterContainer
            resultPanelWidthConfig={resultPanelWidthConfig}
        >
            <SelectPanel
                handleSelect={handleSelect}
                stages={stages}
                character={state.character}
            />
            <Snackbar
                open={state.isSnackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                message="目標階段小於當前階段"
                action={AlertIcon}
            />
            <ResultPanel
                widthConfig={resultPanelWidthConfig}
                result={state.result}
            />
        </FilterContainer>
    )
}