import React, { Component } from 'react';

class SelState extends Component{
    render(){
        return(
            <div className="sel_state">
                <input type="radio" id="inpKd" className="inpRadio inp_kd" name="nameState"/>
                <label htmlFor="inpKd" className="lab_state labKd">K/D</label>
                <input type="radio" id="inpKill" className="inpRadio inp_kill" name="nameState"/>
                <label htmlFor="inpKill" className="lab_state labKill">최다킬</label>
                <input type="radio" id="inpKill" className="inpRadio inp_kill" name="nameState"/>
                <label htmlFor="inpKill" className="lab_state labKill">5월 동안 총 K/D</label>
            </div>
        );
    }
}

export default SelState;