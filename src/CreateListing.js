import React, { Component } from 'react'

class CreateListing extends React.Component {
    constructor() {
        super();
        this.state = {
            img: "",
            titleInput: "",
            descriptionInput: ""
        };
    }

    handleTitleChange = (event) => {
        this.setState({titleInput: event.target.value})
    }
    handleDescChange = (event) => {
        this.setState({descriptionInput: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        fetch('/createListing', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.titleInput,
                description: this.state.descriptionInput,
                img: this.state.img
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.success) {
                this.props.historyPush('/itemdetails/' + res.itemId)
            }
        })
        
    }

    handleImageUpload = (x) => {
        var filename = x.name;
        var fileExtension = filename.split('.').pop();
        fetch('/uploadImg?extension=' + fileExtension,{method: "POST", body: x}) 
        .then(res => res.json())
        .then((res) => this.setState({img: res.imageName})) 
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Title" value={this.state.titleInput} onChange={this.handleTitleChange}/>
            <input type="text" placeholder="Description" value={this.state.descriptionInput} onChange={this.handleDescChange}/>
            <input type="file" onChange={e => this.handleImageUpload(e.target.files[0])} />
            <input type="submit"/>
        </form>
        {this.state.img ? <img src={"/"+this.state.img} /> : null}
      </div>
    )
  }
}

export default CreateListing;