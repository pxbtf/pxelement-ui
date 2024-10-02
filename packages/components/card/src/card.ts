import type { ExtractPropTypes } from "vue";
const cardProps = {
  title: {
    type: String,
    default: "111",
  },
  width: {
    type: Number,
    default: 0,
  },
  imgHeight: {
    type: Number,
    default: 0,
  },
  imgSrc: {
    type: String,
    default: "",
    require: true,
  },
  summary: {
    type: String,
    default: "",
  },
};

export default cardProps;

export type CardProps = ExtractPropTypes<typeof cardProps>;
