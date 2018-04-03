import React, { Component, PropTypes } from 'react'
import { Button, Header, Segment } from 'semantic-ui-react'

export default class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        replace: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,

        redirect: PropTypes.string.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
    }

    componentWillMount () {
        const {isAuthenticated, replace, redirect} = this.props
        if (isAuthenticated) {
            console.log("redirect");
            replace(redirect)
        }
    }
    render() {
        return (
            <div style={{textAlign:'center', marginTop:'200px'}}>
                <Header size='huge'>
                    Welcome to Groupify
                </Header>

                <Header size='large'>
                    <i>The most efficient web application for creating teams based on timewise availability.</i>
                </Header>

                <Segment raised style={{fontSize:'14', textAlign:'center', color:'red', fontStyle:'bold'}} >
                    <p>
                      Note: This demo is currently being used for live testing.
                    </p>
                    <p>
                      Some changes might happen suddenly. The website might go down for a couple of minutes.
                    </p>
                    <p>
                      You may create a new user or use:
                    </p>
                    <p>
                      Username: demo@422.prez
                    </p>
                    <p>
                      Password: 123456
                    </p>
                </Segment>
            </div>

        )
    }
}
