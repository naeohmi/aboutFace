import React, { Component } from 'react'
import axios from 'axios'

export default class Resume extends Component {
    constructor() {
        super()

        this.state = {
            path: "",
            html: "",
            name: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({ path: e.target.value })
        console.log("TARGET", e.target.value)
    }

    handleClick(e) {
        e.preventDefault()

        axios.all([
            axios.post("http://localhost:3001/convert", { path: this.state.path.substring(12) }),
            axios.post("http://localhost:3001/name", { path: this.state.path.substring(12) })
        ])
            .then(axios.spread((html, name) => {
                this.setState({ html: html.data, name: name.data }, () => {
                    var pTags = document.getElementsByTagName('p')

                    for (var i = 0; i < pTags.length; i++) {
                        if (pTags[i].innerText == this.state.name) {
                            pTags[i].innerText = "Candidate Name"
                        }
                    }
                })
            }))
            .catch(console.error)
    }

    render() {
        console.log("STATE", this.state)
        return (
            <div>
                <div>
                    <form>
                        <input type="file" name="fileupload" onChange={this.handleChange} id="fileupload" /> <label > Select a file to upload</label>
                        <input type="submit" onClick={this.handleClick} value="Submit" />
                    </form>
                </div>
                <div>
                    {this.state.html ? <div dangerouslySetInnerHTML={{ __html: this.state.html }} /> : null}
                </div>
            </div>
        )
    }
}