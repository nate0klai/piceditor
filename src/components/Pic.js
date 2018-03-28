import React, { Component } from 'react'

export default class Pic extends Component {
    render() {
        const { title, url } = this.props.data;
        console.log({title: title, url: url});

        return <div className='pic'>
            <div className='head'>
                <p className='title'>{title}</p>
                <p className='delete' onClick={this.props.delete.bind('',url)}>delete</p>
            </div>
            <div className='divimg'>
                <img src={url}/>
            </div>
        </div>
    }
}