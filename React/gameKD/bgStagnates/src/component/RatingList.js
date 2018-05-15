import React, {Component, Fragment} from 'react';
import UnitRatingList from "./UnitRatingList";

class RatingList extends Component{
    render(){
        return(
            <Fragment>
                <ul className="list_Rating">
                    <UnitRatingList/>
                    <UnitRatingList/>
                    <UnitRatingList/>
                </ul>
            </Fragment>
        );
    }
}

export default RatingList;