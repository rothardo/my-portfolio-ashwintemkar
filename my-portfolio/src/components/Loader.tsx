import { useEffect, useState } from 'react';
import Signature from './icons/Signature';
import styles from './css/Loader.module.css';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        loading && (
            <div className={styles.loader}>
                <Signature />
            </div>
        )
    );
};

export default Loader;
