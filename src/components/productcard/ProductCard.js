import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../modal/Modal';



class ProductCard extends React.Component{

  modal = ()=>{
    const modalContent=(
      <Modal title={this.props.tit} description={this.props.des} img={this.props.imgurl}/>
    )
    ReactDOM.render(modalContent,document.getElementById('root'));

  }

  render(){
    return(
      <div className="card border-0 col-12 col-lg-6 text-info my-5 py-5 px-5">
        <img src={this.props.imgurl} className="card-img-top rounded" alt="cake" />
        <div className="card-body">
          <h2 className="card-title text-dark">{this.props.tit}</h2>
          <p className="card-text text-dark">{this.props.des} </p>
          <button className="btn btn-font btn-dark" onClick={this.modal}>View more</button>
        </div>
      </div>
    )
  }
}

export default ProductCard;
