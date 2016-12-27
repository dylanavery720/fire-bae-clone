import React from 'react';
import { SingleDatePicker } from 'react-dates';

export default class AddNewOrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iName: '',
      freqNum: 1,
      freqQual: 'month',
      date: this.props.moment ? this.props.moment() : null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    this.props.handleClick(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Item Name:
          <input ref="iName"
                 name="iName"
                 type="text"
                 value={this.state.iName}
                 onChange={this.handleChange}/>
        </label>
        I purchase this every:
        <label>
          <input type="number"
                 ref="freqNum"
                 name="freqNum"
                 value={this.state.freqNum}
                 onChange={this.handleChange}/>
        </label>
        <label>
            <select name="freqQual"
                    ref="freqQual"
                    value={this.state.freqQual}
                    onChange={this.handleChange}>
              <option value="month">month(s)</option>
              <option value="week">week(s)</option>
              <option value="year">year(s)</option>
            </select>
        </label>
        <label>
          Last purchased on:
          <SingleDatePicker
            id="date_input"
            isOutsideRange={() => false}
            numberOfMonths={1}
            date={this.state.date}
            focused={this.state.focused}
            onDateChange={(date) => { this.setState({ date }); }}
            onFocusChange={({ focused }) => { this.setState({ focused }); }}
          />
        </label>
        <input className="item__create-submit"
               type="submit"
               value="Create Item"
               onClick={this.handleSubmit} />
      </form>
    );
  }
}
