import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { t } = useTranslation();
  const { locale, locales, asPath } = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.navbar}>
          {locales.map((l, i) => {
            return (
              <span key={i} className={l === locale ? styles.selected : ''}>
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              </span>
            );
          })}
        </div>
        <div>
          <h1>Multi Language Blog</h1>
          <div>
            <div className={styles.BlogCard}>
              <div>
                <img src={t('image')} width={200} />
              </div>
              <div>
                <h3>{t('title')}</h3>
                <span>{t('description')}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
