import React, {Component} from 'react';

class MonthPickerMaterial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            month: parseInt(this.props.month, 10) - 1 || new Date().getMonth()
        }

        this.noOfColumns = 4;
        this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
            'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
        ];

        this.onMonthSelected = this.onMonthSelected.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.month !== this.state.month) {
          this.setState({ startTime: parseInt(nextProps.month, 10)});
        }
      }
    
    getCurrentMonth() {
        return this.state.month;
    }

    onMonthSelected(month) {
        this.setState({month});
        this.props.onMonthSelected && this.props.onMonthSelected(month);
    }
    
    getRowMarkup(row) {
        const currentRow = row * this.noOfColumns;
        const itemsToSlice = currentRow + this.noOfColumns;

        let months = this.months.slice(currentRow, itemsToSlice);
        return months.map((month, index) => {
            let classes = 'month';
            let currentMonth = (currentRow + index);
            
            if(currentMonth === this.getCurrentMonth()) {
                classes = `${classes} selected`;
            }
            return (<td key={month}> 
                <div 
                    onClick={() => this.onMonthSelected(currentMonth)} 
                    className={classes}>{month}
                </div>
            </td>);
        });
    }

    getMonthMarkup() {
        let markup = [];
        for(let i = 0; i < 12/this.noOfColumns; i++) {
            markup.push(<tr key={i}>{this.getRowMarkup(i)}</tr>);
        }
        return markup;
    }
    
    render() {
        return (<table className='month-picker-material'>
            <thead>
            </thead>
            <tbody>
                {this.getMonthMarkup()}
            </tbody>
        </table>)
    }
}
export default MonthPickerMaterial;