import React, {Component, Fragment} from 'react';
import UnitRatingList from "./UnitRatingList";

class RatingList extends Component{
    render(){
        return(
            <Fragment>
                <ul className="list_Rating">
                    <UnitRatingList/>
                </ul>
                <div className="wrap_commt">
                    <span className="txt_KillDeath">* 최근 100회 기준</span>
                </div>
            </Fragment>
        );
    }
}

export default RatingList;