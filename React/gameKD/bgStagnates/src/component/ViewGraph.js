import React, {Component} from 'react';

class ViewGraph extends Component{
    render(){
        return(
            <div className="wrap_info info_month">
                <span className="txt_desc">[5월동안 Total Kill/Death]</span>
                <div className="info_graph">
                    <span className="fill_graph"></span>
                </div>
            </div>
        );
    }
}
export default ViewGraph;