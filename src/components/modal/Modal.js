import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

class Modal extends React.Component{
  close = () =>{
    ReactDOM.render(<App/>, document.getElementById('root'));
  }

  render(){
    console.log('Modal');
    return(
      <div className="container">
        <div className="modal-footer mt-5">
          <button type="button" className="btn btn-dark mr-5 btn-font" data-dismiss="modal" onClick={this.close}>Close</button>
        </div>

        <h2 className="modal-title text-center text-capitalize">{this.props.title}</h2>
        <div className="modal-body">
          <img src={this.props.img} alt="Cake" className="img-fluid m-auto d-block rounded" />
        </div>

        <p className="text-center mb-5">{this.props.description}</p>

      </div>
    )
  }
}

export default Modal;
