import React, {Component} from 'react';

class YearPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: parseInt(props.year, 10) || new Date().getFullYear()
        }
        this.noOfCols = 4;
        this.noOfRows = 6;
        this.current = this.getStartYear(parseInt(props.year, 10) || new Date().getFullYear());
    }

    getStartYear(year) {
        return year - (year % (this.noOfCols * this.noOfRows));
    }

    onYearClick(event) {
        if(event.currentTarget) {
            let year = parseInt(event.currentTarget.dataset.value, 10);
            this.setState(
                {
                    year
                }
            );
            this.current = this.getStartYear(year);
            this.props.onYearSelect || this.props.onYearSelect(year);
        }
    }

    getColumnMarkup() {
        let markUp = [];
        let classes = 'year';

        for(let j = 0; j < this.noOfCols; j++) {
            classes = (this.current === this.state.year) ? `selected ${classes}` : 'year';
            markUp.push(<td data-value={this.current} onClick={this.onYearClick.bind(this)}>
                    <div className={classes}>
                        {this.current++}
                    </div>
                </td>
            );
        }
        return markUp;
    }

    getYearMarkup() {
        let markUp = [];

        for(let i = 0; i < this.noOfRows; i++) {
            markUp.push(
                <tr>{this.getColumnMarkup()}</tr>
            );
        }

        return markUp;
    }

    render() {
        return (
            <table className='year-picker'>
                <tbody>
                    {this.getYearMarkup()}
                </tbody>
            </table>
        );
    }
}

export default YearPicker;