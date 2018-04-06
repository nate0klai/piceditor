import React, { Component, PropTypes } from 'react'

export default class Pic extends Component {
    render() {
        const { title, url, id } = this.props.data;

        return <div className='pic'>
            <div className='head'>
                <p className='title'>{title}</p>
                <p className='delete' onClick={this.props.delete.bind('',id)}>delete</p>
            </div>
            <div className='divimg'>
                <img src={url}/>
            </div>
        </div>
    }
}

Pic.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string
    }),
    delete: PropTypes.func
}
