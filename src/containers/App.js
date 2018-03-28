import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/Header'
import Pic from '../components/Pic'
import NewPic from '../components/NewPic'
import * as AppActions from '../actions/AppActions'

class App extends Component {
    constructor() {
        super();
        this.state = {
            showNewPic: false
        }
    }
    onShowPopup(){
        this.setState({showNewPic: true})
    }
    onClose(){
        this.setState({showNewPic: false})
    }
    onDelete(id){
        console.log('delete');
        this.props.AppActions.deletePic(id);
    }
    onAdd(title, url){
        console.log('add');
        let k = 0, {pics} = this.props;
        while (k<pics.length) {
            if (!pics.filter(p=>p.id===k).length) break;
            k++;
        }
        this.props.AppActions.addPic(title, url, k);
        this.onClose();
    }
    render() {
        console.log(this.state);
        const { pics } = this.props;
        return <div>{
            this.state.showNewPic ? <NewPic close={this.onClose.bind(this)} add={this.onAdd.bind(this)}/> :
            <div className='main'>
                <Header/>
                <div className='showPopup button' onClick={this.onShowPopup.bind(this)}><p>NEW</p></div>
                <div className='strip'>
                    {pics.map((p, i)=><Pic key={i} data={p} delete={this.onDelete.bind(this)}/>)}
                </div>
            </div>
        }</div>
    }
}

function mapStateToProps (state) {
    return {
        pics: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        AppActions: bindActionCreators(AppActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
