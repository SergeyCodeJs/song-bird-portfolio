import React, {Component} from 'react';
import {connect} from 'react-redux'
import {compose} from 'redux'
import {dataRequest, dataLoaded, dataError} from '../redux/actions/fetchActions/actions'
import Loading from '../components/Loading/Loading';
import ErrorIndicator from '../components/ErrorBoundary/ErrorIndicator/ErrorIndicator';
import BirdsService from '../services/birds-service'

const withData = (View) => {
    return class extends Component {
        birdService = new BirdsService();

        componentDidMount() {
            this
                .props
                .dataRequest();
            this.update();
        }

        update() {
            this
                .birdService
                .getBirds()
                .then((data) => {
                    this
                        .props
                        .dataLoaded(data);
                })
                .catch(() => {
                    this
                        .props
                        .dataError();
                });
        }

        render() {

            const {data, loading, error} = this.props;

            if (loading) {
                return <Loading/>;
            }

            if (error) {
                return <ErrorIndicator/>;
            }

            return <View {...this.props} data={data}/>;
        }
    };
};

function mapStateToProps({birdsData}) {
    return birdsData
}

const mapDispatchToProps = {
    dataRequest,
    dataLoaded,
    dataError
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withData);
