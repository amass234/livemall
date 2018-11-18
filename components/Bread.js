import React, { Component } from 'react'
import { Breadcrumb, Icon } from 'antd';

export class Bread extends Component {
    render() {
        return (
            <div style={{ margin: '-8px 0', padding: 24, background: '#fff'}}>
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="user" />
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Application
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

export default Bread
