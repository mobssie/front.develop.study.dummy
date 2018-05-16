import React, {Component, Fragment} from 'react';

class UnitRatingList extends Component{
    render(){
        let data = [
            { value: '솔로', kdValue : '3.74', eachDamage : '333', ManyKill:'9',ManyDamage:'333'},
            { value: '듀오', kdValue : '358', eachDamage : '333', ManyKill:'10',ManyDamage:'444'},
            { value: '스쿼드', kdValue : '999', eachDamage : '33', ManyKill:'19',ManyDamage:'222'}
        ];
        return data.map(item => {
            return(
                <Fragment>
                    <li>
                        <span className="txt_Combination">{item.value}</span>
                        <dl className="list_score">
                            <dt>K/D</dt>
                            <dd>{item.kdValue}</dd>
                            <dt>경기 당 데미지</dt>
                            <dd>{item.eachDamage}</dd>
                            <dt>최다 킬</dt>
                            <dd>{item.ManyKill}</dd>
                            <dt>최다 데미지</dt>
                            <dd>{item.ManyDamage}</dd>
                        </dl>
                    </li>
                </Fragment>
            );
        });
    }
}

export default UnitRatingList;