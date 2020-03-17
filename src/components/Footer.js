import React, {Component} from 'react';

import SocialNetwork from './../components/SocialNetwork';
import shortid from 'shortid';

const socialMediaArray = [
    {link: 'mailto:johanndmoreno24@gmail.com', iconClass: 'far fa-envelope', title: 'Email', iconData: ''},
    {link: 'https://linkedin.com/in/johannmoreno/', iconClass: 'fab fa-linkedin-in', title: 'Linkedin', iconData: ''},
    {link: 'https://github.com/Johanson1988', iconClass: 'fab fa-github', title: 'Github', iconData: ''},
    {link: 'https://codewars.com/users/johanson88', iconClass: 'iconify', title: 'Codewars', iconData: 'simple-icons:codewars'},
    {link: 'https://twitter.com/JohannDMoreno', iconClass: 'fab fa-twitter', title: 'Twitter', iconData: ''},
];

export default class Footer extends Component {
    render() {
        return(
            <footer>        
                <ul className="social-list">
                    {
                        socialMediaArray.map(socialNetwork => <SocialNetwork key={shortid.generate()} socialNetwork={socialNetwork} />)
                    }
                </ul>
            </footer>
        )
    }
}