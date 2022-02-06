import { useSpring, useTransform } from "framer-motion";

export const useSmoothTransform = (value: any, springOptions: any, transformer: any) => {
  return useSpring(useTransform(value, transformer), springOptions);
}
