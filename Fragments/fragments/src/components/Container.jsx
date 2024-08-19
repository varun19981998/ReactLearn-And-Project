import styles from "./Container.module.css";
// props children- container in app.jsx props .children  but we can uselke this {children}
const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
