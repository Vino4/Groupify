import React from 'react'
import {Image, Button, Icon, Menu, Header, Dimmer} from 'semantic-ui-react'

import SidebarMenu from "../../../../components/SidebarMenu/SidebarMenu";
import {Link} from "react-router";

class _UserProfileSnippet extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    displayFormattedCreationDate () {
        return (new Date((this.props.accountSettingsViewData.get('createdAt').split('T')[0]).replace(/-/g, '\/')).toLocaleDateString());
    }

    handleShow = () => this.setState({active: true});
    handleHide = () => this.setState({active: false});

    componentWillMount () {
       this.props.fetchUserProfile();
    }

    render() {
        const {active} = this.state;
        const content = (
            <Button size={"mini"}>Upload</Button>
        );

        return (
            <div style={ {textAlign: "center", padding: "24px"} }>
                <Dimmer.Dimmable
                    as={Image}
                    dimmed={active}
                    dimmer={{active, content}}
                    onMouseEnter={this.handleShow}
                    onMouseLeave={this.handleHide}
                    size='small'
                    src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png'
                    shape="circular"
                />
                <Header as='h3'>
                    <Header.Content>
                        {this.props.accountSettingsViewData.get('userName')}
                        <Header.Subheader>
                            Member since {this.displayFormattedCreationDate()}
                        </Header.Subheader>
                    </Header.Content>
                </Header>
            </div>
        );
    }
}

class _MenuOptions extends React.Component {
    constructor() {
        super();
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                <Link to={ `/dashboard?view=activities`}>
                    <Menu.Item name='activities' active={ this.props.view === "activities" || this.props.view === undefined }>
                        <Icon name='users'/>
                        Activities
                    </Menu.Item>
                </Link>
                <Link to={ `/dashboard?view=surveys`}>
                    <Menu.Item name='surveys' active={ this.props.view === "surveys"}>
                        <Icon name='file text outline'/>
                        Surveys
                    </Menu.Item>
                </Link>
                <Link to={ `/dashboard?view=accountSettings`}>
                    <Menu.Item name='accountSettings' active={ this.props.view === "accountSettings"}>
                        <Icon name='settings'/>
                        Account Settings
                    </Menu.Item>
                </Link>
            </div>
        );
    }
}

class DashboardSideMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SidebarMenu size="massive">
                <_UserProfileSnippet
                      accountSettingsViewData= { this.props.accountSettingsViewData }
                      fetchUserProfile={ this.props.fetchUserProfile}
                />
                <_MenuOptions view={ this.props.view } fetchUserProfile={ this.props.fetchUserProfile}/>
            </SidebarMenu>
        )
    }
}


export default DashboardSideMenu;
