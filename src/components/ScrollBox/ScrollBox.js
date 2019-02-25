import styled from 'styled-px2vw';
const ScrollBox = styled.div`
    position:absolute;
    top:${({ top = 0 }) => top};
    left:0;
    right:0;
    bottom: 0;
    overflow-x:hidden;
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
    background-color:${({ bg = '#fff' }) => bg};
`;

export default ScrollBox;
