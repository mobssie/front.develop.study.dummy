import React, {Component, Fragment} from 'react';

class Header extends Component{
    state = {
        name : '',
        level : '석유'
    }
    handleChange = (e) => {
        this.setState({
          name : e.target.value
        })
    }
    render(){
        return(
            <Fragment>
                <header className="App-header">
                    <h1 className="App-title">나의 고인정도 측정하기</h1>
                    <input type="text"
                           className="inpName"
                           onChange={this.handleChange}
                           value={this.state.name}/>
                    <button type="button" className="btn_sear">
                        <span className="ico_sear">검색</span>
                    </button>
                    <strong className="txt_myname">{this.state.name}</strong>
                    <span className="txt_desc">당신은 {this.state.level} 입니다.</span>
                </header>
            </Fragment>
        );
    }
}

export default Header;