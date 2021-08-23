// import React, { CSSProperties } from "react";

// interface ColWrapperProps {
//     xs?: number;
//     sm?: number;
//     md?: number;
//     lg?: number;
//     xl?: number;
//     children: JSX.Element | JSX.Element[];
// }

// const ColWrapper = ({xs, sm, md, lg, xl, children}: ColWrapperProps) => {
    
//     const width = ({ xs, sm, md, lg, xl }: ColWrapperProps) => {
//         return ( ((xl || lg || md || sm || xs || 12) / 12) * 100 + "%");
//     }
    
//     const width1 = ( {xs}: ColWrapperProps) => {
//        return( ((xs || 12) / 12) * 100 + "%" );
//     }

//     const width2 = ({ xs, sm }: ColWrapperProps) => {
//        return ( ((sm || xs || 12) / 12) * 100 + "%" );
//     } 

//     const width3 = ({ xs, sm, md }: ColWrapperProps) => {
//        return ( ((md || sm || xs || 12) / 12) * 100 + "%" );
//     } 

//     const width4 = ({ xs, sm, md, lg }: ColWrapperProps) => {
//        return ( ((lg || md || sm || xs || 12) / 12) * 100 + "%" );
//     }
    
//     return(
//         <div style={
//             `width: "${width({xs, sm,})}", 
//             @media (max-width: 578px) { width: "${width1}"}`
//         }>{children}</div>
//     )
// }



// interface ColProps {
//   children: JSX.Element | JSX.Element[];
//   style?: React.CSSProperties;
//   xs?: number;
//   sm?: number;
//   md?: number;
//   lg?: number;
//   xl?: number;
// }

// export const Col = (props: ColProps) => {
//   const { children, ...breakpoints } = props;
//   return <ColWrapper {...breakpoints}>{children}</ColWrapper>;
// };

// interface RowWrapperProps {
//     children: JSX.Element | JSX.Element[];
//     style?: CSSProperties;
// }

// const RowWrapper = ({children, style}: RowWrapperProps) => {
//     return(
//         <div className="row-wrapper" style={style}>{children}</div>
//     )
// }

// interface RowProps {
//   children: JSX.Element | JSX.Element[];
//   style?: React.CSSProperties;
// }

// export const Row = ({ children, style }: RowProps) => {
//   return (
//     <RowWrapper style={style}>
//       {React.Children.toArray(children).map((item: any, index) => {
//         return (
//           item && (
//             <Col key={item?.id || index} {...item?.props}>
//               {item?.props?.children}
//             </Col>
//           )
//         );
//       })}
//     </RowWrapper>
//   );
// };

// export const Grid = (children: JSX.Element | JSX.Element[]) => {
//     return(
//         <div>{children}</div>
//     )
// }

export {}