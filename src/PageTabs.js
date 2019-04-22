import React from 'react';

import './PageTabs.css';

class PageTabs extends React.Component {

    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        event.preventDefault();
        this.props.onViewChange(tabName);
    }

    render () {
        return (
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <a className={this.isActiveTab('TaskList')}
                       onClick={(e) => this.onTabClick(e, 'TaskList')}>
                        List View
                    </a>
                </li>
                <li className='nav-item'>
                    <a className={this.isActiveTab('TaskBoard')}
                       onClick={(e) => this.onTabClick(e, 'TaskBoard')}>
                        Grid View
                    </a>
                </li>
                <li className='nav-item'>
                    <a className={this.isActiveTab('AddTask')}
                       onClick={(e) => this.onTabClick(e, 'AddTask')}>
                        Add Task
                    </a>
                </li>
            </ul>
        )
    }

};

export default PageTabs;