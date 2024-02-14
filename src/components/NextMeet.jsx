import React, { useEffect, useState } from 'react';
import styles from '../style';
import {dates} from '../constants';

const NextMeet = () => {
  const [nextMeet, setNextMeet] = useState(null);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // to ignore time component

    for (let meet of dates) {
      let meetDate = new Date(meet.date.split('-').reverse().join('-'));
      if (meetDate >= today) {
        const diffTime = Math.abs(meetDate - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        setNextMeet({ ...meet, daysUntil: diffDays });
        break;
      }
    }
  }, []);

  return (
    <div className={`${styles.flexCenter} sm:my-0 my-10 max-w-[400px] rounded bg-black-gradient p-[2px] `}>
        <div className='mx-5 my-5'>
            {nextMeet ? (
                <p className='text-white font-poppins'>
                {nextMeet.daysUntil === 0 ? <>The meet is occurring <span className='font-extrabold'>today</span></> : 
                    <>The next meet is in <span className='font-poppins font-extrabold'>{nextMeet.daysUntil}</span> days on {nextMeet.date}</>
                }, and is happening {nextMeet.location}
                {nextMeet.specialNotes && ` and is a ${nextMeet.specialNotes} meet!`}
                </p>
            ) : (
                <p className='text-white font-poppins'>No meets are scheduled yet! Check back shortly for more to be announced!</p>
            )}
        </div>
    </div>
  );
};

export default NextMeet;