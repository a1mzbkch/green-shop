declare module "*.scss";
declare module "*.css";
declare module "*.svg" {
  const content: string;
  export default content;
}
