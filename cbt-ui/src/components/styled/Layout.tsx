import { Paper as MuiPaper } from '@material-ui/core';
import styled from 'styled-components';
import { defaultPadding } from './SharedCss';
interface GridProps {
    columns: number;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(100%/${props => props.columns}));
`

export const GridItem = styled.div`
    ${defaultPadding}
`

export const GridHeader = styled(GridItem)`
    font-weight: 600;
`

export const TableColumn = styled.div`
    flex: 1 0 100%;
    flex-direction: column;
`

export const TableRow = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container = styled.div`
    ${defaultPadding};
`

export const Box = styled.span`
    ${defaultPadding};
`

export const Paper = styled(MuiPaper)`
    padding: 15px;
`;