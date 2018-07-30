import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';


class BadgeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                Badges<p><Badge>42</Badge></p>
            </div>
        );
    }
}

export default BadgeItem;