import ContactForm from "@/app/_components/ContactForm";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
      私のサイトをご覧頂きありがとうございます！
      <br />
      ご質問やご相談・サイトへのフィードバックなど
      <br />
      ご連絡はこちらからお気軽にお願い致します。
      <br />
      出来る限り早くお返事いたします。
      </p>
      <ContactForm />
    </div>
  );
}