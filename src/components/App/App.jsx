import {Component} from "react";
import {Filter, Info, List, Search} from "../../components/";
import './App.scss';

export class App extends Component {
    state = {
        data: [
            {name: 'Иванов Иван', role: 'contact', country:'russia', key: 0},
            {name: 'Фёдоров Фёдор', role: 'speaker', country:'russia', key: 1},
            {name: 'Семёнов Семён', role: 'agent', country:'russia', key: 2},
            {name: 'Матвеев Матвей', role: 'speaker', country:'russia', key: 3},
            {name: 'Артёмов Артём', role: 'contact', country:'russia', key: 4},
            {name: 'Jack Johnson', role: 'contact', country:'usa', key: 5},
            {name: 'Peter Griffith', role: 'speaker', country:'usa', key: 6},
            {name: 'Bart Simpson', role: 'speaker', country:'usa', key: 7},
            {name: 'Huckleberry Finn', role: 'agent', country:'usa', key: 8},
            {name: 'Abraham Lincoln', role: 'speaker', country:'usa', key: 9}
            
        ],
        text: '',
        role: 'all',
        country: 'all'
    }

    toggleState = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    search = (data, text) => {
        if (text !== '') {
            return data.filter(item => {
                let name = item.name.toLowerCase().trim();
                return name.indexOf(text.toLowerCase().trim()) > -1;
            });
        } else {
            return data;
        }
    }

    filterRole = (data, name) => {
        switch (name) {
            case 'contact':
                return data.filter(item => item.role === 'contact');
            case 'speaker':
                return data.filter(item => item.role === 'speaker');
            case 'agent':
                return data.filter(item => item.role === 'agent');
            default:
                return data;
        }
    }

    filterCountry = (data, name) => {
        switch (name) {
            case 'russia':
                return data.filter(item => item.country === 'russia');
            case 'usa':
                return data.filter(item => item.country === 'usa');
            default:
                return data;
        }
    }

    render() {
        const {data, text, role, country} = this.state;
        const resultRole = this.search(this.filterRole(data, role), text),
            resultCountry = this.filterCountry(resultRole, country);

        return (
            <div className="app">
                <Info data={data}/>

                <div className="search-panel">
                    <Search toggleState={this.toggleState}/>
                    <Filter
                        toggleState={this.toggleState}
                        role={role}
                        country={country}/>
                </div>

                <List data={resultCountry} />
            </div>
        );
    }
}
