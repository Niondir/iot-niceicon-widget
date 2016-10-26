/**
 Nice Icon for IOT-Dashboard
 npm install react-lightning-design-system
 Note: Filename can be niceicon.js or niceicon.react if necessary for identification by gulp.
 */

import {Icon} from 'react-lightning-design-system';

class NiceIconWidget extends React.Component {

    render() {
        return <div style={{width: '100%', height: '100%'}}>
            <Icon category='utility' icon='clock' size='large' className='slds-m-right--small'/>
        </div>
    }
}

NiceIconWidget.propTypes = {
    getData: React.PropTypes.func.isRequired,
    state: React.PropTypes.shape({
        height: React.PropTypes.number.isRequired,
        id: React.PropTypes.string.isRequired
    }).isRequired
};

window.iotDashboardApi.registerWidgetPlugin({
    type: "niceicon",
    name: "Nice Icon",
    version: "0.0.1",
    rendering: "react",
    description: "Test to render ReactJS Icon from git:mashmatrix/react-lightning-design-system.",
    dependencies: [
        'https://www.lightningdesignsystem.com/assets/styles/slds.css'
    ],
    settings: []
}, NiceIconWidget);
