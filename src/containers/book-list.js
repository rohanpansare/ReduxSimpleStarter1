import React, { Component } from 'react';
import { connect } from 'react-redux'; // 3
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
    renderList() { // 2
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}</li>
            );
        });
    }
    render() { // 1
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) { // 4
    // Whatever is returned will show up as props inside BookList
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all out reducers.
    return bindActionCreators({selectBook : selectBook}, dispatch)
}

//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); // 5