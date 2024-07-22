import styles from "./title.module.css";

function Title() {
  return (
    <div className={styles.title_wrap}>
      <div className={styles.title}>명령어로 이미지 생성하기</div>
    </div>
  );
}
export default Title;
