import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div className = "my-3"> 
            <div className="card" style={{width: "18rem"}}>
            <img src= {!imageUrl?"https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0801%2Fr1366977_1296x729_16%2D9.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target = "_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
