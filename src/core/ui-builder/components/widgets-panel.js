import React, { Component } from 'react';
import './widgets-panel.scss';

import { Accordion, Menu, Search } from 'semantic-ui-react'

class WidgetsPanel extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render() {
        const { activeIndex } = this.state
        return (
            <div className="d-flex flex-column widgets-panel">
                <div className="d-flex justify-content-center panel-header"><span>Widgets</span></div>
                <div className="mt-2 ml-1 mr-1"><Search fluid /></div>
                <Accordion as={Menu} vertical>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 0}
                            content='Layout'
                            index={0}
                            onClick={this.handleClick}
                        />
                        <Accordion.Content active={activeIndex === 0} ></Accordion.Content>
                    </Menu.Item>

                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 1}
                            content='Form'
                            index={1}
                            onClick={this.handleClick}
                        />
                        <Accordion.Content active={activeIndex === 1} ></Accordion.Content>
                    </Menu.Item>
                </Accordion>
            </div>
        );
    }
}

export default WidgetsPanel;