import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from 'react';
import Loader from "react-loader-spinner";

export default class BoardLoader extends React.Component {

  //other logic
  render() {
   console.log(this.props)
    return (
      <Loader
        type={this.props.type}
        color="#00BFFF"
        height={100}
        width={100}
      />
    );
  }
}
