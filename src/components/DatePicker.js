import React, {Component} from 'react';

class DatePicker extends React.Component {
	constructor(props) {
  	super(props);
    
    let date = new Date();

		this.state = {
      year : props.year || date.getFullYear(),
      month : (props.month - 1 || date.getMonth()),
      date : props.date || null
    };
    
    this.weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    this.firstDate = new Date(this.state.year, this.state.month);
    this.lastDate = new Date(this.state.year, this.state.month + 1, 0);
    
    this.minDate = this.props.minDate || this.firstDate.getDate();
    this.maxDate = this.props.maxDate || this.lastDate.getDate();

  }
  
  getDatesToRender() {
  	let dates = [];
    
    for(let i = this.firstDate.getDate(); i <= this.lastDate.getDate(); i++) {
    	dates.push(
      	{
          date: i,
          enabled : (i >= this.minDate && i < this.maxDate),
          selected: (this.state.date === i)
        }
      );
    }
    
    let noOfVisiblePrevMonthDays = this.firstDate.getDay() + 1;
    let prevMonthlastDate = new Date(this.state.year, this.state.month, 0).getDate();
    
    for(let i = 0; i < noOfVisiblePrevMonthDays; i++) {
    	dates.unshift(
      	{
          date: prevMonthlastDate--,
          enabled : false
        }
      );
    }
    
    for(let i = 1; i < this.lastDate.getDay(); i++) {
    	dates.push(
      	{
          date: i,
          enabled : false
        }
      );
    }
    return dates;
  }
  
  getDayHeader() {
  	return (this.weekDays.map((day, index) => <th key={index}><div>{day}</div></th>));
  }
  
  getDateRow(arr, rowNo) {
  	return arr.map(
      (day) => {
      	let enabledClass = day.enabled ? 'enabled' : 'disabled';
        let selectedClass = day.selected ? 'selected' : '';
        let classes = `${enabledClass} ${selectedClass}`;
        
        return (
        <td 
          data-value={day.date} 
          onClick={event => this.onDateSelect.call(this, event, day.date)} 
          className= {classes}
          key={((rowNo + 1) * day.date)}>
          <div>{day.date}</div>
        </td>)
      }
		);
  }
  
  onDateSelect(event, val) {
    this.setState({
    	date: parseInt(val, 10)
    });
    this.props.onDateSelect && this.props.onDateSelect(val); 
  }
  
  getDaysMarkup(days) {
  	let markup = [];
  	for(let i = 0; i < 6; i++) {
    	let arr = days.splice(0, 7);
      markup.push(
        <tr key={i+'tr'}>{ this.getDateRow(arr, i)}</tr>);
    }
    return markup;
  }
  
  render() {
  	return (
      <table className='date-picker'>
        <thead>
          <tr>{this.getDayHeader()}</tr>
        </thead>
        <tbody>
          {this.getDaysMarkup(this.getDatesToRender())}
        </tbody>
      </table>
    );
  };
}

export default DatePicker;