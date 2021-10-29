declare module "*.module.css";
declare module "*.module.scss";

//// For CSS
//declare module '*.module.css' {
//    const classes: { [key: string]: string };
//    export default classes;
//}

declare module '*.css' {
    const content: any;
    export default content;
}

// For SCSS
declare module "*.scss" {
   const content: any;
   export default content;
}

//// For LESS
//declare module "*.module.less" {
//  const classes: { [key: string]: string };
//  export default classes;
//}