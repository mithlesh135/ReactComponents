import React, {Component} from 'react';

class YearPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: props.year || new Date().getFullYear()
        }
        this.noOfCols = 4;
        this.noOfRows = 6;
        this.startYear = this.state.year - (this.state.year % (this.noOfCols * this.noOfRows));
    }

    getColumnMarkup() {
        let markUp = [];
        let classes = 'year';

        for(let j = 0; j < this.noOfCols; j++) {
            classes = (this.startYear === this.state.year) ? `selected ${classes}` : 'year';
            markUp.push(<td><div className={classes}>{this.startYear++}</div></td>);
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