import React, {Component, Fragment} from 'react';

class SelState extends Component{
    render(){
        let day = new Date();

        // document.write('현재 년: ' + day.getFullYear() + '<br />');
        // document.write('현재 월: ' + (day.getMonth() + 1) + '<br />');
        // document.write('현재 일: ' + day.getDate() + '<br />');
        //
        // document.write('<br />'); // 줄바꿈
        //
        // document.write('현재 시: ' + day.getHours() + '<br />');
        // document.write('현재 분: ' + day.getMinutes() + '<br />');
        // document.write('현재 초: ' + day.getSeconds() + '<br />');


        return(
            <Fragment>
                <div className="sel_state">
                    <input type="radio" id="inpKd" className="inpRadio inp_kd" name="nameState"/>
                    <label htmlFor="inpKd" className="lab_state labKd">K/D</label>
                    <input type="radio" id="inpKill" className="inpRadio inp_kill" name="nameState"/>
                    <label htmlFor="inpKill" className="lab_state labKill">최다킬</label>
                    <input type="radio" id="inpKill" className="inpRadio inp_kill" name="nameState"/>
                    <label htmlFor="inpKill" className="lab_state labKill">{(day.getMonth() + 1)}월 K/D</label>

                </div>

            </Fragment>
        );
    }
}

export default SelState;