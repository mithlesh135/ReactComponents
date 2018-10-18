import React, {Component} from 'react';

class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date || new Date(),
            currentComp: props.comp || 'date'
        }

        this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
            'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
        ];
    }

    getDisplayString() {
        if(this.state.currentComp === 'date') {
            return `${this.months[this.state.date.getMonth()]}  ${this.state.date.getFullYear()}`;
        }
    }

    render() {
        return (
            <div className='date-component'>
                <div className='header'>
                    <div className='toggle'>
                        <button>{this.getDisplayString()}</button>
                    </div>
                    <div className='chevrons-container'>
                        <button>
                            <i className="material-icons">chevron_left</i>
                        </button>
                        <button>
                            <i className="material-icons">chevron_right</i>
                        </button>
                    </div>
                </div>
                <div className='child-body'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DateComponent;
