import React, { useState } from 'react';
import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import { HelpIcon } from './Icon';
import { Backdrop, Fade, Modal } from '@material-ui/core';

const StyledFilterPanel = styled.div`
    height: 100%;
    width: ${props => props.widthConfig.default};
    padding: 1rem;
    border-radius: .25rem;
    background-color: ${props => props.theme.colors.surface};
    border: 1px solid ${props => props.theme.colors.border};
    box-shadow: 0 0 .15em lightgray;
    @media screen and (max-width: 1360px) {
        width: ${props => props.widthConfig[1360]};
    }
    @media screen and (max-width: 992px) {
        width: ${props => props.widthConfig[992]};
    }
`

export const FilterPanel = (props) => (
    <StyledFilterPanel widthConfig={props.widthConfig}>
        {props.children}
    </StyledFilterPanel>
)

const StyledContainerHeader = styled.div`
    display: flex;
    align-items: center;
    font-size: large;
    font-weight: normal;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: .4rem;
    border-bottom: solid 1px ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.onSurface};
`
export const ContainerHeader = (props) => (
    <StyledContainerHeader>
        {props.title}
        {props.end}
    </StyledContainerHeader>
)

const ModalContainer = styled.div`
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.onSurface};
    width: 70%;
    @media screen and (max-width: 992px) {
        width: 80%;
    }
    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
    @media screen and (max-width: 624px) {
        width: 90%;
    }
    height: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    padding: 1rem;
    border-radius: .25rem;
    border: 1px solid ${props => props.theme.colors.border};
    > div > div:first-child > span:last-child {
        font-size: x-large;
        cursor: pointer;
    }
`
const ModalContent = styled.div`
    overflow: auto;
    height: 100%;
    scrollbar-width: thin;
    padding-right: .5rem;
    margin-right: -.5rem;
    &::-webkit-scrollbar {
        width: .4rem;
        background: ${props => props.theme.colors.surface};
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.border};
        border-radius: .25rem;
    }
    &::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.surface};
    }
`

export const HelpModal = (props) => (
    <Modal
        open={props.modalOpen}
        onClose={props.handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
        aria-labelledby="help-modal-title"
        aria-describedby="help-modal-description"
    >
        <Fade in={props.modalOpen}>
            <ModalContainer>
                <ModalContent>
                    {props.children}
                </ModalContent>
            </ModalContainer>
        </Fade>
    </Modal>
)

const ResultTableContainer = styled.div`
    vertical-align: top;
    position: absolute;
    width: ${props => props.widthConfig.default};
    margin-left: calc(100% - ${props => props.widthConfig.default});
    padding: 1rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: .25rem;
    background-color: ${props => props.theme.colors.surface};
    border: 1px solid ${props => props.theme.colors.border};
    box-shadow: 0 0 .15em lightgray;
    @media screen and (max-width: 1360px) {
        width: ${props => props.widthConfig[1360]};
        margin-left: calc(100% - ${props => props.widthConfig[1360]});
    }
    @media screen and (max-width: 992px) {
        width: ${props => props.widthConfig[992]};
        margin-left: calc(100% - ${props => props.widthConfig[992]});
        position: relative;
        margin-top: 1rem;
    }
`
const ResultTableWrapper = styled.div`
    height: calc(100% - 1.4rem - 1.5rem);
    maring-top: -.5rem;
    overflow-x: hidden; overflow-y: auto;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: .4rem;
        background: ${props => props.theme.colors.surface};
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.border};
        border-radius: .25rem;
    }
    &::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.surface};
    }
`
const StyledResultTable = styled(Table)`
    width: 100%;
    font-size: normal;
    color: ${props => props.theme.colors.onSurface};
    img {
        width: 1.8rem; height: 1.8rem;
    }
    td {
        padding-left: .75rem;
    }
`
const IconWrapper = styled.div`
    svg {
        fill: ${props => props.theme.colors.secondary};
        width: 1.4rem;
        height: 1.4rem;
        margin-left: .4rem;
        cursor: pointer;
        vertical-align: top;
    }
`

export function ResultTable(props) {
    const useSortableData = (items, config = { key: 0, direction: 'desc' }) => {
        // when key is number meaning sorted by the number of item
        const [sortConfig, setSortConfig] = useState(config)

        const sortedItems = React.useMemo(() => {
            let sortableItems = [...items]
            props.sortFunc(sortableItems, sortConfig)
            return sortableItems
        }, [items, sortConfig])

        const requestSort = (key) => {
            let direction = 'desc';
            if (
                sortConfig.key === key &&
                sortConfig.direction === 'desc'
            ) {
                direction = 'asc';
            }
            setSortConfig({ key, direction })
        }

        return { sortedResult: sortedItems, requestSort, sortConfig }
    }
    const { sortedResult, requestSort, sortConfig } = useSortableData(props.result)
    const getSortDirection = (name) => {
        if (sortedResult.length === 0) {
            return
        }
        return sortConfig.key === name ? sortConfig.direction : undefined
    }

    return (
        <ResultTableContainer widthConfig={props.widthConfig}>
            <ContainerHeader
                title={<>
                    {'篩選結果'}
                    <IconWrapper onClick={props.handleModalOpen}>{HelpIcon}</IconWrapper>
                </>}

            />
            <ResultTableWrapper>
                <StyledResultTable
                    striped
                    borderless
                    size="sm"
                >
                    {React.cloneElement(props.children, {
                        requestSort: requestSort,
                        getSortDirection: getSortDirection,
                        sortedResult: sortedResult,
                    })}
                </StyledResultTable>
            </ResultTableWrapper>
            <HelpModal
                modalOpen={props.modalOpen}
                handleModalClose={props.handleModalClose}
            >
                {props.modalContent}
            </HelpModal>
        </ResultTableContainer>
    )
}