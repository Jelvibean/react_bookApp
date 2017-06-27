import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';



class Booklist extends Component {
	renderList() {
		return this.props.books.map((books) => {
			return (
				<li 
					key={books.title}
					onClick={() => this.props.selectBook(books)} 
					className="list-group-item">
					{books.title} 
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>

		);
	}
}

//this is glue between react and redux.
//
function mapStateToProps(state){
	return {
		books: state.books

	};
}
//Note line 36 the key books is the connecter or line 6 in reducers/index.js



function mapDispatchToProps(dispatch) {
	//Whenever selectBook is called, the result should be passed to all of our reducers.
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook.  Make it available.
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist)