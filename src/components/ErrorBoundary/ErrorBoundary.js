import React,{ Component} from 'react';
//Only use where neccessary on production server
class ErrorBoundary extends Component{
    state = {
        hasError: false,
        errorMassage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError:true,errorMassage:error});
    }

    render(){
        if(this.state.hasError){
            return <h1>{this.state.errorMassage}</h1>
        }else{
            return <h1>{this.props.children}</h1>
        }
    }
}

export default ErrorBoundary;