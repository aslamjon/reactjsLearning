import React from 'react';  
// HOC (High Order Component) bita code ni qayda qayta yozmaslik uchun juda o'z ekan. u bilan bita kompornt yaratib uni dynamic qilib ishlatsa bo'ladi.
const withData = (WrappedComponent) => {
    class WithData extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                data: []
            }
        }
    
        componentDidMount() {
            fetch(this.props.dataSource)
                .then(response => response.json())
                .then(data => this.setState({ data: data.slice(0, 3) }))
        }
        render() {
            const { dataSource, ...otherProps } = this.props;
            return this.state.data.length < 1 ? (
                <h1>LOADING</h1>
            ) : (
                <WrappedComponent data={this.state.data} {...otherProps} />
            )
        }
    }

    return WithData;
}

export default withData;