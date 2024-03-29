import { rules } from '../constants';
import {arrowdown} from '../assets';
import styles from '../style';
import { useState } from 'react';


const Rules = () => {
  const [visibleKey, setVisibleKey] = useState<number | null>(null);

  const toggleVisibility = (key: number | null) => {
    if (visibleKey === key) {
      setVisibleKey(null);
    } else {
      setVisibleKey(key);
    }
  };

  return (
    <section id="rules" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mg-6`}>
      <div className={`${styles.flexStart} sm:my-0 my-10 rounded dark:bg-black-gradient bg-orange-gradient xs:p-2 sm:p-5 md:p-10 `}>
        <h2 className='text-3xl  dark:text-white text-near-black font-poppins font-bold'> Rules</h2>
        <ol className="mt-5" style={{ listStyleType: 'decimal' }}>
          {rules.map((rule) => (
            <li key={rule.key} className={`${styles.paragraph} max-w-470px mt-5`}>
              <div className='flex flex-row' onClick={() => toggleVisibility(rule.key)}>
              {rule.rule}
              <span className='cursor-pointer' ><img src={arrowdown} className='m-1 w-[23px] h-[23px] object-contain dark:text-gradient text-near-black sm:block hidden' alt='Show More'/></span>
              </div>
              <div
                id={`info_${rule.key}`}
                style={{
                  display: visibleKey === rule.key ? 'block' : 'none',
                }}
              >
                <hr className='md:my-2'/>
                <p className='dark:text-white text-near-black'>{rule.reason}</p>
                {rule.subreasons && rule.subreasons.length > 0 && (
                  <ul style={{ listStyleType: 'circle' }}>
                    {rule.subreasons.map((subreason, index) => (
                      <li key={index} className='md:ml-10'>{typeof subreason === "object" ? (
                        <a href={subreason.link} className="dark:text-white text-near-black"style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                          {subreason.title}
                        </a>
                      ) : (
                        subreason
                      )}
                    </li>
                    ))}
                  </ul>
                )}
                <hr className='my-2 dark:white black'/>
              </div>
            </li>
          ))}
        </ol>
        
      </div>
    </section>
  );
};

export default Rules;