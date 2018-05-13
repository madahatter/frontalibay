import React, { Component } from 'react'
import {Card,CardBody,CardText,CardTitle} from 'reactstrap'

class CreateListing extends React.Component {
    constructor() {
        super();
        this.state = {
            img: "",
            titleInput: "",
            descriptionInput: "",
            category: "",
        };
    }

    handleTitleChange = (event) => {
        this.setState({ titleInput: event.target.value })
    }
    handleCatChange = (event) => {
        this.setState({ category: event.target.value })
    }
    handleDescChange = (event) => {
        this.setState({ descriptionInput: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        fetch('/createListing', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.titleInput,
                description: this.state.descriptionInput,
                img: this.state.img,
                category: this.state.category,
                email: this.props.email
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.success) {
                    this.props.historyPush('/itemdetails/' + res.itemID)
                }
            })

    }

    handleImageUpload = (x) => {
        var filename = x.name;
        var fileExtension = filename.split('.').pop();
        fetch('/uploadImg?extension=' + fileExtension, { method: "POST", body: x })
            .then(res => res.json())
            .then((res) => this.setState({ img: res.imageName }))
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <Card>
          <CardBody className="sellerInput">
            <CardText><h3>Sell an item</h3></CardText>
            <CardText>Title: <input className="inputs" type="text" value={this.state.titleInput} onChange={this.handleTitleChange}/></CardText>
            <CardText>Description: <input type="text" className="inputs" value={this.state.descriptionInput} onChange={this.handleDescChange}/></CardText>
            <CardText>Price: <input className="inputs" type="number" step="1.00" min="0"/> </CardText>
            <CardText>Category: <select name="Categories" onChange={this.handleCatChange}>
                <option value="">--choose a category--</option>
                <option value="Phones">Phones and Accessories</option>
                <option value="Jewelry">Jewelry and Watches</option>
                <option value="Electronics">Consumer Electronics</option>
                <option value="Cars">Cars</option>
              </select>
            </CardText>
            <CardText><input type="file" onChange={e => this.handleImageUpload(e.target.files[0])} /></CardText>
            <CardText><input type="submit"/> </CardText>
          </CardBody>
        </Card>
        </form>


      {/* <form onSubmit={this.handleSubmit}>
        <input type="number" placeholder="9.99" step="1.00" min="0"/>
        <input type="text" placeholder="Title" value={this.state.titleInput} onChange={this.handleTitleChange}/>
        <input type="text" placeholder="Description" value={this.state.descriptionInput} onChange={this.handleDescChange}/>
          <select name="Categories" onChange={this.handleCatChange}>
            <option value="">--choose a category--</option>
              <option value="Phones">Phones and Accessories</option>
              <option value="Jewelry">Jewelry and Watches</option>
              <option value="Electronics">Consumer Electronics</option>
              <option value="Cars">Cars</option>
          </select>
          <input type="file" onChange={e => this.handleImageUpload(e.target.files[0])} />
          <input type="submit"/>
      </form> */}
        {this.state.img ? <img src={"/"+this.state.img} /> : null}
      </div>
    )
  }
}


export default CreateListing;