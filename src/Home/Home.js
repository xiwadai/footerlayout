import React, { Component } from 'react';
import styled from 'styled-px2vw';
import ScrollBox from '../components/ScrollBox';




export default class Home extends Component {
    constructor(props) {
        super(props);



    }

    componentDidMount() {



    }
    render() {

        return (
            <Content>
                <ScrollBox >
                    {/* 页面内容区域 */}


                    {/* 做一个高度标签撑起底部页面高度 */}
                    <BlankContent />
                </ScrollBox>
                <Footer>
                    <FooterItem><p>标签1</p></FooterItem>
                    <FooterItem><p>标签2</p></FooterItem>
                </Footer>

            </Content>
        );
    }

}
const Content = styled.div`
    position:absolute;
    height:100%;
    width:100%;
  
`;
const Footer = styled.div`
    width:100%;
    position:absolute;
    bottom: 0;
    display:flex;
    background-color:#fff;
    box-shadow: 0px -2px 29px 0px rgba(228,228,228,0.50);
`;
const FooterItem = styled.div`
    width:50%;
    height:118px;
    box-sizing: content-box;
    position:relative;
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    &:first-child::after{
        content: '';
        width:1PX;
        height:80px;
        position:absolute;
        right:-0.5PX;
        top:15px;
        background-color:#E8E8E8;
    }
    p{
        color:#2465FF;
        font-size:26px;
    }
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
`;
//做撑起高度使用
const BlankContent = styled.div`
    height:190px;
    background-color:#fff;
`;


