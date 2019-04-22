import React, {Component} from 'react';

import './TaskList';

class FilterSelector extends Component{



    render() {


        return (
            <option>{this.props.filterlabel}</option>
        );
    }


}


    export default FilterSelector;