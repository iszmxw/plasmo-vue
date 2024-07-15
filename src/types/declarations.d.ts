
declare module "data-text:*" {
  const content: string;
  export default content;
}

declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
}
