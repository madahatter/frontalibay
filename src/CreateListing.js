import React, { Component } from 'react'

class CreateListing extends React.Component {
    constructor() {
        super();
        this.state = {
            imgPreview: null,
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
        fetch('/createListing', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.titleInput,
                description: this.state.descriptionInput,
                img: this.state.img
            })
            .then((res) => res.json())
            .then(res => {
                if(res.success) {
                    this.props.historyPush('/itemdetails/' + res.itemId)
                }
            })
        })
    }
    handleImageUpload = (e) => {
        console.log(e.target.files[0])
        let file = e.target.files[0];
        let extension = file.name.split('.')[1];
        let reader = new FileReader();
        console.log(reader.readAsDataURL(file));
        reader.onload = (e) => {
            this.setState({ imgPreview: e.target.result });
        }
        fetch('/uploadImg?extension=' + extension, {
            method: 'POST',
            body: file
        })
        .then(res => res.json())
        .then((res) => this.setState({img: res.img}))
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Title" value={this.state.titleInput} onChange={this.handleTitleChange}/>
            <input type="text" placeholder="Description" value={this.state.descriptionInput} onChange={this.handleDescChange}/>
            <input type="file" onChange={this.handleImageUpload}/>
            <input type="submit"/>
        </form>
        {this.state.imgPreview && <img src={this.state.imgPreview} />}
      </div>
    )
  }
}

export default CreateListing;