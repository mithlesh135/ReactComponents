import React from 'react';
import ReactDOM from 'react-dom';
import MonthPicker from './components/MonthPicker';
import DatePicker from './components/DatePicker';
import MonthPickerMaterial from './components/MonthPickerMaterial';
import YearPicker from './components/YearPicker';
import DateComponent from './components/DateComponent';


ReactDOM.render(<div>
    {/* <DatePicker />
    <MonthPickerMaterial />
    <YearPicker /> */}
    <DateComponent />
</div>, document.querySelector('div.container'));