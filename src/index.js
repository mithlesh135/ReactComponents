import React from 'react';
import ReactDOM from 'react-dom';
import MonthPicker from './components/MonthPicker';
import DatePicker from './components/DatePicker';
import MonthPickerMaterial from './components/MonthPickerMaterial';



ReactDOM.render(<MonthPickerMaterial month="12" />, document.querySelector('div.container'));