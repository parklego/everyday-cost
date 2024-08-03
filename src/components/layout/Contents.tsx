import classes from "./Contents.module.css";

export function Contents({ children }: { children: React.ReactNode }) {
  return <div className={classes.container}>{children}</div>;
}
