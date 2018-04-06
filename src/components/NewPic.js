import React, {Component, PropTypes} from 'react'

export default class NewPic extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            url: ''
        }
    }
    render() {
        return <div className='newPic'>
            <div className='newPicForm'>
                <div className='title'>New Image</div>
                <input type='text' className='textField' placeholder='Title' onInput={(e)=>{this.setState({title:e.currentTarget.value})}}/>
                <input type='text' className='textField' placeholder='URL' onInput={(e)=>{this.setState({url:e.currentTarget.value})}}/>
                <div className='buttons'>
                    <div className='close button' onClick={this.props.close}><p>CLOSE</p></div>
                    <div className='add button' onClick={this.props.add.bind('',this.state.title,this.state.url)}><p>ADD</p></div>
                </div>
            </div>
        </div>
    }
}

NewPic.propTypes = {
    close: PropTypes.func,
    add: PropTypes.func
}