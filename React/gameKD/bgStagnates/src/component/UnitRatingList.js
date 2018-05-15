import React, {Component, Fragment} from 'react';

class UnitRatingList extends Component{
    render(){
        return(
            <Fragment>
                <li>
                    <span className="txt_Combination">솔로</span>
                    <dl className="list_score">
                        <dt>K/D</dt>
                        <dd>3.74</dd>
                        <dt>경기 당 데미지</dt>
                        <dd>358</dd>
                        <dt>최다 킬</dt>
                        <dd>9</dd>
                        <dt>최다 데미지</dt>
                        <dd>999</dd>
                    </dl>
                </li>
            </Fragment>
        );
    }
}

export default UnitRatingList;