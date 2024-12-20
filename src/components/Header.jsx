import moment from 'moment';
import Logo from '../assets/img/logo.png'

const Header = () => {
      return (
            <div className='mb-4'>
                 <div className='text-center'>
                  <img className='mx-auto mt-2' src={Logo} alt="logo" />
                 <p className='text-bold py-2'>Journalism Without Fear or Favour</p>
                 <p className='font-bold text-primary'>{moment().format('LLLL')}</p>
                 </div>
            </div>
      );
};

export default Header;