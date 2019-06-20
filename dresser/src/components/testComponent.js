import React, {Component} from "react"
import {firestoreConnect} from "react-redux-firebase"
import {connect} from 'react-redux';
import {compose} from 'redux';

class Test extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
            /*{this.props.dresses.map((el, i) => {
                return <div>
                    el.name
                </div>
            })}*/
            </div>
        )
    }
}

/*const mapStateToProps = (state) => {
    return {
        dresses: state.firestore.ordered
    }
};

export default compose(connect(mapStateToProps), firestoreConnect([{collection: 'sizes'}]))(Test)*/