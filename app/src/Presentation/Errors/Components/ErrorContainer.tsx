import { Component, ErrorInfo } from "react";

type ErrorContainerProps = {
    error : Error 
  };


  
  const ErrorContainer : React.FC<ErrorContainerProps> = (props: ErrorContainerProps) => { 
    return (
      <div>        
        <p className="text-red-600">{props.error.message}</p>  
      </div>
    );
  };

  export default ErrorContainer;


  export const BreakThings :  React.FC = () => {
    throw new Error("We intentionally broke something");
    };

 

    interface Props {
        children?: React.ReactNode;
      }
      
      interface State {
        hasError: boolean;
      }
      
  /*export class ErrorBoundary extends Component<Props, State> {
        public state: State = {
          hasError: false
        };
      
        public static getDerivedStateFromError(_: Error): State {
          // Update state so the next render will show the fallback UI.
          console.log("ttthiiissss")
          return { hasError: true };
        }
      
        public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
          console.error("Uncaught error:", error, errorInfo);
        }
      
        public render() {
          
          if (this.state.hasError) {
            return <h1>Sorry.. there was an error</h1>;
          }
      
          return this.props.children;
        }
      }*/
      
    
        




 