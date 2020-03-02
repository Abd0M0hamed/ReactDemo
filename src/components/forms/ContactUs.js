import React from "react"

class ContactUs extends React.Component{
  constructor(){
    super()
    this.state = {
      name: null,
      email: null,
      gender: null,
      message: null,
      newsletterSubscribe: true
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleFormSubmit(event){
    event.preventDefault()
    window.alert("Message was sent, Thank you")
  }
  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div><span>Name:</span><input name="name" type="text" value={this.state.name} onChange={this.handleChange}/></div>
          <div><span>Email:</span><input name="email" type="text" value={this.state.email} onChange={this.handleChange}/></div>
          <div>
            <span>Country:</span>
            <select name="country" value={this.state.country} onChange={this.handleChange}>
              <option value="">-- Please Select--</option>
              <option value="EG">Egypt</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>
          <div><span>Gender:</span><input type="radio" name="gender" value="male" onChange={this.handleChange}/>Male / <input type="radio" name="gender" value="female" onChange={this.handleChange}/>Female</div>
          <div><span>Message:</span><textarea name="message" value={this.state.message} onChange={this.handleChange}/></div>
          <div><span>Subscribe to Newsletter?</span><input name="newsletterSubscribe" type="checkbox" value={this.state.newsletterSubscribe} onChange={this.handleChange} checked={this.state.newsletterSubscribe}/></div>
          <div><button>Send Message</button></div>
        </form>
    </div>)
  }
}
export default ContactUs
