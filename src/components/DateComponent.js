import React, {Component} from 'react';

class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date || new Date(),
            currentComp: props.comp || 'date'
        }
    }

    getDisplayString() {
        if(this.state.currentComp === 'date') {
            return `${this.state.date.getMonth()}  ${this.state.date.getFullYear()}`;
        }
    }

    render() {
        return (
            <div>
                <div>
                <button>{this.getDisplayString()}</button>
                </div>
                <div>
                    <button>
                        <i className="material-icons">chevron_left</i>
                        </button>
                    <button>
                        <i className="material-icons">chevron_right</i>
                    </button>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DateComponent;
