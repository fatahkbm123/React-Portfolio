// import React, { createContext, Component } from "react";

// const Context = createContext();

// const Provider = Context.Provider;
// export const GlobalProvider = (Children) => {
//   return class ParentComp extends Component {
//     state = {
//       menuHamburger: false,
//     };

//     dispatch = (action) => {
//       switch (action.type) {
//         case "SET_HAMBURGER":
//           return this.setState({
//             menuHamburger: action.value,
//           });
//           break;
//         default:
//           return this.state.menuHamburger;
//       }
//     };

//     render() {
//       return (
//         <Provider
//           value={{
//             state: this.state,
//             dispatch: this.dispatch,
//           }}
//         >
//           <Children {...this.props} />;
//         </Provider>
//       );
//     }
//   };
// };

// const Consumer = Context.Consumer;

// export const GlobalConsumer = (Children) => {
//   return class ParentConsumer extends Component {
//     render() {
//       return (
//         <Consumer>
//           {(value) => <Children {...value} {...this.props} />}
//         </Consumer>
//       );
//     }
//   };
// };
