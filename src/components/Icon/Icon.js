import styled from 'styled-px2vw';

const Icon = styled.i`
    display:inline-block;
    width:${({ width = '94px' }) => width};
    height:${({ height = '94px' }) => height};
    background:url(${props => props.img}) center no-repeat;
    background-size:contain;
    margin-left:${({ ml = '30px' }) => ml};
    margin-right:${({ mr = '30px' }) => mr};
    flex-shrink: 0;
`;
export default Icon;
