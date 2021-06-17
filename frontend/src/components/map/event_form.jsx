import React from 'react';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postedBy: this.props.currentUser.id,
      title: '',
      sport: '',
      description: '',
      startDate: '',
      endDate: '',
      lat: this.props.location.lat,
      lng: this.props.location.lng,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.clearedErrors = false;
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    const newEvent = Object.assign({}, this.state);
    console.log(newEvent)
    this.props.createEvent(newEvent).then( () => {
      this.props.closeModal();
    })
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    const errs = Object.values(this.props.errors);
    console.log(errs)
    return (
      errs.map((error, i) => {
        return (
          <li className="error" key={`err-${i}`}>
            {error}
          </li>
        );
      })
    )
  }

  render(){
    // debugger
    return (
    <div className="modal-child" onClick={(e) => e.stopPropagation()}>
    <div className='event-modal-container'>

      <form onSubmit={this.handleSubmit}>

      <input
          type="text"
          value={this.state.title}
          placeholder="Event Title"
          onChange={this.update("title")}
        />

        <input
          type="text"
          value={this.state.sport}
          placeholder="Sport"
          onChange={this.update("sport")}
        />

        <textarea
          value={this.state.description}
          placeholder="Event Description"
          onChange={this.update("description")}
        ></textarea>

        <input
          type="datetime-local"
          value={this.state.startDate}
          placeholder="Start Time"
          onChange={this.update("startDate")}
        />

        <input
          type="datetime-local"
          value={this.state.endDate}
          placeholder="End Time"
          onChange={this.update("endDate")}
        />

        <button type="submit" value="submit">Create Event</button>
        <ul>{this.renderErrors()}</ul>
      </form>

    </div>
    </div>
    );
  }
}

export default EventForm