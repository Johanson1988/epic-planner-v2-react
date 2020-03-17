import React, {Component} from 'react';

export default class SocialNetwork extends Component {
    render() {
        const {link, iconClass, title, iconData} = this.props.socialNetwork;
        return(
            <li className="social-list__item">
                <a href={link} className="social-list__link" target="_blank" rel="noopener noreferrer">
                    <i className={iconClass} title={title} data-icon={iconData} />
                </a>
            </li>
        )
    }
}