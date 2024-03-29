import styles from '../style'
import { socials } from '../constants'

/*TODO: Fix this code in MD size monitors, Long form text will overlap*/

const Socials = () =>  (
  <section id="socials" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20`}>
    {socials.map((social) => (
      <div key={social.id} className={`flex-1 justify-start items-center flex-row m-3 hover:animate-pulse px-2`}>
        <a href={social.link} target='_blank' rel='noreferrer' className='container justify-center'>
            <img src={social.image} alt={social.name} className={`w-[40px] h-[40px] object-contain mx-1 ${social.name !== 'Barq' ? 'dark:invert' : ''}`}/>
          <p className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] dark:text-white text-near-black'>{social.name}</p>
        </a>
      </div>
    ))}
  </section>
)

export default Socials;