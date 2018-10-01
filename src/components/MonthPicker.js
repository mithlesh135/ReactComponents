import React, {Component} from 'react';

class MonthPicker extends React.Component {
	constructor(props) {
  	super(props);
    
    let date = new Date();
    this.state = {
    	month: this.props.month || date.getMonth() + 1,
      year: this.props.year || date.getFullYear()
    },
    this.minYear = this.props.minYear || 2001;
    this.maxYear = this.props.maxYear || date.getFullYear();
    this.months = {
    	Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12
    };
  }
  
  componentDidMount() {
  	 let scrollView = document.querySelector('div.container');

		 let currentView = document.querySelector(`div[data-value="${this.state.year}"]`);
		 scrollView.scrollTop = currentView.offsetTop - scrollView.offsetTop;
  }
  
  onYearClick(event) {
  	this.setState({
    	year: parseInt(event.target.dataset.value, 10),
      month: null
    });
		let scrollView = event.target.closest('#app');
    scrollView.scrollTop = event.target.offsetTop - scrollView.offsetTop;
  }
  
  onMonthClick(event) {
  	let year = parseInt(event.target.parentElement.previousSibling.dataset.value, 10);
    let month = parseInt(event.target.dataset.value - 1, 10);
    
  	this.setState({
    	month : month + 1
    });
    this.props.selectedMonth && this.props.selectedMonth(year, month);
  }
  
  getYearsMarkup() {
  	let markup = {};
    
  	for(let i = this.maxYear; i >= this.minYear; i--) {
	   markup[i] = <div 
     className="year" 
     key={i} 
     onClick={this.onYearClick.bind(this)} 
     data-value={i}>
       {i}
     </div>;
    }
    return markup;
  }
  
  getMonthsMarkup(year) {
  	let markup = [];
    let containerClass = "month-container"
    
    year = parseInt(year, 10);
        console.log(`render called ${this.state.month}`);

  	for(let key in this.months) {
    	let classes = "month";
      
      if(this.months[key] === this.state.month && year === this.state.year) {
      	classes = `${classes} selected`;
      }
      
	    markup.push(
      	<span 
        className={classes} 
        key={key} 
        onClick={this.onMonthClick.bind(this)}
        data-value={this.months[key]}>
          {key}
        </span>
			);
    }
    
    let classes = (year === this.state.year) ? containerClass : `collapsed ${containerClass}`;

    return <div key={year+'markup'} className={classes}>{markup}</div>;
  }
  
  render() {
  	let yearsMarkup = this.getYearsMarkup();
    let markup = [];
    
    for(let key in yearsMarkup) {
	    markup.push(
        <div 
        className="container" 
        key={key}>
          {[yearsMarkup[key]].concat(this.getMonthsMarkup(key))}
        </div>
      );
    }
    
  	return markup;
  }
}

export default MonthPicker;